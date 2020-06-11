import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Header from "../../containers/Header";
import Spinner from "../Spinner";

const EditProduct = ({ config, shop, ...props }) => {
  const productId = props.match.params.id;
  const images = [];
  const [product, setProduct] = useState({});
  const [product_name, setProductName] = useState("");
  const [product_price, setProductPrice] = useState("");
  const [product_files, setProductFiles] = useState([]);
  const [errors, setErrors] = useState(null); 
  
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [subCategoryId, setSubCategoryId] = useState(0);
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getProduct();
    //eslint-disable-next-line
  }, []);

  const getProduct = async () => {
    try {
      setLoading(true);
      console.log(`/api/products/${productId}`);
      const res = await axios.get(`/api/products/${productId}`, config);

      setLoading(false);
      getCategories();
      getSubcategories(); 
      setProduct(res.data);
      // setCategoryId(res.data.category_id);
      // setSubCategoryId(res.data.sub_category_id);

      updateFields(res.data);
    } catch (err) {
      setLoading(false);
    }
  };
  const getCategories = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/categories`);

      setCategories(res.data);
      setLoading(false);
      
    } catch (err) {
      console.log("error", err);
      setLoading(false);
    }
  };

  const getSubcategories = async () => {
    try {
      setLoading(true);
      const id = categoryId;
      console.log('category ', id);
      const res = await axios.get(`/api/categories/${id}/subcategories`);

      console.log("sub categoires", res.data);
      setSubcategories(res.data);
      setLoading(false);
    } catch (err) {
      console.log("error", err);
      setLoading(false);
    }
  };

  const onCategoryChange = (e) => {
    const categoryId = e.target.value;
    setCategoryId(categoryId);
    getSubcategories();
  };

  const updateFields = (product) => {
      setCategoryId(product.category_id);
      setSubCategoryId(product.sub_category_id);
      setProductName(product.name);
      setProductPrice(product.price);
      setCategoryId(product.category_id);
      setSubCategoryId(product.sub_category_id);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      product_name === "" ||
      product_price === "" ||
      product_files.length === 0
    ) {
      setErrors(["Some fields are empty"]);
    //   console.log("some fields are empty");
    } else {
      setSubmitLoading(true);
      const formData = new FormData();
      formData.append("category_id", categoryId);
      formData.append("sub_category_id", subCategoryId);
      formData.append("shop_id", shop.id);

      formData.append("name", product_name);
      formData.append("price", product_price);
      formData.append("images", product_files);

      try {
        const url = `/api/products/${productId}`;

        const res = await axios.put(url, formData, config);
        setLoading(false);
        setMessage(res.message);
      } catch (err) {
        if (err.response.status === 422) {
          setErrors(err.response.data.message);
        }
        console.log(JSON.stringify(err.response.data));
        setLoading(false);
      }
    }
  };

  

  return (
    <Fragment>
      <Header />
      <div style={{ marginTop: "100px" }}></div>
      <div className="container mt-5">
        {loading && <Spinner />}
        {errors && <p className="alert alert-danger">{errors}</p>}
        {message && <p className="alert alert-success">{message}</p>}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Edit Product</h3>
        </div>
        
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="categories">Categories</label>
            <select
              name="categories"
              className="form-control"
              onChange={onCategoryChange}
              value={product.category_id}
            >
              <option>Select Category</option>
              {categories.length > 0 &&
                categories.map((category) => (
                  <option key={category.id} value={category.id} >
                    {category.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="categories">Sub-Categories</label>
            <select
              name="categories"
              className="form-control"
              onChange={(e) => setSubCategoryId(e.target.value)}
              value={product.sub_category_id}
            >
              <option>Select Sub-Category</option>
              {subcategories.length > 0 &&
                subcategories.map((subcategory) => (
                  <option key={subcategory.id} value={subcategory.id}>
                    {subcategory.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="product_name"> Name</label>
            <input
              className="form-control"
              type="text"
              name="product_name"
              value={product_name}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="product_price">Price</label>
            <input
              className="form-control"
              type="text"
              name="product_price"
              value={product_price}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="product_files">Image</label>
            <input
              className="form-control"
              type="file"
              name="product_files"
              value={product_files.name}
              multiple
              onChange={(e) => setProductFiles(e.target.files)}
            />
          </div>
          <div className="btn-positioning">
            <button className="btn btn-warning">
              Add {submitLoading && <i className="fa.fa-spinner.fa-spin"></i>}{" "}
            </button>
          </div>
        </form>
        
      </div>
    </Fragment>
  );
};

export default EditProduct;

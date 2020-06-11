import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "evergreen-ui";
import Header from "../../containers/Header";
import DashboardLayout from "../../containers/layouts/dashboard";

const AddProduct = ({ config, user, shop }) => {
  const images = [];
  const [products, setProducts] = useState([]);
  const [product_name, setProductName] = useState("");
  const [product_price, setProductPrice] = useState("");
  const [product_files, setProductFiles] = useState([]);
  const [errors, setErrors] = useState(null);
  //   const [dynamic_image_url, setDynamicImageUrl] = useState("");
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [subCategoryId, setSubCategoryId] = useState(0);
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [message, setMessage] = useState("");

  console.log("products", products);

  useEffect(() => {
    getCategories();
    getProducts();
    //eslint-disable-next-line
  }, []);

  const getProducts = async () => {
    try {
      const res = await axios.get(`/api/products`, config);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
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

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      product_name === "" ||
      product_price === "" ||
      product_files.length === 0
    ) {
      setErrors(["Some fields are empty"]);
      console.log("some fields are empty");
    } else {
      setSubmitLoading(true);
      const formData = new FormData();
      formData.append("category_id", categoryId);
      formData.append("sub_category_id", subCategoryId);
      formData.append("shop_id", shop.id);

      formData.append("name", product_name);
      formData.append("price", product_price);

      [...product_files].map((file) => {
        formData.append("images[]", file);
      });
      formData.append("views", 0);
      //   console.log("data to upload", data);

      if (products.length > 10) {
        setErrors("You cannot upload more than 10 products in your shop");
        return;
      }

      try {
        const url = "/api/products";

        const res = await axios.post(url, formData, config);
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
    <DashboardLayout user={user} shop={shop} title="Add Product">
      <section>
        <div className="content p-5">
          <div className="content-header">
            {loading && <Spinner />} 
            {errors && <p className="alert alert-danger">{errors}</p>}
            {message && <p className="alert alert-success">{message}</p>}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3 className="content-title">Add Product</h3>
              <span className="badge badge-secondary">
                Products({products.length})
              </span>
            </div>
          </div>
          <div className="content-body">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="categories">Categories</label>
                <select
                  name="categories"
                  className="form-control"
                  onChange={onCategoryChange}
                >
                  <option>Select Category</option>
                  {categories.length > 0 &&
                    categories.map((category) => (
                      <option key={category.id} value={category.id}>
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
                <div className="images-container"></div>
              </div>
              <div className="btn-positioning">
                <button className="btn btn-warning">
                  Add{" "}
                  {submitLoading && <i className="fa.fa-spinner.fa-spin"></i>}{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default AddProduct;

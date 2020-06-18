import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchSubCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";
import { Spinner } from "evergreen-ui";
import DashboardLayout from "../../containers/layouts/dashboard";
import "./AddProduct.css";
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

const AddProduct = ({ config, user, shop, categories }) => {
  const images = [];
  const [products, setProducts] = useState([]);
  const [product_name, setProductName] = useState("");
  const [product_price, setProductPrice] = useState("");
  const [product_files, setProductFiles] = useState([]);
  const [errors, setErrors] = useState(null);
  //   const [dynamic_image_url, setDynamicImageUrl] = useState("");
  // const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [subCategoryId, setSubCategoryId] = useState(0);
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [message, setMessage] = useState("");

  console.log("categories", categories);
  useEffect(() => {
    //eslint-disable-next-line
  }, [product_files]);

  const getSubcategories = async () => {};

  const onCategoryChange = (e) => {
    const categoryId = e.target.value;
    fetchSubCategories(categoryId);
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

      saveProduct(formData);
    }
  };

  return (
    <DashboardLayout user={user} shop={shop} title="Add Product">
      <section>
        <div className="content p-5">
          <div className="content-header">Working on it... right now will be up at night</div>
        </div>
      </section>
    </DashboardLayout>
  );

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
                <label htmlFor="product_files">Image</label>
                <input
                  className="form-control"
                  type="file"
                  name="product_files"
                  value={product_files.name}
                  multiple
                  onChange={(e) => setProductFiles(e.target.files)}
                />
                <div className="images-container" id="images-container">
                  <div className="row">
                    {/* {[...product_files].map(file => (
                      <p key={file.size}>{JSON.stringify(file)}</p>
                    ))} */}

                    <div className="col-md-3">
                      <div className="image-container">
                        <i className="fa fa-plus"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {
  fetchSubCategories,
  saveProduct,
})(AddProduct);

import React, { useEffect, useState } from "react";
import DashboardLayout from "../../containers/layouts/dashboard";
import Products from "./products/Products";
import Spinner from "../Spinner";
import axios from "axios";

const ShopProduct = ({ config, user, shop }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getProducts();
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  }

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/products`, config);
      setProducts(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <DashboardLayout shop={shop} user={user}>
      <section>
        <div className="content p-5">
          <div className="content-header">
            <h3 className="content-title">
              Products <span className="badge badge-primary">(10)</span>
            </h3>
          </div>
          <div className="content-body">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <Products products={products} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ./Content/ */}
    </DashboardLayout>
  );
};

export default ShopProduct;

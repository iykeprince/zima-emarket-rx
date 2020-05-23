import React, { Fragment, useState, useEffect } from "react";
import { Link, Switch, BrowserRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Spinner from "../../components/Spinner";

import axios from "axios";
import Products from "../../components/admin/products/Products";
import Header from "../Header";

const Dashboard = ({ config, user, shop, loading, logout }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  }

  const getProducts = async () => {
    try {
      const res = await axios.get(`/api/products`, config);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("auth user", user);
  return (
    <Fragment>
      <Header />
      <div style={{ marginTop: "100px" }}></div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <aside>
              <div className="card">
                <div className="card-body">
                  <div className="user-profile">
                    <h4>
                      {user.first_name} {user.last_name}
                    </h4>
                  </div>
                </div>
              </div>
              <Link className="btn btn-default btn-block text-left" to='/dashboard'>Dashboard</Link>
              <a href="#!" className="btn btn-default btn-block text-left" onClick={logout}>Logout</a>
            </aside>
          </div>
          <div className="col-md-9">
            <h3>Welcome to the Dashboard</h3>
            <p>This is <strong>{shop.name}</strong> shop</p>
            <div className="card" style={{marginBottom: '30px'}}>
              <Products products={products} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;

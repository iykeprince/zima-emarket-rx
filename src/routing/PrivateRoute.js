import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

import { getUser, getShop, getMyProducts } from "../redux/actions/authActions";
import { fetchMarkets } from "../redux/actions/marketActions";
import { fetchCategories } from '../redux/actions/categoryActions'

const PrivateRoute = ({
  isAuthenticated,
  shop,
  markets,
  categories,
  products,
  getUser,
  getMyProducts,
  getShop,
  fetchMarkets,
  fetchCategories,
  component: Component,
  ...rest
}) => {
  
  useEffect(() => {
    getUser();
    getShop();
    fetchMarkets();
    fetchCategories();
    getMyProducts();
    //eslint-disable-next-line
  }, []);

  //

  // const handleError = (err) => {
  //   // setLoading(false);
  //   // setIsAuthenticated(false);
  //   // setUser(null);
  //   // setError([err.response]);
  // };

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? (
          <Redirect to="/login" />
        ) : (
          <Component
            {...props}
            shop={shop}
            markets={markets}
            products={products} 
            categories={categories}
          />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  products: state.auth.products,
  shop: state.auth.shop,
  markets: state.markets.items,
  categories: state.categories.items,
});
export default connect(mapStateToProps, {
  getUser,
  getShop,
  fetchMarkets,
  fetchCategories,
  getMyProducts,
})(PrivateRoute);

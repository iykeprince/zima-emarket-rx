import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import HomePage from "./containers/Homepage";
import Market from "./containers/Market";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Dashboard from "./containers/Dashboard";
import PrivateRoute from "./routing/PrivateRoute";
import AddProduct from "./components/admin/AddProduct";
import EditProduct from "./components/admin/EditProduct";
import Profile from "./components/admin/profile/Profile";
import ShopProduct from "./components/admin/ShopProduct";
import Ad from "./containers/Ad";
import Help from "./containers/Help";
import DiscoverMarkets from "./containers/DiscoverMarkets";
import AboutUs from "./containers/About";
import PrivacyPolicy from "./containers/PrivacyPolicy";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="page-wrapper">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/market/:slug" component={Market} />

            <Route exact path="/product/:id" component={Ad} />
            <Route exact path="/discover-markets" component={DiscoverMarkets} />
            <Route exact path="/help" component={Help} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />

            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/my-products" component={ShopProduct} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/add-product" component={AddProduct} />
            <PrivateRoute exact path="/edit-product/:id" component={EditProduct} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

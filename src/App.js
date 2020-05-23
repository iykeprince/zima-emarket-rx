import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./containers/Homepage";
import Market from "./containers/Market";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Dashboard from "./containers/Dashboard";
import PrivateRoute from "./routing/PrivateRoute";
import AddProduct from "./components/admin/AddProduct";
import EditProduct from "./components/admin/EditProduct";

class App extends Component {
  state = {
    url: "/api",
    categories: [],
    subCategories: [],
    markets: [],
    shops: [],
    products: [],
    marketShops: [],
    loading: true,
    error: null,
  };

  getCategories = async () => {
    try {
      const res = await axios.get(`${this.state.url}/categories`);

      this.setState({ categories: res.data });
    } catch (err) {
      this.setState({ error: err.response });
    }
  };

  getMarkets = async () => {
    try {
      const res = await axios.get(`${this.state.url}/markets`);

      this.setState({ markets: res.data, loading: false });
    } catch (err) {
      this.setState({ error: err.response });
    }
  };

  getMarketShops = (marketId) => {
    return axios.get(`${this.state.url}/markets/${marketId}/shops`);
  };

  getProducts = async () => {
    try {
      const res = await axios.get(`${this.state.url}/products`);

      this.setState({ products: res.data, loading: false });
    } catch (err) {
      this.setState({ error: err.response });
    }
  };

  componentDidMount() {
    this.getCategories();
    this.getMarkets();

    this.getProducts();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <HomePage
                  {...props}
                  markets={this.state.markets}
                  categories={this.state.categories}
                  products={this.state.products}
                />
              )}
            />
            <Route
              path="/market/:slug"
              render={(props) => (
                <Market
                  {...props} 
                  categories={this.state.categories} 
                  getMarketShops={this.getMarketShops}
                />
              )}
            />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />

            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path="/add-product" component={AddProduct}  />
            <PrivateRoute exact path="/edit-product/:id" component={EditProduct}  />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

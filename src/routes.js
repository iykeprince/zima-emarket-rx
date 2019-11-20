import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./containers/Homepage";

class routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default routes;

import React, { useEffect } from "react";
import { Link, Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from '../../../redux/actions/authActions'
import PropTypes from "prop-types";

import "./index.css";
import Footer from "../../Footer";

const DashboardLayout = ({ title, isAuthenticated, logged_out, user, shop, children, history }) => {

  useEffect(() => {
    if(!isAuthenticated){
      history.push('/login');
    }
    //eslint-disable-next-line
  }, [isAuthenticated]);

  useEffect(() => {
    if(logged_out){
      history.push('/login');
    }
    //eslint-disable-next-line
  }, [logged_out]);

  
  return (
    <div className="container-fluid">
      <header>
        <nav className="navbar navbar-expand navbar-dark top-nav">
          <div className="container">
            <div className="navbar-nav ml-auto">
              <a href="#!" className="nav-item nav-link">
                {user ? (
                  <span>
                    {user.first_name} {user.last_name}
                  </span>
                ) : (
                  "Username"
                )}
              </a>
              <a onClick={logout} href="#!" className="nav-item nav-link">
                Logout
              </a>
            </div>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark zima-lgo-wrapper">
          <div className="container">
            <a href="https://zima.com.ng" className="navbar-brand logo ">
              <div className="icon"></div>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className="nav-item nav-link active" to="/">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
                <NavLink className="nav-item nav-link" to="/discover-markets">
                  Discover Markets{" "}
                </NavLink>
                <NavLink className="nav-item nav-link" to="/about-us">
                  About Us
                </NavLink>
              </div>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink to="/dashboard" className="nav-link">
                    Dashboard
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/my-products" className="nav-link">
                    My Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/profile" className="nav-link">
                    Shop
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button onClick={logout}
                    className="nav-item btn btn-primary zima-button"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="container mt-5">
        <div className="content-container">{children}</div>
      </div>
      <Footer />
    </div>
  );
};
DashboardLayout.propType = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  logged_out: PropTypes.bool.isRequired,
}
const mapStateToProp = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  logged_out: state.auth.logged_out
});
export default connect(mapStateToProp, {logout})(DashboardLayout);

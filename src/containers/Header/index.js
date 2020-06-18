import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header.css";

import { connect } from "react-redux";
import { logout } from "../../redux/actions/authActions";

import ZimaLogoWhite from "../Resources/icon.png";

const Header = ({ isAuthenticated, logout }) => {
  const guestNav = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink to="/login" className="nav-link">
          Sign In
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/register" className="nav-link">
          Register
        </NavLink>
      </li>
      <li className="nav-item">
        <a href="/login" className="nav-item btn btn-primary zima-button">
          Sell
        </a>
      </li>
    </ul>
  );
  const authNav = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink to="/dashboard" className="nav-link">
          Dashboard
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/products" className="nav-link">
          Products
        </NavLink>
      </li>
      <li className="nav-item">
        <button
          onClick={logout}
          className="nav-item btn btn-primary zima-button"
        >
          Logout
        </button>
      </li>
    </ul>
  );

  return (
    <section id="zima-header" className="zima-header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-red zima-lgo-wrapper">
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
            <div className="navbar-nav ml-auto ">
              <NavLink activeClassName='active' className="nav-item nav-link " to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
              <NavLink activeClassName='active' className="nav-item nav-link" to="/discover-markets">
                Discover Markets{" "}
              </NavLink>
              <NavLink activeClassName='active' className="nav-item nav-link" to="/about-us">
                About Us
              </NavLink>
            </div>

            {isAuthenticated ? authNav : guestNav}
          </div>
        </div>
      </nav>
    </section>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { logout })(Header);

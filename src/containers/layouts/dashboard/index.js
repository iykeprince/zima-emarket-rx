import React, { Fragment } from "react";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import zimaLogo from "../../Resources/icon-2.png";
import "./index.css";
import Footer from "../../Footer";
import ShopProduct from "../../../components/admin/ShopProduct";
import Dashboard from "../../Dashboard";

const DashboardLayout = ({ title, user, shop, children, logout, history }) => {
  return (
    <div className="container-fluid">
      <header>
        <nav className="navbar navbar-expand navbar-dark top-nav">
          <div className="container">
            <div className="navbar-nav mr-auto">
              <a href="#!" className="nav-item nav-link">
                Home
              </a>
              <a href="#!" className="nav-item nav-link">
                About us
              </a>
              <a href="#!" className="nav-item nav-link">
                Contact us
              </a>
            </div>
            <div className="navbar-nav right-nav">
              <a href="#!" className="nav-item nav-link">Username</a>
              <a href="#!" className="nav-item nav-link">Logout</a>
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
                <Link className="nav-item nav-link active" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
                <Link className="nav-item nav-link" to="/discover-markets">
                  Discover Markets{" "}
                </Link>
                <Link className="nav-item nav-link" to="/help">
                  Help
                </Link>
              </div>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Sign In
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    href="https://zima.com.ng"
                    className="nav-item btn btn-primary zima-button"
                  >
                    Sell
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="container">
        {/* <div className="row">
          <div className="col-md-2 sidebar">
            <header>
              <div className="icon"></div>
            </header>
            <aside>
              <div className="user-profile">
                <div className="user">
                  <img
                    src={shop.logo}
                    alt="shop logo"
                    className="img-responsive rounded-circle"
                    style={{ width: "40px" }}
                  />
                  <h4 className="user-text">
                    {user.first_name} {user.last_name}
                  </h4>
                </div>
              </div>
              <hr />
              <div className="navigations">
                <ul>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/my-products">My Products</Link>
                  </li>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <a href="!#"
                      className="btn btn-block btn-default pl-4"
                      style={{ textAlign: "left" }}
                      onClick={() => {
                        logout(); 
                        history.push('/')
                      }}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
          <div className="col-md-10">
            <div className="content-container">
              <header>
                <div className="menu">
                  <i className="fa fa-menu"></i>
                  <span className="page-title">{title}</span>
                </div>
              </header>

              {children}
             
              <Footer />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default DashboardLayout;

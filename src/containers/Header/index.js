import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import ZimaLogoWhite from "../Resources/icon.png";

class Header extends Component {
  render() {
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
      </section>
    );
  }
}
export default Header;

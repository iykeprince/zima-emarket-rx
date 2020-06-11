import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { requestLogin } from "../../../redux/actions/authActions";
import PropTypes from 'prop-types';
import DefaultLayout from "../../../containers/layouts/default";
import "./Login.css";

const Login = ({isAuthenticated, loading, errors, requestLogin, history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/dashboard");
    }
    //eslint-disable-next-line
  }, [isAuthenticated]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      //error log
      errors.message = "All fields are required!";
    } else {
      requestLogin(email, password);
    }
  };

  const signInWithFacebook = () => {
    alert("facebook login");
  };

  const signInWithGoogle = () => {
    alert("google sign in");
  };

  return (
    <DefaultLayout>
      <div className="center-form">
        <header>
          <h3>Sign In</h3>
          <hr />
        </header>
        {JSON.stringify(errors) !== '{}' && <div className="alert alert-danger">{errors.data.error || errors.message}</div>}
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="btn-position">
            <button className="btn btn-danger btn-md btn-block">
              Login {loading && <i className="fa fa-spinner fa-spin"></i>}
            </button>
          </div>
        </form>
        <hr />
        <h4 className="social-text">Connect with your:</h4>
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-primary btn-sm btn-fb"
            onClick={signInWithFacebook}
          >
            <i className="fa fa-facebook"></i> Sign in Facebook
          </button>
          <button
            className="btn btn-danger btn-sm btn-google"
            onClick={signInWithGoogle}
          >
            <i className="fa fa-google"></i> Sign in Google
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
};
Login.propTypes = {
  requestLogin: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  errors: PropTypes.object,
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  errors: state.auth.error
})
export default connect(mapStateToProps, {
  requestLogin,
})(Login);

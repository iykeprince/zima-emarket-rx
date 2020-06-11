import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DefaultLayout from "../../../containers/layouts/default";
import { requestSignUp } from '../../../redux/actions/authActions';

const Register = ({isAuthenticated, loading, errors, reset, history}) => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");


  useEffect(() => {
    // if (isAuthenticated) {
    //   history.push("/dashboard");
    // }
    //eslint-disable-next-line
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      first_name === "" ||
      last_name === "" ||
      phone_number === "" ||
      email === "" ||
      password === ""
    ) {
      errors.message = "All fields are required";
    } else {
      requestSignUp({ first_name, last_name, email, phone_number, password });

      if(reset){
        resetForm();
      }
    }
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");
  };

  const signInWithFacebook = () => {
    alert('facebook login')
  }

  const signInWithGoogle = () => {
    alert('google sign in')
  }

  return (
    <DefaultLayout>
      <div className="container center-form">
        
        {errors &&
          errors.length > 0 &&
          errors.map((error) => (
            <div classname="alert alert-danger">{error}</div>
          ))}
          <h4 className="social-text">Register with your:</h4>
        <div className="d-flex">
          <button
            className="btn btn-primary btn-sm btn-fb mr-1"
            onClick={signInWithFacebook}
          >
            <i className="fa fa-facebook"></i> Facebook
          </button>
          <button
            className="btn btn-danger btn-sm btn-google"
            onClick={signInWithGoogle}
          >
            <i className="fa fa-google"></i> Google
          </button>
        </div>
        <hr />
          <h4>Or Register</h4>
          <hr />
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              className="form-control"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              className="form-control"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
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
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              name="phone_number"
              className="form-control"
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
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
              Register {loading && <i className="fa fa-spinner fa-spin"></i>}
            </button>
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
};

Register.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  failed: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  reset: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  success: state.auth.success,
  failed: state.auth.failed,
  errors: state.auth.error,
  reset: state.auth.reset
})

export default connect(mapStateToProps, {
  requestSignUp
})(Register);

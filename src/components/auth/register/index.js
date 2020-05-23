import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../../containers/Header";

const Register = (props) => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/dashboard");
    }
    //eslint-disable-next-line
  }, [isAuthenticated]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      first_name === "" ||
      last_name === "" ||
      phone_number === "" ||
      email === "" ||
      password === ""
    ) {
      setErrors(["All fields are required"]);
    } else {
      setLoading(true);
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const data = { first_name, last_name, email, phone_number, password };
        const url = "/api/register";

        const res = await axios.post(url, data, config);

        localStorage.setItem("token", res.data.token);
        setLoading(false);
        setIsAuthenticated(true);
        resetForm();
      } catch (err) {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        setLoading(false);
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

  return (
    <div>
      <Header />
      <div className="container center-form" style={{ marginTop: "140px" }}>
        {errors &&
          errors.length > 0 &&
          errors.map((error) => (
            <div classname="alert alert-danger">{error}</div>
          ))}
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
            <button className="btn btn-warning btn-md btn-block">
              Register {loading && <i className="fa fa-spinner fa-spin"></i>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

import React, { useState, useEffect } from "react";

import "./Login.css";
import axios from "axios";
import Header from "../../../containers/Header";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/dashboard");
    }
    //eslint-disable-next-line
  }, [isAuthenticated]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      //error log
      setErrors("All fields are required!");
    } else {
      setLoading(true);
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const url = "/api/login";
        const data = { email, password };
        const res = await axios.post(url, data, config);

        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        setIsAuthenticated(true);
        setLoading(false);
      } catch (err) {
        console.log("error", err.response.status);
        if(err.response.status === 401) setErrors('Attempt to login was unsuccessful, please provide valid email/password');

        localStorage.removeItem("token");
        setIsAuthenticated(false);
        setLoading(false);
        setEmail('');
        setPassword('');
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="center-form" style={{marginTop: '140px'}}>
        {errors && <div className='alert alert-danger'>{errors}</div>}
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
            <button className="btn btn-warning btn-md btn-block">Login {loading && <i className='fa fa-spinner fa-spin'></i> }</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

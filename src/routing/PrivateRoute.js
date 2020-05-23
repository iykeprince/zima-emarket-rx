import React, { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import axios from "axios";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [user, setUser] = useState({});
  const [shop, setShop] = useState({});
 
  const [loading, setLoading] = useState(false);
//   const [error, setError] = useState([]);
  const token = localStorage.token;
  const [isAuthenticated, setIsAuthenticated] = useState(token ? true : false);

  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  };

  useEffect(() => {
      if(!localStorage.token) setIsAuthenticated(false);
      
    getUser();
    getShop();
    //eslint-disable-next-line
  }, [isAuthenticated]);

  const getUser = async () => {
    try {
      setLoading(true);

      const res = await axios.get("/api/getUser", config);
      
      setUser(res.data);
      setLoading(false);
    } catch (err) {
      handleError(err);
    }
  };

  const getShop = async () => {
    try {

      const res = await axios.get("/api/getShop", config);
      
      setShop(res.data);
    } catch (err) {
      handleError(err);
    }
  }

  const logout = async () => {
    try {
      await axios.post("/api/logout", {}, config);

      if (localStorage.token) localStorage.removeItem("token");

      setIsAuthenticated(false);
      setLoading(false);
    } catch (err) {
      handleError(err);
    }
  };

  const handleError = (err) => {
    setLoading(false);
    setIsAuthenticated(false);
    setUser(null);
    // setError([err.response]);
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? (
          <Redirect to="/login" />
        ) : (
          <Component
            {...props} 
            config={config}
            token={token}
            shop={shop} 
            user={user}
            loading={loading}
            logout={logout}
          />
        )
      }
    />
  );
};

export default PrivateRoute;

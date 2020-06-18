import React, { useState, useEffect } from "react";
import DashboardLayout from "../layouts/dashboard";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Area,
  Bar,
  ComposedChart,
} from "recharts";

import "./Dashboard.css";
import { Tooltip } from "evergreen-ui";

const Dashboard = ({
  config,
  user,
  markets,
  shop,
  products,
  loading,
  logout,
}) => {
  const title = "Dashboard";

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  useEffect(() => {});

  return (
    <DashboardLayout user={user} shop={shop} title={title}>
      {/* Content */}
      <div className="content mt-md-4 mt-sm-4 mt-xs-4">
        <div className="row mt-5 mb-4 top-cards">
          <div className="col-lg-4 col-md-4 col-sm-12 mt-lg-0 mt-md-5 mt-sm-5 mt-xs-5">
            <div className="card">
              <div className="card-body">
                <div className="card-cascade card-cascade-primary">
                  <i className="fas fa-dumpster-fire"></i>
                </div>
                <h4 className="card-title">Products</h4>
                <p className="card-text">{products.length}</p>
              </div>
              <div className="card-footer">
                <a href="#!">
                  <i className="fa fa-store"></i> view products
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mt-lg-0 mt-md-5 mt-sm-5 mt-xs-5">
            <div className="card">
              <div className="card-body">
                <div className="card-cascade card-cascade-orange">
                  <i className="fa fa-store"></i>
                </div>
                <h4 className="card-title">Markets</h4>
                <p className="card-text">{markets.length}</p>
              </div>
              <div className="card-footer">
                <a href="#!">
                  <i className="fa fa-user"></i> view profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mt-lg-0 mt-md-5 mt-sm-5 mt-xs-5">
            <div className="card">
              <div className="card-body">
                <div className="card-cascade card-cascade-green">
                  <i className="fa fa-store"></i>
                </div>
                <h4 className="card-title">Shop</h4>
                <p className="card-text">0</p>
              </div>
              <div className="card-footer">
                <a href="#!">
                  <i className="fa fa-store"></i> edit shop
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="row analytic">
              <div className="col-md-12">
                <div className="card" style={{ height: "300px" }}>
                  <div className="card-body">
                    <div className="card-title">Analytics</div>
                    <hr />
                    <div className="graph-canvas p-3">
                      <LineChart data={data} height={200} width={400}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        {/* <Tooltip /> */}
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="pv"
                          stroke="#8884d8"
                          activeDot={{ r: 8 }}
                        />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                      </LineChart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 mt-lg-0 mt-sm-5 shop">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">
                  <img
                    src={shop.logo}
                    alt="logo"
                    className="img-responsive rounded-circle"
                    style={{ width: "60px", height: "60px" }}
                  />
                  Shop
                </h4>
                <hr />
                <div className="card-inner-box">
                  <div>
                    <strong>Business</strong>
                    <div>
                      <p>{shop.name}</p>
                    </div>
                  </div>
                  <div>
                    <strong>Address</strong>
                    <p>{shop.address}</p>
                  </div>
                  <div>
                    <strong>Email</strong>
                    <p>{shop.email}</p>
                  </div>
                  <div>
                    <strong>Phone</strong>
                    <p>{shop.phone_number}</p>
                  </div>
                  {/* <p className="h5">{shop.market}</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row activity mt-lg-4 mt-md-4 mt-sm-5">
          <div className="col-md-6 ">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Market Visualization</h5>
                <div className="graph-2 p-4" style={{ height: "250px" }}>
                  <ComposedChart
                    width={300}
                    height={240}
                    data={data}
                    margin={{
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                    }}
                  >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    {/* <Tooltip /> */}
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="amt"
                      fill="#8884d8"
                      stroke="#8884d8"
                    />
                    <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                    {/* <Scatter dataKey="cnt" fill="red" /> */}
                  </ComposedChart>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-lg-0 mt-md-5 mt-sm-5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Map Acivity</h5>
                <div className="graph-3 p-4" style={{ height: "250px" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5 mt-4">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="p-5"></div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="p-5"></div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="p-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content */}
    </DashboardLayout>
  );
};
export default Dashboard;

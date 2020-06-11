import React, { useState, useEffect } from "react";
import DashboardLayout from "../layouts/dashboard";

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

  return (
    <DashboardLayout user={user} shop={shop} title={title}>
      {/* Content */}
      <div className="content p-5">
        <h3 className="title">Dashboard</h3>
        <div className="row mt-2">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Products</h4>
                <p className="card-text">{products.length}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Markets</h4>
                <p className="card-text">{markets.length}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Shop</h4>
                <p className="card-text">{shop.name}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <div className="card" style={{ height: "300px" }}>
                  <div className="card-body">
                    <div className="card-title">Analytics</div>
                    <hr />
                    <div className="graph-canvas p-3"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Market Visualization</h5>
                    <div
                      className="graph-2 p-4"
                      style={{ height: "250px" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Map Acivity</h5>
                    <div
                      className="graph-3 p-4"
                      style={{ height: "250px" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
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

              <div className="col-md-12 mt-2">
                <div className="card">
                  <div className="card-body">
                    <div className="p-5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-2">
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

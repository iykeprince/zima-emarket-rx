import React, { useEffect, useState } from "react";
import DashboardLayout from "../../containers/layouts/dashboard";
import Products from "./products/Products";
import { connect } from 'react-redux';

const ShopProduct = ({ config, user, shop, products }) => {
 
  return (
    <DashboardLayout shop={shop} user={user}>
      <section>
        <div className="content p-5">
          <div className="content-header">
            <h3 className="content-title">
              Products <span className="badge badge-primary">(10)</span>
            </h3>
          </div>
          <div className="content-body">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <Products products={products} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ./Content/ */}
    </DashboardLayout>
  );
};
const mapStateToProps = state => ({
  products: state.auth.products
})
export default connect(mapStateToProps, {})(ShopProduct);

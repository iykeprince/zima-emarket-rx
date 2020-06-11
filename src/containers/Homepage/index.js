import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchMarkets } from '../../redux/actions/marketActions';
import { fetchCategories} from '../../redux/actions/categoryActions';
import { fetchProducts } from '../../redux/actions/productActions';
import "./HomePage.css";
import PropTypes from 'prop-types';

import Banner from "../Resources/banner.png";
import Markets from "../../components/markets/Markets";
import Category from "../../components/categories/Category";
import Spinner from "../../components/Spinner";
import Product from "../../components/products/Product";
import Subscribe from "../../components/subscribe/Subscribe";
import HomePageLayout from "../layouts/home";

const HomePage = ({ categories, markets, products, fetchMarkets, fetchCategories, fetchProducts}) => {

  useEffect(() => {
    fetchMarkets();
    fetchProducts();
    fetchCategories();
    //eslint-disable-next-line
  }, []);

  return (
    <HomePageLayout>
      <div className="container-fluid">
        <div className=" row zima-features">
          <div className="zima-features-col">
            <div className="zima-features-wrapper">
              <div className="row">
                <div className="col-md-3">
                  <div className="features-inside1">
                    <ul className="cat-body">
                      <li className="cat cat1">Categories</li>
                      {categories && categories.length > 0 ? (
                        <Category categories={categories} />
                      ) : (
                        <Spinner />
                      )}
                    </ul>
                  </div>
                </div>
                <div className="col-md-9">
                  <img src={Banner} width="100%" alt="banner" />
                  <div className="zima-features-inside mt-4">
                    <div className="inside2-content">
                      {/*  */}
                      {products && products.length > 0 ? (
                        <Product products={products} />
                      ) : (
                        <Spinner />
                      )}
                      {/*  */}
                      <div className="inside2-divider">Markets</div>
                      {markets && markets.length > 0 ? (
                        <Markets markets={markets} />
                      ) : (
                        <Spinner />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="zima-disclaimer">
            <h2>
              Subscribe today to get the latest offers, discount rates and
              offers. No spamming, we promise
            </h2>
            <div className="zima-form">
              <Subscribe />
            </div>
            <p>
              Subscribe today to get the latest offers, discount rates and
              offers
            </p>
          </div>
        </div>
      </div>
    </HomePageLayout>
  );
};

HomePage.propTypes = {
  fetchMarkets: PropTypes.func.isRequired,
  fetchProducts: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  markets: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  markets: state.markets.items,
  categories: state.categories.items,
  products: state.products.items
})

export default connect(mapStateToProps, {
  fetchMarkets,
  fetchProducts,
  fetchCategories
})(HomePage);

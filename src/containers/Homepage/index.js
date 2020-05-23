import React, { useState } from "react";

import Header from "../Header";
import Footer from "../Footer";
import "./HomePage.css";

import Banner from "../Resources/banner.png";
import Markets from '../../components/markets/Markets'; 
import Category from '../../components/categories/Category';
import Spinner from '../../components/Spinner';
import Product from "../../components/products/Product";
import Subscribe from "../../components/subscribe/Subscribe";
import Search from "../../components/search/Search";

const HomePage = ({markets, categories, products }) => {

  return (
    <div className="container-fluid p-0">
      <Header /> 
      <section id="zima-landing-page-features">
        <div className="zima-hero-banner-text-wrapper">
          <div className="zima-hero-banner-text">
            <h2>Access Markets and Local vendors, all in one click.</h2>
          </div> 
          <Search />
        </div>

        <div className="container-fluid">
          <div className=" row zima-features">
            <div className="zima-features-col">
              <div className="zima-features-wrapper">
                <img src={Banner} width="100%" />
                <div className="zima-features-inside">
                  <div className="features-inside1">
                    { categories && categories.length > 0 ? (
                      <Category categories={categories} />
                    ) : <Spinner />}
                  </div>
                  <div className="features-inside2">
                    <div className="inside2-content">
                      { products && products.length > 0 ? (
                        <Product products={products} />
                      ) : <Spinner /> }
                      <div className="inside2-divider">Markets</div>
                      { markets && markets.length > 0 ? (
                        <Markets markets={markets} />
                      ) : <Spinner /> }
                       
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
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;

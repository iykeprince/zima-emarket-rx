import React, { useEffect, useState } from "react";
import DefaultLayout from "../layouts/default";
import "./index.css";

import axios from "axios";
import Spinner from "../../components/Spinner";
import SpinnerLayout from "../layouts/spinner";
import Products from "../../components/admin/products/Products";
import defaultImage from "./../Resources/banner.png";
import Swiper from "swiper";
const productObject = {
  name: "",
  price: "",
  images: [],
  description: "",
};
const Ad = (props) => {
  const id = props.match.params.id;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [product, setProduct] = useState([productObject]);

  const [markets, setMarkets] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);

  const mySwiper = new Swiper(".swiper-container", {
    loop: true,
    speed: 400,
    spaceBetween: 10,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const myMarketSwiper = new Swiper(".market-swiper-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  useEffect(() => {
    getProduct(id);

    //eslint-disable-next-line
  }, []);

  const getProduct = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/products/${id}`, {
        headers: { "Content-Type": "application/json" },
      });

      setLoading(false);
      setProduct(res.data.product);
      setMarkets(res.data.markets);
      setSimilarProducts(res.data.similar_products);
    } catch (err) {
      console.log(err.response);
      setProduct(null);
      setLoading(false);
      setError(err.response.data.message);
    }
  };

  if (loading && product.length === 0) {
    return <SpinnerLayout />;
  }

  const { name, description, price, images, category, shop } = product;

  return (
    <DefaultLayout>
      <div className="container-fluid p-4 ad-detail">
        {error && <div className="alert alert-danger">{error}</div>}
        <h2 className="ad-title">Ad detail</h2>
        <small className="add-title-small lead">
          <span>{category !== undefined ? category.name : ""}</span> >{" "}
          <span>Sub-category name</span>
        </small>
        <div className="row">
          <div className="col-lg-9 col-md-12">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {images !== undefined ? (
                  images.map((img) => (
                    <div key={img.index} className="swiper-slide">
                      <div
                        className="ad-banner"
                        style={{ backgroundImage: `url(${img.image})` }}
                      ></div>
                    </div>
                  ))
                ) : (
                  <Spinner />
                )}
              </div>
              {/* <!-- Add Arrows --> */}
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
            <div className="row mt-3">
              <div className="col-md-8 col-sm-12">
                <h3 className="ad-title">{name}</h3>
                <small className="lead">
                  <span>{category !== undefined ? category.name : ""}</span> >{" "}
                  <span>Sub-category name</span>
                </small>
                <p className="description">
                  {description ||
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam numquam fugiat fugit. Optio placeat quibusdam eveniet incidunt aspernatur reprehenderit. At repellendus aut amet tempore fugiat nulla assumenda porro eligendi ut."}
                </p>
              </div>
              <div className="col-md-4 col-sm-12 bg">
                <div className="price-tag card card-body">
                  <h2 className="price">&#8358;{price}</h2>
                  <h5 className="price-slash">
                    <small>&#8358;{price}</small>
                  </h5>
                </div>
              </div>
            </div>

            {shop !== undefined && (
              <div className="row mt-3 mb-3">
                <div className="col-md-6 col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <img src={shop.logo} alt="" className="card-image" />
                      <h4 className="card-title ad-shop-name">
                        <strong>Store</strong>{" "}
                        <span className="mute-text">
                          {shop !== undefined ? shop.name : ""}
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <p className="lead">
                        <strong>Market</strong> <i className="fa fa-market"></i>{" "}
                        {shop.market.name}
                      </p>
                      <p className="mute">
                        City: <i className="fa fa-map"></i>
                        {shop.market.city}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="market-container">
              <h4 className="card-title">Markets</h4>
            <div className="market-swiper-container">
              <div className="swiper-wrapper">
                <div class="swiper-slide">
                  <div className="card">
                    <div className="card-body">
                    <div
                    className="market-slide"
                    style={{ backgroundImage: `url(${defaultImage})` }}
                  ></div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div className="card">
                    <div className="card-body">
                    <div
                    className="market-slide"
                    style={{ backgroundImage: `url(${defaultImage})` }}
                  ></div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div className="card">
                    <div className="card-body">
                    <div
                    className="market-slide" 
                    style={{ backgroundImage: `url(${defaultImage})` }}
                  ></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Add Arrows --> */}
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>

            </div>
            
          </div>

          <div className="col-lg-3 col-md-12">
            <aside>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Similar Products</h4>
                  <hr />
                  <ul>
                    {similarProducts.map((similarProduct) => (
                      <li className="horizontal-listing">
                        <div className="item">
                          <div className="item-img"></div>
                          <div className="item-right">
                            <h4 className="item-title">
                              {similarProduct.name}
                            </h4>
                            <div className="item-actions">
                              <p className="item-price">
                                &#8358;{similarProduct.price}
                              </p>
                              <a
                                href={`/product/${similarProduct.id}`}
                                className="item-link"
                              >
                                View
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
            <div className="advert">
              <h4 className="title">Advert</h4>
            </div>
            <aside>
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Featured Products</h3>
                  <hr />
                  <ul>
                    <li className="horizontal-listing">
                      <div className="item">
                        <div className="item-img"></div>
                        <div className="item-right">
                          <h4 className="item-title">Product name</h4>
                          <div className="item-actions">
                            <p className="item-price">&#8358;223</p>
                            <a href={`/product/3`} className="item-link">
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="horizontal-listing">
                      <div className="item">
                        <div className="item-img"></div>
                        <div className="item-right">
                          <h4 className="item-title">Product name</h4>
                          <div className="item-actions">
                            <p className="item-price">&#8358;223</p>
                            <a href={`/product/3`} className="item-link">
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Ad;

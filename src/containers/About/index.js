import React from "react";
import DefaultLayout from "../layouts/default";

const AboutUs = () => {
  return (
    <DefaultLayout>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h3>About Us</h3>
            <p>
              As a leading online marketplace, Zima.com.ng has created a safe
              and convenient way for every market dealers to buy and sell
              virtually anything online at their own flexible prizes.
            </p>
            <p>
              Established in 2020, zima.com.ng has grown to become one of
              Nigeria’s foremost online shopping destinations. The growth is
              both in terms of user base and in terms of the range and number of
              products on offer. Zim.com.ng has withstood the hardest test of
              them all, the test of time, to prove its viability and usefulness
              in the Nigerian ecommerce landscape.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h3> Why buy on Zima.com.ng?</h3>
            <p>
              You can buy just about anything on Zima.com.ng. The latest
              high-tech devices, brand-new consumer products, second-hand items,
              and difficult to find collectibles, from any market in Nigeria at
              the same rate you will be sold for at the land market at your own
              convenience.
            </p>
            <p>
              When shopping on Zima.com.ng, you are able to browse a wide range
              of products from thousands of sellers, so you can choose not only
              what you want to buy, but also which seller you want to buy from.
              That is why Zima.com.ng has millions of shoppers bidding, buying
              and making offers to thousands of sellers who owns shops in all
              the Nigerian markets via the website, mobile site and Zima.com.ng
              mobile apps.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h3>Why sell on Zima.com.ng?</h3>
            <p>
              Zima.com.ng is a perfect solution for selling with the help of
              sophisticated ecommerce tools and with a minimum of investment.
              Zima.com.ng offers great exposure to vendors as it is open for
              trading 24 hours a day, 7 days a week.
            </p>
            <p>
              As a result of Zima.com.ng effective marketing campaigns, goods on
              the site are exposed to a high volume of traffic. That is why
              Zima.com.ng is attracting a variety of buyers, from different
              fields and states in Nigeria.
            </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AboutUs;

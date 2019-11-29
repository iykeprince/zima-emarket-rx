import React, { Component } from "react";
import "./Header.css";

import ZimaLogoWhite from "../Resources/zima_white_logo.png";

class Header extends Component {
  render() {
    return (
      <section id='zima-header' className='zima-header'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-sm-6 col-xs-12'>
              <div className='zima-lgo-wrapper'>
                <ul>
                  <li>
                    <a href='/'>
                      <img src={ZimaLogoWhite} alt='Zima White Logo' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='zima-hero-banner-text-wrapper'>
              <div className='zima-hero-banner-text'>
                <h2>Find Great Offers Today!</h2>
                <p>
                  Getting bored with too many Apps for different purposes? Get
                  on Zima to buy/sell, register your store, pay bills, buy event
                  tickets and lots more!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Header;

import React, { Component } from 'react';
import './HeaderTwo.css';

import ZimaLogoWhite from '../Resources/icon.png';

class HeaderTwo extends Component {
  render() {
    return (
      <section id='zima-header' className='zima-header'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12 col-sm-12 col-xs-12'>
              <div className='zima-lgo-wrapper'>
                <a href='https://zima.com.ng' className='logo'>
                  <div className='icon'></div>
                </a>

                <div className='header-search-button'>
                  <div className='headertwo-search'>
                    <input type='text' placeholder='Find a market near you' />
                    <button>Search</button>
                  </div>
                </div>

                <div className='clock'>
                  <ul>
                    <li className='clock-text'>Sign In</li>|
                    <li className='clock-text'>Register</li>
                  </ul>

                  <a href='https://zima.com.ng'>
                    <button className='zima-button'>Sell</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default HeaderTwo;

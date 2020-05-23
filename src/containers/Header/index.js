import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import ZimaLogoWhite from '../Resources/icon.png';

class Header extends Component {
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

                <ul>
                  <li className='text nav'>
                    <a href='https://zima.com.ng'>
                      <p>Home</p>
                    </a>
                  </li>
                  <li className='text'>
                    <a href='https://zima.com.ng'>
                      <p>Discover Markets</p>
                    </a>
                  </li>
                  <li className='text'>
                    <a href='https://zima.com.ng'>
                      <p>Help</p>
                    </a>
                  </li>
                </ul>
                <div className='clock'>
                  <ul>
                    <li className='clock-text'><Link to='/login'>Sign In</Link></li>|
                    <li className='clock-text'><Link to='/register'>Register</Link></li>
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
export default Header;

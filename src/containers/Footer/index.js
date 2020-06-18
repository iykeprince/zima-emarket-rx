import React, { Component } from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faFacebookSquare,
  faWhatsappSquare,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import ZimaBottomLogo from '../Resources/zima_logo.png';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <section className='zima-landing-page-footer'>
        <div className='zima-pattern-overlay-footer'></div>
        <div className='zima-landing-page-footer-bottom'>
          <div className='zima-footer-information'>
            <div className='footer-box-main'>
              <div className='footer-box'>
                <ul>
                  <li>Company</li>
                  <li><Link to="/about-us">About Us</Link></li>
                  <li>Career</li>
                  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                </ul>
              </div>
              <div className='footer-box'>
                <ul>
                  <li>Communities</li>
                  <li>Zima Events</li>
                  <li>Zima Logistics</li>
                  <li>Zima eMarket</li>
                </ul>
              </div>
              <div className='footer-box'>
                <ul>
                  <li>Useful Links</li>
                  <li>Help</li>
                  <li>How it Works</li>
                  <li>FAQs</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='container-fluid bg-dark'>
            <div className='row'>
              <div className='col-md-4 copyright'>
                <p>&copy;2020 Zima.com.ng - All rights reserved.</p>
              </div>
              <div className='col-md-4 terms'>
                <p>Terms & Condition | Merchants | Policy</p>
              </div>
              <div className='col-md-4 icons'>
                <ul>
                  <li>
                    <a href='https://www.facebook.com/zima.com.ng'>
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        size='lg'
                        title='Zima Facebook'
                      />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.instagram.com/zima.com.ng'>
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size='lg'
                        title='Zima Twiiter'
                      />
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com/zima_com_ng'>
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size='lg'
                        title='Zima Instagram'
                      />
                    </a>
                  </li>

                  <li>
                    <a href='https://api.whatsapp.com/send?phone=2348112495413'>
                      <FontAwesomeIcon
                        icon={faWhatsappSquare}
                        size='lg'
                        title='Zima Whatsapp'
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Footer;

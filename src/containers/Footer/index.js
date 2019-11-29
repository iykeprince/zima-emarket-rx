import React, { Component } from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faWhatsappSquare,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import ZimaBottomLogo from "../Resources/zima_logo.png";

class Footer extends Component {
  render() {
    return (
      <section className='zima-landing-page-footer'>
        <div className='zima-pattern-overlay-footer'></div>
        <div className='zima-landing-page-footer-bottom'>
          <div className='container'>
            <div className='zima-footer-information'>
              <div className='row'>
                <div className='col-md-5'>
                  <figure className='logo sticky'>
                    <img src={ZimaBottomLogo} alt='Zima Logo' />
                  </figure>
                  <p>
                    Zima is Nigeria’s leading online marketplace to access
                    diverse products and service offerings. We are committed to
                    simplifying everyday online transactions with our safe and
                    secure platform. Zima is the smart and easy way to get
                    things done online.
                  </p>
                </div>
                <div className='col-md-4'>
                  <h5>&nbsp;</h5>
                  {/* <address>
                    4th floor, Grace and Faith plaza, by Arroma junction,
                    <br />
                    Onitsha-Enugu express way, Awka
                    <br />
                    Anambra state. Nigeria.
                  </address> */}
                </div>
                <div className='col-md-3'>
                  <h5>Say Hello</h5>
                  <address>
                    E: hello@zima.com.ng <br />
                    P: +234 811 249 5413
                  </address>
                  <ul>
                    <li>
                      <a href='https://www.facebook.com/zima.com.ng'>
                        <FontAwesomeIcon
                          icon={faFacebookSquare}
                          size='lg'
                          title='Zima Facebook'
                        />
                      </a>
                    </li>
                    <li>
                      <a href='https://twitter.com/zima_com_ng'>
                        <FontAwesomeIcon
                          icon={faTwitter}
                          size='lg'
                          title='Zima Twitter'
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
            <div className='copyright-text'>
              &copy;2019 zima.com.ng - All rights reserved.
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Footer;

import React, { Component } from "react";

import Header from "../Header";
import Footer from "../Footer";
import "./HomePage.css";

// import ClientAccess from "../Resources/clients/access-logo.png";

class HomePage extends Component {
  componentDidMount() {
    document.title = "Welcome | Zima Landing Page ";
  }
  render() {
    return (
      <div className='container-fluid p-0'>
        <Header />
        <section id='zima-landing-page-features'>
          <div className='container'>
            <div className='zima-signature-top'></div>
            <div className='row'>
              <div className='col-md-12'>
                <div className='zima-landing-page-features-title'>
                  <h2>
                    Explore our best <span>deals</span>
                  </h2>
                </div>
              </div>

              <div className='col-md-4'>
                <div className='zima-features-wrapper'>
                  <a href='/'>
                    <div className='zima-features-img-bg classified'></div>
                  </a>
                  <div className='zima-features-list-text'>
                    <h5>Zima Classified</h5>
                    <p>Buy and sell with our growing zima community </p>
                    <a className='zima-features-external-link' href='/'>
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>

              <div className='col-md-4'>
                <div className='zima-features-wrapper'>
                  <a href='/'>
                    <div className='zima-features-img-bg emarket'></div>
                  </a>
                  <div className='zima-features-list-text'>
                    <h5>Zima E-Markets</h5>
                    <p>Verified, local vendors now at your fingertips.</p>
                    <a className='zima-features-external-link' href='/'>
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>

              <div className='col-md-4'>
                <div className='zima-features-wrapper'>
                  <a href='/'>
                    <div className='zima-features-img-bg tickets'></div>
                  </a>
                  <div className='zima-features-list-text'>
                    <h5>Zima Tickets</h5>
                    <p>Ditch queues and get tickets before showtime.</p>
                    <a className='zima-features-external-link' href='/'>
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>

              {/* <div className='col-md-4'>
                <div className='zima-features-wrapper'>
                  <a href='/'>
                    <div className='zima-features-img-bg logistics'></div>
                  </a>
                  <div className='zima-features-list-text'>
                    <h5>Zima Logistics</h5>
                    <p>Trusted shippers and carriers to handle deliveries.</p>
                    <a className='zima-features-external-link' href='/'>
                      Visit Website
                    </a>
                  </div>
                </div>
              </div> */}

              {/* <div className='col-md-4'>
                <div className='zima-features-wrapper'>
                  <a href='/'>
                    <div className='zima-features-img-bg bills'></div>
                  </a>
                  <div className='zima-features-list-text'>
                    <h5>Zima Bill Payment</h5>
                    <p>Settle just about any bill conveniently!</p>
                    <a className='zima-features-external-link' href='/'>
                      Visit Website
                    </a>
                  </div>
                </div>
              </div> */}

              {/* <div className='col-md-4'>
                <div className='zima-features-wrapper'>
                  <a href='/'>
                    <div className='zima-features-img-bg money'></div>
                  </a>
                  <div className='zima-features-list-text'>
                    <h5>Zima Money</h5>
                    <p>Lorem Ipsum is that it has a more-or-less</p>
                    <a className='zima-features-external-link' href='/'>
                      Visit Website
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        {/* 
        <section id='zima-clients' className='clients'>
          <div className='container'>
            <header className='zima-clients-header'>
              <h2 className='zima-clients-title'>Our partners</h2>
              <div className='zima-clients-fade-text'>partners</div>
            </header>
            <div className='zima-clients-list-wrapper'>
              <ul className='zima-clients-list'>
                <li className='zima-client'>
                  <a href='/'>
                    <img src={ClientAccess} alt='' />
                  </a>
                </li>

                <li className='zima-client'>
                  <a href='/'>
                    <img src={ClientAccess} alt='' />
                  </a>
                </li>

                <li className='zima-client'>
                  <a href='/'>
                    <img src={ClientAccess} alt='' />
                  </a>
                </li>

                <li className='zima-client'>
                  <a href='/'>
                    <img src={ClientAccess} alt='' />
                  </a>
                </li>

                <li className='zima-client'>
                  <a href='/'>
                    <img src={ClientAccess} alt='' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section> */}

        <section className='zima-disclaimer'>
          <div className='container'>
            <div class='zima-signature-bottom'></div>
            <div className='row align-items-center'>
              <div className='col-md-12 text-center'>
                <p>
                  The information provided on this web page is intended for
                  informational purposes only and may not be applicable in your
                  country, region, or city. It is subject to change and may be
                  updated without notice.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
export default HomePage;

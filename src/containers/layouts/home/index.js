import React from 'react'
import Subscribe from '../../../components/subscribe/Subscribe'
import Footer from '../../Footer'
import Header from '../../Header'
import Search from '../../../components/search/Search'

const HomePageLayout = ({children}) => {
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

        {children}
        
      <Footer />
      </section>

    </div>
    )
}

export default HomePageLayout

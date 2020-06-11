import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header'

const DefaultLayout = ({ children }) => {
    return (
        <div className="page-wrapper">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default DefaultLayout

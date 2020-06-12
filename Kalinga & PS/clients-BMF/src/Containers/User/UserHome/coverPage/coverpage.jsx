import React from 'react';
import './coverPage.css';
import Header from '../../../../Components/Header/index'

const CoverPage = () => {
    return (
        <div className="row">
            <Header />
            <div className="banner">
                <div className="banner-container">
                    <div className="banner-caption">
                        <h1 className="banner-heading">Furnique</h1>
                        <p className="banner-subheading">Scroll Down to Explore the world of Furnique</p>
                    </div>
                </div>
            </div>
        </div>

    )
}



export default CoverPage; 
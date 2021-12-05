import React from 'react';
import banner from '../../assets/images/Slider.jpg'

function Banner() {
    return (
        <div className="banner">
            <div className="container">
                <div className="banner__img">
                    <img src={banner} alt="banner"/>
                </div>
            </div>
        </div>
    );
}

export default Banner;
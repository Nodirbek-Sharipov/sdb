import React from 'react';
import banner from '../../assets/images/Slider.png'

function Banner() {
    return (
        <div className="banner">
                <div className="banner__img">
                    <img src={banner} alt="banner"/>
                </div>
        </div>
    );
}

export default Banner;
import React from 'react';
import brand_img from '../../assets/images/brend_img.png'
import {Link} from "react-router-dom";

function Brands({brands}) {
    return (
        <div className="brands">
            <div className="container">
                <div className="brands__row">
                    {
                        brands.map(el =>{
                            return(
                                <Link to="/" className="brand" key={el.id}>
                                    <div className="brand__img">
                                        <img src={el.image} alt="brand_img"/>
                                    </div>

                                    <div className="brand__title">
                                        <h3>{el.name_uz}</h3>
                                    </div>
                                </Link>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    );
}

export default Brands;
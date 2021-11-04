import React from 'react';
import brand_img from '../../assets/images/brend_img.png'

function Brands(props) {
    const arr = [];
    for(let i = 1; i <= props.brands_num; i++){
        arr.push(i)
    }
    return (
        <div className="brands">
            <div className="container">
                <div className="brands__row">
                    {
                        arr.map(el =>{
                            return(
                                <a href="#" className="brand" key={el}>
                                    <div className="brand__img">
                                        <img src={brand_img} alt="brand_img"/>
                                    </div>

                                    <div className="brand__title">
                                        <h3>Apple</h3>
                                    </div>
                                </a>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    );
}

export default Brands;
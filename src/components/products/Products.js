import React from 'react';
import Product from "./Product";

function Products(props) {
    let arr = props.state;

    return (
        <div className="products">
            <div className="container">
                <div className="products__title">
                    <h1>{props.products_title}</h1>
                </div>

                <div className="products__row">
                    {
                        arr.map((el) => {
                            return (
                                <Product key={el.id} {...el}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Products;
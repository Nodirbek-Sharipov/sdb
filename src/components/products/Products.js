import React from 'react';
import Product from "./Product";

function Products(props) {

    return (
        <div className="products">
            <div className="container">
                <div className="products__title">
                    <h1>{props.products_title}</h1>
                </div>

                <div className="products__row">
                    {
                        props.state ?
                            props.state.map((el) => {
                            return (
                                <Product key={el.id} {...el} match={props.match}/>
                            )
                        }) : null
                    }
                </div>
            </div>
        </div>
    );
}

export default Products;
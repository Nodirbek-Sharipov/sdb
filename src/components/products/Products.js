import React from 'react';
import StarIcon from "../icons/StarIcon";
import BoxIcon from "../icons/BoxIcon";
import CartIconSmall from "../icons/CartIconSmall";
import product_img from "../../assets/images/product_image.png"

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
                                <a href="#" className="product" key={el.id}>
                                    <div className="product__img">
                                        <img src={el.image} alt="product__img"/>
                                    </div>

                                    <div className="product__info">
                                        <div className="product__rate">
                                             <span className="product__rate-text">
                                                 {el.rating}
                                             </span>
                                            <span className="product__rate-icon">
                                                <StarIcon/>
                                             </span>
                                        </div>

                                        <div className="product__price">
                                           <span className="product__price-text">
                                               NEW
                                           </span>
                                            <span className="product__price-num">
                                               {
                                                   el.price + 'UZS'
                                               }
                                             </span>
                                        </div>
                                    </div>

                                    <div className="product__title">
                                        <h3>{el.title}</h3>
                                    </div>

                                    <div className="product__btns">
                                        <button className="product__btn product__btn-add">
                                           <span className="product__btn-icon">
                                                <CartIconSmall/>
                                           </span>
                                            <span className="product__btn-text">
                                               Savatga qo’shish
                                           </span>
                                        </button>

                                        <button className="product__btn product__btn-order">
                                           <span className="product__btn-icon">
                                                <BoxIcon/>
                                           </span>
                                            <span className="product__btn-text">
                                               Buyurtma berish
                                           </span>
                                        </button>
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

export default Products;
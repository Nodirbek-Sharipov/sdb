import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { addToCart} from "../../store/reducers/CartReducer";
import {getProduct} from "../../store/reducers/ProductReducer";
import {setIsActiveModal} from "../../store/reducers/MainPageReducer";

function Product({...props}) {
    const dispatch = useDispatch();
    const card = useSelector(state => state.cart.cart);

    const addToCartHandler = () =>{
        const user = localStorage.getItem('user');
        if(user){
            const inCart = card.find((item) => item.id === props.id ? true : false);
            localStorage.setItem('card', JSON.stringify(inCart ? card.map(item => item.id === props.id ? {...item, qty: item.qty + 1} : {...props}) : [...card, {...props, qty: props.qty ?  props.qty : 1}]));
            dispatch(addToCart({...props}))
        } else{
            dispatch(setIsActiveModal(true))
        }
    };

    return (
        <div className="product">
            <div className="product__img" onClick={() => {dispatch(getProduct(props.slug))}}>
                <Link to={'/products/' + props.slug}>
                    <img src={props.images[0]} alt="product__img"/>
                </Link>
            </div>

            <div className="product__title"  onClick={() => {dispatch(getProduct(props.slug))}}>
                <Link to={'/products/' + props.slug}>
                    <h3>{props.name_uz}</h3>
                </Link>
            </div>

            <div className="product__price">
                <span className="product__price-num">
                        {
                            Intl.NumberFormat().format(props.price)  + '  ' + 'So`m'
                        }
                </span>
            </div>

            <div className="product__btns">
                <button
                    className="product__btn product__btn-add"
                    onClick={addToCartHandler}
                >

                    <span className="product__btn-text">
                        Savatga qo’shish
                    </span>
                </button>

                <button className="product__btn product__btn-order"
                    onClick={() => dispatch(setIsActiveModal(true))}
                >

                    <span className="product__btn-text">
                        Buyurtma berish
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Product;
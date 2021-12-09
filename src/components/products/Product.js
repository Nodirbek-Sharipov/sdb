import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import StarIcon from "../icons/StarIcon";
import CartIconSmall from "../icons/CartIconSmall";
import BoxIcon from "../icons/BoxIcon";
import {useDispatch, useSelector} from "react-redux";
import {addItemCategory, addToCart} from "../../store/reducers/CartReducer";
import {getCategoryProducts} from "../../store/reducers/FilterReducer";
import {getBrands} from "../../store/reducers/BrandsReducer";
import {getProduct} from "../../store/reducers/ProductReducer";
import LoginModal from "../login/LoginModal";
import {setIsActiveModal} from "../../store/reducers/MainPageReducer";

function Product({...props}) {
    const dispatch = useDispatch();
    const store = useSelector(state => state);
    const [loginModalBool, setLoginModalBool] = useState(false);

    useEffect(() => {
        let slug = window.location.pathname.split('/')[2];
        dispatch(getCategoryProducts(slug))
    },[window.location]);

    return (
        <div className="product">
            <div className="product__img" onClick={() => {dispatch(getProduct(props.slug))}}>
                <Link to={'/products/' + props.slug}>
                    <img src={props.images[0]} alt="product__img"/>
                </Link>
            </div>

            {/*<div className="product__info">*/}
            {/*    <div className="product__rate">*/}
            {/*        <span className="product__rate-text">*/}
            {/*            {props.rating}*/}
            {/*        </span>*/}
            {/*        <span className="product__rate-icon">*/}
            {/*            <StarIcon/>*/}
            {/*        </span>*/}
            {/*    </div>*/}

            {/*    <div className="product__price">*/}
            {/*        <span className="product__price-text">*/}
            {/*            NEW*/}
            {/*        </span>*/}
            {/*        <span className="product__price-num">*/}
            {/*            {*/}
            {/*                props.price + 'UZS'*/}
            {/*            }*/}
            {/*        </span>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="product__title"  onClick={() => {dispatch(getProduct(props.slug))}}>
                <Link to={'/products/' + props.slug}>
                    <h3>{props.name_uz}</h3>
                </Link>
            </div>

            <div className="product__price">
                    {/*<span className="product__price-text">*/}
                    {/*    NEW*/}
                    {/*</span>*/}
                <span className="product__price-num">
                        {
                            Intl.NumberFormat().format(props.price)  + '  ' + 'So`m'
                        }
                </span>
            </div>

            <div className="product__btns">
                <button
                    className="product__btn product__btn-add"
                    onClick={() => dispatch(addToCart({...props}))}
                >
                    {/*<span className="product__btn-icon">*/}
                    {/*    <CartIconSmall/>*/}
                    {/*</span>*/}
                    <span className="product__btn-text">
                        Savatga qo’shish
                    </span>
                </button>

                <button className="product__btn product__btn-order"
                    onClick={() => dispatch(setIsActiveModal(true))}
                >
                    {/*<span className="product__btn-icon">*/}
                    {/*    <BoxIcon/>*/}
                    {/*</span>*/}
                    <span className="product__btn-text">
                        Buyurtma berish
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Product;
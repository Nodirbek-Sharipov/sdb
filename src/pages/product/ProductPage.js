import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProduct} from "../../store/reducers/ProductReducer";
import FullPageLoader from "../../components/loading/Loading";


function ProductPage() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.product);

    console.log(state);

    useEffect(() => {
        let slug = window.location.pathname.split('/')[2];
        console.log(slug)
        dispatch(getProduct(slug));
    },[]);

    return (
        <div className="productPage">
            <div className="container">
                {state.loading ? <FullPageLoader/> : state.product ? <Product  product={state.product}/> : <NoProduct/>}
            </div>
        </div>
    );
}

export default ProductPage;

const Product = ({product}) =>{
    const [counter, setCounter] = useState(1);
    const [image, setImage] = useState(product.images[0]);
    const increase = () =>{
        setCounter(counter + 1);
    }

    const decrease = () =>{
        if(counter <= 1){
            setCounter(1)
        } else{
            setCounter(counter - 1);
        }
    }
    return(
        <div className="productPage__product">
            <div className="productPage__product-name">
                <h1>{product.name_uz}</h1>
            </div>

            <div className="productPage__product-row">
                <div className="productPage__product-img">
                    <img src={image} alt="product_img"/>
                </div>

                <div className="productPage__product-content">
                    <div className="productPage__product-price">
                        <h3>{ Intl.NumberFormat().format(product.price)} UZS</h3>
                    </div>

                    {/*<div className="productPage__product-block">*/}
                    {/*    <p className="productPage__product-text">Rang: Gold</p>*/}
                    {/*</div>*/}

                    <div className="productPage__product-images">
                        {
                            product.images.map((item, index) =>{
                                return(
                                    <div
                                        className={item === image ? "productPage__product-imgWrap active":"productPage__product-imgWrap"}
                                        key={index}
                                        onClick={() => {setImage(item)}}
                                    >
                                        <img src={item} alt="product_img"/>
                                    </div>
                                )
                            })
                        }
                    </div>


                    {/*<div className="productPage__product-block">*/}
                    {/*    <p className="productPage__product-text">Xotira: </p>*/}
                    {/*    <div className="productPage__product-block-store">*/}
                    {/*        <button className="store__btn">128 GB</button>*/}
                    {/*        <button className="store__btn">256 GB</button>*/}
                    {/*        <button className="store__btn">512 GB</button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className="productPage__product-block">
                        <p className="productPage__product-text">Soni: </p>
                        <div className="productPage__product-block-counter">
                            <button className="counter__btn" onClick={decrease}>-</button>
                            <span className="counter__text">{counter}</span>
                            <button className="counter__btn" onClick={increase}>+</button>
                        </div>
                    </div>

                    <div className="product__btns">
                        <button className="product__btn product__btn-add">
                            {/*<span className="product__btn-icon">*/}
                            {/*    <CartIconSmall/>*/}
                            {/*</span>*/}
                            <span className="product__btn-text">
                                Savatga qo’shish
                            </span>
                        </button>

                        <button className="product__btn product__btn-order">
                            {/*<span className="product__btn-icon">*/}
                            {/*     <BoxIcon/>*/}
                            {/*</span>*/}
                            <span className="product__btn-text">
                                Buyurtma berish
                            </span>
                        </button>
                    </div>

                </div>
            </div>

            <div className="productPage__product-info">
                <div className="productPage__product-info-title">
                    <h3>Mahsulot haqida</h3>
                </div>
                <div className="productPage__product-info-texts">
                    <p className="productPage__product-info-text">
                        <span className="text_one">Тип</span>
                        -
                        <span className="text_two">Смартфон</span>
                    </p>
                </div>
            </div>

        </div>
    )
}

const NoProduct = () =>{
    return(
        <div className="noProduct">
            <h1>Mavjud so`rov bo`yicha mahsulot topilmadi</h1>
        </div>
    )
}
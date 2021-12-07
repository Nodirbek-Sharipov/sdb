import React, {useState} from 'react';
import {Link} from "react-router-dom";
import product_img from '../../assets/images/image 1006.png'

function Cart() {

    const cart = JSON.parse(localStorage.getItem('cartArr')).cart;

    return (
        <div className="cart">
            <div className="container">
                <div className="cart__title">
                    <h1>Корзина</h1>
                </div>
                <div className="cart__row">
                    <div className="cart__items">
                        {
                            cart.map((item,index) =>{
                                return(
                                    <CartItem product={item.product} key={index} quantity={item.product_quantity}/>
                                )
                            })
                        }
                    </div>

                    <div className="cart__sidebar">
                        <div className="cart__sidebar-item">
                            <span className="cart__sidebar-text">Товары:</span>
                            {/*<span>{cart.cardLength}</span>*/}
                        </div>
                        <div className="cart__sidebar-item">
                            <span className="cart__sidebar-text">Стоимость:</span>
                            <span>11 232 000 <strong>сум</strong></span>
                        </div>
                        <div className="cart__sidebar-item">
                            <span className="cart__sidebar-text">Всего к оплате:</span>
                            <span>11 232 000 <strong>сум</strong></span>
                        </div>

                        <button className="cart__sidebar-btn">Оформить заказ</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;

const CartItem = ({product, product_quantity}) =>{
    const [counter, setCounter] = useState(product_quantity ? product_quantity : 1);

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
        <div className="cart__item">
            <div className="cart__item-img">
                <img src={product.images[0]} alt="product_img"/>
            </div>
            <div className="cart__item-content">
                <p className="cart__item-text">{product.name_uz}</p>
                <p className="cart__item-text">ID: {product.id}</p>
                <div className="cart__item-links">
                    <Link to="/" className="cart__item-link">Перейти к товару</Link>
                    <Link to="/" className="cart__item-link">Удалить</Link>
                </div>
            </div>
            <div className="cart__item-block">
                <div className="cart__item-text">{Intl.NumberFormat().format(product.price)} сум</div>
                <div className="cart__item-count">
                    <button onClick={decrease}>-</button>
                    <span>{counter}</span>
                    <button onClick={increase}>+</button>
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import {Link} from "react-router-dom";
import product_img from '../../assets/images/image 1006.png'

function Cart(props) {
    return (
        <div className="cart">
            <div className="container">
                <div className="cart__title">
                    <h1>Корзина</h1>
                </div>
                <div className="cart__row">
                    <div className="cart__items">
                        <div className="cart__item">
                            <div className="cart__item-img">
                                <img src={product_img} alt="product_img"/>
                            </div>
                            <div className="cart__item-content">
                                <p className="cart__item-text">Газовая плита Gefest 6500-04 0069, черный</p>
                                <p className="cart__item-text">ID: 24410</p>
                                <div className="cart__item-links">
                                    <Link to="/" className="cart__item-link">Перейти к товару</Link>
                                    <Link to="/" className="cart__item-link">Удалить</Link>
                                </div>
                            </div>
                            <div className="cart__item-block">
                                <div className="cart__item-text">8 388 000 сум</div>
                                <div className="cart__item-count">
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="cart__item">
                            <div className="cart__item-img">
                                <img src={product_img} alt="product_img"/>
                            </div>
                            <div className="cart__item-content">
                                <p className="cart__item-text">Газовая плита Gefest 6500-04 0069, черный</p>
                                <p className="cart__item-text">ID: 24410</p>
                                <div className="cart__item-links">
                                    <Link to="/" className="cart__item-link">Перейти к товару</Link>
                                    <Link to="/" className="cart__item-link">Удалить</Link>
                                </div>
                            </div>
                            <div className="cart__item-block">
                                <div className="cart__item-text">8 388 000 сум</div>
                                <div className="cart__item-count">
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cart__sidebar">
                        <div className="cart__sidebar-item">
                            <span className="cart__sidebar-text">Товары:</span>
                            <span>2</span>
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
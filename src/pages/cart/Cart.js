import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {adjustQty, removeFromCart} from "../../store/reducers/CartReducer";
import {getProduct} from "../../store/reducers/ProductReducer";

function Cart() {
    const cart = useSelector(state => state.cart.cart);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() =>{
        let items = 0;
        let price = 0;

        cart.forEach(item => {
            items += item.qty;
            price += item.qty * item.price;
        })

        setTotalItems(items);
        setTotalPrice(price);

    }, [totalItems, totalPrice, setTotalItems, setTotalPrice, cart])

    // useEffect(() =>{
    //     if(JSON.parse(localStorage.getItem('cartArr'))){
    //         setCart(JSON.parse(localStorage.getItem('cartArr')).cart)
    //     }
    // },[]);

    return (
        <div className="cart">
            <div className="container">
                <div className="cart__title">
                    <h1>Savat</h1>
                </div>
                {
                    totalItems === 0 ?
                        <NoProduct/> : <div className="cart__row">
                        <div className="cart__items">
                            {
                                cart.map((item,index) =>{
                                    return(
                                        <CartItem product={item} key={index} quantity={item.qty}/>
                                    )
                                })
                            }
                        </div>

                        <div className="cart__sidebar">
                            <div className="cart__sidebar-item">
                                <span className="cart__sidebar-text">Товары:</span>
                                <span>{totalItems}</span>
                            </div>
                            <div className="cart__sidebar-item">
                                <span className="cart__sidebar-text">Стоимость:</span>
                                <span>{Intl.NumberFormat().format(totalPrice)} <strong>сум</strong></span>
                            </div>
                            <div className="cart__sidebar-item">
                                <span className="cart__sidebar-text">Всего к оплате:</span>
                                <span>{Intl.NumberFormat().format(totalPrice)} <strong>сум</strong></span>
                            </div>

                            <button className="cart__sidebar-btn">Оформить заказ</button>
                        </div>
                    </div>
                }

            </div>
        </div>
    );
}

export default Cart;

const CartItem = ({product, quantity}) =>{
    const [counter, setCounter] = useState(quantity ? quantity : 1);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(adjustQty(product.id, counter));
    }, [counter]);

    const increase = () =>{
        setCounter(counter + 1);
    };

    const decrease = () =>{
        if(counter <= 1){
            setCounter(1)
        } else{
            setCounter(counter - 1);
        }
    };

    return(
        <div className="cart__item">
            <div className="cart__item-img">
                <img src={product.images[0]} alt="product_img"/>
            </div>
            <div className="cart__item-content">
                <p className="cart__item-text">{product.name_uz}</p>
                <p className="cart__item-text">ID: {product.id}</p>
                <div className="cart__item-links">
                    <Link
                        to={`/products/${product.slug}`}
                        className="cart__item-link"
                        onClick={() => {dispatch(getProduct(product.slug))}}
                    >Перейти к товару</Link>
                    <button className="cart__item-link" onClick={() => dispatch(removeFromCart(product.id))}>Удалить</button>
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
};

const NoProduct = () =>{
    return(
        <div className="cart__empty">
            <div className="cart__empty-content">
                <h1 className="cart__empty-title">
                    Hech nima topilmadi
                </h1>
                <Link to='/' className='cart__empty-btn'>
                    Bosh sahifaga qaytish
                </Link>
            </div>
        </div>
    )
};
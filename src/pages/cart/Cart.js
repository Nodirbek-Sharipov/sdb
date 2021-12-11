import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {adjustQty, removeFromCart} from "../../store/reducers/CartReducer";
import {getProduct} from "../../store/reducers/ProductReducer";

function Cart() {
    const cart = useSelector(state => state.cart.cart);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
	const lang = useSelector(state => state.lang.lang);

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
                    <h1>{lang === 'uz' ? 'Savat' : 'Корзина'}</h1>
                </div>
                {
                    totalItems === 0 ?
                        <NoProduct/> : <div className="cart__row">
                        <div className="cart__items">
                            {cart.map((item,index) => (
								<CartItem product={item} key={index} quantity={item.qty}/>
							))}
                        </div>

                        <div className="cart__sidebar">
                            <div className="cart__sidebar-item">
                                <span className="cart__sidebar-text">{lang === 'uz' ? 'Mahsulotlar:' : 'Товары:'}</span>
                                <span>{totalItems}</span>
                            </div>
                            <div className="cart__sidebar-item">
                                <span className="cart__sidebar-text">{lang === 'uz' ? 'Qiymati:' : 'Стоимость:'}</span>
                                <span>{Intl.NumberFormat().format(totalPrice)} <strong>{lang === 'uz' ? 'so`m' : 'сум'}</strong></span>
                            </div>
                            <div className="cart__sidebar-item">
                                <span className="cart__sidebar-text">{lang === 'uz' ? 'Jami:' : 'Всего к оплате:'}</span>
                                <span>{Intl.NumberFormat().format(totalPrice)} <strong>{lang === 'uz' ? 'so`m' : 'сум'}</strong></span>
                            </div>

                            <button className="cart__sidebar-btn">{lang === 'uz' ? 'Buyurtma berish' : 'Оформить заказ'}</button>
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
    const cart = useSelector(state => state.cart.cart);
	const lang = useSelector(state => state.lang.lang);

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

    const removeHandler = () =>{
        localStorage.setItem('card', JSON.stringify(cart.filter(item => item.id !== product.id)));
        dispatch(removeFromCart(product.id));
    }

    useEffect(() =>{
        localStorage.setItem('card', JSON.stringify(cart.map(item => item.id === product.id ? {...item, qty: counter} : {...item, qty: counter})));
        dispatch(adjustQty(product.id, counter));
    }, [counter]);

    useEffect(() =>{
        dispatch(adjustQty(product.id, counter));
    }, [counter]);

    return(
        <div className="cart__item">
            <div className="cart__item-img">
                <img src={product.images[0]} alt="product_img"/>
            </div>
            <div className="cart__item-content">
                <p className="cart__item-text">{product[`name_${lang}`]}</p>
                <p className="cart__item-text">ID: {product.id}</p>
                <div className="cart__item-links">
                    <Link
                        to={`/products/${product.slug}`}
                        className="cart__item-link"
                        onClick={() => {dispatch(getProduct(product.slug))}}
                    >{lang === 'uz' ? 'Mahsulotga o`tish' : 'Перейти к товару'}</Link>
                    <button className="cart__item-link" onClick={removeHandler}>{lang === 'uz' ? 'O`chirish' : 'Удалить'}</button>

                </div>
            </div>
            <div className="cart__item-block">
                <div className="cart__item-text">{Intl.NumberFormat().format(product.price)} {lang === 'uz' ? 'so`m' : 'сум'}</div>
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
	const lang = useSelector(state => state.lang.lang);
    return(
        <div className="cart__empty">
            <div className="cart__empty-content">
                <h1 className="cart__empty-title">
                    {lang === 'uz' ? 'Hech nima topilmadi' : 'Ничего не найдено'}
                </h1>
                <Link to='/' className='cart__empty-btn'>
                    {lang === 'uz' ? 'Bosh sahifaga qaytish' : 'Вернуться домой'}
                </Link>
            </div>
        </div>
    )
};
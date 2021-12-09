import React, {useState} from 'react';
import profile_img from '../../assets/images/profile_img.png'
import profile__order_img from '../../assets/images/product__order-img.png';
import {useSelector} from "react-redux";

function User(props) {
    const [isOrders, setIsOrders] = useState(false);
    const state = useSelector(state => state);


    const changeIsOrders = (event) =>{
        if(event.target.name === 'order'){
            setIsOrders(true);
        } else{
            setIsOrders(false);
        }
    };

    return (
        <div className="profile">
            <div className="container">
                <div className="profile__row">
                    <div className="profile__col">
                        <div className="profile__head">
                            <div className="profile__img">
                                <img src={profile_img} alt="profile_img"/>
                            </div>
                            <div className="profile__info">
                                <h1 className="profile__info-name">Kamron Fozilov</h1>
                                <p className="profile__info-num">{state.user.user.phone}</p>
                            </div>
                        </div>

                        <div className="profile__nav">
                            <button
                                className={isOrders ? "profile__nav-btn" : "profile__nav-btn active"}
                                name="info"
                                onClick={(e) =>{changeIsOrders(e)}}
                            >
                                Shaxsiy ma`lumotlar
                            </button>
                            <button
                                className={isOrders ? "profile__nav-btn active" : "profile__nav-btn"}
                                name="order"
                                onClick={(e) =>{changeIsOrders(e)}}
                            >
                                Buyurtmalar
                            </button>
                        </div>
                    </div>

                    <div className="profile__col">
                        {
                            isOrders ? <ProfileOrders/> : <ProfileInfo/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;


const ProfileInfo = (props) =>{
    return(
        <div className="profile__form">
            <div className="profile__form-title">
                <h1>Shaxsiy ma’lumotlar</h1>
            </div>
            <form>
                <label className="form__group">
                    <p className="form__group-text">Ism</p>
                    <input type="text" placeholder="Kamron"/>
                </label>

                <label className="form__group">
                    <p className="form__group-text">Familiya</p>
                    <input type="text" placeholder="Fozilov"/>
                </label>

                <label className="form__group">
                    <p className="form__group-text">Telefon raqami</p>
                    <input type="text" placeholder="+998914342828"/>
                </label>

                <label className="form__group">
                    <p className="form__group-text">Email</p>
                    <input type="text" placeholder="kamrondev@gmail.com"/>
                </label>

                <label className="form__group">
                    <p className="form__group-text">Viloyat</p>
                    <input type="text" placeholder="Xorazm"/>
                </label>

                <label className="form__group">
                    <p className="form__group-text">Shahar/Tuman</p>
                    <input type="text" placeholder="Xiva"/>
                </label>

                <label className="form__group w-100">
                    <p className="form__group-text">Manzil</p>
                    <input type="text" placeholder="Yangi turmush mahallasi X.Devanov 34A"/>
                </label>

                <div className="form__btn-wrap">
                    <button className="form__btn">SAQLASH</button>
                </div>
            </form>
        </div>
    )
}

const ProfileOrders = (props) =>{
    return(
        <div className="profile__orders">
            <div className="profile__orders-row">
                <div className="profile__order">
                    <div className="profile__order-img">
                        <img src={profile__order_img} alt="profile__order-img"/>
                    </div>
                    <div className="profile__order-content">
                        <h3 className="profile__order-title">Смарт браслет Xiaomi Mi Band 5</h3>
                        <p className="profile__order-text">Buyurtma qilingan vaqti:  29-11-2021 18:33</p>
                        <p className="profile__order-text">Narx:  289 000 so’m</p>
                        <button className="profile__order-btn">Bekor qilingan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
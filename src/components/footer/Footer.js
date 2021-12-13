import React from 'react';
import {Link} from "react-router-dom";
import CallIcon from "../icons/CallIcon";
import MailIcon from "../icons/MailIcon";
import HomeIcon from "../icons/HomeIcon";
import TelegramIcon from "../icons/TelegramIcon";
import InstagramIcon from "../icons/InstagramIcon";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getPage } from '../../store/reducers/PageReducer';

function Footer(props) {
    const dispatch = useDispatch(); 
    const footerList = [
        {
            id: 1,
            slug: 'tolov-shartlari',
            title_uz:'To’lov shartlari',
            title_ru:'Условия оплаты',
        },
        {
            id: 2,
            slug: 'oferta',
            title_uz:'Yetkazib berish xizmati haqida',
            title_ru:'О службе доставки',
        },
        {
            id: 3,
            slug: 'biz-haqimizda',
            title_uz:'Biz haqimizda',
            title_ru:'О нас',
        },
        {
            id: 4,
            slug: 'aksiyalar',
            title_uz:'Aksiyalar va qaynoq chegirmalar',
            title_ru:'Акции и горячие скидки',
        },
    ]
	const lang = useSelector(state => state.lang.lang);
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__row">
                    <div className="footer__block">
                        <div className="footer__title">
                            <h3>{lang === 'uz' ? 'Ma’lumotlar' : 'Информация'}</h3>
                        </div>

                        <div className="footer__links">
                            {
                                footerList.map(item => {
                                    return(
                                        <Link
                                            key={item.id}
                                            to={`/page/${item.slug}`}
                                            className="footer__link"
                                            onClick={() => dispatch(getPage(item.slug))}
                                        >
                                            {lang === 'uz' ? item.title_uz : item.title_ru}
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="footer__block">
                        <div className="footer__title">
                            <h3>{lang === 'uz' ? 'Aloqa' : 'Контакты'}</h3>
                        </div>

                        <div className="footer__content">
                            <p className="footer__info">
                                <span className="footer__info-icon">
                                    <CallIcon/>
                                </span>
                                <span className="footer__info-text">+998 94 110 06 06</span>
                            </p>
                            <p className="footer__info">
                                <span className="footer__info-icon">
                                    <MailIcon/>
                                </span>
                                <span className="footer__info-text">info@sdb.uz</span></p>
                            <p className="footer__info">
                                <span className="footer__info-icon">
                                    <HomeIcon/>
                                </span>
                                <span className="footer__info-text">{lang === 'uz' ? 'Xorazm, Urganch Shahar, Buyum Bozori. Raysentr' : 'Хорезм, город Ургенч, Буюм базар. Райцентр'}</span>
                                </p>
                        </div>
                    </div>

                    <div className="footer__block">
                        <div className="footer__title">
                            <h3>{lang === 'uz' ? 'Ijtimoiy tarmoqlar' : 'Социальные сети'}</h3>
                        </div>

                        <div className="social__links">
                            <a href='https://t.me/samsung_dehkonbozor' target="_blank" className="social__link">
                               <span className="social__link-icon">
                                   <TelegramIcon/>
                               </span>

                                <span className="social__link-text">
                                   Telegram
                               </span>
                            </a>

                            <a href='https://www.instagram.com/samsung_dehkonbozor/' target="_blank" className="social__link">
                               <span className="social__link-icon">
                                   <InstagramIcon/>
                               </span>

                                <span className="social__link-text">
                                   Instagram
                               </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__bottom-row">
                        <p className="footer__bottom-text">
                            {lang === 'uz' ? 'Barcha huquqlar himoyalangan.' : 'Все права защищены'}
                        </p>
                        <p className="footer__bottom-text">
                            {lang === 'uz' ? 'Sayt yaratuvchisi:' : 'Создатель сайта:'} <a href='https://appx.uz' target="_blank" rel="noreferrer"> Appx Group</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
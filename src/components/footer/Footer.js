import React from 'react';
import {Link} from "react-router-dom";
import CallIcon from "../icons/CallIcon";
import MailIcon from "../icons/MailIcon";
import HomeIcon from "../icons/HomeIcon";
import TelegramIcon from "../icons/TelegramIcon";
import InstagramIcon from "../icons/InstagramIcon";
import { useSelector } from 'react-redux';

function Footer(props) {
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
                            <Link to='#' className="footer__link">{lang === 'uz' ? 'To’lov shartlari' : 'Условия оплаты'}</Link>
                            <Link to='#' className="footer__link">{lang === 'uz' ? 'Yetkazib berish xizmati haqida' : 'О службе доставки'}</Link>
                            <Link to='#' className="footer__link">{lang === 'uz' ? 'Biz haqimizda' : 'О нас'}</Link>
                            <Link to='#' className="footer__link">{lang === 'uz' ? 'Aksiyalar va qaynoq chegirmalar' : 'Акции и горячие скидки'}</Link>
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
                            <Link to='#' className="social__link">
                               <span className="social__link-icon">
                                   <TelegramIcon/>
                               </span>

                                    <span className="social__link-text">
                                   Telegram
                               </span>
                            </Link>

                            <Link to='#' className="social__link">
                               <span className="social__link-icon">
                                   <InstagramIcon/>
                               </span>

                                    <span className="social__link-text">
                                   Instagram
                               </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    {/*<p>Powered by <a href="https://crypton.uz/">CRYPTON</a></p>*/}
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
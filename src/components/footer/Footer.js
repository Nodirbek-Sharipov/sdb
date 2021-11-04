import React from 'react';
import {Link} from "react-router-dom";
import CallIcon from "../icons/CallIcon";
import MailIcon from "../icons/MailIcon";
import HomeIcon from "../icons/HomeIcon";
import TelegramIcon from "../icons/TelegramIcon";
import InstagramIcon from "../icons/InstagramIcon";

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__row">
                    <div className="footer__block">
                        <div className="footer__title">
                            <h3>Ma’lumotlar</h3>
                        </div>

                        <div className="footer__links">
                            <Link className="footer__link">To’lov shartlari</Link>
                            <Link className="footer__link">Yetkazib berish xizmati haqida</Link>
                            <Link className="footer__link">Biz haqimizda</Link>
                            <Link className="footer__link">Aksiyalar va qaynoq chegirmalar</Link>
                        </div>
                    </div>

                    <div className="footer__block">
                        <div className="footer__title">
                            <h3>Aloqa</h3>
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
                                <span className="footer__info-text">Xorazm, Urganch Shahar, Buyum Bozori. Raysentr</span>
                                </p>
                        </div>
                    </div>

                    <div className="footer__block">
                        <div className="footer__title">
                            <h3>Ijtimoiy tarmoqlar</h3>
                        </div>

                        <div className="social__links">
                            <Link className="social__link">
                               <span className="social__link-icon">
                                   <TelegramIcon/>
                               </span>

                                    <span className="social__link-text">
                                   Telegram
                               </span>
                            </Link>

                            <Link className="social__link">
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
                <div className="footer__bottom">
                    <p>Powered by <a href="https://crypton.uz/">CRYPTON</a></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
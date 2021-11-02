import React from 'react'
import logo from '../../assets/images/menu-logo.png'
import MenuIcon from "../icons/MenuIcon";
import SearchIcon from "../icons/SearchIcon";
import CartIcon from "../icons/CartIcon";
import UserIcon from "../icons/UserIcon";
function Navbar () {
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__row">
                    <div className="navbar__left">
                        <div className="navbar__logo">
                            <img src={logo} alt="logo-img"/>
                        </div>

                        <button className="navbar__catalog">
                            <span className="navbar__catalog-icon">
                                <MenuIcon/>
                            </span>
                            <span className="navbar__catalog-text">
                                Katalog
                            </span>
                        </button>
                    </div>

                    <div className="navbar__main">
                        <div className="navbar__input">
                            <input type="text" placeholder="Qidirish...."/>
                        </div>

                        <button className="navbar__search-btn">
                            <SearchIcon/>
                        </button>
                    </div>

                    <div className="navbar__right">
                        <button className="navbar__button navbar__button-lang">
                            <span className="navbar__button-text">UZ</span>
                        </button>

                        <button className="navbar__button navbar__button-lang">
                            <span className="navbar__button-icon">
                                <CartIcon width="26px" height="26px"/>
                            </span>
                        </button>

                        <button className="navbar__button navbar__button-lang">
                            <span className="navbar__button-icon">
                                <UserIcon width="26px" height="26px"/>
                            </span>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

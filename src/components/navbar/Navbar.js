import React, {useEffect, useState} from 'react'
import logo from '../../assets/images/menu-logo.png'
import MenuIcon from "../icons/MenuIcon";
import SearchIcon from "../icons/SearchIcon";
import CartIcon from "../icons/CartIcon";
import UserIcon from "../icons/UserIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import {Link} from "react-router-dom";
import CloseIcon from "../icons/CloseIcon";
import { changeNavbarActiveAC, getCategories} from "../../store/reducers/NavbarReducer";
import {filterCategoryNameAC} from "../../store/reducers/FilterReducer";
import HomeIcon from "../icons/HomeIcon";
import {useDispatch, useSelector} from "react-redux";

function Navbar (props) {

    const [activeLinkId, setActiveLinkId] = useState(null);
    const state = useSelector(state => state.navbarLinks);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getCategories())
    },[])

    const changeActiveLinkId = (id) =>{
        setActiveLinkId(id);
    }

    console.log(state)

    return (
        <div className="navbar">
            <div className="navbar__top">
                <div className="container">
                    <div className="navbar__row">
                        <div className="navbar__left">
                            <Link to="/" className="navbar__logo">
                                <img src={logo} alt="logo-img"/>
                            </Link>

                            <button className="navbar__catalog" onClick={() => {dispatch(changeNavbarActiveAC())}}>
                                <span className="navbar__catalog-icon">
                                    {
                                        state.navbarActive ? <CloseIcon fill={'#fff'}/> : <MenuIcon fill={'#fff'}/>
                                    }
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

                            <button className="navbar__button navbar__button-cart">
                            <span className="navbar__button-icon">
                                <CartIcon width="26px" height="26px" fill={"#050448"}/>
                            </span>
                            </button>

                            <button className="navbar__button navbar__button-prof">
                            <span className="navbar__button-icon">
                                <UserIcon width="26px" height="26px" fill={"#050448"}/>
                            </span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            <div className={state.navbarActive ? "navbarModal active" : "navbarModal"}>
                <div className="container">
                    <div className="navbarModal__row">
                        <div className="navbarModal__sidebar">
                            <ul className='navbarModal__nav'>
                                {
                                    state.navbarLinks.map(el => {
                                        return(
                                            <li
                                                className="navbarModal__nav-item "
                                                key={el.id}
                                                onClick={() =>{changeActiveLinkId(el.id)} }
                                            >
                                                <div
                                                    className={el.isActive ? "navbarModal__nav-link active" : "navbarModal__nav-link"}
                                                >
                                                    <span className="navbarModal__nav-link_icon">
                                                        <img src={el.image} alt=""/>
                                                    </span>
                                                    <span className="navbarModal__nav-link_text">
                                                        {el.name_uz}
                                                    </span>
                                                    <span className="navbarModal__nav-link_icon">
                                                        <ArrowRightIcon/>
                                                    </span>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div className="navbarModal__main">
                            {
                                state.navbarLinks.map(link =>{
                                    if(link.id === activeLinkId){
                                        return(
                                            <div key={link.id}>
                                                <div className="navbarModal__main-title">
                                                    <h1>{link.name_uz}</h1>
                                                </div>

                                                <ul className="navbarModal__main-list">
                                                    {
                                                        link.children.map(item => {
                                                            return (
                                                                <li
                                                                    className="navbarModal__main-list__item"
                                                                    key={item.id}
                                                                    onClick={() => dispatch(filterCategoryNameAC(link.title, item.link_title))}
                                                                >
                                                                    <Link
                                                                        to={item.link_path}
                                                                        className="navbarModal__main-list__link">
                                                                        {item.name_uz}
                                                                    </Link>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar__mobile">
                <div className="container">
                    <ul className="navbar__mobile-list">
                        <li className="navbar__mobile-item">
                            <Link to='/' className="navbar__mobile-link">
                                <span className="navbar__mobile-icon">
                                    <HomeIcon  stroke="#767676" fill={'#767676'} width={26} height={26}/>
                                </span>

                                <span className="navbar__mobile-text">
                                    Bosh sahifa
                                </span>
                            </Link>
                        </li>

                        <li className="navbar__mobile-item">
                            <Link to='/'>
                                <span className="navbar__mobile-icon">
                                    <MenuIcon fill={'#767676'} width={26} height={26}/>
                                </span>

                                <span className="navbar__mobile-text">
                                    Kategoriyalar
                                </span>
                            </Link>
                        </li>

                        <li className="navbar__mobile-item">
                            <Link to='/'>
                                <span className="navbar__mobile-icon">
                                    <CartIcon  fill={'#767676'} width={26} height={26}/>
                                </span>

                                <span className="navbar__mobile-text">
                                    Savatcha
                                </span>
                            </Link>
                        </li>

                        <li className="navbar__mobile-item">
                            <Link to='/'>
                                <span className="navbar__mobile-icon">
                                    <UserIcon  fill={'#767676'} width={26} height={26}/>
                                </span>

                                <span className="navbar__mobile-text">
                                    Profil
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

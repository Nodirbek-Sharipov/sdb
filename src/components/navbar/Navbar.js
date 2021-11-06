import React from 'react'
import logo from '../../assets/images/menu-logo.png'
import MenuIcon from "../icons/MenuIcon";
import SearchIcon from "../icons/SearchIcon";
import CartIcon from "../icons/CartIcon";
import UserIcon from "../icons/UserIcon";
import PhoneIcon from "../icons/PhoneIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import ComputerIcon from "../icons/ComputerIcon";
import WashingMachineIcon from "../icons/WashingMachineIcon";
import CarIcon from "../icons/CarIcon";
import {Link} from "react-router-dom";
import CloseIcon from "../icons/CloseIcon";
import StoreContext from "../../store/contextStore";
import {changeLinkIsActiveActionCreator, changeNavbarActiveActionCreator} from "../../store/reducers/NavbarReducer";
import {filterCategoryNameActionCreator} from "../../store/reducers/FilterReducer";

function NavbarContainer(){
    return(
        <StoreContext.Consumer>
            {
                (store) =>{
                    let state = store.getState();
                    let changeNavbarActive = () =>{
                        store.dispatch(changeNavbarActiveActionCreator())
                    }

                    let changeLinkIsActive = (id, bool) =>{
                        store.dispatch(changeLinkIsActiveActionCreator(id, bool))
                    }
                    let filterCategoryName = (name) =>{
                        store.dispatch(filterCategoryNameActionCreator(name))
                    }
                    return(
                        <Navbar
                            navbarActive={state.navbarLinks.navbarActive}
                            navbarLinks={state.navbarLinks.navbarLinks}
                            changeNavbarActive={changeNavbarActive}
                            changeLinkIsActive={changeLinkIsActive}
                            filterCategoryName={filterCategoryName}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

function Navbar (props) {

    return (
        <div className="navbar">
            <div className="navbar__top">
                <div className="container">
                    <div className="navbar__row">
                        <div className="navbar__left">
                            <Link to="/" className="navbar__logo">
                                <img src={logo} alt="logo-img"/>
                            </Link>

                            <button className="navbar__catalog" onClick={() => {props.changeNavbarActive()}}>
                                <span className="navbar__catalog-icon">
                                    {
                                        props.navbarActive ? <CloseIcon fill={'#fff'}/> : <MenuIcon/>
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
                                <CartIcon width="26px" height="26px"/>
                            </span>
                            </button>

                            <button className="navbar__button navbar__button-prof">
                            <span className="navbar__button-icon">
                                <UserIcon width="26px" height="26px"/>
                            </span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            <div className={props.navbarActive ? "navbarModal active" : "navbarModal"}>
                <div className="container">
                    <div className="navbarModal__row">
                        <div className="navbarModal__sidebar">
                            <ul className='navbarModal__nav'>
                                {
                                    props.navbarLinks.map(el => {
                                        return(
                                            <li
                                                className="navbarModal__nav-item "
                                                key={el.id}
                                                onMouseOver={() =>{props.changeLinkIsActive(el.id, true)}}
                                                onClick={() => {props.filterCategoryName(el.title)}}
                                            >
                                                <Link
                                                    to={el.path}
                                                    className={el.isActive ? "navbarModal__nav-link active" : "navbarModal__nav-link"}
                                                    onClick={() => {props.changeNavbarActive()}}
                                                >
                                                    <span className="navbarModal__nav-link_icon">
                                                        {el.icon}
                                                    </span>
                                                    <span className="navbarModal__nav-link_text">
                                                        {el.title}
                                                    </span>
                                                    <span className="navbarModal__nav-link_icon">
                                                        <ArrowRightIcon/>
                                                    </span>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div className="navbarModal__main">
                            {
                                props.navbarLinks.map(link =>{
                                    if(link.isActive){
                                        return(
                                            <div key={link.id}>
                                                <div className="navbarModal__main-title">
                                                    <h1>{link.title}</h1>
                                                </div>

                                                <ul className="navbarModal__main-list">
                                                    {
                                                        link.links.map(item => {
                                                            return (
                                                                <li className="navbarModal__main-list__item" key={item.id}>
                                                                    <Link to={item.link_path} className="navbarModal__main-list__link">
                                                                        {item.link_title}
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
        </div>
    )
}

export default NavbarContainer;

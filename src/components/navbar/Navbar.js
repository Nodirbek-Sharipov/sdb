import React, {useEffect, useState} from 'react'
import logo from '../../assets/images/menu-logo.png'
import MenuIcon from "../icons/MenuIcon";
import SearchIcon from "../icons/SearchIcon";
import CartIcon from "../icons/CartIcon";
import UserIcon from "../icons/UserIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import {Link, useHistory } from "react-router-dom";
import CloseIcon from "../icons/CloseIcon";
import { changeNavbarActiveAC, getCategories} from "../../store/reducers/NavbarReducer";
import HomeIcon from "../icons/HomeIcon";
import {useDispatch, useSelector} from "react-redux";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";
import {getCategoryProducts} from "../../store/reducers/FilterReducer";
import {getUser} from "../../store/reducers/UserReducer";
import {setIsActiveModal} from "../../store/reducers/MainPageReducer";

function Navbar() {
    const [activeLinkId, setActiveLinkId] = useState(1);
    const [serchedProducts, setSerchedProducts] = useState([]);
    const [cartLength, setCartLength] = useState(0);
    const [search, setSearch] = useState('');
    const [searchTab, setSearchTab] = useState(false);
    const state = useSelector(state => state.navbarLinks);
    const cart = useSelector(state => state.cart.cart);
    const products =useSelector(state => state.mainPageReducer.products);
    const dispatch = useDispatch();
    const history = useHistory();

    const changeActiveLinkId = (id) =>{
        setActiveLinkId(id);
    };

    const linkHandler = (slug) =>{
        dispatch(getCategoryProducts(slug));
        dispatch(changeNavbarActiveAC());
    };

    const filterSearchedProducts = () =>{
    const productss = products.filter(item => {if(search !== ''){return item.name_uz.toLowerCase().includes(search.toLowerCase())} else{return null}});
      setSerchedProducts(productss);
    };

    const profileHandler = () =>{
        const refreshtoken = localStorage.getItem('refreshToken');
        console.log(refreshtoken)
        if(refreshtoken){
            dispatch(getUser());
            history.push('/profile');
            console.log(true)
        } else{
            dispatch(setIsActiveModal(true));
        }
    }

    useEffect(() =>{
        dispatch(getCategories());
    },[]);

    useEffect(() =>{
        let count = 0;
        cart.forEach(item =>{ count += item.qty});
        setCartLength(count);
    }, [cart, cartLength]);

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
                                <input
                                    type="text"
                                    placeholder="Qidirish...."
                                    value={search}
                                    onChange={(e) => {setSearch(e.target.value); setSearchTab(true); filterSearchedProducts()}}
                                    onBlur={() => setSearchTab(false)}
                                />
                            </div>

                            <button className="navbar__search-btn">
                                <SearchIcon/>
                            </button>

                            <div className={searchTab ? "search__products active" : "search__products"}>
                                {
                                    serchedProducts !== null ?  <ul className="search__products-list">
                                        {
                                            serchedProducts.map(item => {
                                                return(
                                                    <li key={item.id}>
                                                        <Link to={`/products/${item.slug}`}  className="search__products-item">
                                                            <div className="search__products-img">
                                                                <img src={item.images[0]} alt="search__products-img"/>
                                                            </div>
                                                            <div className="search__products-name">
                                                                <p>{item.name_uz}</p>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul> : <div>Mahsulot topilmadi</div>
                                }
                            </div>
                        </div>

                        <div className="navbar__right">
                            <button className="navbar__button navbar__button-lang">
                                <span className="navbar__button-text">UZ</span>
                            </button>

                            <Link to="/cart" className="navbar__button navbar__button-cart">
                                <span className="navbar__button-icon">
                                    <CartIcon width="26px" height="26px" fill={"#050448"}/>
                                </span>
                                <span className="navbar__button-cart-length">{cartLength ? cartLength : 0}</span>
                            </Link>

                            <button
                                className="navbar__button navbar__button-prof"
                                onClick={profileHandler}
                            >
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
                                                                >
                                                                    <Link
                                                                        to={`/category/${item.slug}?page=3`}
                                                                        onClick={() => linkHandler(item.slug)}
                                                                        className="navbarModal__main-list__link">
                                                                        {item.name_uz}
                                                                    </Link>
                                                                    <ul className="navbarModal__main-list">
                                                                        {
                                                                            item.children.map(el => {
                                                                                return (
                                                                                    <li
                                                                                        className="navbarModal__main-list__item"
                                                                                        key={el.id}
                                                                                    >
                                                                                        <Link
                                                                                            to={`/category/${el.slug}`}
                                                                                            onClick={() => linkHandler(item.slug)}
                                                                                            className="navbarModal__main-list__link">
                                                                                            {el.name_uz}
                                                                                        </Link>
                                                                                    </li>
                                                                                )
                                                                            })
                                                                        }
                                                                    </ul>
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

                    <div className="navbarModal__mobile">
                        <Accordion allowZeroExpanded onChange={() => console.log('Hello world')}>
                            {state.navbarLinks.map((item) => (
                                <AccordionItem key={item.id}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span className="accordion__button_text">
                                                {item.name_uz}
                                            </span>
                                            <span className="accordion__button_icon">
                                                <ArrowRightIcon/>
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <ul className="panel__list">
                                            {
                                                item.children.map(link =>{
                                                    return(
                                                        <li className="panel__list-item" key={link.id}>
                                                            <Link
                                                                to={`/category/${link.slug}`}
                                                                onClick={() => linkHandler(link.slug)}
                                                                className="navbarModal__main-list__link">
                                                                {link.name_uz}
                                                            </Link>
                                                            <ul className="panel__list-item-list">
                                                                {
                                                                    link.children.map(el =>{
                                                                        return(
                                                                            <li className="panel__list-item-link" key={el.id}>
                                                                                <Link
                                                                                    to={`/category/${el.slug}`}
                                                                                    onClick={() => linkHandler(el.slug)}
                                                                                    className="navbarModal__main-list__link">
                                                                                    {el.name_uz}
                                                                                </Link>
                                                                            </li>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            ))}
                        </Accordion>
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

                        <li className="navbar__mobile-item"  onClick={() => {dispatch(changeNavbarActiveAC())}}>
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
                            <Link to='/cart'>
                                <span className="navbar__mobile-icon navbar__mobile-cart-icon">
                                    <CartIcon  fill={'#767676'} width={26} height={26}/>
                                    <span className="navbar__mobile-cart-length">{cartLength ? cartLength : 0}</span>
                                </span>

                                <span className="navbar__mobile-text">
                                    Savatcha
                                </span>
                            </Link>
                        </li>

                        <li className="navbar__mobile-item">
                            <button onClick={profileHandler}>
                                <span className="navbar__mobile-icon">
                                    <UserIcon  fill={'#767676'} width={26} height={26}/>
                                </span>

                                <span className="navbar__mobile-text">
                                    Profil
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

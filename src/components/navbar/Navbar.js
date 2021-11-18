import React from 'react'
import logo from '../../assets/images/menu-logo.png'
import MenuIcon from "../icons/MenuIcon";
import SearchIcon from "../icons/SearchIcon";
import CartIcon from "../icons/CartIcon";
import UserIcon from "../icons/UserIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import {Link} from "react-router-dom";
import CloseIcon from "../icons/CloseIcon";
import StoreContext from "../../store/contextStore";
import {
    changeLinkIsActiveAC,
    changeNavbarActiveAC,

} from "../../store/reducers/NavbarReducer";
import {filterCategoryNameAC} from "../../store/reducers/FilterReducer";
import HomeIcon from "../icons/HomeIcon";
import {connect, useDispatch, useSelector} from "react-redux";
//
// function NavbarContainer(){
//     // return(
//     //     <StoreContext.Consumer>
//     //         {
//     //             (store) =>{
//     //                 let state = store.getState();
//     //                 let changeNavbarActive = () =>{
//     //                     store.dispatch(changeNavbarActiveActionCreator())
//     //                 }
//     //
//     //                 let changeLinkIsActive = (id, bool) =>{
//     //                     store.dispatch(changeLinkIsActiveActionCreator(id, bool))
//     //                 }
//     //                 let filterCategoryName = (category_name, brand_name = 'all') =>{
//     //                     store.dispatch(filterCategoryNameActionCreator(category_name, brand_name))
//     //                 }
//     //                 return(
//     //                     <Navbar
//     //                         navbarActive={state.navbarLinks.navbarActive}
//     //                         navbarLinks={state.navbarLinks.navbarLinks}
//     //                         changeNavbarActive={changeNavbarActive}
//     //                         changeLinkIsActive={changeLinkIsActive}
//     //                         filterCategoryName={filterCategoryName}
//     //                     />
//     //                 )
//     //             }
//     //         }
//     //     </StoreContext.Consumer>
//     // )
//
//     const state = (state) =>{
//         console.log(state)
//         return {
//             navbarActive: state.navbarLinks.navbarActive,
//             navbarLinks: state.navbarLinks.navbarLinks
//         }
//     }
//
//     const dispatch = (dispatch) =>{
//         return {
//             changeNavbarActive: () =>{
//                 dispatch(changeNavbarActiveActionCreator())
//             },
//             changeLinkIsActive: (id, bool) =>{
//                 dispatch(changeLinkIsActiveActionCreator(id, bool))
//             },
//             filterCategoryName: (category_name, brand_name = 'all') =>{
//                 dispatch(filterCategoryNameActionCreator(category_name, brand_name))
//             },
//
//         }
//     }
//
//    return connect(state,dispatch)(Navbar)
// }


function Navbar (props) {

    const state = useSelector(state => state.navbarLinks);
    const dispatch = useDispatch();

    // let data = state.navbarLinks;

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
                                                onMouseOver={() =>{dispatch(changeLinkIsActiveAC(el.id, true))}}
                                                onClick={() => {dispatch(filterCategoryNameAC(el.title, 'all'))}}
                                            >
                                                <Link
                                                    to={el.path}
                                                    className={el.isActive ? "navbarModal__nav-link active" : "navbarModal__nav-link"}
                                                    onClick={() => {dispatch(changeNavbarActiveAC())}}
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
                                state.navbarLinks.map(link =>{
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
                                                                <li
                                                                    className="navbarModal__main-list__item"
                                                                    key={item.id}
                                                                    onClick={() => dispatch(filterCategoryNameAC(link.title, item.link_title))}
                                                                >
                                                                    <Link
                                                                        to={item.link_path}
                                                                        className="navbarModal__main-list__link">
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

import React, {useEffect} from "react";
import './assets/style/style.scss'
import AppRouter from "./components/appRouter/AppRouter";
import Footer from "./components/footer/Footer";
import {useDispatch, useStore} from "react-redux";
import Navbar from "./components/navbar/Navbar";
import LoginModal from "./components/login/LoginModal";
import { setLang } from "./store/reducers/LangReducer";
import ArrowRightIcon from "./components/icons/ArrowRightIcon";
import {setIsActiveModal} from "./store/reducers/MainPageReducer";
import {changeNavbarActiveAC} from "./store/reducers/NavbarReducer";

function App() {
    const store  = useStore();
    let state = store.getState();
    let navbarActive = state.navbarLinks.navbarActive;
	const dispatch = useDispatch();
	const [ready, setReady] = React.useState(!false);
	const [scrolling, setScrolling] = React.useState(false);
	const [scrollTop, setScrollTop] = React.useState(0);

	React.useEffect(() => {

		if(!ready){
			const lang_local = localStorage.getItem('lang');

			if (lang_local === null || !(lang_local === 'uz' || lang_local === 'ru')) {
				localStorage.setItem('lang', state.lang.lang)
			} else {
				dispatch(setLang(lang_local))
			}
			setReady(true)
			console.log('lang', lang_local, state.lang.lang)
		}

	}, [state.lang.lang, ready, dispatch]);

	useEffect(() =>{
		const handleWindowClick =(e) => {
			if(e.target.classList.value === 'wrapper modal_active'){
				dispatch(changeNavbarActiveAC(false));
			}
		};
		window.addEventListener('click', (e) => handleWindowClick(e));
		return () => window.removeEventListener('click',  handleWindowClick);
	}, [dispatch]);

	useEffect(() => {
		function onScroll() {
			let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
			if (currentPosition > scrollTop) {
				setScrolling(true);
			} else {
				setScrolling(false);
			}
			setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
		}

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, [scrollTop]);

  return ready && (
    <div className={navbarActive ? 'wrapper modal_active' : 'wrapper'}>
        <Navbar/>
        <AppRouter/>
        <Footer/>
        {
            state.mainPageReducer.isActiveModal ? <LoginModal/> : null
        }
        <div>
			<a href="#" className={scrolling ? "scrollTop active" : "scrollTop"}>
				<ArrowRightIcon fill={'#fff'}/>
			</a>
		</div>
    </div>
  );
}

export default App;
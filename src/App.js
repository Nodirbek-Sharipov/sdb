import React from "react";
import './assets/style/style.scss'
import AppRouter from "./components/appRouter/AppRouter";
import Footer from "./components/footer/Footer";
import {useDispatch, useStore} from "react-redux";
import Navbar from "./components/navbar/Navbar";
import LoginModal from "./components/login/LoginModal";
import { setLang } from "./store/reducers/LangReducer";

function App() {
    const store  = useStore();
    let state = store.getState();
    let navbarActive = state.navbarLinks.navbarActive;
	const dispatch = useDispatch();
	const [ready, setReady] = React.useState(!false)

	React.useEffect(() => {

		if(!ready){
			const lang_local = localStorage.getItem('lang')

			if (lang_local === null || !(lang_local === 'uz' || lang_local === 'ru')) {
				localStorage.setItem('lang', state.lang.lang)
			} else {
				dispatch(setLang(lang_local))
			}
			setReady(true)
			console.log('lang', lang_local, state.lang.lang)
		}

	}, [state.lang.lang, ready, dispatch])



  return ready && (
    <div className={navbarActive ? 'wrapper modal_active' : 'wrapper'}>
        <Navbar/>
        <AppRouter/>
        <Footer/>
        {
            state.mainPageReducer.isActiveModal ? <LoginModal/> : null
        }
    </div>
  );
}

export default App;
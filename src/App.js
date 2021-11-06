import react, {useContext} from "react";
import NavbarContainer from "./components/navbar/Navbar";
import './assets/style/style.scss'
import AppRouter from "./components/appRouter/AppRouter";
import Footer from "./components/footer/Footer";
import StoreContext from "./store/contextStore";
function App() {
    const  store  = useContext(StoreContext);
    let state = store.getState()
    let navbarActive = state.navbarLinks.navbarActive;
  return (
    <div className={navbarActive ? 'wrapper modal_active' : 'wrapper'}>
        <NavbarContainer/>
        <AppRouter/>
        <Footer/>
    </div>
  );
}

export default App;

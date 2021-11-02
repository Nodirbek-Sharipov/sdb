import react from "react";
import Navbar from "./components/navbar/Navbar";
import './assets/style/style.scss'
import Banner from "./components/banner/Banner";
import Products from "./components/products/Products";
function App() {
  return (
    <div className="wrapper">
        <Navbar/>
        <Banner/>
        <Products/>
    </div>
  );
}

export default App;

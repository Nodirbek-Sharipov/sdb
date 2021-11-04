import React from 'react';
import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";

function MainPage(props) {
    return (
        <div className="mainPage">
            <Banner/>
            <Products/>
        </div>
    );
}

export default MainPage;
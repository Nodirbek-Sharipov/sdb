import React from 'react';
import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";
import Brands from "../../components/brends/Brands";
import Service from "../../components/service/Service";
import Footer from "../../components/footer/Footer";
import StoreContext from "../../store/contextStore";

function MainPage(props) {
    return (
        <div className="mainPage">
            <Banner/>
            <StoreContext.Consumer>
                {
                    (store) =>{
                        let state = store.getState();

                        return (
                            <Products products_title={'Sizbop tovarlar 🔥'} state={state.mainPageReducer}/>
                        )
                    }
                }
            </StoreContext.Consumer>
            {/*<Products products_title={'Maxsus chegirmalar 😍'} prodcuts_num={4}/>*/}
            <Brands brands_num={8}/>
            <Service/>
            <Footer/>
        </div>
    );
}

export default MainPage;
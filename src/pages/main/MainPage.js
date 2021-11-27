import React, {useEffect} from 'react';
import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";
import Brands from "../../components/brends/Brands";
import Service from "../../components/service/Service";
import {useDispatch, useSelector} from "react-redux";


import {getProducts} from "../../store/reducers/MainPageReducer";
import SwiperProducts from "../../components/products/SwiperProducts";
import {getBrands} from "../../store/reducers/BrandsReducer";


function MainPage() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getProducts());
        dispatch(getBrands())
    },[])

    console.log(state)

    return (
        <div className="mainPage">
            <Banner/>
            {/*<Products state={state.mainPageReducer}/>*/}
            <SwiperProducts title="Ommabop mahsulotlar" products={state.mainPageReducer.products}/>
            <SwiperProducts title="Yangi mahsulotlar" products={state.mainPageReducer.products}/>
            <SwiperProducts title="Telefonlar" products={state.mainPageReducer.products}/>

            <Brands brands_num={8}/>

            <Service/>
        </div>
    );
}

export default MainPage;
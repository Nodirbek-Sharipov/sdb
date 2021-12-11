import React, {useEffect} from 'react';
import Banner from "../../components/banner/Banner";
import Brands from "../../components/brends/Brands";
import Service from "../../components/service/Service";
import {useDispatch, useSelector} from "react-redux";
import {getProducts, getRecommendedProducts} from "../../store/reducers/MainPageReducer";
import SwiperProducts from "../../components/products/SwiperProducts";
import {getBrands} from "../../store/reducers/BrandsReducer";
import FullPageLoader from "../../components/loading/Loading";

function MainPage() {
    const state = useSelector(state => state);
	const lang = useSelector(state => state.lang.lang);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getProducts());
        dispatch(getBrands());
        dispatch(getRecommendedProducts());
    },[dispatch]);

    return (
        <div className="mainPage">
            <Banner/>
            <SwiperProducts title={lang === 'uz' ? "Ommabop mahsulotlar" : "Популярные продукты"} products={state.mainPageReducer.recommended_products}/>
            <SwiperProducts title={lang === 'uz' ? "Yangi mahsulotlar" : "Новые продукты"} products={state.mainPageReducer.products}/>
            {/*<SwiperProducts title="Telefonlar" products={state.mainPageReducer.products.filter(item => item.category.name_uz === 'Smartfonlar')}/>*/}
            <Brands brands={state.brands.brands}/>
            <Service/>
            {
                state.mainPageReducer.loading && <FullPageLoader/>
            }
        </div>
    );
}

export default MainPage;
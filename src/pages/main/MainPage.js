import React, {useEffect} from 'react'
import Banner from "../../components/banner/Banner"
import Brands from "../../components/brends/Brands"
import Service from "../../components/service/Service"
import {useDispatch, useSelector} from "react-redux"
import {
	getBanner, getDiscountedProducts,
	getNewProducts,
	getPopularProducts,
	getProducts,
	getRecommendedProducts
} from "../../store/reducers/MainPageReducer"
import SwiperProducts from "../../components/products/SwiperProducts"
import {getBrands} from "../../store/reducers/BrandsReducer"
import FullPageLoader from "../../components/loading/Loading"

function MainPage() {
	const state = useSelector(state => state)
	const lang = useSelector(state => state.lang.lang)
	const dispatch = useDispatch()

	const swiperList =[
		{
			id: 1,
			title_uz: "Ommabop mahsulotlar",
			title_ru: "Популярные продукты",
			products: state.mainPageReducer.popular_products,
			type: 'popular',
		},
		{
			id: 2,
			title_uz: "Yangi mahsulotlar",
			title_ru: "Новые продукты",
			products: state.mainPageReducer.new_products,
			type: 'new',
		},
		{
			id: 3,
			title_uz: "Tavsiya etilgan mahsulotlar",
			title_ru: "Рекомендуемые продукты",
			products: state.mainPageReducer.recommended_products,
			type: 'recommended',
		},
		{
			id: 4,
			title_uz: "Chegirmali mahsulotlar",
			title_ru: "Товары со скидкой",
			products: state.mainPageReducer.discounted_products,
			type: 'discounted',
		},

	]

	useEffect(() =>{
		// dispatch(getProducts());
		dispatch(getRecommendedProducts())
		dispatch(getPopularProducts())
		dispatch(getNewProducts())
		dispatch(getDiscountedProducts())
		dispatch(getBrands())
		dispatch(getBanner())
	},[dispatch])

	return (
		<div className="mainPage">
			<Banner state={state.mainPageReducer.banner}/>
			{swiperList.filter(el => el.products.length !== 0).map(item => (
				<SwiperProducts
					key={item.id}
					title={lang === 'uz' ? item.title_uz : item.title_ru}
					products={item.products}
					type={item.type}
				/>
			))}

			<Brands brands={state.brands.brands}/>
			<Service/>
			{ state.mainPageReducer.loading && <FullPageLoader/>}
		</div>
	)
}

export default MainPage
import React, {useRef} from 'react'
import Product from "./Product"
import 'swiper/swiper.scss'
import 'swiper/modules/navigation/navigation.scss'
import 'swiper/modules/pagination/pagination.scss'
import { Navigation, Pagination} from 'swiper'
import ArrowLeftIcon from "../icons/ArrowLeftIcon"
import {Swiper, SwiperSlide} from "swiper/react/swiper-react"
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux"
import {getAllProducts} from "../../store/reducers/AllProductsReducer"

function SwiperProducts({title,products, type}) {
	const dispatch = useDispatch()
	const navigationPrevRef = useRef(null)
	const navigationNextRef = useRef(null)

	return (
		<div className="products swiper__products">
			<div className="container">
				<div className="products__title">
					<Link to={`/products/${type}`} onClick={() => dispatch(getAllProducts(type))}>
						<h1>{title}</h1>
					</Link>
					<div className="swiper__arrows">
						<div className="swiper__arrows-prev" ref={navigationPrevRef}>
							<ArrowLeftIcon/>
						</div>
						<div className="swiper__arrows-next" ref={navigationNextRef}>
							<ArrowLeftIcon/>
						</div>
					</div>
				</div>

				<div className="products__row">
					<Swiper
						style={{ width: '100%' }}
						modules={[Navigation, Pagination]}
						spaceBetween={20}
						navigation={{
							prevEl: navigationPrevRef.current,
							nextEl: navigationNextRef.current,
						}}

						slidesPerView={products.length < 5 ? products.length : 5}
						breakpoints={{
							1360: {
								slidesPerView: 5,
							},
							768: {
								slidesPerView: 3,
							},
							0: {
								slidesPerView: 1,
							},
						}}
					>
						{
							products.map(el => (
								<SwiperSlide key={el.id} >
									<Product {...el}/>
								</SwiperSlide>
							))
						}
					</Swiper>
				</div>
			</div>
		</div>
	)
}

export default SwiperProducts
import React, {useRef} from 'react'
import {Link} from "react-router-dom"
import {Swiper, SwiperSlide} from "swiper/react/swiper-react"
import {Navigation, Pagination, Autoplay } from "swiper"
import {useDispatch, useSelector} from 'react-redux'
import {getAllProducts} from "../../store/reducers/AllProductsReducer"

function Brands({brands}) {
	const navigationPrevRef = useRef(null)
	const navigationNextRef = useRef(null)
	const lang = useSelector(state => state.lang.lang)
	const dispatch =useDispatch()

	return (
		<div className="brands">
			<div className="container">
				<div className="brands__row">
					<Swiper
						modules={[Navigation, Pagination, Autoplay ]}
						spaceBetween={20}
						navigation={{
							prevEl: navigationPrevRef.current,
							nextEl: navigationNextRef.current,
						}}

						slidesPerView={window.innerWidth > 568 ? 5 : 'auto'}
						breakpoints={{
							768: {
								slidesPerView: 5,
							},

							568:{
								slidesPerView: 1,
							}
						}}
					>
						{
							brands.map(el =>{
								return(
									<SwiperSlide key={el.id} >
										<Link
											to={`/products/default`}
											className="brand"
											key={el.id}
											onClick={() => dispatch(getAllProducts('default',1, el.id))}
										>
											<div className="brand__img">
												<img src={el.image} alt="brand_img"/>
											</div>

											{/*<div className="brand__title">*/}
											{/*    <h3>{el[`name_${lang}`]}</h3>*/}
											{/*</div>*/}
										</Link>
									</SwiperSlide>

								)
							})
						}
					</Swiper>

				</div>
			</div>
		</div>
	)
}



export default Brands
import React, {useRef} from 'react';
import Product from "./Product";
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';
import { Navigation, Pagination} from 'swiper';
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import {Swiper, SwiperSlide} from "swiper/react/swiper-react";

function SwiperProducts({title,products}) {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    return (
            <div className="products swiper__products">
                <div className="container">
                    <div className="products__title">
                        <h1>{title}</h1>
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
                            modules={[Navigation, Pagination]}
                            spaceBetween={20}
                            navigation={{
                                prevEl: navigationPrevRef.current,
                                nextEl: navigationNextRef.current,
                            }}

                            // slidesPerView={products.length > 5 ? 5 : products.length}
                            slidesPerView={'auto'}
                            breakpoints={{
                                768: {
                                    width: 768,
                                    slidesPerView: 2,
                                },

                                568:{
                                    width: 568,
                                    slidesPerView: 1,
                                }
                            }}
                        >
                            {
                                products.map(el =>{
                                    return(
                                        <SwiperSlide key={el.id} >
                                            <Product {...el}/>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
    );
}

export default SwiperProducts;
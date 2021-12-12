import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react/swiper-react";
import {Navigation, Pagination} from "swiper";

function Banner({state}) {

    return (
        <div className="banner">
            <div className="container">
                <Swiper
                    modules={[Navigation, Pagination]}
                    // spaceBetween={20}
                    // navigation={{
                    //     prevEl: navigationPrevRef.current,
                    //     nextEl: navigationNextRef.current,
                    // }}

                    // slidesPerView={products.length > 5 ? 5 : products.length}
                    slidesPerView={'auto'}
                    // breakpoints={{
                    //     768: {
                    //         width: 768,
                    //         slidesPerView: 2,
                    //     },
                    //
                    //     568:{
                    //         width: 568,
                    //         slidesPerView: 1,
                    //     }
                    // }}
                >
                    {
                        state.map(el => (
                            <SwiperSlide key={el.title_uz} >
                                <div className="banner__img">
                                    <img src={el.image} alt="banner"/>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </div>
    );
}

export default Banner;
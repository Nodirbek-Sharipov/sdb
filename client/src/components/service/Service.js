import React from 'react';
import service_img_1 from '../../assets/images/service_1.png';
import service_img_2 from '../../assets/images/service_2.png';
import service_img_3 from '../../assets/images/service_3.png';


function Service(props) {
    const serviceData = [
        {
            id: 1,
            img: service_img_1,
            title: 'Endi bozorni unuting',
            desc: 'Bizda narxlar arzon va uyingizgacha yetkazib beramiz'
        },
        {
            id: 2,
            img: service_img_2,
            title: 'Muddatli to’lov',
            desc: '12 oydan 15 oygacha bo’lib to’lash imkoniyati'
        },
        {
            id: 3,
            img: service_img_3,
            title: 'Tez yetkazib berish',
            desc: 'Mahsulotingizni tez va sifatli yetkazib beramiz'
        },
    ]
    return (
        <div className="service">
            <div className="container">
                <div className="service__row">
                    {
                        serviceData.map(item =>{
                            return(
                                <div className="service__block" key={item.id}>
                                    <div className="service__img">
                                        <img src={item.img} alt="service__img"/>
                                    </div>

                                    <div className="service__content">
                                        <h3 className="service__title">{item.title}</h3>
                                        <p className="service__desc">{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Service;
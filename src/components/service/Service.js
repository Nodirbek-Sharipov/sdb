import React from 'react'
import { useSelector } from 'react-redux'
import service_img_1 from '../../assets/images/service_1.png'
import service_img_2 from '../../assets/images/service_2.png'
import service_img_3 from '../../assets/images/service_3.png'


function Service(props) {
	const lang = useSelector(state => state.lang.lang)

	const serviceData = [
		{
			id: 1,
			img: service_img_1,
			title_uz: 'Endi bozorni unuting',
			title_ru: 'Теперь забудьте о рынке',
			desc_uz: 'Bizda narxlar arzon va uyingizgacha yetkazib beramiz',
			desc_ru: 'У нас низкие цены и мы доставим вам домой'
		},
		{
			id: 2,
			img: service_img_2,
			title_uz: 'Muddatli to’lov',
			title_ru: 'Рассрочка',
			desc_uz: '12 oydan 15 oygacha bo’lib to’lash imkoniyati',
			desc_ru: 'Возможность оплаты через 12-15 месяцев'
		},
		{
			id: 3,
			img: service_img_3,
			title_uz: 'Tez yetkazib berish',
			title_ru: 'Быстрая доставка',
			desc_uz: 'Mahsulotingizni tez va sifatli yetkazib beramiz',
			desc_ru: 'Мы доставим Ваш товар быстро и качественно'
		},
	]
	return (
		<div className="service">
			<div className="container">
				<div className="service__row">
					{serviceData.map(item => (
						<div className="service__block" key={item.id}>
							<div className="service__img">
								<img src={item.img} alt="service__img"/>
							</div>

							<div className="service__content">
								<h3 className="service__title">{item[`title_${lang}`]}</h3>
								<p className="service__desc">{item[`desc_${lang}`]}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Service
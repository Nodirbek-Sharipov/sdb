import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getProduct} from "../../store/reducers/ProductReducer"
import FullPageLoader from "../../components/loading/Loading"
import {addToCart} from "../../store/reducers/CartReducer"
import {setIsActiveModal} from "../../store/reducers/MainPageReducer"


function ProductPage() {
	const dispatch = useDispatch()
	const state = useSelector(state => state.product)

	useEffect(() => {
		let slug = window.location.pathname.split('/')[2]
		console.log(slug)
		dispatch(getProduct(slug))
	},[])

	return (
		<div className="productPage">
			<div className="container">
				{state.loading ? <FullPageLoader/> : state.product ? <Product  product={state.product}/> : <NoProduct/>}
			</div>
		</div>
	)
}

export default ProductPage

const Product = ({product}) =>{
	const [image, setImage] = useState(product.images[0])
	const [counter, setCounter] = useState(1)
	const dispatch = useDispatch()
	const card = useSelector(state => state.cart.cart)
	const lang = useSelector(state => state.lang.lang)

	const increase = () =>{
		setCounter(counter + 1)
	}

	const decrease = () =>{
		if(counter <= 1){
			setCounter(1)
		} else{
			setCounter(counter - 1)
		}
	}

	const addToCartHandler = () =>{
		const user = localStorage.getItem('user')
		if(user){
			const inCart = card.find((item) => item.id === product.id ? true : false)
			localStorage.setItem('card', JSON.stringify(inCart ? card.map(item => item.id === product.id ? {...item, qty: item.qty + 1} : {...product}) : [...card, {...product, qty: product.qty ?  product.qty : 1}]))
			dispatch(addToCart({...product}, counter))
		} else{
			dispatch(setIsActiveModal(true))
		}
	}

	useEffect(() =>{
	}, [counter])

	return(
		<div className="productPage__product">
			<div className="productPage__product-name">
				<h1>{product[`name_${lang}`]}</h1>
			</div>

			<div className="productPage__product-row">
				<div className="productPage__product-img">
					<img src={image} alt="product_img"/>
				</div>

				<div className="productPage__product-content">
					<div className="productPage__product-price">
						<h3>{ Intl.NumberFormat().format(product.price)} {lang === 'uz' ? 'UZS' : 'УЗС'}</h3>
					</div>

					<div className="productPage__product-images">
						{product.images.map((item, index) => (
							<div
								className={item === image ? "productPage__product-imgWrap active":"productPage__product-imgWrap"}
								key={index}
								onClick={() => {setImage(item)}}
							>
								<img src={item} alt="product_img"/>
							</div>
						))}
					</div>

					<div className="productPage__product-block">
						<p className="productPage__product-text">{lang === 'uz' ? 'Soni:' : 'Количество'} </p>
						<div className="productPage__product-block-counter">
							<button className="counter__btn" onClick={decrease}>-</button>
							<span className="counter__text">{counter}</span>
							<button className="counter__btn" onClick={increase}>+</button>
						</div>
					</div>

					<div className="product__btns">
						<button className="product__btn product__btn-add" onClick={addToCartHandler}>
							<span className="product__btn-text">
								{lang === 'uz' ? 'Savatga qo’shish' : 'Добавить в корзину'}
							</span>
						</button>

						<button className="product__btn product__btn-order">
							<span className="product__btn-text"
								onClick={() => dispatch(setIsActiveModal(true))}
							>
								{lang === 'uz' ? 'Buyurtma berish' : 'Заказать'}
							</span>
						</button>
					</div>

				</div>
			</div>

			<div className="productPage__product-info">
				<div className="productPage__product-info-title">
					<h3>{lang === 'uz' ? 'Mahsulot haqida' : 'О продукте'}</h3>
				</div>
				<div className="productPage__product-info-texts">
					<p className="productPage__product-info-text">
						{lang === 'uz' ? product.description_uz : product.description_ru}

						{/*<span className="text_one">Тип</span>*/}
						{/*-*/}
						{/*<span className="text_two">Смартфон</span>*/}
					</p>
				</div>
			</div>

		</div>
	)
}

const NoProduct = () =>{
	const lang = useSelector(state => state.lang.lang)
	return(
		<div className="noProduct">
			<h1>{lang === 'uz' ? 'Mavjud so`rov bo`yicha mahsulot topilmadi' : 'По запросу ничего не найдено'}</h1>
		</div>
	)
}
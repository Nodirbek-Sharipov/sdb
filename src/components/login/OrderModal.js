import React, { useEffect, useState } from 'react'
import { IMaskInput } from 'react-imask'
import { useDispatch, useSelector } from 'react-redux'
import { setOrderModal, addOrder } from './../../store/reducers/UserReducer'
import FullPageLoader from './../loading/Loading'
import { Link } from 'react-router-dom'

function OrderModal() {
	const defaultOrderParams = {
		orderItems: [],
		delivery_address: '',
		delivery_phone: '',
		order_note: '',
		payment_method: 0,
	}
	const state = useSelector((state) => state)
	const dispatch = useDispatch()
	const lang = useSelector((state) => state.lang.lang)
	const [orderParams, setOrderParams] = useState(defaultOrderParams)
	const [isOk, setIsOk] = useState(false)
	const [radioButton, setRadioButtons] = useState([
		{
	  text: 'Naqd',
	  name: 'naqd',
	  disabled: false,
	  selected: true,
		},
		{
	  text: 'Click',
	  name: 'click',
	  disabled: true,
	  selected: false,
		},
		{
	  text: 'Payme',
	  name: 'payme',
	  disabled: true,
	  selected: false,
		},
	])

	const useMountEffect = (fun) => useEffect(fun, [])

	useMountEffect(() => {
		setOrderParams({
	  ...orderParams,
	  delivery_phone: state.user.user.phone,
	  orderItems: state.cart.cart.map((item) => {
				return {
		  qty: item.qty,
		  product_id: item.id,
				}
	  }),
		})
	})

	console.log(orderParams)

	const handleChangeAddress = (e) => {
		setOrderParams({
	  ...orderParams,
	  delivery_address: e.target.value,
		})
	}

	const handleChangeNote = (e) => {
		setOrderParams({
	  ...orderParams,
	  order_note: e.target.value,
		})
	}

	//const handleChangeRadioButton = (e) => {
	//	radioButton.map(item => {
	//		if(item.name === e.target.name){
	//			return setRadioButtons([...radioButton, {}])
	//		}
	//	})

	//	console.log(e.target.name)
	//}

	const handleSendOrderBtn = (e) => {
		e.preventDefault()
		dispatch(
	  addOrder(orderParams, (error) => {
				if (error !== null) {
		  alert(error)
				} else {
		  setIsOk(true)
				}
	  }),
		)
	}

	useEffect(() => {
		const handleWindowClick = (e) => {
	  if (e.target.classList[0] === 'orderModal') {
				dispatch(setOrderModal(false))
	  }
		}
		if (state.user.orderModal) {
	  window.addEventListener('click', (e) => handleWindowClick(e))
		} else {
	  window.removeEventListener('click', handleWindowClick)
		}
		return () => window.removeEventListener('click', handleWindowClick)
	}, [])

	return (
		<div className="orderModal">
	  {isOk ? (
		<div className="orderModal__panel orderModal__panel-isok">
		  <div className="orderModal__title">
				<h1>
			  {lang === 'uz'
				? 'Buyurtmangiz rasmiylashtirildi operatorlarimiz tez orada siz bilan bog`lanishadi'
				: 'Ваш заказ обработан, и наши операторы свяжутся с вами в ближайшее время'}
				</h1>
		  </div>
		  <form>
				<div className="orderModal__btns">
			  <Link to="/">
						<button
				  className="form__group-btn"
				  onClick={() => {
								setIsOk(false)
								dispatch(setOrderModal(false))
				  }}
						>
				  {lang === 'uz'
					? 'Bosh sahifaga qaytish'
					: 'Возвращаться домой'}
						</button>
			  </Link>
				</div>
		  </form>
		</div>
	  ) : (
		<div className="orderModal__panel">
		  <div className="orderModal__title">
				<h1>
			  {lang === 'uz'
				? 'Buyurtmani rasmiylashtirish'
				: 'Выполнение заказа'}
				</h1>
		  </div>

		  <div className="orderModal__form">
				<form>
			  <label className="form__group">
						<p className="form__group-text">
				  {lang === 'uz'
					? 'Yashash manzilingizni kiriting'
					: 'Введите секретный код'}
						</p>
						<input
				  type="text"
				  value={orderParams.delivery_address}
				  onChange={handleChangeAddress}
						/>
			  </label>
			  <label className="form__group">
						<p className="form__group-text">
				  {lang === 'uz'
					? 'Telefon raqamingizni kiriting'
					: 'Введите секретный код'}
						</p>
						<IMaskInput
				  mask={`{+998} 00 000 00 00`}
				  value={orderParams.delivery_phone}
				  onAccept={(value, mask) =>
								setOrderParams({
					  ...orderParams,
					  delivery_phone: mask._unmaskedValue,
								})
				  }
				  placeholder="+998 99 999 99 99"
						/>
			  </label>
			  <label className="form__group">
						<p className="form__group-text">
				  {lang === 'uz' ? 'Eslatma' : 'Примечание'}
						</p>
						<textarea
				  value={orderParams.order_note}
				  onChange={handleChangeNote}
						></textarea>
			  </label>
			  <label className="form__group">
						<p className="form__group-text">
				  {lang === 'uz' ? 'To`lov turi' : 'Тип платежа'}
						</p>
						{/* {radioButton.map((item, index) => {
				  return (
								<label key={index}>
					 				 <input
										type="radio"
										name={item.name}
										checked={item.selected}
										disabled={item.disabled}
										className="form__group-input-checkbox"
										//onChange={handleChangeRadioButton}
					  				/>
					  				{item.text}
								</label>
				  )
						})} */}

						<label>
							<input type="radio" name='payment' defaultChecked className='form__group-input-checkbox'/>
							Naqd
						</label>
						<label>
							<input type="radio" name='payment' disabled  className='form__group-input-checkbox'/>
							Click
						</label>
						<label>
							<input type="radio" name='payment' disabled  className='form__group-input-checkbox'/>
							Payme
						</label>

			  </label>
			  <div className="orderModal__btns">
						<button
				  className="form__group-btn"
				  onClick={(e) => handleSendOrderBtn(e)}
						>
				  {lang === 'uz' ? 'Rasmiylashtirish' : 'Авторизоваться'}
						</button>
						<button
				  className="form__group-btn"
				  onClick={() => {
								dispatch(setOrderModal(false))
				  }}
						>
				  {lang === 'uz' ? 'Bekor qilish' : 'Отмена'}
						</button>
			  </div>
				</form>
		  </div>
		</div>
	  )}
	  {state.user.user.loading && <FullPageLoader />}
		</div>
	)
}

export default OrderModal

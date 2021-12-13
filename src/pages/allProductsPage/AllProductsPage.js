import React, {useEffect, useState} from 'react'
import UncheckIcon from "../../components/icons/UncheckIcon"
import Products from "../../components/products/Products"
import SortIcon from "../../components/icons/SortIcon"
import {useDispatch, useSelector} from "react-redux"
import {useHistory, useLocation} from 'react-router-dom'
import {getCategoryProducts} from "../../store/reducers/FilterReducer"
import FullPageLoader from "../../components/loading/Loading"
import {getBrands} from "../../store/reducers/BrandsReducer"
import ReactPaginate from "react-paginate"
import CheckIcon from "../../components/icons/CheckIcon"
import {getAllProducts} from "../../store/reducers/AllProductsReducer"

function AllProductsPage(props) {
	const [sidebarIsActive, setSidebarIsActive] = useState(false)
	const [isCheck, setIsCheck] = useState([])
	const dispatch = useDispatch()
	const state = useSelector(state => state)
	const products = state.allProducts.products
	const pagination = state.allProducts.pagination
	const history = useHistory()
	const location = useLocation()
	const lang = useSelector(state => state.lang.lang)

	const slug = props.match.params.id
	const search = props.location.search


	const handlePageClick = (page) => {
		history.push({ pathname: location.pathname, search: `&page=${page.selected + 1}`})
	}

	const handleBrandClick = (id) =>{
		if(isCheck.includes(id)){
			setIsCheck(isCheck.filter(el => el !== id))
		} else{
			setIsCheck([...isCheck, id])
		}
	}

	function makeTitle(slug) {
		let words = slug.split('-')

		for (let i = 0; i < words.length; i++) {
			let word = words[i]
			words[i] = word.charAt(0).toUpperCase() + word.slice(1)
		}
		return words.join(' ')
	}

	useEffect(() => {
		dispatch(getAllProducts(slug, search))
		dispatch(getBrands())
	},[slug, search])

	useEffect(() => {
		history.push({ pathname: location.pathname, search: isCheck.length !== 0 ? `&brand_ids=${isCheck.join(',')}` : null})

	},[isCheck])

	return (
		<div className="categoryPage">
			<div className="container">
				<div className="categoryPage__title">
					<h1>{makeTitle(props.match.params.id)}</h1>
					<button
						className="categoryPage__btn"
						onClick={() => {setSidebarIsActive(!sidebarIsActive)}}
					>
						<span className="categoryPage__btn-text">
							{lang === 'uz' ? 'Saralash' : 'Сортировать'}
						</span>

						<span className="categoryPage__btn-icon">
							<SortIcon/>
						</span>
					</button>

				</div>
				<div className="categoryPage__row">
					<div   className={sidebarIsActive ? "categoryPage__sidebar active" : "categoryPage__sidebar"}>
						<div className="categoryPage__sidebar-title">
							<h3>{lang === 'uz' ? 'Brendlar' : 'Бренды'}</h3>
						</div>

						<ul className="categoryPage__sidebar-list">
							<li className="categoryPage__sidebar-list__item" onClick={() => handleBrandClick(0)}>
								<span className="categoryPage__sidebar-list__icon">
									{isCheck.includes(0) ? <CheckIcon/> : <UncheckIcon/>}
								</span>

								<span className="categoryPage__sidebar-list__text">
									{lang === 'uz' ? 'Barchasini ko’rsatish' : 'Показать все'}
								</span>
							</li>
							{state.brands.brands.map(item => (
								<li
									className="categoryPage__sidebar-list__item"
									key={item.id}
									onClick={() => handleBrandClick(item.id)}>
									<span className="categoryPage__sidebar-list__icon">
										{isCheck.includes(item.id) ? <CheckIcon/> : <UncheckIcon/>}
									</span>

									<span className="categoryPage__sidebar-list__text">
										{item[`name_${lang}`]}
									</span>
								</li>
							))}
						</ul>
					</div>

					<div className="categoryPage__products">
						{
                            products ? products.length > 0 ? <Products state={products} match={props.match.params.slug}/> : <NoProduct/> :  <FullPageLoader />
						}
					</div>
				</div>
				<div className="categoryPage__pagination">
					{pagination?.total_pages !== 0 && (
						<ReactPaginate
							previousLabel={"<"}
							nextLabel={">"}
							breakLabel={"..."}
							pageCount={pagination?.total_pages}
							marginPagesDisplayed={2}
							// pageRangeDisplayed={2}
							onPageChange={handlePageClick}
							containerClassName={"pagination"}
							pageClassName={"pagination__item"}
							pageLinkClassName={"pagination__link"}
							previousClassName={"pagination__item"}
							previousLinkClassName={"pagination__link"}
							nextClassName={"pagination__item"}
							nextLinkClassName={"pagination__link"}
							breakClassName={"pagination__item"}
							breakLinkClassName={"pagination__link"}
							activeClassName={"active"}
						/>
					)}
				</div>
			</div>
			{state.allProducts.loading && <FullPageLoader />}
		</div>
	)
}

export default AllProductsPage

const NoProduct = () =>{
	const lang = useSelector(state => state.lang.lang)
	return(
		<div className="noProduct">
			<h1>{lang === 'uz' ? 'Mavjud so`rov bo`yicha mahsulot topilmadi' : 'По запросу ничего не найдено'}</h1>
		</div>
	)
}
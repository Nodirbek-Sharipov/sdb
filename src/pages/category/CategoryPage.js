import React, {useEffect, useState} from 'react';
import UncheckIcon from "../../components/icons/UncheckIcon";
import Products from "../../components/products/Products";
import SortIcon from "../../components/icons/SortIcon";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useLocation} from 'react-router-dom';
import {getCategoryProducts} from "../../store/reducers/FilterReducer";
import FullPageLoader from "../../components/loading/Loading";
import {getBrands} from "../../store/reducers/BrandsReducer";
import ReactPaginate from "react-paginate";

function CategoryPage(props) {
    const [sidebarIsActive, setSidebarIsActive] = useState(false);
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const products = state.filterReducer.products;
    const pagination = state.filterReducer.pagination;
    const history = useHistory();
    const location = useLocation()


    const slug = props.match.params.slug;
    const search = props.location.search;

    const handlePageClick = (page) => {
        history.push({ pathname: location.pathname, search: `?page=${page.selected + 1}`});
    };



    useEffect(() => {
        dispatch(getCategoryProducts(slug,search));
        dispatch(getBrands());
    },[slug, search]);

    return (
        <div className="categoryPage">
            <div className="container">
               <div className="categoryPage__title">
                   <h1>{}</h1>
                   <button
                       className="categoryPage__btn"
                       onClick={() => {setSidebarIsActive(!sidebarIsActive)}}
                   >
                       <span className="categoryPage__btn-text">
                            Saralash
                        </span>

                        <span className="categoryPage__btn-icon">
                            <SortIcon/>
                        </span>
                   </button>

               </div>
               <div className="categoryPage__row">
                    <div   className={sidebarIsActive ? "categoryPage__sidebar active" : "categoryPage__sidebar"}>
                        <div className="categoryPage__sidebar-title">
                            <h3>Brendlar</h3>
                        </div>

                        <ul className="categoryPage__sidebar-list">
                            <li className="categoryPage__sidebar-list__item">
                                <span className="categoryPage__sidebar-list__icon">
                                    <UncheckIcon/>
                                </span>

                                <span className="categoryPage__sidebar-list__text">
                                    Barchasini ko’rsatish
                                </span>
                            </li>
                            {
                                state.brands.brands.map(item => {
                                    return(
                                        <li className="categoryPage__sidebar-list__item" key={item.id}>
                                            <span className="categoryPage__sidebar-list__icon">
                                                <UncheckIcon/>
                                            </span>

                                            <span className="categoryPage__sidebar-list__text">
                                                {item.name_uz}
                                            </span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                   <div className="categoryPage__products">
                       {
                           products ? products.length > 0 ? <Products state={products} match={props.match.params.slug}/> : <NoProduct/> :  <FullPageLoader />
                       }
                   </div>


               </div>
            <div className="categoryPage__pagination">
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
            </div>
            </div>
            {state.filterReducer.loading && <FullPageLoader />}
        </div>


    );
}

export default CategoryPage;

const NoProduct = () =>{
    return(
        <div className="noProduct">
            <h1>Mavjud so`rov bo`yicha mahsulot topilmadi</h1>
        </div>
    )
}
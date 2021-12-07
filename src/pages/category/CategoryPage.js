import React, {useEffect, useState} from 'react';
import UncheckIcon from "../../components/icons/UncheckIcon";
import Products from "../../components/products/Products";
import SortIcon from "../../components/icons/SortIcon";
import {useDispatch, useSelector} from "react-redux";
import {getCategoryProducts} from "../../store/reducers/FilterReducer";
import FullPageLoader from "../../components/loading/Loading";
import {getBrands} from "../../store/reducers/BrandsReducer";

function CategoryPage(props) {
    const [sidebarIsActive, setSidebarIsActive] = useState(false);
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const products = state.filterReducer.products;

    useEffect(() => {
        let slug = window.location.pathname.split('/')[2];
        console.log(slug);
        dispatch(getCategoryProducts(slug));
        dispatch(getBrands());
    },[window.location])

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
                           products ? products.length > 0 ? <Products state={products}/> : <NoProduct/> :  <FullPageLoader />
                       }
                   </div>
               </div>
           </div>
            {/*{state.filterReducer.loading && <FullPageLoader />}*/}

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
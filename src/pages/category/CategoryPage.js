import React, {useState} from 'react';
import UncheckIcon from "../../components/icons/UncheckIcon";
import StoreContext from "../../store/contextStore";
import Products from "../../components/products/Products";
import SortIcon from "../../components/icons/SortIcon";
import {useSelector} from "react-redux";


// function CategoryPageContainer(){
//     return(
//         <StoreContext.Consumer>
//             {
//                 (store) =>{
//                     let state = store.getState();
//                     let sidebarLinks = '';
//                     state.navbarLinks.navbarLinks.forEach(el => {
//                         if(el.title === state.filterItems.category_name){
//                             sidebarLinks = el;
//                         }
//                     })
//                     return(
//                         <CategoryPage
//                             sidebarLink={sidebarLinks}
//                             products={state.filterItems.items}
//                         />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }


function CategoryPage(props) {
    const [sidebarIsActive, setSidebarIsActive] = useState(false);

    const state = useSelector(state => state);
    const products = state.filterItems.items;
    let sidebarLinks = '';
    state.navbarLinks.navbarLinks.forEach(el => {
        if(el.title === state.filterItems.category_name){
            sidebarLinks = el;
        }
    })

    return (
        <div className="categoryPage">
           <div className="container">
               <div className="categoryPage__title">
                   <h1>{sidebarLinks.title}</h1>

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
                                sidebarLinks.links.map(item => {
                                    return(
                                        <li className="categoryPage__sidebar-list__item" key={item.id}>
                                            <span className="categoryPage__sidebar-list__icon">
                                                <UncheckIcon/>
                                            </span>

                                            <span className="categoryPage__sidebar-list__text">
                                                {item.link_title}
                                            </span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                   <div className="categoryPage__products">
                        <Products state={products}/>
                   </div>
               </div>
           </div>
        </div>
    );
}

export default CategoryPage;
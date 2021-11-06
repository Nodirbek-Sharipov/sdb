import React from 'react';
import UncheckIcon from "../../components/icons/UncheckIcon";
import StoreContext from "../../store/contextStore";
import Products from "../../components/products/Products";


function CategoryPageContainer(){
    return(
        <StoreContext.Consumer>
            {
                (store) =>{
                    let state = store.getState();
                    let sidebarLinks = '';
                    state.navbarLinks.navbarLinks.forEach(el => {
                        if(el.title === state.filterItems.category_name){
                            sidebarLinks = el;
                        }
                    })
                    return(
                        <CategoryPage
                            sidebarLink={sidebarLinks}
                            products={state.filterItems.items}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}


function CategoryPage(props) {
    console.log(props.sidebarLink)
    return (
        <div className="categoryPage">
           <div className="container">
               <div className="categoryPage__title">
                   <h1>{props.sidebarLink.title}</h1>
               </div>

               <div className="categoryPage__row">
                    <div className="categoryPage__sidebar">
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
                                props.sidebarLink.links.map(item => {
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
                        <Products state={props.products}/>
                   </div>
               </div>
           </div>
        </div>
    );
}

export default CategoryPageContainer;
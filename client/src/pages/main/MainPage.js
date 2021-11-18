import React, {useEffect} from 'react';
import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";
import Brands from "../../components/brends/Brands";
import Service from "../../components/service/Service";
import StoreContext from "../../store/contextStore";
import {getRepos} from "../../store/reducers/MainPageReducer";
import {connect, useDispatch, useSelector} from "react-redux";

function MainPage(props) {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    useEffect(() =>{
        dispatch(getRepos())
    }, [])



    return (
        <div className="mainPage">
            <Banner/>
            {/*<StoreContext.Consumer>*/}
            {/*    {*/}
            {/*        (store) =>{*/}
            {/*            let state = store.getState();*/}
            {/*            // let specialProducts = [];*/}
            {/*            // state.mainPageReducer.forEach(item =>{*/}
            {/*            //     if(item.isSale){*/}
            {/*            //         specialProducts.push(item)*/}
            {/*            //     }*/}
            {/*            // })*/}
            {/*            console.log(state)*/}
            {/*            // console.log(state.mainPageReducer.filter(el => el.category.name === 'Kompyuterlar'))*/}
            {/*            return (*/}
            {/*                <>*/}
            {/*                    /!*<Products products_title={'Sizbop tovarlar 🔥'} state={state.mainPageReducer}/>*!/*/}
            {/*                    /!*<Products products_title={'Maxsus chegirmalar 😍'} />*!/*/}
            {/*                </>*/}
            {/*        )*/}
            {/*        }*/}
            {/*    }*/}
            {/*</StoreContext.Consumer>*/}

            <Products state={state.mainPageReducer}/>
            <Brands brands_num={8}/>
            <Service/>
        </div>
    );
}

export default MainPage;
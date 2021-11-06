import MainPage from "../../pages/main/MainPage";
import ProductPage from "../../pages/product/ProductPage";
import CategoryPageContainer from "../../pages/category/CategoryPage";

export const publicRoutes =[
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/category/:id',
        component: CategoryPageContainer
    },
    {
        path: '/products/:id',
        component: ProductPage
    },
];


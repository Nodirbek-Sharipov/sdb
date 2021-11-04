import MainPage from "../../pages/main/MainPage";
import CategoryPage from "../../pages/category/CategoryPage";
import ProductPage from "../../pages/product/ProductPage";

export const publicRoutes =[
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/category',
        component: CategoryPage
    },
    {
        path: '/product/:id',
        component: ProductPage
    },
];


import MainPage from "../../pages/main/MainPage";
import ProductPage from "../../pages/product/ProductPage";
import CategoryPage from "../../pages/category/CategoryPage";

export const publicRoutes =[
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/category/:id',
        component: CategoryPage
    },
    {
        path: '/products/:id',
        component: ProductPage
    },
];


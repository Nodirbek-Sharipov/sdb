import MainPage from "../../pages/main/MainPage";
import ProductPage from "../../pages/product/ProductPage";
import CategoryPage from "../../pages/category/CategoryPage";
import Cart from "../../pages/cart/Cart";
import User from "../../pages/user/User";

export const publicRoutes =[
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/category/:slug',
        component: CategoryPage
    },
    {
        path: '/products/:id',
        component: ProductPage
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: User
    }
];


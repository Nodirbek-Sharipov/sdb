import MainPage from "../../pages/main/MainPage"
import ProductPage from "../../pages/product/ProductPage"
import CategoryPage from "../../pages/category/CategoryPage"
import Cart from "../../pages/cart/Cart"
import User from "../../pages/user/User"
import AllProductsPage from "../../pages/allProductsPage/AllProductsPage"
import Page from "../../pages/page/Page"
import PageNotFound from './../../pages/404page/PageNotFound'

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
		path: '/products/product/:id',
		component: ProductPage
	},
	{
		path: '/products/:id',
		component: AllProductsPage
	},
	{
		path: '/cart',
		component: Cart
	},
	{
		path: '/profile',
		component: User
	},
	{
		path: '/page/:slug',
		component: Page
	},
	{
		path: '/404',
		component: PageNotFound
	}
]


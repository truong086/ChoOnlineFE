import {createRouter, createWebHistory} from 'vue-router'
import LoginPager from './components/LoginPages.vue'
import DangKyPager from './components/DangKyPages.vue'
import HomeIndex from './components/HelloWorld.vue'
import OtpPager from './components/OtpPages.vue'
import indexPages from './components/AdminTemplate/indexPage.vue'
import chartPages from './components/AdminTemplate/chartPage.vue'
import tablePages from './components/AdminTemplate/tablePage.vue'
import EditAddAllPages from './components/AdminTemplate/EditAddAllPage.vue'
import HomeSellerpage from './components/SellerTemplate/HomeSeller.vue'
// import FromAddEditSeller.vue from './components/SellerTemplate/FromAddEditSeller.vue'
import store from './store'


const dangkyban = () => import('@/components/SellerTemplate/DangKyShopPgae.vue')
const productDetails = () => import('./components/ProductDetailsPage.vue')
const CartPage = () => import('./components/CartPages.vue')
const productList = () => import('./components/ProductListPage.vue')
const routes = [
    {
        path: "/",
        alias: ["/home"],
        name: "Home",
        component: HomeIndex,
        meta: {requiresAuth: true, roleAdmin: ['User', 'Shop', 'Admin']}
    },
    {
        path: "/FromDangKyBan",
        name: "dangkyban",
        component: dangkyban,
        meta: {requiresAuth: true, roleAdmin: ['User', 'Shop', 'Admin']}
    },
    {
        path: "/Product/:name",
        name: "product",
        component: productList,
        meta: {requiresAuth: true, roleAdmin: ['User', 'Shop', 'Admin']}
    },
    {
        path: "/productDetail/:name",
        name: "productdetail",
        component: productDetails,
        meta: {requiresAuth: true, roleAdmin: ['User', 'Shop', 'Admin']}
    },
    {
        path: "/Cart",
        name: "cart",
        component: CartPage,
        meta: {requiresAuth: true, roleAdmin: ['User', 'Shop', 'Admin']}
    },
    {
        path: "/Admin",
        name: "Admin",
        component: indexPages,
        meta: {requiresAuth: true, roleAdmin: ['Admin']}
    },
    {
        path: "/Seller",
        name: "seller",
        component: HomeSellerpage,
        meta: {requiresAuth: true, roleAdmin: ['Admin', 'Shop']}
    },
    {
        path: "/EditOrAdd/:type/:table",
        name: "EditOrAdd",
        component: EditAddAllPages,
        meta: {requiresAuth: true, roleAdmin: ['Admin']}
    },
    {
        path: "/AddOreditSeller/:type/:table",
        name: "addedit",
        component: () => import ('@/components/SellerTemplate/FromAddEditSeller.vue'),
        meta: {requiresAuth: true, roleAdmin: ['Admin', 'Shop']}
    },
    {
        path: "/TableSeller",
        name: "tableSeller",
        component: () => import('@/components/SellerTemplate/TableSeller.vue'),
        meta: {requiresAuth: true, roleAdmin: ['Admin', 'Shop']}
    },
    {
        path: "/Table",
        name: "table",
        component: tablePages,
        meta: {requiresAuth: true, roleAdmin: ['Admin']}
    },
    {
        path: "/chart",
        name: "charts",
        component: chartPages,
        meta: {requiresAuth: true, roleAdmin: ['Admin']}
    },

    {
        path: "/Login",
        name: "Login",
        component: LoginPager
    },
    
    {
        path: "/DangKy",
        name: "DangKy",
        component: DangKyPager
    },

    {
        path: "/OTP",
        name: "OTPs",
        component: OtpPager
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})


router.beforeEach((to, from, next) => {
    const paths = ['/Login', '/DangKy', '/OTP']

    const checkPaths = !paths.includes(to.path)

    const auth = to.meta.requiresAuth
    const roles = to.meta.roleAdmin
    // const trangthai = localStorage.getItem("trangthai")
    const token = localStorage.getItem("token")
    // const role = localStorage.getItem("role")
    const role = store.getters.laydanhsachRole(0)
    if(checkPaths && !token){
        next("/Login")
    }
    if(auth && !token){
        next("/Login")
    }else if(auth && token){
        if(!roles || roles.includes(role)){
            next()
        }else{
            next("/Login")
        }
    }
    else{
        next()
    }
    if(paths){
        next("/Login")
    }
    else{
        next()
    }
})
export default router
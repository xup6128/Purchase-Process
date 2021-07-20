// import { createRouter, createWebHistory } from 'vue-router'
import MyData from './views/MyData.vue'
import Payment from './views/Payment.vue'
import OrderConfirm from './views/OrderConfirmation.vue'

// export const routes = createRouter({
//     history: createWebHistory(),
//     routes:[
//         { path: '/', component: MyData},
//         { path: '/payment', component: Payment},
//         { path: '/orderConfirm', component: OrderConfirm},
//     ]
// })

export const routes = [
    { path: '/', redirect:'/checkout/step-1-my-data'},
    { path: '/checkout/step-1-my-data', component: MyData},
    { path: '/checkout/step-2-payment', component: Payment},
    { path: '/checkout/step-3-order-confirmation', component: OrderConfirm},
]

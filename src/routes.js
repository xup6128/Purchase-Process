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
    { path: '/', component: MyData},
    { path: '/payment', component: Payment},
    { path: '/orderConfirm', component: OrderConfirm},
]
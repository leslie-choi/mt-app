import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5b6d2e0b = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _61c32c66 = () => interopDefault(import('../pages/changeCity.vue' /* webpackChunkName: "pages/changeCity" */))
const _7e3bfc08 = () => interopDefault(import('../pages/detail.vue' /* webpackChunkName: "pages/detail" */))
const _46f985ee = () => interopDefault(import('../pages/exit.vue' /* webpackChunkName: "pages/exit" */))
const _bca780e4 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _1e61461a = () => interopDefault(import('../pages/order.vue' /* webpackChunkName: "pages/order" */))
const _6d5760cf = () => interopDefault(import('../pages/products.vue' /* webpackChunkName: "pages/products" */))
const _6bedf2e4 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _16aeee7d = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _4ff6c712 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cart",
    component: _5b6d2e0b,
    name: "cart"
  }, {
    path: "/changeCity",
    component: _61c32c66,
    name: "changeCity"
  }, {
    path: "/detail",
    component: _7e3bfc08,
    name: "detail"
  }, {
    path: "/exit",
    component: _46f985ee,
    name: "exit"
  }, {
    path: "/login",
    component: _bca780e4,
    name: "login"
  }, {
    path: "/order",
    component: _1e61461a,
    name: "order"
  }, {
    path: "/products",
    component: _6d5760cf,
    name: "products"
  }, {
    path: "/register",
    component: _6bedf2e4,
    name: "register"
  }, {
    path: "/test",
    component: _16aeee7d,
    name: "test"
  }, {
    path: "/",
    component: _4ff6c712,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

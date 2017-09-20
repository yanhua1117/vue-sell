// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import sellers from './components/sellers/sellers'


Vue.use(VueRouter);

// 引入需要打包的外部样式
//import './common/css/icon.css'
//require('!style-loader!css-loader!less-loader!./common/css/icon.less');

//let app = Vue.extend(App);
//
//let router = new VueRouter();
//
//router.map({
//  '/goods' : {
//      component : goods
//  }
//})
//
//router.start(app,"#app");

const routes = [
    {
      path: '/',
      redirect:'/goods'
    },
    {
        path: '/goods',
        component: goods
    },
    {
    	path: '/ratings',
    	component: ratings
    },
    {
    	path: '/sellers',
    	component: sellers
    }
]
const router = new VueRouter({
    routes,
    linkActiveClass : "active"
})

const app = new Vue({
    router,
    template : '<App/>',
    components : {App}
}).$mount('#app');

//router.push('/goods');

//new Vue({
//el: '#app',
//template: '<App/>',
//components: { App }
//})
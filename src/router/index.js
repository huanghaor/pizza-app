import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Menu from '../components/Menu'
import Admin from '../components/Admin'
import Login from '../components/Login'
import Register from '../components/Register'
import About from '../components/about/About'

//二级路由
import Contact from '../components/about/Contact'
import Delivery from '../components/about/Delivery'
import History from '../components/about/History'
import OrderingGuide from '../components/about/OrderingGuide'
//三级路由
import Phone from '../components/about/contact/Phone'
import PersonName from '../components/about/contact/PersonName'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '*',redirect:'/'},
    {path: '/',name: 'homeLinke', component: Home},
    {path: '/menu',name: 'menuLinke', component: Menu},
    {path: '/admin',name: 'adminLinke', component: Admin},
    {path: '/login',name: 'loginLinke', component: Login},
    {path: '/register',name: 'registerLinke', component: Register},
    {path: '/about',name: 'aboutLinke', redirect:'/about/contact',component: About,children:[
        {path: '/about/contact',name:'contactLink',redirect:'/phone',component:Contact,children: [
            {path:'/phone',name:'phoneNumber',component:Phone},
            {path:'/personname',name:'personName',component:PersonName},
          ]},
        {path: '/delivery',name:'deliveryLink',component:Delivery},
        {path: '/history',name:'historyLink',component:History},
        {path: '/orderingGuide',name:'orderingGuideLink',component:OrderingGuide},
      ]}
  ],
  mode:'history'
})

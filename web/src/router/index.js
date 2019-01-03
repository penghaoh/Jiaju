import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Homepage from '@/components/Homepage'
import Goods from '@/components/Goods'
import Purchase from '@/components/Purchase'
import Shopcar from '@/components/Shopcar'
import Login from '@/components/Login'
import Know from '@/components/Know'
import Business from '@/components/Business'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
			children :[
				{
					path: '/',
					name: 'Homepage',
					component: Homepage
				},
				{
					path: '/sofa',
					name: 'Goods',
					component: Goods
				},
				{
					path: '/chair',
					name: 'Goods',
					component: Goods
				},
				{
					path: '/table',
					name: 'Goods',
					component: Goods
				},
				{
					path: '/lamp',
					name: 'Goods',
					component: Goods
				},
				{
					path: '/tableware',
					name: 'Goods',
					component: Goods
				},
				{
					path: '/decoration',
					name: 'Goods',
					component: Goods
				},
				{
					path: '/purchase',
					name: 'Purchase',
					component: Purchase,
				},
				{
					path: '/shopcar',
					name: 'Shopcar',
					component: Shopcar,
				},
				{
					path: '/login',
					name: 'Login',
					component: Login
				},
				{
					path: '/Know',
					name: 'Know',
					component: Know
				},
				{
					path: '/Business',
					name: 'Business',
					component: Business
				}
			]
	},
	

	]
})

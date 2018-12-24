import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Homepage from '@/components/Homepage'
import Goods from '@/components/Goods'


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
				}
			]
    }
	]
})

import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Asider from '@/components/Asider'
import Goods from '@/components/Goods'
import Family from '@/components/Family'
import User from '@/components/User'


Vue.use(Router)

export default new Router({
	routes: [{
				path: '/',
				name: 'Login',
				component: Login,
				meta: {
					isLogin: false
				}
			},
			{
				path: '/main',
				name: 'Main',
				component: Main,
				meta: {
					isLogin: true
				},
				redirect: '/allgoods',
				children: [{
							path: '/goods',
							name: 'Goods',
							component: Goods,
							redirect: '/allgoods',
							children: [{
											path: '/allgoods',
											name: 'Family',
											component: Family,
											
										},
										{
											path: '/sofa',
											name: 'Family',
											component: Family,
										},
										{
											path: '/chair',
											name: 'Family',
											component: Family,
										},
										{
											path: '/desk',
											name: 'Family',
											component: Family,
										},
										{
											path: '/lamp',
											name: 'Family',
											component: Family,
										},{
											path: '/tableware',
											name: 'Family',
											component: Family,
										},
										{
											path: '/decoration',
											name: 'Family',
											component: Family,
										}
									]},
						{
							path: '/user',
							name: 'User',
							component: User
						}]
			}]
	})

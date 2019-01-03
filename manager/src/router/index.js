import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Asider from '@/components/Asider'
import Goods from '@/components/Goods'
import Family from '@/components/Family'
import User from '@/components/User'
import Uploadimg from '@/components/Uploadimg'


Vue.use(Router)

export default new Router({
	routes: [
			{
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
				children: [
							{
								path: '/user',
								name: 'User',
								component: User,
								meta: {
									isLogin: true
								},
							},
							{
								path: '/uploadimg',
								name: 'Uploadimg',
								component: Uploadimg,
								meta: {
									isLogin: true
								},
							},
							{
								path: '/goods',
								name: 'Goods',
								component: Goods,
								meta: {
									isLogin: true
								},
								children: [
										{
											path: '/all',
											name: 'Family',
											component: Family,
											meta: {
												isLogin: true
											},
										},
										{
											path: '/sofa',
											name: 'Family',
											component: Family,
											meta: {
												isLogin: true
											},
										},
										{
											path: '/chair',
											name: 'Family',
											component: Family,
											meta: {
												isLogin: true
											},
										},
										{
											path: '/desk',
											name: 'Family',
											component: Family,
											meta: {
												isLogin: true
											},
										},
										{
											path: '/lamp',
											name: 'Family',
											component: Family,
											meta: {
												isLogin: true
											},
										},
										{
											path: '/tableware',
											name: 'Family',
											component: Family,
											meta: {
												isLogin: true
											},
										},
										{
											path: '/decoration',
											name: 'Family',
											component: Family,
											meta: {
												isLogin: true
											},
										},
										],redirect:'/all'
							},
						],redirect:'/goods',
			}
			],
})

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
			component: Login
		},
		{
			path: '/main',
			name: 'Main',
			component: Main,
			children: [{
					path: '/goods',
					name: 'Goods',
					component: Goods,
					children: [{
							path: '/',
							name: 'Family',
							component: Family,
						},
						{
							path: '/soft',
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
						}
					]
				},
				{
					path: '/user',
					name: 'User',
					component: User
				},
				{
					path: '/',
					name: 'User',
					component: User
				}
			]
		}
	]
})

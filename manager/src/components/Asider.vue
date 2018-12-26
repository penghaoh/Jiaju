<template>
	<div class='container'>
		<div class='aside' >
			<h3>选项列表</h3>
			<router-link @click.native='changeBgc' :class='[leftView]' v-for='item in myList' :to='item.url'>{{item.text}}</router-link>
		</div>
		<router-view :class='[rightView]'></router-view>
	</div>
</template>

<script>
	export default {
		name: 'Asider',
		data() {
			return {
				leftView: 'leftView',
				rightView: 'rightView',
				myList: [
					{url:'/goods',text:'商品管理'},
					{url:'/main',text:'用户管理'},
				],
				
			};
		},
		methods: {
			changeBgc: function(){
				
			}
		}
	}
</script>
<style scoped>
	/* 内容区域样式 */
	.container {
		padding:0 5%;
		width: 90%;
		height: 450px;
		display: flex;
		flex-direction: row;
		
	}
	/* 侧边栏样式 */
	.aside {
		width: 15%;
		height: 100%;
		display: flex;
		flex-direction: column;
		text-align: center;
		background-color: pink;
	}
	.aside h3 {
		width: 100%;
		padding: 30px 0px;
	}
	.aside .leftView {
		width: 100%;
		height: 60px;
		font-size: 16px;
		line-height: 60px;
		text-decoration: none;
		color: #000;
		
	}
	.aside .leftView:hover {
		background-color: #111111;
		color: #fff;
	}
	/* 页面右部显示区域 */
	.rightView {
		width: 85%;
		height: 100%;
		background-color: skyblue;
	}
</style>


<template>
	<div class='container'>
		<div class='aside' >
			<h3>选项列表</h3>
			<router-link :class='[leftView]' v-for='item in myList' :to='item.url'>{{item.text}}</router-link>
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
					{url:'/user',text:'用户管理'},
				],
				
			};
		}
	}
</script>
<style scoped>
	/* 内容区域样式 */
	.container {
		width: 100%;
		height: 500px;
		display: flex;
		flex-direction: row;
		
	}
	/* 侧边栏样式 */
	.aside {
		box-sizing: border-box;
		width: 15%;
		height: 100%;
		background-color: pink;
		display: flex;
		flex-direction: column;
		text-align: center;
		padding: 10px 15px ;
	}
	.aside .leftView {
		width: 100%;
		height: 60px;
		font-size: 16px;
		line-height: 60px;
		text-decoration: none;
	}
	/* 页面右部显示区域 */
	.rightView {
		box-sizing: border-box;
		width: 85%;
		height: 100%;
		background-color: skyblue;
	}
</style>


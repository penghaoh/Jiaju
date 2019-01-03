<template>
	<div class='container'>
		<div class='aside' >
			<h3>选项列表</h3>
			<router-link  :class='[leftView]' v-for='item in myList' :to='item.url'>{{item.text}}</router-link>
		</div>
		<router-view :class='[rightView]'></router-view>
	</div>
</template>

<script>
	import $ from 'jquery';
	$(document).on("click",".leftView",function(){
		$(this).css({
			"backgroundColor":"#1b1b1b",
			"color":"#fff"
		});
		$(this).siblings().css({
			"backgroundColor":"#fff",
			"color":"#1b1b1b"
		});
	});
	export default {
		name: 'Asider',
		data() {
			return {
				leftView: 'leftView',
				rightView: 'rightView',
				myList: [
					{url:'/goods',text:'商品管理'},
					{url:'/user',text:'用户管理'},
					{url:'/uploadimg',text:'图片管理'},
				],
				
			};
		},
		
	}
</script>
<style scoped>
	/* 内容区域样式 */
	.container {
		width: 100%;
		min-height: 450px;
		display: flex;
		flex-direction: row;
		
	}
	/* 侧边栏样式 */
	.aside {
		width: 15%;
		min-height: 450px;
		display: flex;
		flex-direction: column;
		text-align: center;
		border-right: 2px solid #1b1b1b;
		margin: 10px 0px;
		box-sizing: border-box;
	}
	.aside h3 {
		line-height: 50px;
		margin: 0 10%;
		width: 80%;
		background-color: #1b1b1b;
		color: #fff;
		
	}
	.aside .leftView {
		box-sizing: border-box;
		margin: 20px 10% 0px;
		width: 80%;
		height: 50px;
		font-size: 16px;
		line-height: 50px;
		text-decoration: none;
		color: #000;
		
	}
	.aside .leftView:hover {
		border-bottom: 2px solid #1b1b1b;
	}
	/* 页面右部显示区域 */
	.rightView {
		width: 85%;
		height: 100%;
		position: relative;
	}
</style>


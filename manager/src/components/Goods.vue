<template>
	<div>
		<div class="title">商品管理信息</div>
		<div class="nav">
			<router-link :to="{path:'/all',query:{typeid:'0'}}">全部</router-link>
			<router-link  v-for='(item,index) in typeList'  :to="{path:item.url,query:{typeid:item.type_id}}">{{item.name}}</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script >
	import axios from 'axios';
	import $ from 'jquery';
	$(document).on("click",".nav>a",function(){
		$(this).css({
			"backgroundColor":"#00B2EE",
			"color":"#fff"
		});
		$(this).siblings('a').css({
			"backgroundColor":"#fff",
			"color":"#000"
		});
	});
	export default {
		name: 'Goods',
		data() {
			return {
				typeList:[],
			
			}
			
		},
		created: function() {
			console.log('请求商品分类');
			axios({
				method: "get",
				url: "http://localhost:9999/showtype"
			}).then(response => {
				console.log("发送Ajax请求成功");
				this.typeList = response.data;
				console.log(this.typeList)
			}).catch(response => {
				console.log("发送Ajax请求失败", response);
			})
 		},
		
		
	}
</script>

<style scoped>
	/* 标题内容 */
	.title {
		width: 180px;
		height: 70px;
		font-size: 24px;
		background-color: #00B2EE;
		color: #fff;
		border-radius: 50%;
		font-weight: bold;
		line-height: 70px;
		text-align: center;
		position: absolute;
		top: 10px;
		left: 30px;
	}
	/* 导航栏 */
	.nav {
		width: 100%;
		height: 8%;
		padding: 20px 0px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.nav a {
		text-decoration: none;
		font-size: 18px;
		padding: 10px 30px;
		color: #000;
		font-size: 16px;
	}
	.nav a:first-of-type {
		background-color: #00B2EE;
		color: #fff;
	}
	
</style>
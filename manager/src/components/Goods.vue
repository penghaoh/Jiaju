<template>
	<div>
		<div class="nav">
			<router-link v-for='item in myList' :to='item.url'>{{item.text}}</router-link>
		</div>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Goods',
		data() {
			return {
				myList: [
					{url:'/',text:'首页'},
					{url:'/soft',text:'沙发'},
					{url:'/chair',text:'椅凳'},
					{url:'/desk',text:'桌几'},
					{url:'/lamp',text:'灯具'},
					{url:'/tableware',text:'餐具'},
					{url:'/decoration',text:'装饰'}
				],
			};
		},
// 		created: function() {
// 			console.log('请求商品分类');
// 			axios({
// 				method: "get",
// 				url: "http://192.168.2.103:9999/selectAll"
// 			}).then(response => {
// 				console.log("发送Ajax请求成功");
// 				this.mydata = response.data;
// 				console.log(this.mydata)
// 			}).catch(response => {
// 				console.log("发送Ajax请求失败", response);
// 			})
// 		}
		
	}
</script>

<style>
	.nav {
		width: 100%;
		height: 8%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.nav a {
		text-decoration: none;
		font-size: 18px;
		margin: 0 10px;
	}
	.nav a:first-of-type {
		border-bottom: 1px solid #ccc;
	}
	.content {
		width: 100%;
		height: 92%;
		background-color: red;
	}
</style>

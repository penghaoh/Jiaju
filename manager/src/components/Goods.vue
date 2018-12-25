<template>
	<div>
		<div class="nav">
			<router-link :to="{path:'/goods',query:{typeid:''}}">全部</router-link>
			<router-link v-for='(item,index) in mydata' :to="{path:item.url,query:{typeid:item.type_id}}">{{item.name}}</router-link>
		</div>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'Goods',
		data() {
			return {
				mydata:[]
			}
			
		},
		methods: {
			getIndex:function(index){
				this.index = index;
			}
		},
		created: function() {
			console.log('请求商品分类');
			axios({
				method: "get",
				url: "http://192.168.1.6:9999/showtype"
			}).then(response => {
				console.log("发送Ajax请求成功");
				this.mydata = response.data;
				console.log(this.mydata)
			}).catch(response => {
				console.log("发送Ajax请求失败", response);
			})
 		}
		
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

<template>
	<div>
		<div class="nav">
			<router-link :to="{path:'/goods',query:{typeid:'0'}}">全部</router-link>
			<router-link  v-for='(item,index) in typeList'  :to="{path:item.url,query:{typeid:item.type_id}}">{{item.name}}</router-link>
		</div>
		<div class="nav">
			<button @click="add">增加商品</button>
		</div>
		<div class="content">
			<router-view></router-view>
		</div>
		<!-- 增加商品表格 -->
		<form action v-if="flag" id="wrap">
			typeid:
			<input type="text" name="typeid" v-model="pro.typeid">
			商品名称:
			<input type="text" name="name" v-model="pro.name">
			<br>价格:
			<input type="text" name="price" v-model="pro.price">
			图片:
			<input type="text" name="imgurl" v-model="pro.imgurl">
			<br>品牌:
			<input type="text" name="brand" v-model="pro.brand">
			产地:
			<input type="text" name="origin" v-model="pro.origin">
			<br>描述:
			<input type="text" name="descs" v-model="pro.descs">
			<button @click="addpro">提交</button>
		</form>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'Goods',
		data() {
			return {
				typeList:[],
				pro: {
					typeid: '',
					name: "",
					price: '',
					imgurl: "",
					brand: "",
					origin: "",
					descs: ""
				},
				flag: false
			}
			
		},
		methods: {
			add: function() {
				this.flag = !this.flag;
			},
			addpro: function() {
			console.log("lllll");
			console.log(this.pro)
				axios.post("http://localhost:9999/add", this.pro, {
						transformRequest: [
							function(data) {
								let params = "";
								for (let index in data) {
									params += index + "=" + data[index] + "&";
								}
								return params;
							}
						]
					})
					.then(response => {
						console.log("get发送Ajax请求成功", response.data);
						if (response.data == 1) {
							this.flag = !this.flag;
						}
					})
					.catch(response => {
						console.log("get发送Ajax请求失败", response);
					});
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
	#wrap {
	  position: relative;
	  z-index: 9999;
	  border: 1px solid black;
	  width: 500px;
	  height: 120px;
	  background-color: #ccc;
	}
</style>
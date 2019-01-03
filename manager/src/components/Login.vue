<template>
	<div class="block">
		<el-carousel height="600px" indicator-position='none' arrow='never' :interval="2000">
		  <el-carousel-item v-for="item in imgUrl" :key="item.url">
			<img :src="item.url" class='img' alt='hh' />
		  </el-carousel-item>
		</el-carousel>
		<div class="login-wrap">
			<h3>后台管理系统</h3>
			<input type="text" placeholder="请输入用户名" v-model="users.name">
			<input type="password" placeholder="请输入密码" v-model="users.pwd">
			<p v-show="showTishi">{{tishi}}</p>
			<button v-on:click="login">登录</button>
		</div>
  </div>
</template>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	.block {
		position: relative;
	}
	.img {
		width: 100%;
		height: 100%;
		opacity: 0.5;
	}
	.login-wrap {
		width: 300px;
		height: 300px;
		text-align: center;
		position: absolute;
		border: 1px solid black;
		box-shadow: 2px 2px 20px #333;
		top: 204px;;
		right: 118px;
		z-index: 10;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	input {
		display: block;
		width: 250px;
		height: 40px;
		line-height: 40px;
		outline: none;
		border: 1px solid #888;
		padding: 20px;
		box-sizing: border-box;
	}
	p {
		color: red;
	}
	button {
		display: block;
		width: 250px;
		height: 40px;
		line-height: 40px;
		margin: 0 auto;
		border: none;
		background-color: #41b883;
		color: #fff;
		font-size: 16px;
		margin-bottom: 5px;
	}

	span {
		cursor: pointer;
	}

	span:hover {
		color: #41b883;
	}
</style>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				showTishi: false,
				tishi: '',
				users: {
					name: '',
					pwd: ''
				},
				imgUrl: [
					{url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545372330156&di=936374530a1a298c6574b4e8e00294f0&imgtype=0&src=http%3A%2F%2F7xjgwh.com1.z0.glb.clouddn.com%2Fuploads%2Fphoto%2Fimage%2F34792%2FB2.jpg'},
					{url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545372734757&di=f3797d9de411d7e721398f49a62a1464&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201605%2F19%2F20160519090854_4ZCVy.jpeg'},
					{url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545372399444&di=6768a80b43214238154e48d5e7793cb7&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F05%2F11%2F18%2F0259905580732eb.jpg'},
					{url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545372734757&di=cac2784926fc60f18bb345faea303fc3&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01406058c51309a801219c77efbccd.jpg%402o.jpg'}
				]
			}
		},
		methods: {
			login: function() {
				console.log(this.users)
				axios.post('http://localhost:9999/login', this.users, {
					transformRequest: [
						function(data) {
							let params = '';
							for (let index in data) {
								params += index + "=" + data[index] + "&";
							}
							return params;
						}
					]
				}).then(response => {
					console.log(response.data);
					if (response.data == 'ok') {
						console.log("------")
							//我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
							sessionStorage.setItem("Flag", "isLogin");
							sessionStorage.setItem("userName", this.users.name);

					console.log("xxxx")
						this.$router.push({
							name: 'Main',
						});

						this.showTishi = false;
						this.tishi = '';
					} else {
						this.showTishi = true;
						this.tishi = '用户名或密码错误!';
					}
				}).catch(response => {
					console.log("请求失败");
				})
			}
		}
	}
</script>

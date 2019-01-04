<template>
	<div class="fixed">
		<img src="../assets/logo.png" alt="logo">
		<!-- 网站商品分类导航 -->
		<div id="nav-fixed" style="display: none;" >
			<router-link v-for='(item,index) in navwrapList' :to="{path:item.tourl,query:{typeid:index}}" :key="index">{{item.text}}</router-link>
		</div>
		<div class="login-name">
			<p>亲爱的：<span>{{name}}</span> 你好。</p>
		</div>
		<div class="info-fixed">
			<router-link v-for='(item,index) in linkList' :to="item.to" :key='index'>{{item.text}}</router-link>
		</div>
		<div class="loginwrap" style="display: none;" >
			<div class="son" @click="touser" @mouseover="enter1" @mouseleave="out1">
				<div class="list-select" v-if="flag">
					<ul>
						<li>会员中心</li>
						<li>我的订单</li>
						<li>我的优惠券</li>
						<li>我的晒单</li>
						<li>我的资料</li>
						<li @click="logout">退出账号</li>
					</ul>
				</div>
			</div>
			<div class="son" @click="go">
			</div>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	$(document).ready(function() {
			$(window).scroll(function(){
				var scrollPos=$(window).scrollTop();
				if(scrollPos <'198'){
					$("#nav-fixed").hide();
					$(".loginwrap").hide();
				}else{
					$("#nav-fixed").show();
					$(".loginwrap").show();
				}
			});
		});
	
	export default {
		name: 'Topfixed',
		data() {
			return {
				flag: false,
				name:sessionStorage.getItem('name'),
				navwrapList: [
					{text: '首页',tourl: '/'},
					{text: '沙发',tourl: '/sofa'},
					{text: '椅凳',tourl: '/chair'},
					{text: '桌几',tourl: '/table'},
					{text: '灯具',tourl: '/lamp'},
					{text: '餐具',tourl: '/tableware'},
					{text: '装饰',tourl: '/decoration'},
				],
				linkList: [{
						text: '了解一米',
						to: '/Know'
					},
					{
						text: '商业合作',
						to: '/Business'
					},
				],
			};
		},
		methods:{
				go(){
					 this.$router.push('shopcar')
				},
				touser(){
					if(!sessionStorage.getItem('name')){
	
						this.$router.push('login')
					}else{
						// this.flag = true
					}
				},
				out1(){
					 this.flag = false
				},
				enter1(){
					if(sessionStorage.getItem('name')){
						 this.flag = true
						
					}else{
						
					}
				},
				logout(){
						sessionStorage.clear()
						this.$router.push('/')
				}
			},
	}
</script>

<style scoped>
	.fixed {
		width: 90%;
		height: 50px;
		padding: 0 5%;
		line-height: 50px;
		position: fixed;
		top: 0;
		left: 0;
		background: #313131;
		display: flex;
		z-index: 999;
	}

	.fixed img {
		width: 9%;
/* 		position: relative;
		top: -3px; */
		margin-top: -3px;
		float: left;
	}
	#nav-fixed {
		float: left;
	}

	.fixed a {
		text-decoration: none;
		color: #fff;
		opacity: 0.8;
		font-size: 14px;
		line-height: 50px;
		padding: 0px 5px;
	}
	#nav-fixed a:hover,
	.info-fixed a:hover {
		border-bottom: 1px solid #fff;
	}
	#nav-fixed a {
		margin-right: 30px;
	}
	.info-fixed {
		position: absolute;
		top: 0;
		right: 156px;
	}
	.info-fixed a:first-of-type {
		margin-right: 30px;
	}
	.icon-fixed{
		float: right;
		
	}
	.icon-fixed a{
		display: inline-block;
		width: 15px;
		height: 20px;
		background-size: 100% 55%;
		background-repeat: no-repeat;
		position: relative;
		top: 14px;
		margin-left: 30px;
	}

	.icon-fixed .userinfo {
		background-image: url('https://img.zaozuo.com/8576f41b91454a9dcfe10117c7866da9');

	}

	.icon-fixed .shopcar {
		background-image: url('https://img.zaozuo.com/737626452b898ffba27f9ad288c80c09');
	}

	.icon-fixed .userinfo:hover {
		background-image: url('https://img.zaozuo.com/3eafa8a3062fd17672ae1bc4f605e679');
	}

	.icon-fixed .shopcar:hover {
		background-image: url('https://img.zaozuo.com/10de03eec28b15b7b71d2e583f160d61');
	}
	
	.loginwrap {
		width: 102px;
		height: 50px;
		position: absolute;
		right: 45px;
		top: 0px;
		display: flex;
		/* border: 1px solid black; */
	}
	.loginwrap .son {
		width: 32px;
		height: 32px;
		margin: 8px 10px;
			/* border: 1px solid black; */
	}
	.loginwrap .son:nth-of-type(1){
		background-image: url('https://img.zaozuo.com/8576f41b91454a9dcfe10117c7866da9');
		background-repeat: no-repeat;
		background-size: 30px 30px;
	}
	.loginwrap .son:nth-of-type(1):hover {
		background-image: url('https://img.zaozuo.com/3eafa8a3062fd17672ae1bc4f605e679');
	}
	.loginwrap .son:nth-of-type(2){
		background-image: url('https://img.zaozuo.com/737626452b898ffba27f9ad288c80c09');
		background-repeat: no-repeat;
		background-size: 32px 32px;
	}
	.loginwrap .son:nth-of-type(2):hover {
		background-image: url('https://img.zaozuo.com/10de03eec28b15b7b71d2e583f160d61');
	}
	
	.list-select ul{
		width: 120px;
		height: 187px;
		/* border:1px solid black; */
		position: absolute;
		top: 37px;
		right: 27px;
		z-index: 9999;
		
		/* display: none; */
	}
	.list-select ul li {
		background: rgba(49,49,49,.95);
	}
	.list-select ul li:hover {
		background: rgba(3, 3, 3, 0.95);
	}
	/* .loginwrap .son:nth-of-type(1):hover .list-select ul {
		display: block;
	} */
	.list-select li {
		list-style: none;
		width: 100%;
		height: 30px;
		border-bottom: #313131 1px solid;
		line-height: 30px;
	}
	.login-name {
		position: absolute;
		top: 0;
		right: 316px;
		opacity: 0.8;
	}
</style>

<template>
	<div id="top">
		<!-- 网站顶部导航 -->
		<div class="topinfo">
			<router-link v-for='(item,index) in linkList' :to="item.to" :key='index'>{{item.text}}</router-link>
		</div>
		<!-- logo -->
		<div class="title">
			<!-- <h1>造作ZAOZUO</h1> -->
			<img src="../assets/logo1.png" alt="一米官网">
			<div class="login-wrap">
				<a href="#" class="userinfo">
					<div class="userimg"></div>
				</a>
				<a href="#" class="shopcar">
					<div class="carimg"></div>
				</a>
			</div>
		</div>
		<!-- 网站商品分类导航 -->
		<div class="navwrap-list">
			<router-link v-for='(item,index) in navwrapList' :to="item.tourl" :key='index'>{{item.text}}</router-link>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	$(document).ready(function() {
		$(window).scroll(function() {
			var scrollPos = $(window).scrollTop();
			if (scrollPos >=200) {
				$("#top").addClass("fixed");
			} else {
				$("#top").removeClass("fixed");
			}
		});
	});
	
	export default {
		name: 'Top',
		data() {
			return {
				isShow: false,
				linkList: [
					{text: '了解一米',to: '/Know'},
					{text: '商业合作',to: '/Business'},
				],
				navwrapList:[
					{text: '首页',tourl: '/'},
					{text: '沙发',tourl: '/sofa'},
					{text: '椅凳',tourl: '/chair'},
					{text: '桌几',tourl: '/table'},
					{text: '灯具',tourl: '/lamp'},
					{text: '餐具',tourl: '/tableware'},
					{text: '装饰',tourl: '/decoration'},
				]
			};
		}
	}
</script>

<style>
	#top {
		width: 100%;
		height: auto;
		color: #fff;
	}

	/* 网站顶部导航 */
	#top .topinfo {
		width: 100%;
		height: 36px;
		line-height: 36px;
		background: #313131;
	}
	.topinfo a {
		position: relative;
		left: 420px;
		text-decoration: none;
		color: #fff;
		margin: 0 15px;
		font-size: 8px;
		padding: 5px;
	}
	.topinfo a:hover {
		border-bottom: 1px solid #fff;
	}

	/* 网站商品分类导航 */
	#top .title {
		background: #fff;
		width: 1035px;
		height: 86px;
		position: relative;
		margin: 0 auto;
		padding-top: 40px;
	}

	.title img {
		width: 500px;
		height: 86px;
		margin-left: 266px;
	}

	/* 用户名/购物车板块 */
	.login-wrap {
		width: 150px;
		height: 36px;
		position: absolute;
		right: 0;
		top: 40px;
	}

	.login-wrap .userinfo,
	.login-wrap .shopcar {
		display: inline-block;
		margin: 1px 5px 0px 0px;
	}

	.login-wrap div {
		width: 25px;
		height: 25px;
		background-size: cover;
	}

	.userinfo .userimg {
		background-image: url('https://img.zaozuo.com/3bcb4add67f393bebb306aa55256415c');
	}

	.userinfo .userimg:hover {
		background-image: url('https://img.zaozuo.com/9f64cd4e8f3142c1cf18c3231045cbc4');
	}

	.shopcar .carimg {
		margin-left: 35px;
		background-image: url('https://img.zaozuo.com/1363eda9399f6bae961b8d5058ee05da');
	}

	.shopcar .carimg:hover {
		background-image: url('https://img.zaozuo.com/265d0a87879cd9920673e968429acdba');
	}

	/* 头部固定布局导航 */
	.fixed {
		width: 100%;
		height: 50px;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		background: #313131;
		display: flex;
	}
	/* 商品列表导航模块 */
	.navwrap-list {
		width: 1035px;
		height: 36px;
		margin: 36px auto 0;
	}
	.navwrap-list a {
		display: inline-block;
		height: 36px;
		padding: 0 25px;
		text-decoration: none;
		font-size: 14px;
		line-height: 36px;
		color: #313131;
		font-weight: bold;
	}
	.navwrap-list a:hover {
		background-color: #000;
		color: #fff;
	}
	.navwrap-list a:first-of-type {
		border-bottom: 3px solid #000;
	}
</style>

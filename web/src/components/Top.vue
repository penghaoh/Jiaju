<template>
	<div id="top">
		<!-- 网站顶部导航 -->
		<div class="topinfo">
			<ul class="toplist">
				<li>
					<a href="#">了解造作</a>
				</li>
				<li>
					<a href="#">商业合作</a>
				</li>
			</ul>
		</div>
		<!-- 网站商品分类导航 -->
		<div class="title">
			<!-- <h1>造作ZAOZUO</h1> -->
			<img src="../assets/logo.png" alt="一米官网">
			<div class="login-wrap">
				<a href="#" class="userinfo">
					<div class="userimg"></div>
				</a>
				<a href="#" class="shopcar">
					<div class="carimg"></div>
				</a>
			</div>
		</div>
		<!-- 头部固定导航  198px-->
		<div class="fixedTop">
			abcgdcidcklf
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	 $(document).ready(function() {
            $(window).scroll(function(){
                var scrollPos=$(window).scrollTop();
                if(scrollPos >='198'){
					$(".fixedTop").show()
                }else{
					$(".fixedTop").hide()
                }
            });
        });

	export default {
		name: 'Top',
		data() {
			return {
				isShow:false
				
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
		background: #313131;
	}
	.toplist {
		width: 300px;
		height: 33px;
		list-style: none;
		display: flex;
		flex-direction: row;
		position: absolute;
		top: 0;
		right: 50px;
	}
	.toplist li {
		margin-left: 30px;
		line-height: 30px;
	}
	.toplist li a {
		display: inline-block;
		font-size: 8px;
		text-decoration: none;
		color: #fff;
	}
	.toplist li a:hover {
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
		width: 152px;
		height: 86px;
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
	.login-wrap .shopcar{
		display: inline-block;
		margin: 1px 5px 0px 0px;
	}
	.login-wrap div {
		width: 25px;
		height: 25px;
		background-size: cover;
	}
	.userinfo  .userimg {
		background-image: url('https://img.zaozuo.com/3bcb4add67f393bebb306aa55256415c');
	}
	.userinfo  .userimg:hover {
		background-image: url('https://img.zaozuo.com/9f64cd4e8f3142c1cf18c3231045cbc4');
	}
	
	.shopcar .carimg{
		margin-left: 35px;
		background-image: url('https://img.zaozuo.com/1363eda9399f6bae961b8d5058ee05da');
	}
	.shopcar  .carimg:hover {
		background-image: url('https://img.zaozuo.com/265d0a87879cd9920673e968429acdba');
	}
	/* 头部固定布局导航 */
	.fixedTop {
		width: 100%;
		height: 50px;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		background: #313131;
	}
</style>

<template>
	<div id="top">
		<!-- 网站顶部导航 -->
		<div class="topinfo">
			<!-- <ul class="toplist">
				<li>
					<a href="#">了解造作</a>
				</li>
				<li>
					<a href="#">商业合作</a>
				</li>
				<li>
					<a href="#">{{name}}</a>
				</li>
			</ul> -->
			<router-link v-for='(item,index) in linkList' :to="item.to" :key='index'>{{item.text}}</router-link>
		</div>
		<!-- 网站商品分类导航 -->
		<div class="title">
			<!-- <h1>造作ZAOZUO</h1> -->
			<!-- <img src="../assets/logo.png" alt="一米官网"> -->
			<div class="login-wrap">
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
		<!-- 头部固定导航  198px-->
		<!-- <div class="fixedTop">
			abcgdcidcklf
		</div> -->
		<topfixed id='top-fixed'></topfixed>
	</div>
</template>

<script>
import Topfixed from './Topfixed';
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
		components: {
			topfixed: Topfixed
		},
		data() {
			return {
				isShow:false,
				name:sessionStorage.getItem('name'),
				flag:false,
				linkList: [{
						text: '了解一米',
						to: '/Know'
					},
					{
						text: '商业合作',
						to: '/Business'
					},
				],
				navwrapList: [{
						text: '首页',
						tourl: '/'
					},
					{
						text: '沙发',
						tourl: '/sofa'
					},
					{
						text: '椅凳',
						tourl: '/chair'
					},
					{
						text: '桌几',
						tourl: '/table'
					},
					{
						text: '灯具',
						tourl: '/lamp'
					},
					{
						text: '餐具',
						tourl: '/tableware'
					},
					{
						text: '装饰',
						tourl: '/decoration'
					},
				]
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
		created:function(){
			// sessionStorage.setItem('num',0)
			// this.num = sessionStorage.getItem('num')
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
		/* height: 86px; */
		position: relative;
		margin: 0 auto;
		/* padding-top: 40px; */
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
		right: -170px;
		top: 33px;
		display: flex;
		/* border: 1px solid black; */
	}
	.login-wrap .son {
		width: 49%;
		height: 34px;
			/* border: 1px solid black; */
	}
	.login-wrap .son:nth-of-type(1){
		background-image: url('https://img.zaozuo.com/3bcb4add67f393bebb306aa55256415c');
		background-repeat: no-repeat;
		background-size: 34px 34px;
		margin-right: 20px;
	}
	.login-wrap .son:nth-of-type(1):hover {
		background-image: url('https://img.zaozuo.com/9f64cd4e8f3142c1cf18c3231045cbc4');
	}
	.login-wrap .son:nth-of-type(2){
		background-image: url('https://img.zaozuo.com/1363eda9399f6bae961b8d5058ee05da');
		background-repeat: no-repeat;
		background-size: 34px 34px;
	}
	.login-wrap .son:nth-of-type(2):hover {
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
	
	.list-select ul{
		width: 120px;
		height: 187px;
		border:1px solid black;
		position: absolute;
		top: 37px;
        right: 78px;
		z-index: 9999;
		
		/* display: none; */
	}
	.list-select ul li {
		background: rgba(49,49,49,.95);
	}
	.list-select ul li:hover {
		background: rgba(3, 3, 3, 0.95);
	}
	/* .login-wrap .son:nth-of-type(1):hover .list-select ul {
		display: block;
	} */
	.list-select li {
		list-style: none;
		width: 100%;
		height: 30px;
		border-bottom: #313131 1px solid;
		line-height: 30px;
	}
</style>

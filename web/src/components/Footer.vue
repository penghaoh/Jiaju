<template>
	<div id="myfooter">
		<div class="connect">
			<div class="left">
				<div class="logo">
					<img src="../assets/logo.png" alt="一米官网">
					<p>yimi.com</p>
				</div>
				<a href="#" class="wechat"></a>
				<a href="#" class="weibo"></a>
			</div>
			<div class="middle">
				<footerlist :list='footerListone'></footerlist>
				<footerlist :list='footerListtwo'></footerlist>
				<footerlist :list='footerListthree'></footerlist>
			</div>
			<div class="right">
				<a href="#">联系我们</a>
				<p>400-6636-926<span>（9:00~21:00）</span></p>
				<div>在线客服</div>
			</div>
		</div>
		<div class="bottom">
			<p>Copyright © 2018 yimi.com Inc.All Rights Reserved. 四川一米科技有限公司</p>
			<p>版权所有 京ICP备14444441号-1 增值电信业务经营许可证：京ICP证123456号</p>
			<p>一米官网-为你的生活制造惊喜</p>
		</div>
		
	</div>
</template>

<script>
	import Footerlist from './Footerlist'
	export default {
		name: 'Footer',
		data() {
			return {
				footerListone: [
					{text:'关于一米',herf: '#'},
					{text:'团队介绍',herf: '#'},
					{text:'设计师团',herf: '#'},
					{text:'媒体报道',herf: '#'},
					{text:'加入一米',herf: '#'},
					{text:'Designer Hiring',herf: '#'},
				],
				footerListtwo: [
					{text:'帮助中心',herf: '#'},
					{text:'购物指南',herf: '#'},
					{text:'订单管理',herf: '#'},
					{text:'常见问题',herf: '#'},
				],
				footerListthree: [
					{text:'服务支持',herf: '#'},
					{text:'服务保障',herf: '#'},
					{text:'用户协议',herf: '#'},
					{text:'物流售后服务',herf: '#'}
					
				]
				
			};
		},
		components: {
			'footerlist': Footerlist
		}
	}
</script>

<style>
	#myfooter {
		width: 100%;
		height: auto;
		background: #1b1b1b;
		padding: 90px 0 70px;
	}
	.connect {
		display: flex;
		flex-direction: row;
		width: 1035px;
		height: auto;
		margin: 0 auto;
		box-sizing: border-box;
		border-bottom: 1px solid #a0a0a0;
	}
	/* 左边 */
	.left {
		width: 20%;
		border-right: 1px solid #fff;
		box-sizing: border-box;
	}
	.left .logo {
		width: 100%;
		height: auto;
		padding: 10px 0px 0px 5px;
	}
	.left>img {
		width: 100%;
		height: 31px;
	}
	.left .logo p {
		line-height: 30px;
		font-weight: 400;
		font-size: 20px;
		color: #fff;
	}
	.left>a {
		display: inline-block;
		width: 40px;
		height: 40px;
		background-size: 100%;
		margin: 35px 0px 0px 5px;
		
	}
	.left .wechat{
		background-image: url(../assets/wx-off.png);
	}
	.left .wechat:hover {
		background-image: url(../assets/wx-on.png);
	}
	.left .weibo{
		background-image: url(../assets/wb-off.png);
	}
	.left .weibo:hover {
		background-image: url(../assets/wb-on.png);
	}
	/* 中间 */
	.middle {
		width: 40%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		box-sizing: border-box;
		border-right: 1px solid #fff;
	}
	/* 右边 */
	.right {
		box-sizing: border-box;
		width: 40%;
		text-align: left;
		padding: 10px 40px;
	}
	.right a {
		margin-bottom: 10px;
		line-height: 30px;
		padding-top: 5px;
		color: #a0a0a0;
		font-size: 14px;
		text-decoration: none;
	}
	.right p {
		margin-bottom: 10px;
		font-size: 22px;
		line-height: 32px;
		font-weight: 400;
		color: #fff;
	}
	.right p span {	
		font-size: 14px;
		margin-left: 20px;
	}
	.right div {
		width: 80px;
		height: 28px;
		margin: 10px 0 15px;
		border: 1px solid #fff;
		color: #fff;
		line-height: 28px;
		text-align: center;
		border-radius: 10px;
	}
	.bottom {
		width: 100%;
		height: 72px;
		padding-top: 35px;
	}
	.bottom p {
		line-height: 24px;
		font-size: 12px;
		color: #fff;
	}
</style>

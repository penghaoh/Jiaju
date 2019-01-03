<template>
	<div class="fixed">
		<img src="../assets/logo.png" alt="logo">
		<!-- 网站商品分类导航 -->
		<div class="nav-fixed">
			<router-link v-for='(item,index) in navwrapList' :to="item.tourl" :key='index'>{{item.text}}</router-link>
		</div>
		<div class="info-fixed">
			<router-link v-for='(item,index) in linkList' :to="item.to" :key='index'>{{item.text}}</router-link>
		</div>
		<div class="icon-fixed">
			<a href="#" class="userinfo"></a>
			<a href="#" class="shopcar"></a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Topfixed',
		data() {
			return {
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
		}
	}
</script>

<style>
	.fixed {
		width: 100%;
		height: 50px;
		line-height: 50px;
		margin: 0 auto;
		position: fixed;
		top: 0;
		left: 0;
		background: #313131;
		display: flex;
		z-index: 999;
	}

	.fixed img {
		width: 9%;
		margin-left: 75px;
		position: relative;
		top: -3px;
	}

	.fixed a {
		text-decoration: none;
		color: #fff;
		opacity: 0.8;
		font-size: 14px;
		padding: 10px 5px;
	}

	.nav-fixed a:hover,
	.info-fixed a:hover {
		border-bottom: 1px solid #fff;
	}

	.nav-fixed a {
		margin-right: 30px;
	}

	.info-fixed a:first-of-type {
		margin: 0 30px 0 270px;
	}

	.icon-fixed a {
		display: inline-block;
		width: 20px;
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
</style>

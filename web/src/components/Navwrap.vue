<template>
	<div id="navwrap">
		<div class="navwrap-list">
			<router-link v-for='(item,index) in navwrapList' :to="{path:item.tourl,query:{typeid:index}}" :key="index">{{item.text}}</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'navwrapwrap',
		data() {
			return {
				navwrapList:[
					{text: '首页',tourl: '/'},
					{text: '沙发',tourl: '/sofa'},
					{text: '椅凳',tourl: '/chair'},
					{text: '桌几',tourl: '/table'},
					{text: '灯具',tourl: '/lamp'},
					{text: '餐具',tourl: '/tableware'},
					{text: '装饰',tourl: '/decoration'},
				]
				
				
			}
		}
	}
</script>

<style>
	#navwrap {
		width: 100%;
		height: auto;
		position: relative;
		
	}
	/* 商品列表导航模块 */
	#navwrap .navwrap-list {
		width: 1035px;
		height: 36px;
		margin: 0 auto;
	}
	#navwrap .navwrap-list a {
		display: inline-block;
		height: 36px;
		padding: 0 25px;
		text-decoration: none;
		font-size: 14px;
		line-height: 36px;
		color: #313131;
		font-weight: bold;
	}
	#navwrap .navwrap-list a:hover {
		background-color: #000;
		color: #fff;
	}
	#navwrap .navwrap-list a:first-of-type {
		border-bottom: 3px solid #000;
	}
	
</style>

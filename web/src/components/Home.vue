<template>
	<div class="box">
		<!-- 头部 -->
		<top></top>
		<!-- 导航内容区 -->
		<navwrap></navwrap>
		<!-- 底部 -->
		<myfooter></myfooter>
	</div>
</template>

<script>
	import Top from './Top';
	import Navwrap from './Navwrap';
	import Footer from './Footer';
	import $ from 'jquery';
	export default {
		name: 'Home',
		data() {
			return {
				
			};
		},
		components: {
			top: Top,
			navwrap: Navwrap,
			myfooter: Footer
		},
		created:function(){
			sessionStorage.setItem('num',0);
			var goodscomponent = $('.goodscomponent');
			console.log(goodscomponent)
		}
	}
</script>

<style>
	.box {
		display: flex;
		flex-direction: column;
	}

</style>

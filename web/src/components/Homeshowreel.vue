<template>
	<div class="container">
		<!-- 作品集 -->
		<div id="showreel">
			<!-- 标题 -->
			<div class="showreel-title">
				<h2>{{title}}</h2>
				<p>{{text}}</p>
			</div>
			<!-- 产品 -->
			<div class="showreel-list" >
				<!-- 产品组件 -->
				<showgoods></showgoods>
			</div>
		</div>
	</div>
</template>

<script>
	import Showgoods from './Showgoods';
	export default {
		props: {
			title:String,
			text:String
		},
		name: 'Homeshowreel',
		data() {
			return {
				
				
			};
		},
		components: {
			showgoods: Showgoods
		}
		
	}
</script>

<style scoped>
	/* 作品集 */
	.container {
		width: 100%;
		height: auto;
	}
		
	#showreel {
		margin: 0 auto;
		width: 1035px;
		height: auto;
		padding: 60px 0px 45px;
		position: relative;
	}
	.showreel-title h2 {
		font-size: 24px;
		line-height: 24px;
	}
	.showreel-title p {
		font-size: 13px;
		line-height: 20px;
		padding: 8px 0px;
		color: #707070;
	}
	.showreel-list {
		width: 100%;
	}
	
</style>

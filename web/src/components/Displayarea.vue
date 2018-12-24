<template>
	<div id="displayplat">
		<dl>
			<dt>{{title}}</dt>
		</dl>
		<!-- 分类展示区域 -->
		<showgoods></showgoods>
	</div>
</template>

<script>
	import Showgoods from './Showgoods';
	export default {
		props: {
			title: String
		},
		name: 'Displayarea',
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
	#displayplat {
		width: 100%;
		height: auto;
		margin-bottom: 45px;
	}
	#displayplat dl {
		text-align: left;
		height: 45px;
		border-bottom: 1px solid #ccc;
		line-height: 45px;
	}
	#displayplat>dl>dt {
		font-weight: 700;
	}
		
		
</style>

<template>
	<div>
		<div class="nav">
		<router-link v-for='item in myList' :to='item.url'>{{item.text}}</router-link>
		</div>
		<div class="content">
		<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Goods',
		data() {
			return {
				myList: [
					{url:'/soft',text:'沙发'},
					{url:'/chair',text:'椅凳'},
					{url:'/desk',text:'桌几'}
				],
			};
		}
	}
</script>

<style>
	.nav {
		width: 100%;
		height: 5%;
		background-color: #0000FF;
	}
	
	.content {
		width: 100%;
		height: 95%;
		background-color: red;
	}
</style>

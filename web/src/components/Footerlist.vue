<template>
	<div class="footerlist">
		<ul class="middle-info">
			<li v-for='(item,index) in list' :key="index">
				<a :href="item.herf">{{item.text}}</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			list:Array
		},
		name: 'Footerlist',
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.footerlist {
		width: 120px;
	}
	.middle-info {
		list-style: none;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		text-align: center;
	}
	.middle .middle-info li a {
		font-size: 12px;
		line-height: 34px;
		text-decoration: none;
		color: #d2d2d2;
	}
	.middle .middle-info li a:hover {
		color: #fff;
	}
	.middle .middle-info li:first-of-type a {
		padding-bottom: 10px;
		margin-bottom: 10px;
		color: #a0a0a0;
		line-height: 40px;
		border-bottom: #a0a0a0 1px solid;
	}
	
</style>

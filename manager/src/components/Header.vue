<template>
	<div id="top">
		<p>{{name}}</p>
	</div>
</template>

<script>
	export default {
		name: 'Header',
		data() {
			return {
				name : this.$route.params.name
			};
		}
	}
</script>

<style>
	#top {
		width: 100%;
		height: 50px;
		background-color: yellow;
	}
</style>

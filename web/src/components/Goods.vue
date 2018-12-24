<template>
	<div class="products">
		<showgoods></showgoods>
	</div>
</template>
<script>
	import Showgoods from './Showgoods'
	import Footer from './Footer'
	export default {
		name: 'Goods',
		data() {
			return {
				
			};
		},
		components: {
			showgoods: Showgoods,
			myfooter: Footer
		}
	}
</script>

<style scoped>
	.products {
		width: 1035px;
		height: auto;
		margin: 0px auto;
	}

</style>

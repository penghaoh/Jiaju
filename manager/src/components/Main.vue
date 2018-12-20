<template>
	<div>
		<myheader></myheader>
		<asider></asider>
		<myfooter></myfooter>
	</div>
</template>
<script>
	import Header from './Header';
	import Asider from './Asider';
	import Footer from './Footer';
	export default {
		name: 'Main',
		data() {
			return {
				
			};
		},
		components: {
			'myheader': Header,
			'asider': Asider,
			'myfooter': Footer
		}
	}
</script>

<style>

</style>

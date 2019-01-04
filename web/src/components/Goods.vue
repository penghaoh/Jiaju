<template>
	<div class="products">
		<!-- <showgoods :typeid='typeid'></showgoods> -->
		<showgoods :proList='proList'></showgoods>
		<input type="hidden" :value='this.$route.query.typeid'>
	</div>
</template>
<script>
import axios from 'axios'
	import Showgoods from './Showgoods'
	import Footer from './Footer'
	export default {
		name: 'Goods',
		data() {
			return {
				typeid:0,
				proList:[]
			};
		},
		components: {
			showgoods: Showgoods,
			myfooter: Footer
		},
		watch:{
			typeid:function(){
				console.log('--------------------',this.typeid);
				axios.get('http://localhost:9999/selectpros', {
              params: {
											typeid: this.typeid
              }
          })
          .then(response => {
            // console.log("get发送Ajax请求成功", response.data);
            this.proList = response.data;
          })
          .catch(response => {
            console.log("get发送Ajax请求失败", response);
          });
			}
		},
		created: function() {
				this.typeid=this.$route.query.typeid
		},
		beforeUpdate: function() {
				this.typeid=this.$route.query.typeid
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

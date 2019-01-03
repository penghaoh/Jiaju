<template>
	<div id="displayplat">
		<dl>
			<dt>{{title}}</dt>
			<input class="orders" type="hidden" :value='orders'>
		</dl>
		<!-- 分类展示区域 -->
		<showgoods :proList='proList'></showgoods>
	</div>
</template>

<script>
	import Showgoods from './Showgoods';
	import $ from 'jquery';
	import axios from 'axios'
	export default {
		props: {
			title: String,
			orders:Number
		},
		name: 'Displayarea',
		data() {
			return {
				// order:0,
				proList:[],
				typeid:this.orders
			};
		},
		components: {
			showgoods: Showgoods
		},
		watch:{
			typeid:function(){
				console.log(typeid)
			}
		},
		created:function(){
			// console.log(this.typeid)
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

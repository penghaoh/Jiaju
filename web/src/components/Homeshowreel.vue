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
				<showgoods :proList='proList'></showgoods>
			</div>
		</div>
	</div>
</template>

<script>
	import Showgoods from './Showgoods';
	import axios from 'axios';
	export default {
		props: {
			title:String,
			text:String
		},
		name: 'Homeshowreel',
		data() {
			return {
				proList:[]
				
			};
		},
		components: {
			showgoods: Showgoods
		},
		created:function(){
			axios.get('http://localhost:9999/showDefiningGoodsweb', {
              params: {
             
                  }
          })
          .then(response => {
			// console.log("get发送Ajax请求成功", response.data);
				var arr = [];
			
			if(this.title == 'Z Signature 定义作品集'){
				for(var i = 0;i<response.data.length;i++){
					if(response.data[i].defineid == 2){
						arr.push(response.data[i])
					}
				}
				// console.log(arr)
				 this.proList = arr;
			}else{
				for(var i = 0;i<response.data.length;i++){
					if(response.data[i].defineid == 1){
						arr.push(response.data[i])
					}
				}
				// return arr;
				 this.proList = arr;
			}
			// console.log(arr)
           
          })
          .catch(response => {
            console.log("get发送Ajax请求失败", response);
          });
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

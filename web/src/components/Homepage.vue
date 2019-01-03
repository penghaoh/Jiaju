<template>
	<div class="homepage">
		<!-- 轮播图 -->
		<homeslide></homeslide>
		<!-- 作品集 -->
		<homeshowreel :title='showreel' :text='showreeltext'></homeshowreel>
		<!-- 图片区 -->
		<homeimg></homeimg>
		<!-- 新品发布态 -->
		<homeshowreel :title='newpro' :text='newprotext'></homeshowreel>
		<!-- 信息 -->
		<div class="storeinfo">
			<div class="info-context">
				<div>
					<div>
					</div>
				</div>
			</div>
		</div>
		<!-- 商品分类展示区 -->
		<div id="displayarea">
			<h2>全品目录/签名设计正品</h2>
			<displayarea v-for='(item,index) in goodsType' :title='item.title' :orders='index+1' :key="index"></displayarea>
		</div>
		<!-- 评价晒单 -->
		<homeremark></homeremark>
	</div>
</template>

<script>
	import Homeslide from './Homeslide';
	import Homeshowreel from './Homeshowreel';
	import Homeimg from './Homeimg';
	import Displayarea from './Displayarea';
	import Homeremark from './Homeremark'
	export default {
		name: 'Homepage',
		data() {
			return {
				showreel:'Z Signature 定义作品集',
				showreeltext: '有人说造作是家居设计界的G20，其实我们更关心如何从大师走到大众',
				newpro:'Z Runway 新品发布台',
				newprotext: '入手大牌设计师正品，不必溢价，从设计到制造直线到家',
				goodsType: [
					{title:'沙发'},
					{title:'椅凳'},
					{title:'桌几'},
					{title:'灯具'},
					{title:'餐具'},
					{title:'装饰'}
				]
				
			};
		},
		components: {
			homeslide:Homeslide,
			homeshowreel:Homeshowreel,
			homeimg: Homeimg,
			displayarea: Displayarea,
			homeremark: Homeremark
		}
	}
</script>

<style>
	/* 信息 */
	.storeinfo {
		width: 100%;
		height: 210px;
		margin: 15px 0px;
		background-color: #13CE66;
	}
	.info-context {
		margin: 18px auto 30px;
		height: auto;
		background-color: #0000FF;
	}
	/* 商品分类展示区 */
	#displayarea {
		text-align: center;
		margin: 0 auto;
		width: 1035px;
		height: auto;
		border-bottom: 10px solid #ccc;
	}
	#displayarea h2 {
		font-size: 24px;
		line-height: 24px;
		margin: 0 auto 24px;
	}
	
	
	
</style>

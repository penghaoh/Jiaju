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
				<div class="home-wrap">
					<div class="wrap-img"></div>
					<div class="wrap-title">
						<p>27国/百位设计大师的</p>
						<p>签名正品</p>
					</div>
				</div>
				<div class="home-wrap">
					<div class="wrap-img"></div>
					<div class="wrap-title">
						<p>100+精工大厂/100%手检</p>
						<p>欧标质造</p>
					</div>
				</div>
				<div class="home-wrap">
					<div class="wrap-img"></div>
					<div class="wrap-title">
						<p>满¥199</p>
						<p>免费送装</p>
					</div>
				</div>
				<div class="home-wrap">
					<div class="wrap-img"></div>
					<div class="wrap-title">
						<p>延期高利补偿/确保</p>
						<p>准时交付</p>
					</div>
				</div>
				<div class="home-wrap">
					<div class="wrap-img"></div>
					<div class="wrap-title">
						<p>价格保障/变动返差价</p>
						<p>7日保价</p>
					</div>
				</div>
				<div class="home-wrap">
					<div class="wrap-img"></div>
					<div class="wrap-title">
						<p>三年质保</p>
						<p>7日退换</p>
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
		height: 300px;
		margin: 15px 0px;
		/* background-color: #13CE66; */
		background-image: url(https://img.zaozuo.com/51243d23e262cc17888c60504736a270);
	}
	.info-context {
		margin: 18px auto 30px;
		height: 297px;
		/* background-color: #0000FF; */
		/* border:1px solid black; */
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.info-context .home-wrap{
		width: 200px;
		height: 150px;
		/* border:1px solid white; */
		
	}
	.home-wrap .wrap-img{
		width: 64px;
		height: 64px;
		/* border:1px solid white; */
		margin: 0 auto;
		background-image: url(https://css.zaozuo.com/static/imgs/icon-50-aboutzz-second_d78fb26.png);
		background-repeat: no-repeat;
		background-position: 0 0; 
	}
	.home-wrap:nth-of-type(2) .wrap-img{
	    background-position: -62px 0; 
	}
	.home-wrap:nth-of-type(3) .wrap-img{
	    background-position: -128px 0; 
	}
	.home-wrap:nth-of-type(4) .wrap-img{
	    background-position: -192px 0; 
	}
	.home-wrap:nth-of-type(5) .wrap-img{
	    background-position: -254px 0; 
	}
	.home-wrap:nth-of-type(6) .wrap-img{
	    background-position: -320px 0; 
	}
	.wrap-title p:nth-of-type(1){
		margin-top: 6px;
		color: aliceblue;
	}
	.wrap-title p:nth-of-type(2){
		margin-top: 10px;
		color: aliceblue;
		font-size: 26px;
		font-weight: 400;
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

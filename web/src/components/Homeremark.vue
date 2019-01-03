<template>
	<div class="homeremark">
		<h2 class="remarktitle">精选生活家晒单/证言造作美学</h2>
		<div id="remarkcontent" >
			<a href="#" class="remarklist" v-for="(item,index) in remarkList" :key='index'>
				<img class="remarkimg" :src="item.imgsrc" alt="#" >
				<div class="remarkhover" style="opacity: 0;">
					<img :src="item.imgicon" alt="#">
					<p>{{item.desc}}</p>
				</div>
			</a>
			
			
		</div>
		<a href="https://www.zaozuo.com/favoriteboxes_283" class="moreremark">查看更多晒单</a>
	</div>
</template>
<script>
	import $ from 'jquery';
	$(document).on("mouseenter",".remarklist",function(){
		$(this).find('.remarkimg').css("opacity",0.1);
		$(this).find('.remarkhover').css("opacity",1)
	});
	$(document).on("mouseleave",".remarklist",function(){
		$(this).find('.remarkimg').css("opacity",1);
		$(this).find('.remarkhover').css("opacity",0)
	});
	export default {
		name: 'Homeremark',
		data() {
			return {
				remarkList: [
					{imgsrc:'https://img.zaozuo.com/8a2e94cf4fb9fce10a1089754708f0d2@!small',
					imgicon:'https://img.zaozuo.com/4ed4f1a084647f44adb031a1b53a168b@!small',
					desc:'沙发用料做工都很好，设计也是我想要的风格，也懒的去市场看，直接造作下单，物流很快，还直接送入户'},
					{imgsrc:'https://img.zaozuo.com/u/77016/abbe7938b74908931a5735ef8061dbf3@!small',
					imgicon:'https://img.zaozuo.com/221527e5727e8f918c622a4b8b073856@!small',
					desc:'因为家里是北欧风格的装修，所以在挑选时，特地选择了最百搭的白色，用来做书桌，很有设计感。'},
					{imgsrc:'https://img.zaozuo.com/dca34e278216ffdf114961e2989a6c5a@!small',
					imgicon:'https://img.zaozuo.com/d4c03576ebe36c9d2d260150b4c5bc80@!small',
					desc:'简洁，大方，百搭，我喜欢的风格，还没有入住，简单放点餐具就那么美，期待以后可以搭配我美美的餐具过好每一天'},
					{imgsrc:'https://img.zaozuo.com/u/135240/5a4efa5eebc8b530f619aeb4da1690ca@!small',
					imgicon:'https://img.zaozuo.com/788a83e354b27051be01b54b72f2d6bf@!small',
					desc:'黑色光龙，柔和亮度也够，无论是晚上的氛围还是聚餐时的亮度，都很不错。后来陆续又收了好几件东西'},
					{imgsrc:'https://img.zaozuo.com/u/123619/11ee901412e437b8636854dc2c070142@!small',
					imgicon:'https://img.zaozuo.com/e2afb9586fa9974bdf1aa716efa4835a@!small',
					desc:'超爱的圆周率花瓶，放哪里都超美。随便插枝花进去就很搭了，好喜欢，等下再收别的颜色。'}
				]
				
			};
		},
		methods: {
			
		},
	};
	
	
</script>

<style>
	.homeremark {
		width: 100%;
		height: auto;
		
	}
	.remarktitle {
		padding-top: 60px;
		font-size: 24px;
		line-height: 24px;
	}
	#remarkcontent {
		margin-top: 30px;
		display: flex;
		flex-direction: row;
	}
	#remarkcontent a {
		position: relative;
		display: inline-block;
		margin-right: 6px;
	}
	#remarkcontent a,
	#remarkcontent a .remarkimg,
	#remarkcontent a .remarkhover {
		width: 268px;
		height: 268px;
	}
	#remarkcontent a .remarkhover {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		
	}
	.remarkhover img {
		width: 90px;
		height: 90px;
		border: 4px solid #000;
		margin: 22px auto 0px;
	}
	.remarkhover p {
		margin-top: 10px;
		width: 60%;
		height: 54px;
		margin: 15px auto 0;
		font-size: 13px;
		line-height: 18px;
		color: #313131;
	}
	.moreremark {
		display: block;
		width: 500px;
		height: 50px;
		margin: 50px auto;
		text-decoration: none;
		line-height: 50px;
		border: #313131 2px solid;
		color: #313131;
	}
</style>

<template>
	<div class="goodscomponent">
		<div class="goods" v-for='(item,index) in proList' :id="index" :key='index'>
			<!-- 图片区域 -->
			<a class="goodslink" href="#" >
				<img :src="item.imgsrc" :alt="item.name" >
				<!-- 鼠标滑过时出现的结构 -->
				<div  class="hoveractive" style="opacity: 0;">
					<p>{{item.desc}}</p>
				</div>
			</a>
			<!-- 文字展示区域 -->
			<dl class="goodsdesc" >
				<dd>
					<h3>
						<a href="3">{{item.name}}</a>
					</h3>
				</dd>
				<dt>
					<i>{{item.price}}</i>
				</dt>
				<dt class="colorinfo">
					<i>{{item.color}}</i>
				</dt>
			</dl>
			<!-- 鼠标滑过时出现的结构 -->
			<dl class="otherinfo" style="opacity: 0;">
				<dt>{{item.brand}}</dt>
				<dd>{{item.location}}</dd>
			</dl>
		</div>
		<div class="clear"></div>
	</div>
</template>

<script>
	import $ from 'jquery';
	// 鼠标移入事件
	$(document).on("mouseenter",".goods",function(){
		$(this).find('.hoveractive').css("opacity",1);
		$(this).find('.otherinfo').css("opacity",1)
		$(this).find('img').css("opacity",0.5)
		$(this).find('.goodsdesc').css("opacity",0)
	});
	// 鼠标移除事件
	$(document).on("mouseleave",".goods",function(){
		$(this).find('.hoveractive').css("opacity",0);
		$(this).find('.otherinfo').css("opacity",0)
		$(this).find('img').css("opacity",1)
		$(this).find('.goodsdesc').css("opacity",1)
	});
	export default {
		name: 'Showgoods',
		data() {
			return {
				index: '',
				proList: [
					{imgsrc:'https://img.zaozuo.com/0bea06252b039306181d2f7cb724e239@!small?x-oss-process=image/format,jpg/interlace,1',name:'造作软糖沙发®',price:'1999',color:'4色可选',desc:'抢眼形态与糖果色，空间的颜值担当',location:'Spain | Valencia',brand:'Yonoh Creative Studio'},
					{imgsrc:'https://img.zaozuo.com/0bea06252b039306181d2f7cb724e239@!small?x-oss-process=image/format,jpg/interlace,1',name:'造作软糖沙发®',price:'1999',color:'4色可选',desc:'飞舞金属曲线，空间的颜值担当',location:'Spain | Valencia',brand:'Yonoh Creative Studio'},
					{imgsrc:'https://img.zaozuo.com/0bea06252b039306181d2f7cb724e239@!small?x-oss-process=image/format,jpg/interlace,1',name:'造作软糖沙发®',price:'1999',color:'4色可选',desc:'抢眼形态与糖果色，空间的颜值担当',location:'Spain | Valencia',brand:'Yonoh Creative Studio'},
					{imgsrc:'https://img.zaozuo.com/0bea06252b039306181d2f7cb724e239@!small?x-oss-process=image/format,jpg/interlace,1',name:'造作软糖沙发®',price:'1999',color:'4色可选',desc:'抢眼形态与糖果色，空间的颜值担当',location:'Spain | Valencia',brand:'Yonoh Creative Studio'},
					{imgsrc:'https://img.zaozuo.com/0bea06252b039306181d2f7cb724e239@!small?x-oss-process=image/format,jpg/interlace,1',name:'造作软糖沙发®',price:'1999',color:'4色可选',desc:'抢眼形态与糖果色，空间的颜值担当',location:'Spain | Valencia',brand:'Yonoh Creative Studio'},
				]
				
			};
		}
	}
</script>

<style scoped>
	.goodscomponent {
		width: 100%;
		height: auto;
	}
	.goodscomponent .goods {
		width: 244px;
		height: 322px;
		margin: 20px 14px 0px 0px;
		float: left;
		position: relative;
	}
	.goods .goodslink,
	.goods .hover-active{
		display: block;
		width: 244px;
		height: 244px;
		text-decoration: none;
		
	}
	.goods .goodslink img {
		width: 244px;
		height: 244px;
		background-color: #00FF00;
	}
	.goodsdesc {
		width: 100%;
		height: 74px;
		color: #000;
		text-align: center;
		font-size: 15px;
		line-height: 25px;
	}
	.goods .goodsdesc a {
		text-decoration: none;
		color: #000;
	}
	.goods .goodsdesc i {
		font-style: normal;
	}
	.goods .goodsdesc .colorinfo i {
		padding: 6px 7px;
		margin: 4px;
		font-size: 4px;
		color: #707070;
	}
	.goods .hoveractive {
		background-color: transparent;
		opacity:0;
		position: absolute;
		top: 0;
		left: 0;
	}
	.goods .hoveractive  p{
		z-index: 999;
		margin: 30% 20%;
		height: 90px;
		border: 5px solid #535353;
		font-size: 15px;
		line-height: 21px;
		color: #373737;
		text-align: center;
		display: table;
		
	}
	.otherinfo {
		opacity:0;
		width: 244px;
		height: 57px;
		border-top: 1px solid #d2d2d2;
		position: absolute;
		top: 244px;
	}
	.otherinfo dt {
		margin-top: 8px;
		font-weight: bold;
		line-height: 24px;
	}
	.otherinfo dd {
		line-height: 24px;
	}
	.clear {
		clear: both;
	}
</style>

<template>
	<div id="homeslide">
		<el-carousel indicator-position="outside">
			<el-carousel-item v-for="item in slideList" :key="item.id">
					<img :src="item.src" :alt="item.alt">
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
	export default {
		name: 'Homeslide',
		data() {
			return {
				slideList: [
					{id:'1',src:'https://img.zaozuo.com/aabaeeabaa7f68643fcfffa35066f19b?x-oss-process=image/format,jpg/interlace,1',alt:'圣诞',to:'aa'},
					{id:'2',src:'https://img.zaozuo.com/6d8cefcf1d059e9fd63538aea152b130?x-oss-process=image/format,jpg/interlace,1',alt:'远山',to:'bb'},
					{id:'3',src:'https://img.zaozuo.com/e04b5222aaa3df6e0dbc0ad4f6c460d9?x-oss-process=image/format,jpg/interlace,1',alt:'星球仪',to:'cc'},
					{id:'4',src:'https://img.zaozuo.com/2185df149656759a579483dc8cb5cc94?x-oss-process=image/format,jpg/interlace,1',alt:'山雪床',to:'dd'},
					{id:'5',src:'https://img.zaozuo.com/8740a5f20ef7fce73417231adf327242?x-oss-process=image/format,jpg/interlace,1',alt:'山雪电视柜',to:'ee'},
					{id:'6',src:'https://img.zaozuo.com/1fecd3e594113669b60e63cf7495dfb6?x-oss-process=image/format,jpg/interlace,1',alt:'瓦檐长餐桌',to:'ff'},
					{id:'7',src:'https://img.zaozuo.com/1e4531356fe667cb59dcf6f7bffce231?x-oss-process=image/format,jpg/interlace,1',alt:'生活家精选晒单',to:'agga'},
				]
				
			};
		}
	}
</script>

<style>
	.homeslide {
			width: 100%;
			height: auto;
			background-color: skyblue;
		}
		
	.el-carousel__item img {
	    width: 100%;
			height: 450px;
	  }
	  
	  #homeslide .el-carousel__container {
		  height: 450px;
	  }
	  /* 轮播图下面的小横线 */
	  #homeslide .el-carousel__button {
		  background-color: #000;
		  width: 20px;
		  height: 3px;
	  }
	
</style>

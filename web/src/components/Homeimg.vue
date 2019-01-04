<template>
	<!-- 图片区 -->
	<div class="imgcontainer">
		<a href="#">
			<img src="https://img.zaozuo.com/a2b1fdac9975136c777b2fc25e202d74?x-oss-process=image/format,jpg/interlace,1" alt="用户嗮单">
		</a>
		<div class='rightimg'>
			<a href="#"><img src="https://img.zaozuo.com/28adc8125245e04f4ef18eb12da690e1?x-oss-process=image/format,jpg/interlace,1" alt=""></a>
			<a href="#"><img src="https://img.zaozuo.com/0cc022f8e3453bf37c8a6b60dcbbe1d9?x-oss-process=image/format,jpg/interlace,1" alt=""></a>
			<a href="#"><img src="https://img.zaozuo.com/2cb9bbff33943e7b566f8057759c0973?x-oss-process=image/format,jpg/interlace,1" alt=""></a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Homeimg',
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	/* 图片区 */
	.imgcontainer {
		width: 1035px;
		height: 300px;
		margin: 0 auto;
		padding: 70px 0px 65px;
		display: flex;
		flex-direction: row;
		white-space: nowrap;
	}
	.imgcontainer>a,
	.imgcontainer>a>img{
		width: 530px;
		height: 344px;
	}
	.imgcontainer .rightimg {
		width: 505px;
		height: 344px;
	}
	.imgcontainer .rightimg>a:first-of-type,
	.imgcontainer .rightimg>a:nth-of-type(2) {
		display: inline-block;
		margin-left: 9px;
	}
	.imgcontainer .rightimg>a:first-of-type,
	.imgcontainer .rightimg>a:nth-of-type(2),
	.imgcontainer .rightimg>a:first-of-type>img,
	.imgcontainer .rightimg>a:nth-of-type(2)>img {
		width: 240px;
		height: 168px;
	}
	.imgcontainer .rightimg>a:nth-of-type(3),
	.imgcontainer .rightimg>a:nth-of-type(3)>img {
		display: block;
		width: 498px;
		height: 164px;
	}
	.imgcontainer .rightimg>a:nth-of-type(3) {
		margin: 8px 0px 0px 7px;
	}
</style>

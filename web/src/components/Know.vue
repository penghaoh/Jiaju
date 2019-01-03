<template>
	<div>
		<!-- 固定导航栏 -->
		<topfixed></topfixed>
		<!-- 顶部图片 -->
		<img width="100%" src="https://img.zaozuo.com/cfa1a540f37f471a0fb2397bfd082ff6?x-oss-process=image/format,jpg/quality,q_100"
		 alt="图片加载视频">
		<!-- 视频 -->
		<div class="video-box">
			<img width="80%" src="https://img.zaozuo.com/10debefa9ada5f422cc54a562dbe546b?x-oss-process=image/format,jpg/quality,q_100"
			 alt="视频加载失败">
			 <img src="https://img.zaozuo.com/173ae03f2d6915c9f2c34dae86b2e57b" alt="播放失败" class="play-icon" @click="play">
			 <video :src="videoSrc" id="video1" controls="controls"></video>
			 <button class="btn" @click="close">X</button>
		</div>
		<!--设计师介绍 -->
		<div class="artist">
			<img width="100%" src="https://img.zaozuo.com/e11eee612f581faef6d9e56602327420?x-oss-process=image/format,jpg/quality,q_100" alt="设计师介绍">
			<div class="link1 link">
				<a href="#">了解更多设计师</a>
				<img src="https://img.zaozuo.com/e4bf21d26398fda662a001508cd3fd25" alt="图标" class="icon-right">
			</div>
		</div>
		<!-- 制作工艺 -->
		<div>
			<img width="100%" src="https://img.zaozuo.com/53aa285c1eb38c663ddad6d0254726e2?x-oss-process=image/format,jpg/quality,q_100" alt="">
		</div>
		<!-- 产品介绍 -->
		<div>
			<img width="100%" src="https://img.zaozuo.com/1fcf3372fbb3667c43b8e3d28a87522f?x-oss-process=image/format,jpg/quality,q_100" alt="">
		</div>
		<!-- 团队介绍 -->
		<div>
			<img width="100%" src="https://img.zaozuo.com/203160d845c86c8e72e9ded69972b93b?x-oss-process=image/format,jpg/quality,q_100" alt="">
		</div>
		<!-- 我们的服务 -->
		<div class="serve">
			<img width="100%" src="https://img.zaozuo.com/1f40e32dea3a981ce3afb15be0019f0d?x-oss-process=image/format,jpg/quality,q_100" alt="">
			<div class="container">
				<a href="#" target="_blank">
					<img src="https://img.zaozuo.com/63bb17fc11b9f8190c48eb48c0ded8ef" alt="">
				</a>
				<a href="#" target="_blank">
					<img src="https://img.zaozuo.com/14eeb197849e2d4602b009cdaac9be79" alt="">
				</a>
				<a href="#" target="_blank">
					<img src="https://img.zaozuo.com/7e6de5eb60cefaa20c3cd0744e2fc3dd" alt="">
				</a>
				<a href="#" target="_blank">
					<img src="https://img.zaozuo.com/ac6e3d0cd2b06a2da79259df631c530f" alt="">
				</a>
				<a href="#" target="_blank">
					<img src="https://img.zaozuo.com/a2a1ff6fb340fce0681bef9aa97f6d4f" alt="">
				</a>
			</div>
			<div class="link">
				<a href="#">了解完整的服务说明</a>
				<img src="https://img.zaozuo.com/e4bf21d26398fda662a001508cd3fd25" alt="图标" class="icon-right">
			</div>
		</div>
		<!-- 足迹 -->
		<div>
			<img width="100%" src="https://img.zaozuo.com/14769506d72be4fdd590c8ec3a89374d?x-oss-process=image/format,jpg/quality,q_100" alt="">
			<div class="link">
				<a href="#">查看更多历史足迹</a>
				<img src="https://img.zaozuo.com/e4bf21d26398fda662a001508cd3fd25" alt="图标" class="icon-right">
			</div>
		</div>
		<!-- 门店 -->
		<div>
			<img width="100%" src="https://img.zaozuo.com/bf85e91f99d5e2c26678adb768945b2c?x-oss-process=image/format,jpg/quality,q_100" alt="">
			<div class="link">
				<a href="#">查看更多门店</a>
				<img src="https://img.zaozuo.com/e4bf21d26398fda662a001508cd3fd25" alt="图标" class="icon-right">
			</div>
		</div>
		<!-- 关注我们 -->
		<div class="watch">
			<img width="100%" src="https://img.zaozuo.com/1b1b9a1447b128651231a13d3247f92e?x-oss-process=image/format,jpg/quality,q_100" alt="">
			<div class="follow">
				<a href="#">
					<img src="https://img.zaozuo.com/4ce427987afe8400fce321e71fd7eace" alt="">
				</a>
				<a href="#">
					<img src="https://img.zaozuo.com/cd9536aeeb0ebe45a886cc4196132930" alt="">
				</a>
				<a href="#">
					<img src="https://img.zaozuo.com/89226ed75ba8de7c22e76cf5c12d187e" alt="">
				</a>
			</div>
		</div>
		<!-- 媒体杂志 -->
		<div>
			<img width="100%" src="https://img.zaozuo.com/9d558206957519550716b6cf82587d25?x-oss-process=image/format,jpg/quality,q_100" alt="">
			<div class="link">
				<a href="#">查看更多媒体报道</a>
				<img src="https://img.zaozuo.com/e4bf21d26398fda662a001508cd3fd25" alt="图标" class="icon-right">
			</div>
		</div>
		<!-- 合作品牌 -->
		<div>
			<img width="100%" src="https://img.zaozuo.com/64b71de01933330f64f1c2bb33496bf3?x-oss-process=image/format,jpg/quality,q_100" alt="基金">
			<img width="100%" src="https://img.zaozuo.com/ae2597694580aa5b6e065f3d3c2373d7?x-oss-process=image/format,jpg/quality,q_100" alt="合作品牌">
		</div>
	</div>
</template>

<script>
	import Topfixed from './Topfixed';
	export default {
		name: 'Know',
		data() {
			return {
				videoSrc: 'http://img.zaozuo.com/pinpai20180708.mp4'
			};
		},
		methods: {
			play: function(){
				var video1 = document.getElementById('video1');
				var btn = document.getElementsByClassName('btn')[0];
				video1.play();
				video1.style.display = 'block';
				btn.style.display = 'block';
				
			},
			close: function(){
				var video1 = document.getElementById('video1');
				var btn = document.getElementsByClassName('btn')[0];
				video1.style.display = 'none';
				btn.style.display = 'none';
				video1.pause();
				
			}
		},
		components: {
			topfixed: Topfixed
		}
		
	}
</script>

<style>
	/* 视频部分 */
	.video-box {
		position: relative;
	}
	.play-icon {
		display: inline-block;
		position: absolute;
		left: 655px;
		top: 390px;
		width: 3rem;
		height: 3rem;
	}
	.play-icon:hover {
		cursor: pointer;
		opacity: 0.6;
	}
	#video1 {
		width: 50%;
		height: 500px;
		position: relative;
		top: -510px;
		left: 336px;
		display: none;
	}
	.btn {
		width: 50px;
		height: 50px;
		background-color: black;
		border: none;
		color: #fff;
		font-size: 25px;
		position: absolute;
		right: 323px;
		top: 208px;
		z-index: 10;
		opacity: 0.8;
		display: none;
	}
	/* 设计师部分 */
	.link {
		position: relative;
		top: -120px;
	}
	.link1 {
		top: -175px;
	}
	.link a {
		text-decoration: none;
		color: #000;
		font-size: 18px;
	}
	.link .icon-right {
		position: absolute;
		width: 20px;
		height: 20px;
		top: 2px;
		margin-left: 5px;
	}
	/* 服务部分 */
	.serve {
		position: relative;
	}
	.container {
		width: 76.5%;
		height: 240px;
		position: absolute;
		left: 156px;
		top: 214px;
		display: flex;
	}
	.container a {
		width: 16%;
		margin-left: 51px;
		border: 0.4rem solid #d2d2d2;
		box-sizing: border-box;
	}
	.container a:first-of-type {
		margin-left: 0;
	}
	.container a:hover {
		border: 0.4rem solid #707070;
	}
	.container img {
		height: 100%;
	}
	/* 关注我们 */
	.watch {
		position: relative;
	}
	.follow {
		position: absolute;
		width: 800px;
		height: 99%;
		left: 300px;
		top: 0;
		display: flex;
		align-items: center;
	}
	.follow a {
		width: 33%;
		margin-right: 50px;
	}
	.follow a:hover {
		opacity: 0.8;
	}
	.follow img {
		width: 120px;
		height: 150px;
	}
</style>



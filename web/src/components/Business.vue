<template>
	<div>
		<!-- 顶部图片 -->
		<img width="100%" src="https://img.zaozuo.com/dc75d5644718ec0a3610f3cdea226df7" alt="图片加载失败">
		<div class="content">
			<h1>造作ZAOZUO</h1>
			<h3>全球设计师创作品牌</h3>
			<p>汇聚全球顶尖设计资源, 独立研发2000+家具家居作品, 拥有全国数十万品牌会员, 造作为年轻中产家庭, 创造无国界的现代生活方式, 把正品设计, 带入大众真实生活。</p>
			<p>如您有采购、招商、采访、设计师入驻或其他合作需求，欢迎与我们联系。</p>
		</div>
		<!-- 图标展示 -->
		<div class="pic">
			<img src="../assets/pic.png" alt="图标">
		</div>
		<!-- 轮播展示 -->
		<!-- 1 -->
		<div class="buy">
			<div class="bleft">
				<el-carousel arrow='never' height='350px'>
					<el-carousel-item v-for="item in imgList1" :key="item.src">
						<img :src="item.src" alt="图片">
					</el-carousel-item>
				</el-carousel>
			</div>
			<div class="bright">
				<h2>集合采购</h2>
				<p>从点睛单品到惊艳全屋的解决方案，一次满足多样空间、风格、户型需求。如您是公司、酒店、公寓、咖啡厅、房地产或空间设计师等大宗采购方，我们期待与您共创中国的当代生活印记。</p>
				<a href="#">联 络 我 们 ></a>
				<img src="https://img.zaozuo.com/613cf2ee3bc94eb190c32155e28a89ed" alt="集合采购">
			</div>
		</div>
		<!-- 2 -->
		<div class="buy">
			<div class="bright">
				<h2>招商邀约</h2>
				<p>造作现已开设北京、上海、深圳实体门店，均位处城市大型商业综合体, 单店能达到年度坪效超过4W的优异成绩。 除目前即将进入的杭州、成都、西安外, 亦积极拓展更多新一线城市与海外布局, 如您是商业项目负责人，欢迎洽询门店进驻或联合举办如艺术装置、pop-up快闪店等市场活动。</p>
				<a href="#">联 络 我 们 ></a>
				<img src="https://img.zaozuo.com/e00c8e03dd23fb2437179bb06b000c1f" alt="招商邀请">
			</div>
			<div class="bleft">
				<el-carousel arrow='never' height='350px'>
					<el-carousel-item v-for="item in imgList2" :key="item.src">
						<img :src="item.src" alt="图片">
					</el-carousel-item>
				</el-carousel>
			</div>
		</div>
		<!-- 3 -->
		<div class="buy">
			<div class="bleft">
				<el-carousel arrow='never' height='350px'>
					<el-carousel-item v-for="item in imgList3" :key="item.src">
						<img :src="item.src" alt="图片">
					</el-carousel-item>
				</el-carousel>
			</div>
			<div class="bright">
				<h2>品牌合作</h2>
				<p>造作拥有家具设计史上罕见的全球设计大师集群, 运用跨国界、无标签的现代设计语言进行空间营造与产品开发, 为当代年轻族群打造摩登、明艳、精致的生活万物。如您的品牌受众亦为新一代的年轻中产，我们期待与您合作，共创双赢。</p>
				<a href="#">联 络 我 们 ></a>
				<img src="https://img.zaozuo.com/11e1bf20b76b7379111373efb9b45570" alt="品牌合作">
			</div>
		</div>
		<!-- 4 -->
		<div class="buy">
			<div class="bright">
				<h2>媒体采访</h2>
				<p>造作现已开设北京、上海、深圳实体门店，均位处城市大型商业综合体, 单店能达到年度坪效超过4W的优异成绩。 除目前即将进入的杭州、成都、西安外, 亦积极拓展更多新一线城市与海外布局, 如您是商业项目负责人，欢迎洽询门店进驻或联合举办如艺术装置、pop-up快闪店等市场活动。</p>
				<a href="#">联 络 我 们 ></a>
				<img src="https://img.zaozuo.com/97c970ca31431c6d41223710633ef2b7" alt="媒体采访">
			</div>
			<div class="bleft">
				<el-carousel arrow='never' height='350px'>
					<el-carousel-item v-for="item in imgList4" :key="item.src">
						<img :src="item.src" alt="图片">
					</el-carousel-item>
				</el-carousel>
			</div>
		</div>
		<!-- 5 -->
		<div class="buy">
			<div class="bleft">
				<img src="https://img.zaozuo.com/2ffe4f9999571d02da0883684f0235fc" alt="图片">
			</div>
			<div class="bright">
				<h2>设计师入驻</h2>
				<p>造作签约全球上百位获奖设计师, 拥有家具设计史上罕见的全球设计大师集群, 同时亦培育三十多位内部设计团队。如您是富于创意，注重功能实用性，并对简洁的形式美有高超技巧的一流设计师，欢迎加入我们。</p>
				<a href="#">联 络 我 们 ></a>
			</div>
		</div>
		<my-footer></my-footer>
	</div>
</template>

<script>
	import Footer from './Footer';
	export default {
		name: 'Business',
		data() {
			return {
				imgList1: [
					{src:'https://img.zaozuo.com/9a45695e5591f0db320ce49488336a38'},
					{src:'https://img.zaozuo.com/8797e92bb85e0c6ea027d44769c270aa'},
					{src:'https://img.zaozuo.com/e8f87267f43e47d2e4e248efaac33067'},
					{src:'https://img.zaozuo.com/579548ee9535a7abfe17698b0ecb0e57'}
				],
				imgList2: [
					{src:'https://img.zaozuo.com/b81fff91f6c747f0614bb61b1f9b1462'},
					{src:'https://img.zaozuo.com/aecfc02de0c91802e53586625dd716da'},
					{src:'https://img.zaozuo.com/9064703eb96d214903f4ba89432bc2f2'}
				],
				imgList3: [
					{src:'https://img.zaozuo.com/a751536da0103cf960f0bc68a34501bb'},
					{src:'https://img.zaozuo.com/f0ce21276cd3d11f018dd14591c05fb7'},
					{src:'https://img.zaozuo.com/51ede2396ed096173cec8983c86b0fff'},
					{src:'https://img.zaozuo.com/4ff8bac0f8211f33372dd7bbe4b73152'}
				],
				imgList4: [
					{src:'https://img.zaozuo.com/9b5701443ad466e96b0a8731fe5328b8'},
					{src:'https://img.zaozuo.com/2b051e3ec09958b2121e024376f594e6'},
					{src:'https://img.zaozuo.com/90f1b8e61510a88de603e7811f67227d'},
					{src:'https://img.zaozuo.com/08ae669e930398d719c8b8ac278afcc5'},
					{src:'https://img.zaozuo.com/e2e1d6e4e3a45b848ad81735e993e7de'}
				]
			};
		},
		components: {
			myFooter: Footer
		}
	}
</script>

<style>
	/* 顶部图片文字 */
	.content {
		width: 478px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 125px;
		bleft: 446px;
		font-weight: bold;
		color: #000;
	}

	.content h3 {
		margin: 10px 0 30px 0;
	}

	.content p {
		margin: 20px 0;
		font-size: 14px;
	}

	/* 图标展示 */
	.pic {
		width: 70%;
		margin: 0 auto;
	}

	img {
		width: 100%;
	}

	/* 轮播展示 */
	.buy {
		width: 80%;
		height: 350px;
		margin: 0 auto;
		display: flex;
		margin-bottom: 30px;
	}
	.buy .bleft {
		width: 45%;
		height: 100%;
	}
	.bleft img {
		height: 100%;
	}
	.buy .bright {
		width: 55%;
		height: 100%;
		box-sizing: border-box;
		padding: 50px 64px 0 64px;
		background-color: #F6F6F6;
		text-align: bleft;
		font-size: 14px;
	}
	.bright p {
		margin: 20px 0;
		font-size: 14px;
	}
	.bright a {
		text-decoration: none;
		color: #428e5b;
	}
</style>

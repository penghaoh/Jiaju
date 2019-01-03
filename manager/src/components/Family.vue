<template>
	<div class="content">
		<!-- 搜索框区域 -->
		<div class="addpro">
			<div class="addproleft">
				<el-input placeholder="请输入商品信息" v-model.lazy="searchKey" style='width: 200px;'>
				</el-input>
				<el-button type="primary" icon="el-icon-search" style='width: 100px' @click='searchPro'>搜索</el-button>
			</div>
			<button @click="add" >增加商品</button>
			<input type="hidden" :value='this.$route.query.typeid'>
		</div>
	<!-- 显示区域 -->
	<el-table :data="mydata" style="width: 94%;height: 100%;margin: 10px 3% 20px;">
		<el-table-column type="expand">
			<template slot-scope="props">
				<el-form label-position="left" inline class="demo-table-expand">
					<el-form-item label="产品 ID:">
						<span>{{ props.row.id }}</span>
					</el-form-item>
					<el-form-item label="产品名称:">
						<span>{{ props.row.name }}</span>
					</el-form-item>
					<el-form-item label="产品价格:">
						<span>{{ props.row.price }}</span>
					</el-form-item>
					<el-form-item label="产品产地:">
						<span>{{ props.row.origin }}</span>
					</el-form-item>
					<el-form-item label="产品品牌:">
						<span>{{ props.row.brand }}</span>
					</el-form-item>
					<el-form-item label="产品描述:">
						<span>{{ props.row.descs }}</span>
					</el-form-item>
					<el-form-item label="产品图片:">
						<img class="imgsize" :src="props.row.imgurl" alt="产品图片">
					</el-form-item>
					<el-button type="primary" @click.native="proupdt(props.row)">修改产品</el-button>
					<el-button type="danger" @click.native="delect( props.row.id)">删除产品</el-button>
				</el-form>
			</template>
		</el-table-column>
		<el-table-column label="产品 ID" prop="id">
		</el-table-column>
		<el-table-column label="产品名称" prop="name">
		</el-table-column>
		<el-table-column label="产品价格" prop="price">
		</el-table-column>
		<el-table-column label="产品描述" prop="descs">
		</el-table-column>
	</el-table>
	<!-- 分页 -->
	<div class="block" v-show="isTypeShow">
		 <el-pagination
				background
				layout=" pager"
				:total="totalNum" @current-change='getNowpage' :page-size='5'>
			</el-pagination>
	</div>
	<!-- 搜索框查询数据分页 -->
	<div class="block" v-show="isSearchShow">
		<el-pagination
				background
				layout=" pager"
				:total="totalNum" @current-change='getCurrentpage' :page-size='5'>
			</el-pagination>
	</div>
	<!-- 增加商品表格 -->
	<div class="fromarea"  v-if="flag2">
		<form action='' id="wrap">
			<h2>增加产品信息</h2>
				<label>产品分类:　<input type="text" name="typeid" v-model="pro.typeid"></label>
				<br />
				<label>产品名称:　<input type="text" name="name" v-model="pro.name"></label>
				<br />
				<label>产品价格:　<input type="text" name="price" v-model="pro.price"></label>
				<br />
				<label>产品品牌:　<input type="text" name="brand" v-model="pro.brand"></label>
				<br />
				<label>产品产地:　<input type="text" name="origin" v-model="pro.origin"></label>
				<br />
				<label>产品描述:　<input type="text" name="descs" v-model="pro.descs"></label>
				<br />
				<label>产品图片:　<input type="text" name="imgurl"  v-model="pro.imgurl"></label>
				<br />
				<div class="btnarea">
					<button @click="addpro">提交</button>
					<button @click="cancaladdpro">取消</button>
				</div>
				<!-- <p>{{prompt}}</p> -->
		</form>
	</div>
	
	<!-- 修改产品信息 -->
	<div v-if="flag1" class="fromarea">
		<form action  id="updatepro">
			<h2>修改产品信息</h2>
			<label>产品ID:　<input type="text" name="ids" v-model="prop.id" disabled></label>
			<br />
			<label>产品名称:　<input type="text" name="name" v-model="prop.name"></label>
			<br />
			<label>产品价格:　<input type="number" name="price" v-model="prop.price"></label>
			<br />
			<label>产品描述:　<input type="text" name="descs" v-model="prop.descs"></label>
			<br />
			<label>产品产地:　<input type="text" name="origin" v-model="prop.origin"></label>
			<br />
			<label>产品品牌:　<input type="text" name="brand" v-model="prop.brand"></label>
			<br />
			<label>产品图片:　<input type="" name="imgurl" v-model="prop.imgurl"></label>
			<br />
				
			<div class="btnarea">
				<button @click="proupdate">提交</button>
				<button @click="cancalupdate">取消</button>
			</div>
			<!-- <p>{{prompt}}</p> -->
		</form>
	</div>
	
	</div>
</template>
<script>
	import $ from 'jquery';
	import axios from 'axios'; 
	export default {
		name: 'Family',
		data() {
			return {
				searchKey: '',
				typeid:0, 
				totalNum: 0,
				mydata:[],
				seachList: [],
				isTypeShow: true,
				isSearchShow: false,
				nowPage:1,
				flag: false,
				prop: {},
				pro: {
					typeid: '',
					name: "",
					price: '',
					imgurl: "",
					brand: "",
					origin: "",
					descs: ""
				},
				flag1: false,
				flag2: false

			}
		},
		methods: {
				//搜索框
				searchPro: function(){
					this.mydata = [];
					this.totalNum = 0;
					 console.log(this.searchKey);
					axios.get('http://localhost:9999/searchPro', {
						params: { 
							searchKey: this.searchKey
						}
					}).then(response => {
						console.log("请求成功");
						this.isTypeShow = false;
						this.isSearchShow = true;
						this.seachList = response.data;
						this.totalNum = response.data.length;
						console.log('this.seachList',this.seachList);
						if(response.data.length<6){
							this.mydata = response.data;
						}else {
							for(let i = 0;i<5;i++){
								this.mydata.push(response.data[i])
							}
						}
						console.log(this.mydata);
					}).catch(response => {
						console.log("请求失败");
					})
					
				},
				//搜索数据分页显示
				getCurrentpage: function(val){
					this.nowPage = val;
					this.mydata = [];
					let firstIndex = (val-1)*5;
					console.log('this.seachList',this.seachList);
					if( (firstIndex+5) < this.totalNum){
						for(let i = firstIndex;i<(firstIndex+5);i++){
							this.mydata.push(this.seachList[i])
						}
					}else {
						for(let i = firstIndex;i<this.totalNum;i++){
							this.mydata.push(this.seachList[i])
						}
					}
					
					console.log(this.mydata);
				},
				//增加商品按钮
				add: function() {
					this.flag2 = !this.flag2;
				},
				// 增加商品表格取消按钮
				cancaladdpro: function(){
					this.flag2 = false;
				},
				//增加商品表格提交按钮
				addpro: function() {
					console.log("lllll");
					console.log(this.pro)
					axios.post("http://localhost:9999/add", this.pro, {
							transformRequest: [
								function(data) {
									let params = "";
									for (let index in data) {
										params += index + "=" + data[index] + "&";
									}
									return params;
								}
							]
						})
						.then(response => {
							console.log("get发送Ajax请求成功", response.data);
							if (response.data == 1) {
								this.flag = !this.flag;
							}
						})
						.catch(response => {
							console.log("get发送Ajax请求失败", response);
						});
				},
				// 点击页码切换
				getNowpage: function(val){
					this.nowPage = val;
					this.mydata = [];
					axios.get('http://localhost:9999/selectpro', {
						params: { 
							typeid: this.typeid,
							nowPage: this.nowPage
						}
					}).then(response => {
						console.log("请求成功");
						console.log(response.data);
						for(var i=0;i<response.data.length-1;i++){
							this.mydata.push(response.data[i])
						}
						console.log(this.mydata);
						this.totalNum = parseInt(response.data[response.data.length-1].totlenum)
						console.log(this.totalNum)
					}).catch(response => {
						console.log("请求失败");
					})
				},
				//删除商品
				delect: function(id) {
					console.log(id);
					axios.get("http://localhost:9999/dele", {
							params: {
								id: id
							}
						}).then(response => {
							console.log("get发送Ajax请求成功");
							alert(response.data);
						}).catch(response => {
							console.log("get发送Ajax请求失败");
						});
				},
				//点击修改按钮
				proupdt: function(prop) {
					// $('.proupdt').css('display','block')
					this.flag1 = !this.flag1;
					console.log(prop);
					this.prop = prop;
				},
				//取消修改商品
				cancalupdate: function(){
					this.flag1 = false;
				},
				//修改商品
				proupdate: function() {
					axios.get("http://localhost:9999/proupdate", {
							params: {
								id: this.prop.id,
								name: this.prop.name,
								price: this.prop.price,
								descs: this.prop.descs,
								origin: this.prop.origin,
								brand: this.prop.brand,
								imgurl: this.prop.imgurl
							}
						}).then(response => {
							console.log("get发送Ajax请求成功", response.data);
							if (response.data == 1) {
								this.flag = !this.flag;
							}
						}).catch(response => {
							console.log("get发送Ajax请求失败", response);
						});
				}
        
		},
		watch: {
			typeid: function(val){
				console.log('--------------',val);
				this.mydata = [];
				this.totalNum = 0
				axios.get('http://localhost:9999/selectpro', {
					params: { 
						typeid: this.typeid,
						nowPage: this.nowPage
					}
				}).then(response => {
					console.log("请求成功");
					console.log(response.data);
					for(var i=0;i<response.data.length-1;i++){
						this.mydata.push(response.data[i])
					}
					console.log(this.mydata);
					this.totalNum = parseInt(response.data[response.data.length-1].totlenum)

					console.log(response.data)
				}).catch(response => {
					console.log("请求失败");
				})
			}
		},
		//初始状态
		created: function() {
			this.mydata = [];
			this.totalNum = 0;
			this.typeid = 0;
			console.log('this.typeid',this.typeid)
			axios.get('http://localhost:9999/selectpro', {
					params: { 
						typeid: this.typeid,
						nowPage: this.nowPage
					}
			}).then(response => {
				console.log("请求成功");
				console.log(response.data);
				for(var i=0;i<response.data.length-1;i++){
					this.mydata.push(response.data[i])
				}
				console.log(this.mydata);
				this.totalNum = parseInt(response.data[response.data.length-1].totlenum)
				console.log(this.totalNum)
			}).catch(response => {
				console.log("请求失败");
			})
			
 		},
		beforeUpdate: function() {
			(this.$route.query.typeid == undefined)? this.typeid=0 : this.typeid=this.$route.query.typeid;
			console.log('this.typeid',this.typeid)
		},
}
</script>

<style scoped>
	/* 显示内容区 */
	.content {
		width: 100%;
		height: auto;
		position: relative;
	}
	/* 搜索框区域 */
	.addpro {
		width: 94%;
		height: 40px;
		margin:0px 3%;
		padding-bottom: 20px;
		border-bottom: 1px solid #1b1b1b;
		position: relative;
	}
	.addpro>button {
		height: 40px;
		border: none;
		background-color: #409EFF;
		color: #fff;
		font-size: 14px;
		border-radius: 5px;
		position: absolute;
		top: 0px;
		right: 100px;
		
	}
	.addpro .addproleft {
		position: absolute;
		top: 0px;
		right: 200px;
	}
	/* 分页样式 */
	.block {
		margin-bottom: 20px;
	}
	/* 数据显示区域图片大小 */
	.imgsize {
		width: 150px;
		height: 150px;
		border: 1px solid #ccc;
	}
	.demo-table-expand .el-form-item {
		margin-right: 0;
		margin-bottom: 0;
		width: 33%;
	}
	/* 增加商品表格 */
	.fromarea{
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background-color: #eee;
	}
	
	#wrap,
	#updatepro {
		position: absolute;
		top:0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: 600px;
		height: 500px;
		border-radius: 5px;
		border: 1px solid #ccc;
		background-color: #fff;
		box-shadow: 2px 2px 20px #333;
		padding:0px 20px 20px;
		box-sizing: border-box;
		z-index: 999;
		font-size: 14px;
	}
	#wrap label,
	#updatepro label{
		display: block;
		width: 100%;
		height: 30px;
		line-height: 30px;
		margin-bottom: 5px;
		display: flex;
		flex-direction: row;
	}
	
	#wrap label input,
	#updatepro label input {
		width: 80%;
		height: 29px;
		border: none;
		border-bottom: 1px solid #ccc;
		padding: 0 10px;
		outline:none;
	}
	#wrap p,
	#updatepro p {
		margin-bottom: 10px;
	}
	#wrap>h2,
	#updatepro>h2{
		margin-bottom: 10px;
	}
	 .btnarea {
		margin: 0  auto;
		width: 300px;
		height: 40px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	.btnarea button,
	#updatepro button{
		width: 90px;
		height: 40px;
		background-color: #409EFF;
		border: none;
		color: #fff;
		line-height: 40px;
		font-size: 14px;
		border-radius: 5px;
	}


</style>
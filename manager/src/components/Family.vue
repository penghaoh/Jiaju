<template>
	<div>
		<span>typeid值:{{this.$route.query.typeid}}</span>	
			<!-- 显示区域 -->
			<el-table :data="mydata" style="width: 100%;height: 100%;">
				<el-table-column type="expand">
					<template slot-scope="props">
						<el-form label-position="left" inline class="demo-table-expand">
							<el-form-item label="商品名称">
								<span>{{ props.row.name }}</span>
							</el-form-item>
							<el-form-item label="价格">
								<span>{{ props.row.price }}</span>
							</el-form-item>
							<el-form-item label="商品 ID">
								<span>{{ props.row.id }}</span>
							</el-form-item>
							<el-form-item label="产地">
								<span>{{ props.row.origin }}</span>
							</el-form-item>
							<el-form-item label="品牌">
								<span>{{ props.row.brand }}</span>
							</el-form-item>
							<el-form-item label="商品描述">
								<span>{{ props.row.descs }}</span>
							</el-form-item>
							<el-form-item label="删除" @click.native="delect( props.row.id)"></el-form-item>
							<el-form-item label="修改" @click.native="proupdt(props.row)"></el-form-item>
						</el-form>
					</template>
				</el-table-column>
				<el-table-column label="商品 ID" prop="id">
				</el-table-column>
				<el-table-column label="商品名称" prop="name">
				</el-table-column>
				<el-table-column label="描述" prop="descs">
				</el-table-column>
			</el-table>
	
			<!-- 分页 -->
			 <div class="block">
				 <el-pagination
						background
						layout=" pager"
						:total="totalNum" @current-change='getNowpage' :page-size='5'>
					</el-pagination>
			</div>
			<!-- 修改产品信息 -->
			<form action v-if="flag">
				id
				<input type="text" name="ids" v-model="prop.id" disabled>
				名称
				<input type="text" name="name" v-model="prop.name">
				价格
				<input type="number" name="price" v-model="prop.price">
				<!-- 描述 <input type="text" name="desc" v-model="prop.desc"> -->
				<input type="button" value="修改" @click="proupdate">
			</form>
	</div>
</template>
<script>
	import axios from 'axios'; 
	export default {
		name: 'Family',
		data() {
			return {
				typeid:0, 
				totalNum: 0,
				mydata:[],
				nowPage:1,
				flag: false,
				prop: {},

			}
		},
		  methods: {
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
					this.flag = !this.flag;
					console.log(prop);
					this.prop = prop;
				},
				//修改商品
				proupdate: function() {
					axios.get("http://localhost:9999/proupdate", {
							params: {
								id: this.prop.id,
								price: this.prop.price,
								name: this.prop.name
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
// 				if(this.$route.query.typeid == undefined){
// 						this.typeid = 0
// 				}else {
// 					this.typeid = this.$route.query.typeid;
// 				}
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

<style>
	.demo-table-expand {
			font-size: 0;
		}
	
		.demo-table-expand label {
			width: 90px;
			color: #99a9bf;
		}
	
		.demo-table-expand .el-form-item {
			margin-right: 0;
			margin-bottom: 0;
			width: 50%;
		}
</style>
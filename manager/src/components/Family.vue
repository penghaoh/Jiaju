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
								<span>{{ props.row.desc }}</span>
							</el-form-item>
						</el-form>
					</template>
				</el-table-column>
				<el-table-column label="商品 ID" prop="id">
				</el-table-column>
				<el-table-column label="商品名称" prop="name">
				</el-table-column>
				<el-table-column label="描述" prop="desc">
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
	</div>
</template>

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

<script>
	import axios from 'axios'; 
	export default {
		name: 'Family',
		data() {
			return {
				typeid:this.$route.query.typeid, 
				totalNum: 0,
				mydata:[],
				nowPage:1,
			}
		},
		  methods: {
				getNowpage: function(val){
					this.nowPage = val
					axios.get("http://192.168.1.6:9999/selectAll", {
						params: { 
							nowPage: this.nowPage
						}
					}).then(response => {
						console.log("get发送Ajax请求成功", response.data);
						this.mydata = response.data;
					}).catch(response=> {
						console.log("get发送Ajax请求失败",response);
					})
				}
        
    },
		created: function() {
			console.log('jjjj');
			//获取总条数
			axios({
				method: "get",
				url: "http://192.168.1.6:9999/getTotalnum"
			}).then(response => {
				console.log("发送Ajax请求成功");
				this.totalNum = parseInt(response.data[0].num);
				console.log('totalNum',this.totalNum)
			}).catch(response => {
				console.log("发送Ajax请求失败", response);
			})
			
			//根据当前页面请求数据
			
		axios.get("http://192.168.1.6:9999/selectAll", {
			params: { 
				nowPage: this.nowPage
			}
		}).then(response => {
			console.log("get发送Ajax请求成功", response.data);
			this.mydata = response.data;
		}).catch(response=> {
			console.log("get发送Ajax请求失败",response);
		})
			
		}
	}
</script>

<style>
</style>

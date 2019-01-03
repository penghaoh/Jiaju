<template>
	<div>
		<div id="usertitle">用户管理信息</div>
		<!-- 显示数据表 -->
			<template>
				<el-table
					:data="userData"
					style="width: 94%;margin:0px 3%;">
					<el-table-column
						label="用户ID"
						width="180">
					<template slot-scope="scope">
						<i class="el-icon-info"></i>
						<span style="margin-left: 10px">{{ scope.row.id }}</span>
					</template>
				</el-table-column>
				<el-table-column
					label="用户名"
					width="180">
					<template slot-scope="scope">
						<el-popover trigger="hover" placement="top">
							<p>用户名: {{ scope.row.name }}</p>
							<p>手机号: {{ scope.row.phone }}</p>
							<div slot="reference" class="name-wrapper">
								<el-tag size="medium">{{ scope.row.name }}</el-tag>
							</div>
						</el-popover>
					</template>
				</el-table-column>
				<el-table-column
					label="用户地址"
					width="380">
					<template slot-scope="scope">
						<i class="el-icon-location"></i>
						<span style="margin-left: 10px">{{ scope.row.address }}</span>
					</template>
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button
							size="mini"
							type="success"
							@click="handleEdit(scope.row.id, scope.row)">编辑</el-button>
					</template>
				</el-table-column>
			</el-table>
		</template>
		<!-- 分页 -->
		<div class="block">
			<el-pagination
					background
					layout=" pager"
					:total="totalNum" @current-change='getNowpage' :page-size='5'>
				</el-pagination>
		</div>
		<!-- 修改用户信息表格 -->
		<div class="updatapage" v-show="isShow">
				<form action="updateUserInfo"  id="updatefrom" @submit.prevent="submit" >
					<h2>用户信息修改</h2>
						<label>用户ID:　<input type="text" v-model="userInfo.id" disabled></label>
						<br />
						<label>用户名:　<input type="text" v-model="userInfo.name" disabled></label>
						<br />
						<label>地　址:　<input type="text" v-model="userInfo.address"></label>
						<br />
						<div class="btnarea">
							<button type="submit">修改</button>
							<button @click="cancel()">退出</button>
						</div>
						<p>{{prompt}}</p>
				</form>
		</div>
		
	</div>

</template>

<script>
	
	import axios from 'axios'; 
  export default {
    data() {
      return {
				userData: [],
				userInfo:{},
				isShow: false,
				prompt:'',
				currpage: 1,
				totalNum: 0,
      }
    },
		methods: {
			//点击分页查询
			getNowpage:function(val){
				this.currpage = val
				console.log(val)
				axios.get('http://localhost:9999/usersele', {
							params: { 
								currpage: this.currpage
							}
						}).then(response => {
							console.log("请求成功");
							console.log(response.data);
							this.userData = [];
							for(var i=0;i<response.data.length-1;i++){
								this.userData.push(response.data[i])
							}
							console.log(this.userData);
						}).catch(response => {
							console.log("请求失败");
						})
			},
			// 点击编辑按钮
			handleEdit(id, row) {
				// console.log(id, row);
				this.isShow = true;
				this.userInfo = row;
				this.prompt ='';
			},
			cancel:function(){
				this.isShow = false;
			},
			// 修改信息提交
			submit:function(){
				console.log(this.userInfo)
				// 将修改数据提交至服务器
				axios.post('http://localhost:9999/updateUser', this.userInfo, {
									transformRequest: [
										function(data) {
											let params = '';
											for (let index in data) {
												params += index + "=" + data[index] + "&";
											}
											return params;
										}
									]
								}).then(response => {
									console.log(response.data);
									if (response.data == 'ok') {
											console.log('')
											this.prompt = '修改成功,请点击退出键退出'
									} else {
											console.log('')
											this.prompt = '修改失败'
									}
								}).catch(response => {
									console.log("请求失败");
								})
				
			}
		},
		// 组件创建时
		created: function() {
			//获取user，并接受总条数
			axios.get('http://localhost:9999/usersele', {
						params: { 
							currpage: this.currpage
						}
					}).then(response => {
						console.log("请求成功");
						console.log(response.data);
						for(var i=0;i<response.data.length-1;i++){
							this.userData.push(response.data[i])
						}
						console.log(this.userData);
						this.totalNum = parseInt(response.data[response.data.length-1].totlenum)
						console.log(this.totalNum)
					}).catch(response => {
						console.log("请求失败");
					})

		}
  }
</script>

<style scoped>
	/* 标题内容 */
	#usertitle {
		width: 180px;
		height: 70px;
		font-size: 24px;
		background-color: #00B2EE;
		color: #fff;
		border-radius: 50%;
		font-weight: bold;
		line-height: 70px;
		text-align: center;
		margin: 10px 3%;
	}
	/* 修改用户表 */
	.updatapage {
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background-color: #eee;

	}
	#updatefrom {
		position: absolute;
		top:0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: 500px;
		height: 380px;
		border-radius: 5px;
		border: 1px solid #ccc;
		background-color: #fff;
		box-shadow: 2px 2px 20px #333;
		padding: 20px;
		box-sizing: border-box;
		z-index: 999;
	}
	#updatefrom label {
		display: block;
		width: 100%;
		height: 40px;
		margin-bottom: 10px;
		display: flex;
		flex-direction: row;
	}
	#updatefrom label input {
		width: 70%;
		height: 40px;
		border: none;
		border-bottom: 1px solid #ccc;
		padding: 0 20px;
	}
	#updatefrom p {
		margin-bottom: 20px;
	}
	#updatefrom>h2 {
		margin-bottom: 20px;
	}
	.btnarea {
		margin-left: 100px;
		width: 300px;
		height: 40px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	.btnarea button {
		width: 90px;
		height: 40px;
		background-color: #409EFF;
		border: none;
		color: #fff;
		line-height: 40px;
		font-size: 16px;
		border-radius: 5px;
	}

</style>

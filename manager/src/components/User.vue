<template>
	<div>
		<h2>用户管理</h2>
		<el-table :data="userData" style="width: 100%" max-height="500">
			<el-table-column fixed prop="id" label="编号" width="100"></el-table-column>
			<el-table-column prop="name" label="姓名" width="150"></el-table-column>
			<el-table-column prop="pwd" label="密码" width="150"></el-table-column>
			<el-table-column prop="address" label="地址" width="500"></el-table-column>
			<el-table-column fixed="right" label="操作" width="200">
				<template slot-scope="scope">
					<el-button
						@click.native.prevent="deleteRow(scope.$index, tableData4)"
						type="text"
						size="small">修改
					</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>

</template>

<script>
	
	import axios from 'axios'; 
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
				userData: []
      }
    },
		created: function() {
			//获取user
			axios({
				method: "post",
				url: "http://192.168.1.6:9999/usersele"
			}).then(response => {
				console.log("发送Ajax请求成功");
				
				this.userData = response.data
				console.log('userData',this.userData)
				
			}).catch(response => {
				console.log("发送Ajax请求失败", response);
			})
		}
  }
</script>

<style>
	.el-table {
		text-align: center;
	}

</style>

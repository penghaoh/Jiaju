<template>
  <el-table
    :data="tableData3"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
	 <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" >修改</el-button>
        <el-button type="text" >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        tableData3: [{
          date: '0',
          name: '王小虎',
		  pwd: '123',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '1',
          name: '王小虎',
		  pwd: '123',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2',
          name: '王小虎',
		  pwd: '123',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '3',
          name: '王小虎',
		  pwd: '123',
          address: '上海市普陀区金沙江路 1518 弄',
        }]
      }
    }
  }
</script>

<style>

</style>

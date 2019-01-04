<template>
  <div class="shopcararea">
    <div v-if="mydata.length">
      <table class="table table-hover">
				<thead>
						<tr class="tr">
								<th class="sele1"><input type="checkbox" id="box" />全选</th>
								<th>图片</th>
								<th>商品名</th>
								<th>发货时间</th>
								<th>小计</th>
								<th>数量</th>
								<th class="dele1">操作</th>
						</tr>
				</thead>
					<tbody>
						<tr v-for="(value,index) in mydata" :key="index" class="tr">
								<td class="sele1"><input type="checkbox" class="checkbox" v-model="arr" :value="value.price*value.num" /></td>
								<td class="pics"><img :src="value.imgurl"></td>
								<td>{{value.name}}</td>
								<td>预计明天12：00前发货</td>
								<td>￥{{value.num*value.price}}</td>
								<td><el-input-number v-model="value.num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number></td>
								<td @click="remove(value.proid)" class="dele1 dele2">
									 删除
								</td>
						</tr>
					</tbody>
				</table>
				<div class="totalPricee">
					 <p>总价：￥{{totalPrices}}</p>
					 <div>立即下单</div>
        </div>
    </div>
		<div class="wraps1" v-else>
			 <div class="elses">
			 </div>
			 <p>购物车空空如也</p>
		</div>
  </div>
</template>
<script>
import axios from 'axios';
import Top from "./Top";
import Footer from "./Footer";
export default {
  name: "Shopcar",
  data() {
    return {
      mydata:[],
      arr:[],
      totalPrices:''
    }
  },
  components: {
    'top': Top,
    'myfooter': Footer
  },
  methods: {
     handleChange(value) {
      console.log(value)
    //   this.prices = this.mydata.price * this.num1;
    },
    remove(proid){
      if(confirm('确定删除')){
           axios.get('http://localhost:9999/deletshopcar',{
						params: {
                 userid:sessionStorage.getItem('userid'),
                 proid:proid
						}
					}).then(response => {
						console.log("get发送Ajax请求成功", response.data);
							window.location.reload()
					}).catch(response=> {
						console.log("get发送Ajax请求失败",response);
					})
      }
    }
  },
  watch:{
    arr:function(){
      console.log(this.arr)
      var num = 0;
      for(var i = 0;i<this.arr.length;i++){
        num += this.arr[i]
      }
      this.totalPrices = num
    }
  },
  created:function(){
      axios.get('http://localhost:9999/guctabs',{
						params: {
						     userid:sessionStorage.getItem('userid')
						}
					}).then(response => {
						console.log("get发送Ajax请求成功", response.data);
						this.mydata = response.data;
					}).catch(response=> {
						console.log("get发送Ajax请求失败",response);
					})
  }
};
</script>
<style scoped>
	.shopcararea {
		margin-top: 20px;
	}
	.table{
		margin :0 auto;
		width: 100%;
	}
	.pics{
		width: 200px;
		height: 120px;
	}
	.pics img{
		max-width: 100px;
		height: auto;
	}
	.tr{
		display: block;
		width: 80%;
		height: 120px;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 10px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
	.table .tr th,.table .tr td {
		line-height: 120px;
	}
	.sele1 {
		margin-left: 10px;
	}
	.dele1 {
		margin-right: 10px;
	}
	.dele2:hover {
		color: red;
		font-weight: 400;
	}
	.wraps1 {
		width: 100%;
		min-height: 500px;
	}
	.elses {
		width: 189px;
		height: 189px;
		margin: 0 auto;
		position: relative;
		top: 200px;
		bottom: 200px;
		background-image: url('https://css.zaozuo.com/static/imgs/empty-icon_a1c9149.png');
		background-repeat: no-repeat;
		background-position: -894px 0;
	}
	/* 总价合计 */
	.totalPricee {
  width: 340px;
  height: 60px;
  /* border: 1px solid black; */
  margin-left: 60%;
  text-align: left;
  display: flex;
  align-items: center;
  line-height: 60px;
}
.totalPricee div {
  margin-left: 28%;
  width: 120px;
  height: 56px;
  /* border: 1px solid black; */
  line-height: 56px;
  background-color: black;
  color: aliceblue;
  font-size: 24px;
  text-align: center;
  border-radius: 4px;
}
</style>

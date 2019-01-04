<template>
  <div class="wrap">
    <div class="goodsnum">{{num}}</div>
		<div class="procontent">
				<div class="proshow">
					<img :src="mydata.imgurl" alt='#'>
				</div>
				<div class="desc">
					<p class="neames">{{mydata.name}}｜{{mydata.brand}}</p>
					<p class="price">￥{{prices}}</p>
					<p class="pian">设计师手选组合，最高可省¥68, 马上看看 ></p>
					<p class="order">今天下单，将于2018-12-29前发货，大件家具会致电确认</p>
					<div class="selec">
						<p class="clor">颜 色:</p>
						<el-button size="medium">茄红</el-button>
						<el-button size="medium">木本</el-button>
						<el-button size="medium">夜黑</el-button>
						<el-button size="medium">海蓝定制</el-button>
						<el-button size="medium">月灰定制</el-button>
					</div>
					<div class="purch">
						<el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
						<div>立即购买</div>
						<div @click="adtocar">加入购物车</div>
					</div>
				</div>
		</div>
    <div class="middl">
      <img
        src="https://img.zaozuo.com/47acd6ccdbe2c72729f9050d30640428?x-oss-process=image/format,jpg/interlace,1"
        alt
      >
    </div>
    <div class="middl">
      <img
        src="https://img.zaozuo.com/27471353ce5f1cc73bde219f5f8d798b?x-oss-process=image/format,jpg/interlace,1"
        alt
      >
    </div>
    <div class="middl">
      <img
        src="https://img.zaozuo.com/8e2725b91164e5d866453b7207d158fd?x-oss-process=image/format,jpg/interlace,1"
        alt
      >
      <div class="proms">
        <h1>严苛质量保证</h1>
        <div>查看详情</div>
      </div>
    </div>
   
  </div>
</template>

<script>
import axios from "axios";
import Top from "./Top";
import Footer from "./Footer";
import Navwrap from './Navwrap';
import $ from 'jquery';
export default {
  data() {
    return {
      num1: 1,
      //  price:499,
      mydata: {},
      prices: 0,
     num:sessionStorage.getItem('num'),
    };
  },
  components: {
    top: Top,
    myfooter: Footer,
    'navwrap':Navwrap
  },
  methods: {
    handleChange(value) {
      // console.log(value);
      this.prices = this.mydata.price * this.num1;
    },
    adtocar:function(){
			console.log('==========adtocar=======')
      if(!sessionStorage.getItem('name')){
        if(confirm('您还未登陆，是否进行登陆')){
          this.$router.push('login')
        }else{
          return
        }
      }else{
        console.log(sessionStorage.getItem('num'));
        var num =parseInt(sessionStorage.getItem('num')) + this.num1;
        this.num = num;
        console.log(this.num)
        sessionStorage.setItem('num',num);

         axios.get("http://localhost:9999/guctab", {
        params: {
            id:this.mydata.id,
            imgurl:this.mydata.imgurl,
            name:this.mydata.name,
            num:this.num1,
            price:this.mydata.price,
            userid:sessionStorage.getItem('userid')
        }
      }).then(response => {
        console.log("get发送Ajax请求成功");
        // this.mydata = response.data[0];
        // this.prices = this.mydata.price;
      }).catch(response => {
        console.log("get发送Ajax请求失败", response);
      });
      }
    }
  },
  created: function() {
    
    axios.get("http://localhost:9999/selectbyid", {
        params: {
          id: this.$route.query.id
        }
      })
      .then(response => {
        // console.log("get发送Ajax请求成功", response.data[0]);
        this.mydata = response.data[0];
        this.prices = this.mydata.price;
      })
      .catch(response => {
        console.log("get发送Ajax请求失败", response);
      });
  }
};
</script>

<style>
	.wrap {
		margin-top: 20px;
	}
	.procontent {
		width: 100%;
		height: 386px;
	}
	.goodsnum {
		width: 15px;
		height: 15px;
		border:1px solid black;
		position: absolute;
		top: -44px;
		right: 156px;
		background-color: red;
		color: #fff;
		border-radius: 50%;
	}
	.proshow {
		width: 45%;
		height: 386px;
		margin-left: 130px;
		overflow: hidden;
	}
	.proshow img {
		max-width: 100%;
		height: auto;
		margin-top: -140px;
	}
	.proshow,
	.desc {
		float: left;
	}
	.clor {
		text-align: left;
		color: #a5a5a5;
		margin-left: 10px;
	}
	.desc {
		margin-left: 10px;
		width: 35%;
		height: 386px;
	}
	.desc::after {
		content: "";
		display: block;
		clear: both;
	}
	.desc .neames {
		width: 100%;
	}
	.desc .neames,
	.desc .price {
		font-size: 20px;
		font-weight: bold;
		text-align: left;
		margin: 4px;
		font-family: siyuan, "Microsoft YaHei", sans-serif;
	}
	.desc .price {
		margin-bottom: 20px;
	}
	.pian {
		width: 100%;
		height: 40px;
		line-height: 40px;
		background-color: #d06665;
		color: #fff;
		margin-top: 4px;
	}
	.order {
		height: 50px;
		line-height: 50px;
	}
	.middl {
		position: relative;
	}
	.middl .proms {
		position: absolute;
		width: 250px;
		height: 120px;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}
	.middl .proms div {
		width: 120px;
		height: 40px;
		border: #fff 2px solid;
		color: #fff;
		line-height: 40px;
		text-align: center;
		margin-top: 20px;
		margin-left: 58px;
		border-radius: 20px;
	}
	.middl .proms div:hover {
		background-color: #fff;
		color: #000;
	}
	.middl .proms h1 {
		width: 250px;
		height: 50px;
		font-size: 40px;
		border-radius: 10px;
		color: #fff;
	}
	.middl img {
		width: 100%;
		height: auto;
	}
	.selec el-button {
		padding: 0 5px;
		font-size: 14px;
	}
	.el-button + .el-button {
		margin-top: 16px;
	}
	.purch {
		width: 80%;
		margin-top: 35px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-left: 50px;
	}
	.purch div:nth-of-type(2) {
		width: 110px;
		height: 40px;
		border: 2px solid black;
		line-height: 40px;
	}
	.purch div:nth-of-type(2):hover {
		background-color: #000;
		color: #fff;
	}
	.purch div:nth-of-type(3) {
		width: 130px;
		height: 40px;
		border: 2px solid black;
		line-height: 40px;
		background-color: #000;
		color: #fff;
		opacity: 0.8;
	}
	.purch div:nth-of-type(3):hover {
		opacity: 1;
	}
	.purch .el-input-number {
		width: 120px;
		height: 40px;
		border: 2px solid black;
	}
	.purch .el-input-number span:first-of-type {
		border-right: 2px solid black;
	}
	.purch .el-input-number span:last-of-type {
		border-left: 2px solid black;
	}
</style>

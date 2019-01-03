<template>
    <div class="wrap">
        <div>
            <input type="checkbox" class="selemore">
        </div>
       <div class="pic">
           <img :src="mydatas.imgurl" alt="">
       </div>
       <p class="name">{{mydatas.name}}</p>
       <p>预计明天12：00前发货</p>
       <p>￥价格{{mydatas.num*mydatas.price}}</p>
        <el-input-number v-model="mydatas.num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        <p @click='remove' class="right1">删除</p>
    </div>
</template>
<script>
export default {
    name:'Wares',
    props:['mydata'],
    data(){
        return{
            num1:0,
            mydatas:this.mydata
        }
    },
    methods:{
        handleChange(value) {
      console.log(value);
    //   this.prices = this.mydata.price * this.num1;
    },
    remove:function(){
        console.log(this.mydatas)
    }
    }
}
</script>
<style>
/* .last {
    display: none;
} */
    .wrap {
        border: 1px solid black;
        width: 80%;
        height: 140px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 auto;
        margin-top: 10px;
         box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .selemore {
        display: block;
        width: 23px;
        height: 23px;
        margin-top: 60px;
        margin-left: 10px;
    }
   
    .pic {
        width: 100px;
        height: 140px;
        /* border: 1px solid black; */
        overflow: hidden;
    }
    .pic img {
        max-width: 100%;
        height: auto;
        margin-top: 17px;
    }
    .wrap p {
        /* height: 100%; */
        line-height: 140px;
    }
    .right1 {
        margin-right: 20px;
    }
    .el-input-number {
         margin-top: 47px;
         /* border: 1px solid rgb(10, 74, 134); */
    }
    .right1:hover {
        color: blue;
    }
</style>

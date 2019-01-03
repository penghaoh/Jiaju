//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    slideshow:[
      {id:'1',src:'https://img.zaozuo.com/eb77d9672f5889f3261349a58bc93004?x-oss-process=image/format,jpg/interlace,1',alt:'圣诞',to:'aa'},
					{id:'2',src:'https://img.zaozuo.com/1f40d338c76edc5bee2003a414cbe22c?x-oss-process=image/format,jpg/interlace,1',alt:'远山',to:'bb'},
					{id:'3',src:'https://img.zaozuo.com/e04b5222aaa3df6e0dbc0ad4f6c460d9?x-oss-process=image/format,jpg/interlace,1',alt:'星球仪',to:'cc'},
					{id:'4',src:'https://img.zaozuo.com/2185df149656759a579483dc8cb5cc94?x-oss-process=image/format,jpg/interlace,1',alt:'山雪床',to:'dd'},
					{id:'5',src:'https://img.zaozuo.com/8740a5f20ef7fce73417231adf327242?x-oss-process=image/format,jpg/interlace,1',alt:'山雪电视柜',to:'ee'},
					{id:'6',src:'https://img.zaozuo.com/1fecd3e594113669b60e63cf7495dfb6?x-oss-process=image/format,jpg/interlace,1',alt:'瓦檐长餐桌',to:'ff'},
					{id:'7',src:'https://img.zaozuo.com/1e4531356fe667cb59dcf6f7bffce231?x-oss-process=image/format,jpg/interlace,1',alt:'生活家精选晒单',to:'agga'},
    ],
    searchList: [],
    defPro:[],
    newPro: [],
    sofaList:[],
    chairList: [],
    deskList: [],
    lampList: [],
    tablewareList: [],
    decorationList: [],
    // otherList: [],
    proList: []

  },
  //事件处理函数
  getProInfo: function(e){
    console.log(e);
    var proId = e.currentTarget.dataset.id;
    var typeId = e.currentTarget.dataset.typeid;
    console.log(proId);
    wx.navigateTo({
      url: '../purchase/purchase?pro_id=' + proId,
    })
  },

  //根据typeid值获取各分类商品列表。
  getProType: function(prolist){
    //  console.log(prolist);
    let sofalist = [];
    let chairlist = [];
    let desklist = [];
    let lamplist = [];
    let tablewarelist = [];
    let decorationlist = [];
      for (let i = 0; i < prolist.length;i++) {
        let item = prolist[i];
        if (item.typeid == 1) {
          sofalist.push(item)
        } else if (item.typeid == 2) {
          chairlist.push(item)
        } else if (item.typeid == 3) {
          desklist.push(item)
        } else if (item.typeid == 4) {
          lamplist.push(item)
        } else if (item.typeid == 5) {
          tablewarelist.push(item)
        } else if (item.typeid == 6) {
          decorationlist.push(item)
        } 
      }
    this.setData({
      sofaList: sofalist,
      chairList: chairlist,
      deskList: desklist,
      lampList: lamplist,
      tablewareList: tablewarelist,
      decorationList: decorationlist
    })
    // console.log(this.data.sofaList);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    //定义产品请求数据
    wx.request({
      url: 'http://localhost:9999/showDefiningGoods',
      success: function (res) {
        //  console.log(res.data);
        var res1 = res.data.filter(function (item, index, array) {
          return (item.defineid == 1);
        });
        var res2 = res.data.filter(function (item, index, array) {
          return (item.defineid == 2);
        });
        var res3 = res.data.filter(function (item, index, array) {
          return (item.defineid == 3);
        });
        that.setData({
          defPro: res1,
          newPro: res2,
          proList: res3
        })
        that.getProType(res3);
        // console.log(that.data.defPro);
        // console.log(that.data.newPro);
        // console.log(that.data.proList);
      }
    });
    
  },
   /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },
  onShow:function(){
  }
})

// pages/shopcar/shopcar.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cartItems:[],//购物车列表
    userInfo: app.globalData.userInfo,
    checkAll: true,//控制选中框的样式
    total:0, //总金额
    shopcarNum: 0 //总数量
  },
  //去支付页面
  goPay: function (e) {
    var userInfo = app.globalData.userInfo;
    if (JSON.stringify(userInfo) != "{}") {
      wx.navigateTo({
        url: '../../pages/pay/pay'
      });
      wx.setStorageSync("shoplist", []);
      var shoplist = wx.getStorageSync("shoplist") || []
      for (var i = 0; i < this.data.cartItems.length; i++) {
        if (this.data.cartItems[i].selected) {
          shoplist.push(this.data.cartItems[i])
        }
      }
      // console.log(shoplist);
      //更新缓存数据
      wx.setStorageSync("shoplist", shoplist);

      
    } else {
      wx.showToast({
        title: "请先登录",
        duration: 1000
      })
    }
  },
  //清空
  getNull:function(){
    this.setData({
      cartItems: []
    })
    this.getsumTotal()
    wx.setStorageSync("cartItems", [])
  },
  //删除
  delPro:function(e){
    var cartItems = this.data.cartItems  //获取购物车列表
    var index = e.currentTarget.dataset.index  //获取当前点击事件的下标索引
    cartItems.splice(index, 1)
    this.setData({
      cartItems: cartItems
    });
    if (cartItems.length) {
      this.setData({
        cartList: false
      });
    }
    this.getsumTotal()
    wx.setStorageSync("cartItems", cartItems)
  },
  // 全选
  selectedCart: function (e) {
    var cartItems = this.data.cartItems   //获取购物车列表
    var index = e.currentTarget.dataset.index;  //获取当前点击事件的下标索引
    var selected = cartItems[index].selected;    //获取购物车里面的value值
    //选中框的状态值取反
    cartItems[index].selected = !selected;
    this.setData({
      cartItems: cartItems
    })
    this.getsumTotal();
    wx.setStorageSync("cartItems", cartItems)
  },
  //单选
  select: function (e) {
    var checkAll = this.data.checkAll;
    checkAll = !checkAll
    var cartItems = this.data.cartItems
    for (var i = 0; i < cartItems.length; i++) {
      cartItems[i].selected = checkAll
    }
    this.setData({
      cartItems: cartItems,
      checkAll: checkAll
    })
    this.getsumTotal()
  },
  //合计金额
  getsumTotal: function () {
    var sum = 0;
    for (var i = 0; i < this.data.cartItems.length; i++) {
      if (this.data.cartItems[i].selected) {
        sum += this.data.cartItems[i].num * this.data.cartItems[i].price
      }
    }
    this.setData({
      total: sum,
    })
  },
  /* 点击减号 */
  bindMinus: function (e) {
    var cartItems = this.data.cartItems;
    var index = e.currentTarget.dataset.index;
    var value = cartItems[index].num;
    if (value == 1) {
      value--
      cartItems[index].num = 1
    } else {
      value--
      cartItems[index].num = value;
    }
    this.setData({
      cartItems: cartItems
    });
    this.getsumTotal()
    wx.setStorageSync("cartItems", cartItems)
  },
  /* 点击加号 */
  bindPlus: function (e) {
    var cartItems = this.data.cartItems;
    var index = e.currentTarget.dataset.index;
    var value = cartItems[index].num;
    value++
    cartItems[index].num = value;
    this.setData({
      cartItems: cartItems
    });
    this.getsumTotal()
    wx.setStorageSync("cartItems", cartItems)  //存缓存
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var cartItems = wx.getStorageSync("cartItems")
    // console.log(cartItems);
    this.setData({
      cartList: false,
      cartItems: cartItems
    })
    this.getsumTotal()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
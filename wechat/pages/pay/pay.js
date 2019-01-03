// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shoplist: [],
    totalValue:0,
    array: ['不限时送货时间', '工作日送货', '双休日、假日送货'],
    index: 0
  },
  select: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  pay: function (e) {
    wx.showModal({
      title: '支付提示',
      content: '本程序仅用于演示，支付接口API已屏蔽！',
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          

        }
      }
    })
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
    var _this = this
    var shoplist = wx.getStorageSync("shoplist")
    _this.setData({
      shoplist: shoplist
    })
    // 获取清单总金额
    var sum = 0;
    for (var i = 0; i < _this.data.shoplist.length; i++) {
      sum += _this.data.shoplist[i].num * _this.data.shoplist[i].price
    }
    _this.setData({
      totalValue: sum,
    })
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
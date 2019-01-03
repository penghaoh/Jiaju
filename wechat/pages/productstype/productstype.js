
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeList:[],
    typeId: 0,
    proList:[],
    proid: "",
    searchKey: ''
   
  },
  //获取搜索框的值
  getsearch: function (event){
    this.setData({
      searchKey: event.detail.value
    });
    // console.log(this.data.searchKey);

  },
  //点击搜索框搜索
  getsearchList: function(){
    //获取搜索框的值
    // console.log(this.data.searchKey);
    var that = this;
    //请求搜索的商品
    wx.request({
      url: 'http://localhost:9999/getSearchList',
      data: {
        searchKey: that.data.searchKey
      },
      success: function (res) {
        let prolist = res.data;
        // console.log(prolist);
        that.setData({
          proList: prolist
        });
      }
    });
    
  },
  //点击商品图片跳转
  getProInfo:function(e){
    var proid = e.currentTarget.dataset.id
    // console.log(proid);
    wx.navigateTo({
      url: '../purchase/purchase?pro_id=' + proid,
    })
  },
  
  //点击商品分类请求数据
  getProList: function (e) {
    let typeid = e.currentTarget.dataset.typeid;
    // console.log(typeid)
    var othis = this;
    wx.request({
      url: 'http://localhost:9999/getProList',
      data: {
        typeId: typeid
      },
      success: function (res) {
        console.log(res.data);
        var prolist = res.data;
        console.log(othis);
        othis.setData({
          proList: prolist
        });
        console.log(othis.data.proList);
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //请求商品分类
    wx.request({
      url: 'http://localhost:9999/showtype',
      success: function (res) {
        let typelist = res.data;
        // console.log(typelist);
          that.setData({
            typeList: typelist
          });
        
      }
    });
    //请求全部商品
    wx.request({
      url: 'http://localhost:9999/getProList',
      data: {
        typeId: that.data.typeId
      },
      success: function (res) {
        // console.log(res.data);
        var prolist = res.data;
        that.setData({
          proList: prolist
        });
        // console.log(that.data.proList);
      }
    });
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
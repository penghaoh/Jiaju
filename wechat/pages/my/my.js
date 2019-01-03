//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    mode: 'scaleToFill',
    userInfo: app.globalData.userInfo,
    isShow: true,
   
  },
  //跳转至我的资料
  getMyInfo: function(){
    var userInfo = app.globalData.userInfo;
    
    if (JSON.stringify(userInfo) != "{}"){
      for (let id in userInfo) {
        wx.navigateTo({
          url: '../userinfo/userinfo?id=' + userInfo.id
        })
      } 
    }else {
      wx.showToast({
        title: "请先登录",
        duration: 1000
      })
    }
   
     
   
  },
  //退出登录
  loginout:function(){
    wx.setStorageSync("userInfo", {});
    app.globalData.userInfo = {};
    this.setData({
      isShow: true,
    })
  },
  //点击登录
  login:function(){
    wx.navigateTo({
      url: '../login/login',
    })
  },
  //页面显示时刷新页面
  onShow:function(){
    var userInfo = app.globalData.userInfo;
    if (JSON.stringify(userInfo) != "{}") {
      this.setData({
        userInfo: userInfo,
        isShow: false,
      })
    }
   
  },

  onLoad:function(){
    
  }
  
})

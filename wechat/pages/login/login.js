// pages/login/login.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */

  data: {
    loginDisplay: "block",
    registerDisplay: "none",
    logbgc: "#000",
    regbgc: "#a0a0a0",
    loginflag: true,
    regflag: true,
    loginusername: "",
    loginpassword: "",
    registerusername: "",
    registerphone: "",
    registerpwd: "",
    registerpassword: ""
    

  },
  //点击登录时显示登录界面
  login: function () {
    this.setData({
      loginDisplay: "block",
      registerDisplay: "none",
      logbgc: "#000",
      regbgc: "#a0a0a0"
    })
    //console.log(this.data.btnbgc);
  },
  //点击注册时显示注册界面
  register: function () {
    this.setData({
      loginDisplay: "none",
      registerDisplay: "block",
      logbgc: "#a0a0a0",
      regbgc: "#000",
    })
  },
  //登录界面
  //获取登录界面的用户名
  getUser: function (e) {
    this.setData({
      loginusername: e.detail.value
    })
    this.isNull(this.data.loginusername, this.data.loginpassword);
  //  console.log(this.data.loginusername)
  },
  //获取登录界面的密码
  getPwd: function (e) {
    this.setData({
      loginpassword: e.detail.value
    })
    this.isNull(this.data.loginusername, this.data.loginpassword);
    this.pwdIsLong();
  },
  //判断密码长度超过最大值时
  pwdIsLong: function () {
    if (this.data.loginpassword.length >11 ) {
      wx.showToast({
        title: '密码长度不能超过11位',
      })
    }
  },
  //判断用户名和密码不能为空
  isNull: function (username, password) {
    if (username != "" && password != "") {
      this.setData({
        loginflag: false
      })
    } else {
      this.setData({
        loginflag: true
      })
    }
  },
  //表单重置
  loginFormReset: function () {
    this.setData({
      flag: true
    })
  },
  //表单提交，请求到服务器，核对是否正确
  loginFormSubmit: function (e) {
    var username = e.detail.value.username;
    var pwd = e.detail.value.pwd;
    // console.log(username,pwd);
    wx.request({
      url: 'http://localhost:9999/checkLogin',
      data: {
        username: username,
        pwd: pwd
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (response) {
        console.log(response.data)
        if (response.data == "no"){
          wx.showToast({
            title: '登录失败',
          })
        }else {
          // 是否回传用户id
          if (response.data.id !=''){
            wx.showToast({
              title: '登录成功',
            });
            var userInfo = wx.getStorageSync("userInfo") || {};
            userInfo.id = response.data.id;
            userInfo.name = username;
            //更新缓存数据
            wx.setStorageSync("userInfo", userInfo);
            console.log(userInfo);
            // //设置全局的用户名变量的值 
            app.globalData.userInfo = userInfo;
            wx.switchTab({
              url: '../my/my',
            })
          }else {
            wx.showToast({
              title: '重新登录',
            });
          }
          
         
        }
      },
    })
  },
  //登录界面完

  //注册界面
  //获取注册用户名
  getRegUser: function (e) {
    this.setData({
      registerusername: e.detail.value
    })
  },
  //获取用户手机号
  getPhone: function(e){
    this.setData({
      registerphone: e.detail.value
    })
  },
  //获取第一次注册密码
  getRegPhone: function (e) {
    this.setData({
      registerpwd: e.detail.value
    })
  },
  //获取第二次注册密码
  getRegPwd: function (e) {
    this.setData({
      registerpassword: e.detail.value
    })
    this.isRegNull();
  },
  //判断两次输入输入的密码是否一致
  isEqual:function(){
    if (this.data.registerpwd != this.data.registerpassword){
        wx.showToast({
          title: '密码不一致',
        });
        this.setData({
          regflag: true
        });
    }
  },
  //判断用户名、手机号、两次登录密码不能为空
  isRegNull: function () {
    if (this.data.registerusername != "" && this.data.registerphone != "" && this.data.registerpwd != "" && this.data.registerpassword != "") {
      this.setData({
        regflag: false
      });
      this.isEqual();
    } else {
      this.setData({
        regflag: true
      })
    }
  },
  //表单提交，发送至服务器
  regFormSubmit: function (e) {
    console.log("hahahhah");
    console.log(e);
    var username = e.detail.value.regName;
    var pwd = e.detail.value.regPwdFirst;
    var phone = e.detail.value.phone;
    console.log("username", username, "pwd", pwd,"phone", phone);
    var that= this;
    wx.request({
      url: 'http://localhost:9999/getRegInfo',
      data: {
        username: username,
        pwd: pwd,
        phone: phone
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (response) {
        // console.log(response)
        if (response.data == "ok") {
          wx.showToast({
            title: '注册成功',
          });
          that.onLoad();
        } else if (response.data == "repeat") {
          wx.showToast({
            title: '用户名重复',
          })
        }else {
          wx.showToast({
            title: '注册失败',
          })
        }
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  //设置初始界面
  onLoad: function (options) {
    this.setData({
      loginDisplay: "block",
      registerDisplay: "none",
    })
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
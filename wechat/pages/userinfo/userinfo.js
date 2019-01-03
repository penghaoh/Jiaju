// pages/userinfo/userinfo.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      saveflag:true,
      id:'',
      name:'',
      pwd:'',
      pwdSec:'',
      phone:'',
      address:'',
  },

  //获取用户手机号
  getPhone: function (e) {
    console.log(e);
    this.setData({
      phone: e.detail.value
    })
    // console.log(this.data.phone);
    this.isRegNull();
  },
  //获取第一次密码
  getPwd: function (e) {
    this.setData({
      pwd: e.detail.value
    })
    this.isRegNull();
  },
  //获取第二次密码
  getPwdSec: function (e) {
    this.setData({
      pwdSec: e.detail.value
    })
    this.isRegNull();
  },
  //获取地址
  getAddress: function (e) {
    this.setData({
      address: e.detail.value
    })
    this.isRegNull();
  },
  //判断两次输入输入的密码是否一致
  isEqual: function () {
    if (this.data.pwd != this.data.pwdSec) {
      wx.showToast({
        title: '密码不一致',
      });
      this.setData({
        saveflag: true
      });
    }
  },
  //判断手机号、密码、地址不能为空
  isRegNull: function () {
    // console.log('phone',this.data.phone,'pwd', this.data.pwd,'pwdsec', this.data.pwdSec, 'address',this.data.address)
    if ( this.data.phone != "" && this.data.pwd != "" && this.data.pwdSec != "" && this.data.address != "") {
      this.setData({
        saveflag: false
      });
      this.isEqual();
      console.log(this.data.phone)
      console.log(this.data.saveflag)
    } else {
      this.setData({
        saveflag: true
      })
      console.log(this.data.saveflag)
    }
  },
  //表单提交，发送至服务器
  updateFormSubmit: function (e) {
    var that = this;
    var pwd = e.detail.value.pwd;
    var phone = e.detail.value.phone;
    var address = e.detail.value.address;
    // console.log( "pwd", pwd, "phone", phone);
    wx.request({
      url: 'http://localhost:9999/getRegInfo',
      data: {
        id: that.data.id,
        pwd: pwd,
        phone: phone,
        address: address
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (response) {
        // console.log(response)
        if (response.data == "ok") {
          wx.showToast({
            title: '修改成功',
            duration: 1000
          });
          wx.navigateTo({
            url: '../my/my'
          })
        } else if (response.data == "repeat") {
          wx.showToast({
            title: '用户名重复',
            duration: 1000
          })
        } else {
          wx.showToast({
            title: '修改失败',
            duration: 1000
          })
        }
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userid = options.id;
    console.log('userid', userid);
    var that = this;
    that.setData({
      id: userid,
    })
    wx.request({
      url: 'http://localhost:9999/getUserInfo',
      data: {
        userid: userid
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (response) {
        console.log(response.data[0]);
        that.setData({
          name: response.data[0].name,
          id: response.data[0].id,
          pwd: response.data[0].pwd,
          phone: response.data[0].phone,
          address: response.data[0].address,
        })

      },
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
// pages/cinemaMovie/cinemaMovie.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    shopcarNum: app.globalData.shopcarNum,
    userInfo: app.globalData.userInfo,
    proInfo: [],
    proId:"",
    proName: "",
    proPrice: "",
    proDescs: "",
    proImgurl: "",
    proOrigin: "",
    proBrand: "",
    colorList: [
      { color: '#4682B4', text:'海蓝色'},
      { color: '#e56a69', text: '铁锈红' },
      { color: '#FFE4C4', text: '桃粉色' }
      ],
    bigimg: [
      'https://img.zaozuo.com/54fddf798fb80ee9c78904c9d6a195c4?x-oss-process=image/format,jpg/interlace,1',
      'https://img.zaozuo.com/27471353ce5f1cc73bde219f5f8d798b?x-oss-process=image/format,jpg/interlace,1',
      'https://img.zaozuo.com/8e2725b91164e5d866453b7207d158fd?x-oss-process=image/format,jpg/interlace,1'
    ],
// ================================
    showModalStatus: false,//是否显示
    gg_id: 0,//规格ID
    gg_txt: '',//规格文本
    // gg_price: 0,//规格价格
    // guigeList: [{ guige: '100', price: '150' }, { guige: '200', price: '150' }, { guige: '300', price: '150' }],
    guigeList: [{ guige: '小号'}, { guige: '中号'}, { guige: '大号'}],

    cl_id: 0,//颜色ID
    cl_txt: '',//颜色文本
    totalPrice: 0,//总价格
    num: 1,//初始数量

  },
// ================================
  //购物车跳转
  toshopcar:function(e){
      wx.switchTab({
        url: '../../pages/shopcar/shopcar',
      })
  },
  //去支付页面
  goPay: function (e) {
    var userInfo = app.globalData.userInfo;
    //判断是否登录
    if (JSON.stringify(userInfo) != "{}") {
      //判断是否选择颜色和规格
      if (this.data.cl_txt != '' && this.data.gg_txt != '') {
        wx.navigateTo({
          url: '../../pages/pay/pay'
        })
        wx.setStorageSync("shoplist", []);
        var shoplist = wx.getStorageSync("shoplist")||[]
        shoplist.push({
            id: e.target.dataset.id,
            name: e.target.dataset.name,
            image: e.target.dataset.image,
            price: e.target.dataset.price,
            num: e.target.dataset.num,
            color: e.target.dataset.color,
            guige: e.target.dataset.guige,
          })
        console.log(shoplist);
        //更新缓存数据
        wx.setStorageSync("shoplist", shoplist);
      } else {
        wx.showToast({
          title: "请选择商品参数",
          duration: 1000
        })
      }
     
    }else {
      wx.showToast({
        title: "请先登录",
        duration: 1000
      })
    }
  },
  //加入购物车
  addCart:function(e){
    //判断是否选择颜色和规格
    if (this.data.cl_txt != '' && this.data.gg_txt != '') {
        var cartItems = wx.getStorageSync("cartItems") || []
        var exist = cartItems.find(function (el) {
          return el.id == e.target.dataset.id
        })
        //如果购物车里面有该商品那么他的数量每次加一
        if (exist) {
          exist.value = parseInt(exist.value) + 1
        } else {
          cartItems.push({
            id: e.target.dataset.id,
            name: e.target.dataset.name,
            image: e.target.dataset.image,
            price: e.target.dataset.price,
            num: e.target.dataset.num,
            color: e.target.dataset.color,
            guige: e.target.dataset.guige,
            selected: true
          })
        }
        wx.showToast({
          title: "加入购物车成功！",
          duration: 1000
        })
        // console.log(cartItems);
        //更新缓存数据
        wx.setStorageSync("cartItems", cartItems);
        // 获取购物车商品数量
        var num = 0;
        for (var i = 0; i < cartItems.length; i++) {
          num += cartItems[i].num;
        }
      app.globalData.shopcarNum = num;
      this.setData({
        shopcarNum: num
      });
      console.log(' app.globalData.shopcarNum ', app.globalData.shopcarNum )
      this.hideModal();
    } else {
      wx.showToast({
        title: "请选择商品参数",
        duration: 1000
      })
    }
  },
  // 规格选择
  filter: function (e) {
    // console.log(e);
    var self = this, id = e.currentTarget.dataset.id, txt = e.currentTarget.dataset.txt
    // price = e.currentTarget.dataset.price
    self.setData({
      gg_id: id,
      gg_txt: txt,
      // gg_price: price
    });
  },
  // 颜色选择
  filtercolor: function (e) {
    // console.log(e);
    var self = this, id = e.currentTarget.dataset.id, txt = e.currentTarget.dataset.txt, price = e.currentTarget.dataset.price
    self.setData({
      cl_id: id,
      cl_txt: txt
    });
  },
  /* 点击减号 */
  bindMinus: function () {
    var num = this.data.num;
    // 如果大于1时，才可以减  
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    var price = num*this.data.proPrice;
    this.setData({
      num: num,
      totalPrice: price,
      minusStatus: minusStatus
    });
  },
  /* 点击加号 */
  bindPlus: function () {
    var num = this.data.num;
    // 不作过多考虑自增1  
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    var price = num * this.data.proPrice;
    // 将数值与状态写回  
    this.setData({
      num: num,
      totalPrice: price,
      minusStatus: minusStatus
    });
  },
  //显示对话框
  showModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      totalPrice: this.data.proPrice,
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },

// ===================================

  //请求商品信息
  getProInfo: function (proid){
    var that = this;
    wx.request({
      url: 'http://localhost:9999/getProInfo',
      data: {
        proId: proid
      },
      success: function (res) {
        var proInfo = res.data[0];
        // console.log(proInfo);
        that.setData({
          proName: proInfo.name,
          proPrice: proInfo.price,
          proDescs: proInfo.descs,
          proImgurl: proInfo.imgurl,
          proOrigin: proInfo.origin,
          proBrand: proInfo.brand
        })
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var pro_id = options.pro_id;
    this.setData({
      proId: pro_id,
    })
    // console.log(pro_id);
    this.getProInfo(pro_id);
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
    console.log(' app.globalData.shopcarNum ', app.globalData.shopcarNum)
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
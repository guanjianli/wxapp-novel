//index.js
//获取应用实例
var b = require('../../utils/util.js');
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    items:null
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this;
    wx.request({
      url: b.domain + 'wxrecommend.php',
      data: { type: 5 },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        
        that.setData({
          items:res.data
        })
      }
    })

  }
})

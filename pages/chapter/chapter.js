// pages/chapter/chapter.js
var b = require('../../utils/util.js');

Page({
  data:{items:null,bookId:null},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options.bookId);
    var that = this;
    wx.request({
      url: b.domain+'chapter.php',
      data: { id:options.bookId,start:0,limit:99999 },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {

        that.setData({
          items:res.data,
          bookId:options.bookId
        })
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
    
  }
})
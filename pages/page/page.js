// pages/page/page.js
var b = require('../../utils/util.js');
Page({
  data: { bookId: null, chapterId: null, items: null, nextId:null, prevId:null },
  onPrev:function(){
    if(this.data.prevId)
      this.getData(this.data.prevId);
  },
  onNext:function(){
    if(this.data.nextId){
      this.getData(this.data.nextId);
    }
  },
  getData:function(_chapterId){
    var that = this;
    that.setData({
      items:{content:""}
    })

    wx.request({
      url: b.domain + 'paper.php',
      data: { bookId: that.data.bookId, chapterId:_chapterId },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          items: res.data,
        })
        that.data.nextId = res.data.next;
        that.data.prevId = res.data.previous;
      }
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

    var that = this;
    that.setData({
      bookId: options.bookId
    })
    that.getData(options.chapterId);
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
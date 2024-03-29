var app = getApp();

Page({
  data: {
    myText: 'Hello World',
    appContent: app.globalData.message,
    text: 'This is page data.',
    blogList: [],
  },

  doloading: function(e) {
    console.log(e, app)
  },

  onLoad: function(options) {
    // 页面创建时执行
    wx.request({
      url: `https://yapi.hapyun.com/mock/245/weixin/blog`,
      success: res => {
        console.log(res)
        this.setData({blogList: res.data.data});
      }
    });
  },
  onShow: function() {
    // 页面出现在前台时执行
  },
  onReady: function() {
    // 页面首次渲染完毕时执行
  },
  onHide: function() {
    // 页面从前台变为后台时执行
  },
  onUnload: function() {
    // 页面销毁时执行
  },
  onPullDownRefresh: function() {
    // 触发下拉刷新时执行
  },
  onReachBottom: function() {
    // 页面触底时执行
  },
  onShareAppMessage: function () {
    // 页面被用户分享时执行
  },
  onPageScroll: function() {
    // 页面滚动时执行
  },
  onResize: function() {
    // 页面尺寸变化时执行
  },
  onTabItemTap(item) {
    // tab 点击时执行
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // 事件响应函数
  viewTap: function() {
    console.log(1111)
    this.setData({
      text: 'Set some data for updating view.'
    }, function() {
      // this is setData callback
    })
  },
  // 自由数据
  customData: {
    hi: 'MINA'
  }
});
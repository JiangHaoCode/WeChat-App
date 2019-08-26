App({
  // app.js 生命周期
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  onError: function(err) {
    console.log("app.js ---onError---" + err)
  },


  globalData: {
    hasLogin: false,
    message: 'github.commmmm完成',
    content: '搞定',
  }
})

//index.js
//获取应用实例
var star1 = require ('../../utils/star');
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../images/banner1.jpg',
      '../../images/banner2.jpg',
    ],
    'scrollHeight': wx.getSystemInfoSync().windowWidth ,
    'scrollTop':0,
    conent: [
      {
        imgurl: '../../images/banner2.jpg',
        title: '黑色的少年',
        id:1,
        star: star1.get_star(1)
      },
      {
        imgurl: '../../images/banner1.jpg',
        title: '蓝色的少年',
        id: 1,
        star: star1.get_star(2)
      },
      {
        imgurl: '../../images/banner1.jpg',
        title: '褐色的少年',
        id: 1,
        star: star1.get_star(7)
      },
      {
        imgurl: '../../images/banner1.jpg',
        title: '白色的少年',
        id: 1,
        star: star1.get_star(3)
      },
      {
        imgurl: '../../images/banner1.jpg',
        title: '红色的少年',
        id: 1,
        star: star1.get_star(5)
      },
      {
        imgurl: '../../images/banner1.jpg',
        title: '绿色的少年',
        id: 1,
        star: star1.get_star(6)
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
      wx.getSystemInfo({//获取手机的基本数据
        success:function(res) {
        console.log(res)
        that.setData({scrollHeight:res.windowHeight});
        }
      });
    if (app.globalData.userInfo) {
      console.log(res)
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      console.log(res)
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          console.log(res)
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 上拉加载回调接口
  topLoad: function () {
    console.log(222)
  },
  bindDownLoad: ( res=>{//下拉事件
    console.log(res)
  })
  
})

// pages/list/list.js
var star = require ('../../utils/star.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scroll_top: 0,
    detail: [
      {
        id:'4357348745938',
        imgUrl: '../../images/banner1.jpg',
        title: '追风的少年',
        star: star.get_star(7),
        tag: ['追风的少年','中国','战争'],
        author: '在这世界的角落',
        content: '在很久很久以前有一个小。。。'
      },
      {
        id: '4357348745938',
        imgUrl: '../../images/banner1.jpg',
        title: '追风的少年',
        star: star.get_star(4),
        tag: ['追风的少年', '中国', '战争'],
        author: '在这世界的角落',
        content: '在很久很久以前有一个小。。。'
      },
      {
        id: '4357348745938',
        imgUrl: '../../images/banner1.jpg',
        title: '追风的少年',
        star: star.get_star(6),
        tag: ['追风的少年', '中国', '战争'],
        author: '在这世界的角落',
        content: '在很久很久以前有一个小。。。'
      },
      {
        id: '4357348745938',
        imgUrl: '../../images/banner1.jpg',
        title: '追风的少年',
        star: star.get_star(6),
        tag: ['追风的少年', '中国', '战争'],
        author: '在这世界的角落',
        content: '在很久很久以前有一个小。。。'
      },
      {
        id: '4357348745938',
        imgUrl: '../../images/banner1.jpg',
        title: '追风的少年',
        star: star.get_star(9),
        tag: ['追风的少年', '中国', '战争'],
        author: '在这世界的角落',
        content: '在很久很久以前有一个小。。。'
      },
      {
        id: '4357348745938',
        imgUrl: '../../images/banner1.jpg',
        title: '追风的少年',
        star: star.get_star(4),
        tag: ['追风的少年', '中国', '战争'],
        author: '在这世界的角落',
        content: '在很久很久以前有一个小。。。'
      },
      {
        id: '4357348745938',
        imgUrl: '../../images/banner1.jpg',
        title: '追风的少年',
        star: star.get_star(5),
        tag: ['追风的少年', '中国', '战争'],
        author: '在这世界的角落',
        content: '在很久很久以前有一个小。。。'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    console.log(that.data.detail)
    that.setData({
      'detail[0].title': options.key
    });
    console.log(options.key)
  },
  upper: function (e) {
    console.log("已到顶部");
    console.log(e)
  },
  lower: function(){//下拉
    var that = this;
    console.log(that)
    console.log(that.data.detail);
    wx.showToast({//加载效果
      title: '加载中',
      icon: 'loading',
      duration: 2000
    })
    // wx.showNavigationBarLoading()//标题加载
    setTimeout(() => {
      let list = [
        {
          id: '4357348745938',
          imgUrl: '../../images/banner1.jpg',
          title: '追风的少年',
          star: star.get_star(9),
          tag: ['追风的少年', '中国', '战争'],
          author: '在这世界的角落',
          content: '在很久很久以前有一个小。。。'
        },
        {
          id: '4357348745938',
          imgUrl: '../../images/banner1.jpg',
          title: '追风的少年',
          star: star.get_star(4),
          tag: ['追风的少年', '中国', '战争'],
          author: '在这世界的角落',
          content: '在很久很久以前有一个小。。。'
        },
        {
          id: '4357348745938',
          imgUrl: '../../images/banner1.jpg',
          title: '追风的少年',
          star: star.get_star(5),
          tag: ['追风的少年', '中国', '战争'],
          author: '在这世界的角落',
          content: '在很久很久以前有一个小。。。'
        }
      ]
      this.data.detail = this.data.detail.concat(list);
      that.setData({
        detail: this.data.detail
      })
      console.log(that.data.detail);
      // wx.hideNavigationBarLoading() //完成停止加载
      // wx.stopPullDownRefresh() //停止下拉刷新
      // console.log(this.setData.detail)
      wx.hideToast();//结束加载效果
    }, 2000)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 页面渲染完成
    var that = this;
    console.log("渲染了");
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 4000
    })
    setTimeout(()=>{
      wx.hideToast();
    },500)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: ()=> {
  
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
  onPullDownRefresh: ()=> {
    console.log(3333333333333)
  },



  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
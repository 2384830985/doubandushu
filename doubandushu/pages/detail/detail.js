// pages/detail/detail.js
var star = require('../../utils/star.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '在这世界的角落',
    imgUrl: '../../images/banner1.jpg',
    star: star.get_star(7),
    tag: ['追风的少年', '中国', '战争'],
    author: '在这世界的角落',
    content: '在很久很久以前有一个小。。。',
    press: '我是一个出版社',
    time:'2018-12-12'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
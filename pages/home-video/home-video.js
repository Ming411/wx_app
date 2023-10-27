// pages/home-video/home-video.js
import {
  getTopMV
} from '../../service/api_video'
Page({



  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      name: 'ccc',
      age: 24,
    },
    topMVs: [{
      id: 1,
      name: '孤勇者'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 获取app实例
    const app = getApp()
    const token = app.globalData.token
    console.log(token)
    // this.getMvList()
  },

  async getMvList() {
    wx.showNavigationBarLoading() // 原生自带loading
    try {
      let ret = await getTopMV(0)
      console.log(ret)
    } catch (_) {
      console.log(_)
    }
    wx.hideNavigationBarLoading()
    // wx.stopPullDownRefresh() // 关闭下拉刷新
  },
  handleClick(e) {
    // console.log(e.currentTarget)
    wx.navigateTo({
      url: '/pages/detail-video/detail-video?id=1111',
    })
  },
  handleClick2(ev) {
    console.log(ev.target) // target触发事件的元素
    console.log(ev.currentTarget) // currentTarget处理事件的元素

    console.log(ev.currentTarget.dataset.name)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('滚动到底部了')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
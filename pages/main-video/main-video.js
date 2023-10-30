// pages/main-video/main-video.js
import {
  getTopMV
} from '../../service/api_video'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoList: [],
    offset: 0, // 偏移量
    hasMore: true // 是否还有更多数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.fetchTopMV()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  async fetchTopMV() {
    try {
      const ret = await getTopMV(this.data.offset)
      this.setData({
        videoList: [...this.data.videoList, ...ret.data]
      })
      // 这里无需使用setData因为不需要更新视图
      this.data.offset = this.data.videoList.length
      this.data.hasMore = res.hasMore
    } catch (_) {

    }
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
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  async onPullDownRefresh() {
    // 1.清空之前的数据
    this.setData({
      videoList: []
    })
    this.data.offset = 0
    this.data.hasMore = true

    // 2.重新请求新的数据
    await this.fetchTopMV()

    // 3.停止下拉刷新
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    // 1.判断是否有更多的数据
    if (!this.data.hasMore) return
    // 2.如果有更多的数据, 再请求新的数据
    this.fetchTopMV()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
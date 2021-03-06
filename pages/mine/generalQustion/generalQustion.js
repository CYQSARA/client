/**
 * Created by cuiyongqin on 2018/5/16.
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.getQuestionList()
  },
  getQuestionList:function (e) {
    var that = this;
    wx.request({
      url: 'https://o.ccfpap.org/patdoc/cpapFaq/2',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json',
        'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0NGI1NjQwLTRlOTktMTFlOC05ZjliLWZmYWM1NDBiMDVhZCIsIm5hbWUiOiLltJTljLvnlJ8iLCJjb2RlIjoiY29kZSIsInR5cGUiOjQsImlhdCI6MTUyNjQzODYyMiwiZXhwIjoyMzA0MDM4NjIyfQ.S-udpel0TRq_WjKCn1pF9UlRQhFfwBBwsOlVyzHUt3w',
        'projectId': '2'
      },
      success: function (res) {
        console.log(res)
        that.setData({
          questionArr: res.data.data
        })
      }
    })
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
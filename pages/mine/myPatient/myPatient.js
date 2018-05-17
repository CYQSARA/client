Page({

  /**
   * 页面的初始数据
   */
  data: {
    patientArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.getPatientList()
  },
  getPatientList:function (e) {
    var that = this
    wx.request({
        url:'https://o.ccfpap.org/cpapDoctor/getPatients/244b5640-4e99-11e8-9f9b-ffac540b05ad',
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
                patientArr: res.data
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
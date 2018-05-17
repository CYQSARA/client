Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'崔医生',
    projectType:'捷恪卫',
    totalPeople:'2',
    totalVisit:'9',
    recommendPeople:'4',
    totalMed:'190'
  },
    changePage:function () {
        wx.navigateTo({
            url:'../editInfo/editInfo'
        })
    },
    breakCountAction:function (e) {
        wx.navigateTo({
            url:'../mine/breakCount/breakCount'
        })
    },
    myPatientAction:function (e) {
        wx.navigateTo({
            url:'../mine/myPatient/myPatient'
        })
    },
    generalQustionAction:function () {
        wx.navigateTo({
            url:'../mine/generalQustion/generalQustion'
        })
    },
    contactUsAction:function (e) {
      wx.navigateTo({
          url:'../mine/contactUS/contactUS'
      })
    },
    changePwdAction:function (e) {
      wx.navigateTo({
          url:'../mine/changePwd/changePwd'
      })
    },
    exitCurrentAccount:function (e) {
      console.log("kkkkk");
      wx.showModal({
        title: '提示',
        content: '您确定退出当前账号吗',
        success:function(res){
          if (res.confirm){
            wx.showToast({
              title: '确认退出',
            })
          } else {
            wx.showToast({
              title: '放弃退出',
            })
          }
        }
      })
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
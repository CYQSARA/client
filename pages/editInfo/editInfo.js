/**
 * Created by cuiyongqin on 2018/4/11.
 */
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar:'../../images/doctor.png',
    hospital:'北京朝阳医院',
    department:'普外科',
    jobTitle:'肿瘤中心血液科',
    jobBusiness:'主任医师',
    major:'晚期肾癌，原发性骨髓纤维化'
  },
  changeAvator:function () {
        console.log("点击更换头像")
      var that = this;
      wx.chooseImage({
        count:1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: function(res) {
          var tempFilePaths = res.tempFilePaths;
          that.setData({
              avatar:tempFilePaths,
              upAvatar:true
          })
            app.uploadFile('/itdragon/uploadImage', tempFilePaths, 'imgFile' ,{}, function (res) {
                console.log(res);
                if (null != res) {
                    that.setData({
                        avatar: res
                    })
                } else {
                    // 显示消息提示框
                    wx.showToast({
                        title: '上传失败',
                        icon: 'error',
                        duration: 2000
                    })
                }
            });
        },
        fail:function () {

        },
        complete:function () {

        }
      })
  },
  // app:uploadimg({
  //     url:'',
  //     path:avator,
  //     header:{
  //         'Content-Type': 'multipart/form-data',
  //         "Authorization": "Bearer " + token
  //     },
  //     isShow:false
  // }),
  save:function () {
      console.log("保存个人信息")
      wx.request({
          url:'https://o.ccfpap.org/doctor/cpapDoctor/updateDocById/393a6a80-3ac8-11e8-a4ce-2fea3fb581f6',
          method:'POST'
      })
      wx.showToast({
        title: '保存成功',
      })
       setTimeout(function(){
         wx.navigateBack({
           delta:2
         })
       },1000)
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
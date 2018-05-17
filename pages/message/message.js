
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
      imgUrls:[
          '/images/banner1.jpg',
          '/images/banner2.png',
          '/images/banner3.png'
      ],
      indicatorDots:true,
      autoplay:true,
      interval:2000,
      duration:1000,
      array: [
          {
              photo:'/images/doctor.png',
              patientName:'高丽高丽',
              gender:'女',
              age:'90岁',
              projectName:'格列卫',
              projectType:'随访消息',
              diseaseType:'CML',
              date:'2018-04-04'
          },
          {
              photo:'/images/doctor.png',
              patientName:'微微',
              gender:'男',
              age:'90岁',
              projectName:'格列卫',
              projectType:'随访消息',
              diseaseType:'CML',
              date:'2018-04-04'
          },
          {
              photo:'/images/doctor.png',
              patientName:'如歌',
              gender:'女',
              age:'90岁',
              projectName:'格列卫',
              projectType:'随访消息',
              diseaseType:'CML',
              date:'2018-04-04'
          },
          {
              photo:'/images/doctor.png',
              patientName:'战枫',
              gender:'男',
              age:'90岁',
              projectName:'格列卫',
              projectType:'随访消息',
              diseaseType:'CML',
              date:'2018-04-04'
          },
          {
              photo:'/images/doctor.png',
              patientName:'银雪',
              gender:'男',
              age:'90岁',
              projectName:'格列卫',
              projectType:'随访消息',
              diseaseType:'CML',
              date:'2018-04-04'
          },
          {
              photo:'/images/doctor.png',
              patientName:'高丽',
              gender:'女',
              age:'90岁',
              projectName:'格列卫',
              projectType:'随访消息',
              diseaseType:'CML',
              date:'2018-04-04'
          },
          {
              photo:'/images/doctor.png',
              patientName:'高丽',
              gender:'女',
              age:'90岁',
              projectName:'格列卫',
              projectType:'随访消息',
              diseaseType:'CML',
              date:'2018-04-04'
          },
      ]
  },
    tapName:function(event){
        console.log(event.target.dataset.img)
        wx.navigateTo({
            url: '../chakantu/chakantu?img='+event.target.dataset.img
        })
    },
    swiperchange:function () {
    //console.log("轮播图改变时事件")
    },
    clickAndJump:function (e) {
        var data = JSON.stringify(e.currentTarget.dataset.gentle);
        console.log(data)
        wx.navigateTo({
            url: '../visitDetail/visitDetail?gentle=' + data
        })

    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onload')
      var that = this
      that.getMessageList()
  },
  getMessageList:function () {
      var that = this;
      wx.request({
          url:'https://o.ccfpap.org/messages?level=2&sendType=4',
          method:'GET',
          data:{},
          header:{
              'Accept':'application/json',
              'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNmOTk1NDllLWM5YjctNDg4Mi04NDg2LTE3NzBhMjQwZGI5MCIsIm5hbWUiOiLmnLHnhJXnjrIiLCJjb2RlIjoiMDAwNDM2IiwidHlwZSI6NCwiaWF0IjoxNTIzMjU5MjUwLCJleHAiOjIzMDA4NTkyNTB9.PWYHGl0ita7NHL-RZ4ZrHpLoUepCxcX1vwlmsS_bX_Q',
              'projectId':'1',
              'take':'10',
              'skip':'0'
          },
          success:function (res) {
              that.setData({
                  array : res.data.items
              })
          }
      })
  },
  copyContect:function () {
    if (wx.setClipboardData){
        wx.setClipboardData({
            data:'水瓶座',
            success:function (res) {
                wx.showModal({
                    title:'复制成功',
                    content:'内容已经复制成功'
                })
            }
        })
    }else {
        wx.showModal({
            title:'版本不支持',
            content:'请升级版本'
        })
      }
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
    console.log("下拉")
    wx.showNavigationBarLoading();
    var that = this;
    wx.request({
        url:'https://o.ccfpap.org/messages?level=2&sendType=4',
        method:'GET',
        data:{},
        header:{
            'Accept':'application/json',
            'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNmOTk1NDllLWM5YjctNDg4Mi04NDg2LTE3NzBhMjQwZGI5MCIsIm5hbWUiOiLmnLHnhJXnjrIiLCJjb2RlIjoiMDAwNDM2IiwidHlwZSI6NCwiaWF0IjoxNTIzMjU5MjUwLCJleHAiOjIzMDA4NTkyNTB9.PWYHGl0ita7NHL-RZ4ZrHpLoUepCxcX1vwlmsS_bX_Q',
            'projectId':'1',
            'take':'10',
            'skip':'0'
        },
        success:function (res) {
            that.setData({
                array : res.data.items
            })
            // 隐藏导航栏加载框  
            wx.hideNavigationBarLoading();
            // 停止下拉动作  
            wx.stopPullDownRefresh(); 
        }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      console.log("上拉")
      wx.showLoading({
        title: '玩命加载中',
      })
      var that = this;
      app.globalData.pageNum = app.globalData.pageNum + 1;
      app.globalData.skipNum = app.globalData.skipNum + 10;
      wx.request({
          url:'https://o.ccfpap.org/messages?level=2&sendType=4',
          method:'GET',
          header:{
              'Accept':'application/json',
              'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNmOTk1NDllLWM5YjctNDg4Mi04NDg2LTE3NzBhMjQwZGI5MCIsIm5hbWUiOiLmnLHnhJXnjrIiLCJjb2RlIjoiMDAwNDM2IiwidHlwZSI6NCwiaWF0IjoxNTIzMjU5MjUwLCJleHAiOjIzMDA4NTkyNTB9.PWYHGl0ita7NHL-RZ4ZrHpLoUepCxcX1vwlmsS_bX_Q',
              'projectId':'1',
              'take':'10',
              'skip':app.globalData.skipNum,
              'pageNum':app.globalData.pageNum
          },
          success:function (res) {
              var array_list = that.data.array;
              for (var i = 0; i < res.data.items.length; i++){
                  array_list.push(res.data.items[i]);
              }
              that.setData({
                  array:that.data.array
              })
              wx.hideLoading()
          }
      })

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
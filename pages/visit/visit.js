Page({

  /**
   * 页面的初始数据
   */
  data: {
      winWidth: 0,
      winHeight: 0,
      // tab切换
      currentTab: 0,
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
          {
              photo:'/images/doctor.png',
              patientName:'最后测试',
              gender:'男',
              age:'18岁',
              projectName:'格列卫',
              projectType:'随访消息',
              diseaseType:'CML',
              date:'2018-04-10'
          },
      ],
      medicalArr:[
          {
          photo:'/images/doctor.png',
          patientName:'医学',
          gender:'男',
          age:'88岁',
          projectName:'维全特',
          projectType:'随访消息',
          diseaseType:'原发性骨髓纤维化',
          date:'2018-04-10'
          },
      ],
      recipeArr:[
          {
              photo:'/images/doctor.png',
              patientName:'电子处方',
              gender:'男',
              age:'88岁',
              projectName:'捷恪卫',
              projectType:'随访消息',
              diseaseType:'原发性骨髓纤维化',
              date:'2018-04-10'
          },
      ]
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
    var that = this;
      wx.getSystemInfo( {
          success: function( res ) {
              console.log('加载随访')
              var arrLen = that.data.array.length;
              that.setData( {
                  winWidth: res.windowWidth,
                  winHeight: arrLen * 110,
              });
          }
      });
  },
    /**
     * 滑动切换tab
     */
    bindChange: function( e ) {

        var that = this;
        that.setData( {
            currentTab: e.detail.current
        });

    },
    
    /**
     * 点击tab切换
     */
    swichNav: function( e ) {

        var that = this;

        if( this.data.currentTab === e.target.dataset.current ) {
            return false;
        } else {
            that.setData( {
                currentTab: e.target.dataset.current
            })
        }
        if (e.target.dataset.current == 0){

        } else if(e.target.dataset.current == 1){

        } else {

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
/**
 * Created by cuiyongqin on 2018/4/19.
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoData:{
    },
    imgArr:[
      '/images/banner1.jpg',
      '/images/banner1.jpg',
      '/images/banner1.jpg',
      '/images/banner1.jpg',

    ],
    btnArr:[
        {name:'Ph(+)',value:'Ph(+)'},
        {name:'Bcr/Abi(+)',value:'Bcr/Abi(+)'}
    ],
    btnArr1:[
        {name:'服药有效',value:'服药有效'},
        {name:'服药无效',value:'服药无效'}
    ],
    btnArr2:[
        {name:'100mg/天',value:'100mg/天'},
        {name:'200mg/天',value:'200mg/天'},
        {name:'300mg/天',value:'300mg/天'},
        {name:'400mg/天',value:'400mg/天'},
        {name:'500mg/天',value:'500mg/天'},
        {name:'600mg/天',value:'600mg/天'},
        {name:'700mg/天',value:'700mg/天'},
        {name:'800mg/天',value:'800mg/天'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    this.requestData(options)
  },
  requestData:function (e) {
    var that = this;
    var gentle = JSON.parse(e.gentle);
    console.log(gentle)
    that.setData({
      infoData:gentle
    })
      console.log(that.infoData)

  },
  clickSeeBig:function (e) {
    console.log(e)
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.imgArr;
      wx.previewImage({
        current:imgArr[index],
        urls:imgArr
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
const http = require("./../../../utils/http.js");
const util = require("./../../../utils/util.js");
const app = getApp();

Page({
  data: {
    target:"",
    content:"",
    resultList:[]
  },
  onLoad: function (options) {

  },

  clean:function(){
    this.setData({
      target:"",
      content:"",
      resultList:[]
    })
  },

  countStr:function(){
    wx.showLoading({
      title: '转换中...',
      icon: "none"
    })
    let wordData = this.data.content;
    let _this = this;
    wx.request({
      url: "https://mall.howvin.com/pinyin?data="+wordData,
      header: {
        'content-type': 'application/json'
      },
      method: "GET",
      data: "",
      success: function (res) {
        wx.hideLoading();
        let result = res.data;
        if(result.code == 0){
          _this.setData({resultList:result.data})
        }
      },
      fail: function (res) {
        console.log(res.data);
      }
    })
  },

  getTarget:function(e){
    this.setData({target:e.detail.value})
  },

  getContent:function(e){
    this.setData({content:e.detail.value})
  },

  copy:function(){
    let result = this.data.resultList
    if(result.length <= 0){
      wx.showToast({
        title: '没有内容可复制',
        icon: 'none'
      })
      return;
    }

    wx.setClipboardData({data: result.text})
  },

  /**
 * 分享
 */
  onShareAppMessage: function (res) {
    return {
      title: '一键进行文字全局替换的实用工具',
      path: '/pages/home/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },

})
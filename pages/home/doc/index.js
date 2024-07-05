const http = require("./../../../utils/http.js");
const util = require("./../../../utils/util.js");
const app = getApp();

Page({
  data: {

  },
  onLoad: function (options) {

  },

  preview(e){
    console.log(e.target.dataset.src)
    wx.previewImage({
      urls: [e.target.dataset.src],
    })
  }

})
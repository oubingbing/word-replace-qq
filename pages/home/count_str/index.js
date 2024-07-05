const http = require("./../../../utils/http.js");
const util = require("./../../../utils/util.js");
const app = getApp();

Page({
  data: {
    content:"",
    cnTotalNum:0,
    cnNum:0,
    enTotalNum:0,
    enNum:0,
    showResult:0,
    showCn:0,
    showEn:0
  },
  onLoad: function (options) {

  },

  clean:function(){
    this.setData({
        content:"",
        cnTotalNum:0,
        cnNum:0,
        enTotalNum:0,
        enNum:0,
        showResult:0,
        showCn:0,
        showEn:0
    })
  },

  countStr:function(){
    if(this.data.content == ""){
      wx.showToast({
        title: '请输入统计内容',
        icon: 'none'
      })
      return;
    }
    this.setData({
        showResult:1,
        showCn:1,
        showEn:0,
        cnTotalNum:this.data.content.length,
        cnNum:this.countWordsWithoutPunctuation(this.data.content)
    })
  },

  countEnStr:function(){
    if(this.data.content == ""){
      wx.showToast({
        title: '请输入统计内容',
        icon: 'none'
      })
      return;
    }
    this.setData({
        showResult:1,
        showEn:1,
        showCn:0,
        enTotalNum:this.countWords(this.data.content),
    })
  },

  import:function(){
    let _this = this;
    this.setData({content:""})
    wx.chooseMessageFile({
        count: 1,
        type: "file",
        success (res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFiles
          console.log(tempFilePaths)
          wx.showLoading({
            title: '解析中...',
            icon: "none"
          })
          wx.uploadFile({  
            url: 'https://mall.howvin.com/upload_text', // 你的上传接口  
            filePath: tempFilePaths[0].path,  
            name: 'file',  
            success (res) {
                wx.hideLoading();
                console.log("内容",res)
              if (res.statusCode === 200) {  
                  const data = JSON.parse(res.data)
                  if(data.code == 0){
                    _this.setData({content:data.data.content})
                  }else{
                    wx.showModal({
                        title: "错误",
                        content: data.message,
                        showCancel: false,//是否显示取消按钮
                        confirmText:"关闭",//默认是“确定”
                     })
                  }
              }  
            },
            fail(res){
                wx.hideLoading();
                console.log("失败",res)
            }
          })

        }
      })
  },

  countWords:function(text) {
    // 使用正则表达式匹配单词
    var words = text.match(/\b\w+\b/g);
    
    // 返回单词数量
    return words ? words.length : 0;
},

countWordsWithoutPunctuation:function(text) {
   // 移除标点符号和空格
   var textWithoutPunctuation = text.replace(/[^\u4E00-\u9FA5]/g, '');

   // 计算剩余字符的数量
   var characterCount = textWithoutPunctuation.length;
   
   return characterCount;
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

    let resultStr = "";
    result.map(item=>{
      resultStr+=item.word+"出现"+item.count+"次"+"\r\n"
    })
    console.log(resultStr)
    wx.setClipboardData({data: resultStr})
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
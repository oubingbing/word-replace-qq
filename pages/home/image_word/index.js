const http = require("./../../../utils/http.js");
const util = require("./../../../utils/util.js");
const app = getApp();

Page({
  data: {
    target: "",
    content: "",
    resultList: [],
    markata : ""
  },
  onLoad: function (options) {

  },

  clean: function () {
    this.setData({
      target: "",
      content: "",
      resultList: [],
      markata : ""
    })
  },

  countStr: function () {
    let _this = this;
    qq.chooseMedia({
        count: 1,
        mediaType: ['image'],
        camera: 'back',
        maxDuration: 30,
        sizeType:['original'],
        camera: 'back',
      success(res) {
        qq.showLoading({
          title: '提取中...',
          icon: "none"
        })
        const tempFilePaths = res.tempFiles
        qq.uploadFile({
          url: 'https://mall.howvin.com/image_to_word', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0].tempFilePath,
          name: 'image',
          formData: {},
          success(resp) {
            qq.hideLoading();
            const jsonString = resp.data
            var jsonObj = JSON.parse(jsonString); // 将JSON字符串转换为JavaScript对象
            if (jsonObj.code == 0) {
              let strData = jsonObj.data
              //将markdown内容转换为towxml数据
              let data = app.towxml.toJson(
                strData, // `markdown`或`html`文本内容
                'markdown' // `markdown`或`html`
              );
              //前台初始化小程序数据（2.1.2新增，如果小程序中无相对资源需要添加`base`根地址，也无`audio`内容可无需初始化）
              data = app.towxml.initData(data, {
                base: 'https://xxx.com/', // 需要解析的内容中相对路径的资源`base`地址
                app: _this // 传入小程序页面的`this`对象，以用于音频播放器初始化
              });
              //设置文档显示主题，默认'light'
              data.theme = 'dark';
              //设置数据
              _this.setData({
                content: strData,
                markata:data
              })
            } else {
              qq.showToast({
                title: '提取失败',
                icon: 'none'
              })
            }
            //do something
          }
        })
      }
    })
  },

  getTarget: function (e) {
    this.setData({
      target: e.detail.value
    })
  },

  getContent: function (e) {
    this.setData({
      content: e.detail.value
    })
  },

  copy: function () {
    let result = this.data.content
    if (result.length <= 0) {
      qq.showToast({
        title: '没有内容可复制',
        icon: 'none'
      })
      return;
    }

    qq.setClipboardData({
      data: result
    })
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
const http = require("./../../../utils/http.js");
const util = require("./../../../utils/util.js");
const app = getApp();

let contentArr = [{from:"",to:""}]
let interstitialAd = null

Page({
  data: {
    str:"",
    target:"",
    content:"",
    result:"",
    dataList:contentArr,
    modelList:[],
    showModelList:false
  },
  onLoad: function (options) {
    let modelStr = qq.getStorageSync('model_list')
    if(modelStr){
      this.setData({modelList:JSON.parse(modelStr)})
      console.log("换粗拿数据",this.data.modelList)
    }
  },

  importModel(e){
    const i = e.target.dataset.type
    let dataList = this.data.modelList
    let _this = this
    console.log(i,dataList)
    dataList.map((item,index)=>{
      console.log(item,index)
      if(index==i){
        console.log("设置成功",item)
        _this.setData({dataList:item.data,showModelList:false})
      }
    })
  },

  deleteMyModel(e){
    let _this = this
    qq.showModal({
      title: '警告',
      content:"您确定要删除该模板吗？",
      success (res) {
        if (res.confirm) {
          const i = e.target.dataset.type
          let data = _this.data.modelList
          let newData = data.filter((element, index) => index !== i);
          _this.setData({modelList:newData})
          qq.setStorageSync('model_list', JSON.stringify(newData))
        } 
      }
    })
  },

  showMyModelLlist:function(){
    this.setData({showModelList:true})
  },

  closeMyModel(){
    this.setData({showModelList:false})
  },

  save_text:function(){
      let _this = this
      if(this.data.result.length <= 0){
        qq.showModal({
            title: "错误",
            content: "没有可保存的内容，请先点击替换按钮，完成内容替换再保存",
            showCancel: false,//是否显示取消按钮
            confirmText:"关闭",//默认是“确定”
         })
         return;
      }

      qq.showLoading({
        title: '保存中...',
        icon: "none"
      })
    qq.request({  
        url: 'https://mall.howvin.com/save_text', // 你的接口地址  
        method: 'POST', // 请求方法  
        data: {  
          content: _this.data.result,  
        }, // 请求数据  
        header: {  
          'content-type': 'application/json' // 设置请求的 content-type  
        },  
        success (res) {
            qq.hideLoading();
          if (res.statusCode === 200) {  
              const data = res.data
              if(data.code == 0){
                qq.setClipboardData({data: data.data})
                qq.showModal({
                    title: "保存成功",
                    content: "文件下载地址已复制到您的粘贴板，您到浏览器粘贴访问即可下载，文件地址："+data.data,
                    showCancel: false,//是否显示取消按钮
                    confirmText:"关闭",//默认是“确定”
                 })
              }else{
                qq.showModal({
                    title: "错误",
                    content: data.message,
                    showCancel: false,//是否显示取消按钮
                    confirmText:"关闭",//默认是“确定”
                 })
              }
          }  
        },
        fail(res){
            qq.hideLoading();
            console.log("失败",res)
        } 
      })
  },

  import:function(){
    let _this = this;
    this.setData({content:""})
    qq.chooseMessageFile({
        count: 1,
        type: "file",
        success (res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFiles
          console.log(tempFilePaths)
          qq.showLoading({
            title: '解析中...',
            icon: "none"
          })
          qq.uploadFile({  
            url: 'https://mall.howvin.com/upload_text', // 你的上传接口  
            filePath: tempFilePaths[0].path,  
            name: 'file',  
            success (res) {
                qq.hideLoading();
                console.log("内容",res)
              if (res.statusCode === 200) {  
                  const data = JSON.parse(res.data)
                  if(data.code == 0){
                    _this.setData({content:data.data.content})
                  }else{
                    qq.showModal({
                        title: "错误",
                        content: data.message,
                        showCancel: false,//是否显示取消按钮
                        confirmText:"关闭",//默认是“确定”
                     })
                  }
              }  
            },
            fail(res){
                qq.hideLoading();
                console.log("失败",res)
            }
          })

        }
      })
  },

  addMore:function(){
    let list = this.data.dataList
    list.push({from:"",to:""})
    this.setData({dataList:list})
  },

  deleteLine:function(e){
    let list = this.data.dataList
    if(list.length <= 1){
      qq.showToast({
        title: "最后一条数据不可删除",
        icon:"none"
      })
      return
    }

    let index = e.currentTarget.dataset.id
    let newList = [];
    for(let i=0;i <= list.length-1;i++){
      if(index != i){
        newList.push(list[i])
      }
    }
    this.setData({dataList:newList})
  },

  getStr:function(e){
    let value = e.detail.value
    let index = e.currentTarget.dataset.id
    let type = e.currentTarget.dataset.type
    let list = this.data.dataList
    for(let i=0;i <= list.length-1;i++){
      if(index == i){
        if(type == "from"){
          list[i].from = value
        }else{
          list[i].to = value
        }
      }
    }
    this.setData({dataList:list})
  },

  getTarget:function(e){
    this.setData({target:e.detail.value})
  },

  getContent:function(e){
    this.setData({content:e.detail.value})
  },

  saveModel(){
    let list = this.data.dataList
    for(let i=0;i <= list.length-1;i++){
      let line = i+1
      if(!list[i].from || !list[i].to){
        qq.showToast({
          title: '第'+line+"行内容不能为空",
          icon:"none"
        })
        return
      }
    }

    let _this = this
    let _dataList = this.data.dataList
    console.log("缓存数据",this.data.modelList)
    qq.showModal({
      title: '模板名称',
      editable:true,
      placeholderText:"请输入模板名称",
      success (res) {
        if (res.confirm) {
          if(res.content == ""){
            qq.showToast({
              title: "模板名称不能为空",
              icon:"none"
            })
            return
          }
          let modelList = _this.data.modelList
          let inputData = _dataList
          let newInputData = []
          inputData.map(item=>{
            newInputData.push(Object.assign({}, item))
          })
          modelList.unshift({"name":res.content,"data":newInputData})
          _this.setData({modelList:modelList})
          qq.setStorageSync('model_list', JSON.stringify(modelList))
        } 
      }
    })
    
  },

  replace:function(){
    var content = this.data.content;
    if(!content){
      qq.showToast({
        title: "替换的内容不能为空",
        icon:"none"
      })
      return
    }

    let list = this.data.dataList
    for(let i=0;i <= list.length-1;i++){
      let line = i+1
      if(!list[i].from || !list[i].to){
        qq.showToast({
          title: '第'+line+"行内容不能为空",
          icon:"none"
        })
        return
      }
    }

    for(let i=0;i <= list.length-1;i++){
      var reg = new RegExp( list[i].from , "g" )
      content = content.replace(reg, list[i].to)
    }
    this.setData({result:content})
    qq.showToast({
      title: "替换成功"
    })

    qq.request({  
        url: 'https://mall.howvin.com/save_text_log', // 你的接口地址  
        method: 'POST', // 请求方法  
        data: {  
          type:1,  
          content:content
        }, // 请求数据  
        header: {  
          'content-type': 'application/json' // 设置请求的 content-type  
        },  
        success (res) {
            qq.hideLoading();
        },
        fail(res){
            qq.hideLoading();
            console.log("失败",res)
        } 
      })
  },

  copy:function(){
    let result = this.data.result
    qq.setClipboardData({data: result})
  },

  clean:function(){
    this.setData({
      str:"",
      target:"",
      content:"",
      result:""
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
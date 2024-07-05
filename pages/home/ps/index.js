//"#FFFFFF"
const blackToWhite = [
    "rgba(0, 0, 0, 0)",
    "#000000", // Black
    "#111111",
    "#222222",
    "#333333",
    "#444444",
    "#555555",
    "#666666",
    "#777777",
    "#888888",
    "#999999",
    "#AAAAAA",
    "#BBBBBB",
    "#CCCCCC",
    "#DDDDDD",
    "#EEEEEE",
    "#F0F0F0",
    "#F1F1F1",
    "#F2F2F2",
    "#F3F3F3",
    "#FFFFFF"
  ];
  
  const redColors = [
    "#8B0000", "#9B0000", "#AB0000", "#BB0000", "#CB0000",
    "#DB0000", "#EB0000", "#FB0000", "#FF0000", "#FF1010",
    "#FF2020", "#FF3030", "#FF4040", "#FF5050", "#FF6060",
    "#FF7070", "#FF8080", "#FF9090", "#FFA0A0", "#FFB0B0",
    "#FFC0C0", "#FFD0D0", "#FFE0E0", "#FFF0F0", "#FFA07A",
    "#FFB6C1", "#FFC0CB", "#FFDAB9", "#FFE4E1", "#FFF0F5",
    "#FFE4B5", "#FFD700", "#FFA500", "#FF8C00", "#FF7F50",
    "#FF6347", "#FF4500", "#DC143C", "#B22222", "#A52A2A",
    "#800000", "#8B4513", "#A0522D", "#CD5C5C", "#F08080",
    "#E9967A", "#FA8072", "#FFA07A", "#FFB6C1", "#FFC0CB"
  ];
  
  const greenColors = [
    "#006400", "#007300", "#008200", "#009100", "#00A000",
    "#00AF00", "#00BE00", "#00CD00", "#00DC00", "#00EB00",
    "#00FA00", "#10FF10", "#20FF20", "#30FF30", "#40FF40",
    "#50FF50", "#60FF60", "#70FF70", "#80FF80", "#90FF90",
    "#A0FFA0", "#B0FFB0", "#C0FFC0", "#D0FFD0", "#E0FFE0",
    "#F0FFF0", "#00FF7F", "#7CFC00", "#7FFF00", "#ADFF2F",
    "#98FB98", "#90EE90", "#00FA9A", "#00FF7F", "#3CB371",
    "#2E8B57", "#66CDAA", "#8FBC8F", "#20B2AA", "#008B8B",
    "#008080", "#228B22", "#32CD32", "#6B8E23", "#556B2F",
    "#8B4513", "#A0522D", "#CD853F", "#D2691E", "#8FBC8F"
  ];
  
  const blueColors = [
    "#00008B", "#00009B", "#0000AB", "#0000BB", "#0000CB",
    "#0000DB", "#0000EB", "#0000FB", "#0000FF", "#1010FF",
    "#2020FF", "#3030FF", "#4040FF", "#5050FF", "#6060FF",
    "#7070FF", "#8080FF", "#9090FF", "#A0A0FF", "#B0B0FF",
    "#C0C0FF", "#D0D0FF", "#E0E0FF", "#F0F0FF", "#ADD8E6",
    "#87CEFA", "#87CEEB", "#4682B4", "#B0C4DE", "#5F9EA0",
    "#6495ED", "#1E90FF", "#00BFFF", "#87CEFA", "#ADD8E6",
    "#B0E0E6", "#AFEEEE", "#00CED1", "#48D1CC", "#40E0D0",
    "#00FFFF", "#00FFFF", "#E0FFFF", "#AFEEEE", "#7FFFD4",
    "#76EEC6", "#66CDAA", "#458B74", "#2E8B57", "#008B8B"
  ];
  
  const yellowColors = [
    "#8B8000", "#9B9000", "#AB9A00", "#BBAD00", "#CBBB00",
    "#DBCB00", "#EBCB00", "#FBD200", "#FFDA00", "#FFEA00",
    "#FFFA00", "#FFFF10", "#FFFF20", "#FFFF30", "#FFFF40",
    "#FFFF50", "#FFFF60", "#FFFF70", "#FFFF80", "#FFFF90",
    "#FFFFA0", "#FFFFB0", "#FFFFC0", "#FFFFD0", "#FFFFE0",
    "#FFFFF0", "#FFFACD", "#FAFAD2", "#FFEFD5", "#FFE4B5",
    "#FFDAB9", "#EEE8AA", "#F0E68C", "#BDB76B", "#FFD700",
    "#FFA500", "#FF8C00", "#FF7F50", "#FF6347", "#FF4500",
    "#DAA520", "#B8860B", "#CD853F", "#D2691E", "#8B4513",
    "#A0522D", "#DEB887", "#FFE4C4", "#FFDAB9", "#FFE4B5"
  ];
  
  const cyanColors = [
    "#008B8B", "#009B9B", "#00ABAB", "#00BBBB", "#00CBCB",
    "#00DBDB", "#00EBEB", "#00FBFB", "#00FFFF", "#10FFFF",
    "#20FFFF", "#30FFFF", "#40FFFF", "#50FFFF", "#60FFFF",
    "#70FFFF", "#80FFFF", "#90FFFF", "#A0FFFF", "#B0FFFF",
    "#C0FFFF", "#D0FFFF", "#E0FFFF", "#F0FFFF", "#00FFFF",
    "#E0FFFF", "#AFEEEE", "#7FFFD4", "#76EEC6", "#66CDAA",
    "#458B74", "#2E8B57", "#228B22", "#32CD32", "#6B8E23",
    "#556B2F", "#8B4513", "#A0522D", "#CD853F", "#D2691E",
    "#20B2AA", "#5F9EA0", "#4682B4", "#B0C4DE", "#B0E0E6",
    "#AFEEEE", "#00CED1", "#48D1CC", "#40E0D0", "#00FFFF"
  ];
  
  const purpleColors = [
    "#4B0082", "#5B0092", "#6B00A2", "#7B00B2", "#8B00C2",
    "#9B00D2", "#AB00E2", "#BB00F2", "#CB00FF", "#DB10FF",
    "#EB20FF", "#FB30FF", "#FF40FF", "#FF50FF", "#FF60FF",
    "#FF70FF", "#FF80FF", "#FF90FF", "#FFA0FF", "#FFB0FF",
    "#FFC0FF", "#FFD0FF", "#FFE0FF", "#FFF0FF", "#EE82EE",
    "#DA70D6", "#C71585", "#DB7093", "#FF1493", "#FF69B4",
    "#FFB6C1", "#FFC0CB", "#FFF0F5", "#FAEBD7", "#D8BFD8",
    "#DDA0DD", "#BA55D3", "#9370DB", "#8A2BE2", "#9400D3",
    "#9932CC", "#800080", "#4B0082", "#8B008B", "#A020F0",
    "#9370DB", "#6A5ACD", "#483D8B", "#7B68EE", "#9B30FF"
  ];
  
  const allColorCodes = [
    ...blackToWhite,
    ...redColors,
    ...greenColors,
    ...blueColors,
    ...yellowColors,
    ...cyanColors,
    ...purpleColors
  ];

const initData = {
  fontFamily:"simhei",
  inputW:100,
  inputH:30,
  x: 100,
  y: 300,
  bgColor:"#FFFFFF",
  word:"点我输入文字",
  fontSize:15,
  fontColor:"#000000",
}

const fonts = [
  //{name:"Deng",value:"Deng.ttf"},
  {name:"Deng",value:"Deng.ttf"},
  {name:"MiSans-Regular",value:"MiSans-Regular.ttf"},
  {name:"SourceHanSansCN-Medium",value:"SourceHanSansCN-Medium.ttf"},
  {name:"Alibaba-PuHuiTi-Medium",value:"Alibaba-PuHuiTi-Medium.ttf"},
  {name:"OPPOSans-M",value:"OPPOSans-M.ttf"},
  {name:"YeZiGongChangXiaoShiTou-2",value:"YeZiGongChangXiaoShiTou-2.ttf"},
  {name:"LXGWWenKai-Regular",value:"LXGWWenKai-Regular.ttf"},
  {name:"simhei",value:"simhei.woff"},
  {name:"simkai",value:"simkai.ttf"},
  {name:"Dengl",value:"Dengl.ttf"},
  {name:"msyh",value:"msyh.ttc"},
  {name:"msyhbd",value:"msyhbd.ttc"},
  {name:"msyhl",value:"msyhl.ttc"},
  {name:"simfang",value:"simfang.ttf"},
  {name:"simsun",value:"simsun.ttc"},
];

Page({
  data: {
    fontFamilyList:[],
    fontFamily:"simhei",
    fontFamilyFile:"simhei.woff",
    fonts:fonts,
    index:0,

      inputW:100,
      inputH:30,
      x: 100,
      y: 300,
      bgColor:"#FFFFFF",
      word:"点我输入文字",
      fontSize:15,
      fontColor:"#000000",
      colors:allColorCodes,

    xx:100,
    yy:300,
    scale: 2,
    imgW:0,
    imgH:0,
    img:"",
    scaleValue:1,
    scaleValueW:1,
    scaleValueH:1,
    start:false,
    inputWInit:100,
    inputHInit:30,
    fontSizeInit:15,
    showInput:false,
    showSlide:false,
    selectBtn:"bg",
    imgType:"",
    imgName:"",
    initH:0,
    initW:0,
    sW:0,
    selectBtn:"",
    colorX:0,
    colorY:0,
    screenW:0,
    showSave:false
  },

  onLoad(e){
    let _this = this
    qq.loadFontFace({  
      family: 'simhei', // 你给字体定义的名称  
      source: 'url("https://mall.howvin.com/fonts/simhei.woff")', // 字体文件的网络地址  
      success: res => {  
        _this.setData({  
          fontFamily: "simhei",
          fontFamilyFile:"simhei.woff",
          fontFamilyList:["simhei"]
        });  
      },  
      fail: err => {  
        console.log('font load fail', err);  
        // 字体加载失败，处理错误情况  
      }  
    }); 

    qq.getSystemInfo({
        success: function(res) {
          // 成功获取信息
          const screenWidth = res.windowWidth;
          _this.setData({screenW:screenWidth})
          console.log('屏幕宽度：', screenWidth);
        },
        fail: function() {
          // 获取信息失败
          console.log('获取屏幕宽度失败');
        }
      });
  },

  getFont(e){
    qq.showLoading({
      title: '加载中耐心等候...',
    })
    let _this = this
     let fontValue = e.currentTarget.dataset.font;
     let fontFile = e.currentTarget.dataset.fontfile;
     console.log("获取字体",fontValue,fontFile)
     let list = _this.data.fontFamilyList
     let fontItem = ""
     list.forEach(item=>{
       if(item==fontValue){
        fontItem = item
       }
     })
     if(fontItem != ""){
        qq.hideLoading()
        this.setData({fontFamily:fontItem,fontFamilyFile:fontFile})
        return false;
     }

     const url = "https://mall.howvin.com/fonts/"+fontFile
    qq.loadFontFace({  
      family: fontValue, // 你给字体定义的名称  
      source: 'url("'+url+'")', // 字体文件的网络地址  
      success: res => {  
        console.log('font load success,设置字体成功', res);  
        let list = _this.data.fontFamilyList
        list.push(fontValue) 
        _this.setData({  
          fontFamily: fontValue,
          fontFamilyList:list,
          fontFamilyFile:fontFile
        });  
        qq.hideLoading()
        qq.showToast({
          title: '字体加载成功',
          icon: 'none',
          duration: 1500,
        });
      },  
      fail: err => {  
        console.log('font load fail', err);  
        // 字体加载失败，处理错误情况 
        qq.hideLoading() 
      }  
    }); 
  },

left(){
    this.setData({x:this.data.xx,y:this.data.yy})
    this.setData({x:this.data.x-1,xx:this.data.xx-1})
    console.log("左移动")
  },

  right(){
    this.setData({x:this.data.xx,y:this.data.yy})
    this.setData({x:this.data.x+1,xx:this.data.xx+1})
  },

  top(){
    this.setData({x:this.data.xx,y:this.data.yy})
    this.setData({y:this.data.y-1,yy:this.data.yy-1})
  },

  bottom(){
    this.setData({x:this.data.xx,y:this.data.yy})
    this.setData({y:this.data.y+1,yy:this.data.yy+1})
  },

  getColor(e){
    let type = e.currentTarget.dataset.type
    let w = this.data.initW/this.data.imgW
    let h = this.data.initH/this.data.imgH
    let _this = this
    qq.uploadFile({
      url: 'https://mall.howvin.com/image_color', // 你的服务器接口地址
      filePath: this.data.img, // 选择图片的临时路径
      name: 'image', // 服务器接收文件的字段名
      formData: {
          x:this.data.colorX*w,
          y:this.data.colorY*h,
      }, // 附加的POST参数
      success: (res) => {
          qq.hideLoading()
          let data = JSON.parse(res.data)
          if(data.code==0){
            if(type=="font"){
              console.log("字体取色")
              _this.setData({fontColor:data.data})
            }else{
              _this.setData({bgColor:data.data})
            }
          }
          console.log(data,"结果")
      },
      fail: (err) => {
        console.error('Upload failed:', err);
        // 处理上传失败
      },
    });
  },

  reset(){
    let _this = this
    qq.showModal({
      title: '重置提醒',
      content: '您确定要执行重置操作吗？',
      success (res) {
        if (res.confirm) {
          _this.setData( {
          fontFamilyList:[],
          fontFamily:"simhei",
          fontFamilyFile:"simhei.woff",
          fonts:fonts,
          index:0,

            inputW:100,
            inputH:30,
            x: 100,
            y: 300,
            bgColor:"#FFFFFF",
            word:"点我输入文字",
            fontSize:15,
            fontColor:"#000000",
            colors:allColorCodes,

          xx:100,
          yy:300,
          scale: 2,
          imgW:0,
          imgH:0,
          img:"",
          scaleValue:1,
          scaleValueW:1,
          scaleValueH:1,
          start:false,
          inputWInit:100,
          inputHInit:30,
          fontSizeInit:15,
          showInput:false,
          showSlide:false,
          selectBtn:"bg",
          imgType:"",
          imgName:"",
          initH:0,
          initW:0,
          sW:0,
          selectBtn:"",
          colorX:0,
          colorY:0,
          screenW:0,
          showSave:false
          })
        }
      }
    })
  
  },

  post(){
      if(!this.data.img){
        qq.showToast({
            title: '请选择图片再保存',
            icon: 'fail',
            duration: 2000,
          });
          return
      }
      qq.showLoading({
        title: '保存中...'
      })

    let w = this.data.initW/this.data.imgW
    let h = this.data.initH/this.data.imgH
    let postList = [{
        inputW:this.data.inputW*w,
        inputH:this.data.inputH*h,
        x: this.data.xx*w,
        y: this.data.yy*h,
        bgColor:this.data.bgColor,
        word:this.data.word,
        fontSize:this.data.fontSize*w,
        fontColor:this.data.fontColor,
        source:"QQ小程序"
      }]
    const postData = {
        fontFamily:this.data.fontFamilyFile,
        x:this.data.xx*w,
        y:this.data.yy*h,
        img_w:this.data.imgW*w,
        img_h:this.data.imgH*h,
        width:this.data.inputW*w,
        height:this.data.inputH*h,
        text:this.data.word,
        font_size:this.data.fontSize*w,
        font_color:this.data.fontColor,
        bg_color:this.data.bgColor,
        image_name:this.data.imgName,
        list:JSON.stringify(postList),
    }
    console.log("数据",postData)
    qq.uploadFile({
        url: 'https://mall.howvin.com/edit_image4', // 你的服务器接口地址
        //url:'http://howvin-mall-api.com/edit_image4', // 你的服务器接口地址
        filePath: this.data.img, // 选择图片的临时路径
        name: 'image', // 服务器接收文件的字段名
        formData: postData, // 附加的POST参数
        success: (res) => {
            let data = JSON.parse(res.data)
            if(data.code==0){
              qq.hideLoading()
                qq.downloadFile({
                    url: data.data,
                    success: res => {
                      qq.hideLoading()
                      if (res.statusCode === 200) {
                        // 获取到临时文件路径
                        const tempFilePath = res.tempFilePath;
                  
                        // 检查权限并保存到相册
                        qq.getSetting({
                          success: settingResult => {
                            if (!settingResult.authSetting['scope.writePhotosAlbum']) {
                              qq.authorize({
                                scope: 'scope.writePhotosAlbum',
                                success: () => {
                                  qq.saveImageToPhotosAlbum({
                                    filePath: tempFilePath,
                                    success: () => {
                                      qq.showToast({
                                        title: '图片已保存到相册',
                                        icon: 'success',
                                        duration: 2000,
                                      });
                                    },
                                    fail: () => {
                                      qq.showToast({
                                        title: '保存失败，请稍后重试',
                                        icon: 'none',
                                        duration: 2000,
                                      });
                                    },
                                  });
                                },
                                fail: () => {
                                  // 提示用户打开授权
                                  qq.showToast({
                                    title: '保存失败，请授权给小程序保存图片到相册',
                                    icon: 'none',
                                    duration: 2000,
                                  });
                                },
                              });
                            } else {
                              qq.saveImageToPhotosAlbum({
                                filePath: tempFilePath,
                                success: () => {
                                  qq.showToast({
                                    title: '图片已保存到相册',
                                    icon: 'success',
                                    duration: 2000,
                                  });
                                },
                                fail: () => {
                                  qq.showToast({
                                    title: '保存失败，请稍后重试',
                                    icon: 'none',
                                    duration: 2000,
                                  });
                                },
                              });
                            }
                          },
                        });
                      } else {
                        // 下载失败的处理
                      }
                    },
                    fail: () => {
                      qq.hideLoading()
                      qq.showToast({
                        title: '保存失败，无权限写入',
                      })
                      // 下载失败的处理
                    },
                  });
            }
            console.log(data,"结果")
        },
        fail: (err) => {
          console.error('Upload failed:', err);
          // 处理上传失败
        },
      });
  },

  rpxToPx(rpxValue) {
    //const pixelRatio = this.data.sW / this.data.screenW; // 假设设计基准是750rpx对应屏幕宽度
    return  rpxValue / 750 * this.data.sW;
  },

  getFontColor(e){
    this.setData({fontColor:e.currentTarget.dataset.color})
  },

  getBgColor(e){
    this.setData({bgColor:e.currentTarget.dataset.color})
},

  input(e){
    this.setData({showInput:true,selectBtn:"input",word:word})
  },

  getStr(e){
    this.setData({word:e.detail.value})
  },

  select(e){
    this.setData({selectBtn:e.currentTarget.dataset.type})
    if(e.currentTarget.dataset.type=="input"){
      this.setData({showInput:true})
    }else{
      this.setData({showInput:false})
    }
  },

  sliderChangeFont(e){
    const value = e.detail.value
    this.setData({fontSize:this.data.fontSizeInit*(value)})
  },

  fontLeft(e){
    let initSize = this.data.fontSizeInit
    let fontSize = this.data.fontSize
    if(fontSize <= 4.5){
      return ;
    }
    fontSize -= 0.2
    const scal = fontSize/initSize
    this.setData({scaleValue:scal,fontSize:fontSize})
  },

  fontRight(e){
    let initSize = this.data.fontSizeInit
    let fontSize = this.data.fontSize
    if(fontSize <= 4.5){
      return ;
    }
    fontSize += 0.2
    const scal = fontSize/initSize
    this.setData({scaleValue:scal,fontSize:fontSize})
  },

  sliderChangeW(e){
    const value = e.detail.value
    this.setData({inputW:this.data.inputWInit*(value)})
  },

  widthLeft(e){
    const initW = this.data.inputWInit
    let inputW = this.data.inputW
    if(inputW <= 0){
      return 
    }
    inputW -= 1
    const scal = inputW/initW
    this.setData({scaleValueW:scal,inputW:inputW})
  },

  widthRight(e){
    const initW = this.data.inputWInit
    let inputW = this.data.inputW
    if(inputW <= 0){
      return 
    }
    inputW += 1
    const scal = inputW/initW
    this.setData({scaleValueW:scal,inputW:inputW})
  },

  sliderChangeH(e){
    const value = e.detail.value
    let inputH = this.data.inputHInit*(value)
    this.setData({inputH:inputH})
  },

  heightLeft(e){
    let initH = this.data.inputHInit
    let inputH = this.data.inputH
    console.log("高度",inputH)
    if(inputH<=0){
      return 
    }
    inputH -= 1
    const scal = inputH/initH
    this.setData({scaleValueH:scal,inputH:inputH})
  },

  heightRight(e){
    let initH = this.data.inputHInit
    let inputH = this.data.inputH
    if(inputH<=0){
      return 
    }
    inputH += 1
    const scal = inputH/initH
    this.setData({scaleValueH:scal,inputH:inputH})
  },

  watch(e){
    // const target = e.target.dataset.type
    // if(e.detail.source!="touch"){
    //   return false
    // }

    // let xy = this.data.xy
    // let newXy = xy.map((item,index)=>{
    //   if(index==target){
    //     item.xx = e.detail.x
    //     item.yy = e.detail.y
    //   }
    //   return item
    // })
    // this.setData({xy:newXy})
    console.log("移动",e.detail.x,e.detail.y)
    this.setData({
        xx:e.detail.x,
        yy:e.detail.y
    })
  },

  watchColor(e){
    this.setData({
      colorX:e.detail.x+2,
      colorY:e.detail.y
  })
  },

  tap(e) {
      let _this = this;
      console.log("选择图片")
    qq.chooseMedia({
        count: 1,
        mediaType: ['image'],
        camera: 'back',
        maxDuration: 30,
        camera: 'back',
        sizeType:['original'],
        success(res) {
        // 假设图片路径存储在变量imagePath中
        let imagePath = res.tempFiles[0].tempFilePath;

        // 调用wx.getImageInfo方法
        qq.getImageInfo({
        src: res.tempFiles[0].tempFilePath, // 图片的URL
        success: function(res) {
            // res包含了图片的信息
            let width = res.width; // 图片宽度
            let height = res.height; // 图片高度
            console.log(width,height)
            let systemInfo = qq.getSystemInfoSync();
            let windowWidth = systemInfo.windowWidth;
            let w = windowWidth*0.9
            let h = w/(width/height)

            console.log(res,"图片信息",_this.getImageFormatFromUrl(res.path))

            const format = _this.getImageFormatFromUrl(res.path); // 获取图片类型，如'jpg'或'png'
            const uniqueFileName = 'image_' + Date.now() + '.' + format;

            _this.setData({showInput:true,sW:systemInfo.windowWidth,initH:height,initW:width,imgW:w,imgH:h,img:imagePath,start:true,imgName:uniqueFileName,showSlide:true,selectBtn:"input",showSave:true})
        }
        });

        },
        fail: function(err) {
        console.error('获取图片失败', err);
      }
      })
  },

  
  getImageFormatFromUrl(url) {
  // 使用正则表达式匹配URL中的文件扩展名
  var match = url.match(/\.([a-z]+)(?=\?|$)/i);
  return match ? match[1] : null;
},

  doc(){
      console.log("页面")
    qq.navigateTo({
        url: '/pages/home/doc/index'
      })
  },

  onChange(e) {

  },

  onShareAppMessage() {
    return {
      title: '图片文字修改工具',
      path: 'pages/home/ps/index'
    }
  },
  handleShare: function() {
    // 自定义分享内容
    var shareOptions = {
      title: '图片文字修改工具',
      path: 'pages/home/ps/index', // 分享路径
      success: function(res) {
        console.log('分享成功');
      },
      fail: function(err) {
        console.error('分享失败', err);
      }
    };

    // 显示分享菜单
    qq.showShareMenu({
      withText: true,
      success: function() {
        // 分享菜单显示成功
        // 如果需要自定义分享内容，可以在这里调用wx.updateShareMenu并传入shareOptions
        qq.updateShareMenu(shareOptions);
      },
      fail: function() {
        // 分享菜单显示失败
      }
    });
  },
})

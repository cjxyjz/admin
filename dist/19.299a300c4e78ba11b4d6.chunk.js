webpackJsonp([19],{256:function(e,t,i){i(748);var s=i(1)(i(472),i(801),null,null);s.options.__file="G:\\yunStore\\iview-admin\\src\\views\\slide\\slideUpload.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] slideUpload.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},472:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"file-upload",data:function(){return{defaultList:[{name:"a42bdcc1178e62b4694c830f028db5c0",url:"https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar"},{name:"bc7521e033abdd1e92222d733590f104",url:"https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar"}],imgName:"",visible:!1,uploadList:[]}},methods:{handleFormatError:function(e){this.$Notice.warning({title:"文件格式不正确",desc:"文件 "+e.name+" 格式不正确，请选择图片文件。"})},handleBeforeUpload:function(e){this.$Notice.warning({title:"文件准备上传",desc:"文件 "+e.name+" 准备上传。"})},handleProgress:function(e,t){this.$Notice.info({title:"文件正在上传",desc:"文件 "+t.name+" 正在上传。"})},handleSuccess:function(e,t){this.$Notice.success({title:"文件上传成功",desc:"文件 "+t.name+" 上传成功。"})},handleError:function(e,t){this.$Notice.error({title:"文件上传成功",desc:"文件 "+t.name+" 上传失败。"})},handleView:function(e){this.imgName=e,this.visible=!0},handleRemove:function(e){var t=this.$refs.upload.fileList;this.$refs.upload.fileList.splice(t.indexOf(e),1)},handleSuccess2:function(e,t){t.url="https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar",t.name="7eb99afb9d5f317c912f08b5212fd69a"},handleFormatError2:function(e){this.$Notice.warning({title:"文件格式不正确",desc:"文件 "+e.name+" 格式不正确，请上传 jpg 或 png 格式的图片。"})},handleMaxSize:function(e){this.$Notice.warning({title:"超出文件大小限制",desc:"文件 "+e.name+" 太大，不能超过 2M。"})},handleBeforeUpload2:function(){var e=this.uploadList.length<5;return e||this.$Notice.warning({title:"最多只能上传 5 张图片。"}),e}},mounted:function(){this.uploadList=this.$refs.upload.fileList}}},748:function(e,t){},801:function(e,t,i){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("Row",[i("Col",{attrs:{span:"20"}},[i("div",{staticClass:"padding-left-10"},[i("Card",[i("p",{attrs:{slot:"title"},slot:"title"},[i("Icon",{attrs:{type:"ios-analytics"}}),e._v("\n                    上传图片\n                ")],1),e._v(" "),i("div",{staticClass:"height-492px"},[i("Col",{attrs:{span:"8"}},[i("Card",[i("Upload",{ref:"upload",staticStyle:{display:"inline-block",width:"58px"},attrs:{"show-upload-list":!1,"default-file-list":e.defaultList,"on-success":e.handleSuccess2,format:["jpg","jpeg","png"],"max-size":2048,"on-format-error":e.handleFormatError2,"on-exceeded-size":e.handleMaxSize,"before-upload":e.handleBeforeUpload2,multiple:"",type:"drag",action:""}},[i("div",{staticStyle:{width:"58px",height:"58px","line-height":"58px"}},[i("Icon",{attrs:{type:"camera",size:"20"}})],1)]),e._v(" "),i("Modal",{attrs:{title:"查看图片"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[e.visible?i("img",{staticStyle:{width:"100%"},attrs:{src:"https://o5wwk8baw.qnssl.com/"+e.imgName+"/large"}}):e._e()])],1)],1),e._v(" "),i("Col",{staticClass:"padding-left-10",attrs:{span:"16"}},[i("Card",[i("div",{staticClass:"height-460px"},e._l(e.uploadList,function(t){return i("div",{key:t.url,staticClass:"admin-upload-list"},["finished"===t.status?[i("img",{attrs:{src:t.url}}),e._v(" "),i("div",{staticClass:"admin-upload-list-cover"},[i("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(i){e.handleView(t.name)}}}),e._v(" "),i("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(i){e.handleRemove(t)}}})],1)]:[t.showProgress?i("Progress",{attrs:{percent:t.percentage,"hide-info":""}}):e._e()]],2)}))])],1)],1)])],1)])],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});
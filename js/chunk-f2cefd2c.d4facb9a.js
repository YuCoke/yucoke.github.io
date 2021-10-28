(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f2cefd2c"],{"378b":function(a,t,e){"use strict";e("93f5")},"8db0":function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"i-layout-page-header"},[e("PageHeader",{attrs:{title:"新建采收/编辑采收","breadcrumb-list":a.breadcrumbList}}),e("Card",{ref:"card",staticClass:"list-table-list-card ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[e("Form",{ref:"form",staticClass:"ivu-mt",attrs:{model:a.data}},[e("Card",{attrs:{bordered:!1,"dis-hover":"",title:"采收信息"}},[e("Row",{attrs:{gutter:24}},[e("Col",{attrs:{xl:8,lg:8,md:8,sm:24,xs:24}},[e("FormItem",{attrs:{label:"采收类型",prop:"harvestingType",rules:a.required}},[e("Select",{on:{"on-change":a.handleSelect},model:{value:a.data.harvestingType,callback:function(t){a.$set(a.data,"harvestingType",t)},expression:"data.harvestingType"}},[e("Option",{attrs:{value:"1"}},[a._v("基地采收")]),e("Option",{attrs:{value:"0"}},[a._v("野生采收")])],1)],1)],1),e("Col",{attrs:{xl:8,lg:8,md:8,sm:24,xs:24}},[e("FormItem",{attrs:{label:"基地",prop:"baze",rules:a.required}},[e("Input",{attrs:{placeholder:"请输入"},model:{value:a.data.baze,callback:function(t){a.$set(a.data,"baze",t)},expression:"data.baze"}})],1)],1),e("Col",{attrs:{xl:8,lg:8,md:8,sm:24,xs:24}},[e("FormItem",{directives:[{name:"show",rawName:"v-show",value:"1"===a.data.harvestingType,expression:"data.harvestingType==='1'"}],attrs:{label:"种植批号",prop:"plantBatchNumber",rules:a.required}},[e("Select",{attrs:{placeholder:"请输入种植查找"},model:{value:a.data.plantBatchNumber,callback:function(t){a.$set(a.data,"plantBatchNumber",t)},expression:"data.plantBatchNumber"}},a._l(a.plantNumber,(function(a,t){return e("Option",{key:t,attrs:{value:a}})})),1)],1),e("FormItem",{directives:[{name:"show",rawName:"v-show",value:"0"===a.data.harvestingType,expression:"data.harvestingType==='0'"}],attrs:{label:"采收药材",prop:"herbal",rules:a.required}},[e("Input",{attrs:{placeholder:"请输入"},model:{value:a.data.herbal,callback:function(t){a.$set(a.data,"herbal",t)},expression:"data.herbal"}})],1)],1),e("Col",{attrs:{xl:8,lg:8,md:8,sm:24,xs:24}},[e("FormItem",{attrs:{label:"采收部位",prop:"herbalPart",rules:a.required}},[e("Input",{attrs:{placeholder:"请输入"},model:{value:a.data.herbalPart,callback:function(t){a.$set(a.data,"herbalPart",t)},expression:"data.herbalPart"}})],1)],1),e("Col",{attrs:{xl:8,lg:8,md:8,sm:24,xs:24}},[e("FormItem",{attrs:{label:"生长年限",prop:"growthYears",rules:"1"===a.data.harvestingType?a.required:{}}},[e("Input",{attrs:{type:"number"},model:{value:a.data.growthYears,callback:function(t){a.$set(a.data,"growthYears",t)},expression:"data.growthYears"}})],1)],1),e("Col",{attrs:{xl:8,lg:8,md:8,sm:24,xs:24}},[e("FormItem",{attrs:{label:"采收方式",prop:"excavationMethod",rules:a.required}},[e("Input",{attrs:{placeholder:"请输入"},model:{value:a.data.excavationMethod,callback:function(t){a.$set(a.data,"excavationMethod",t)},expression:"data.excavationMethod"}})],1)],1),e("Col",{attrs:{xl:8,lg:8,md:8,sm:24,xs:24}},[e("FormItem",{attrs:{label:"天气",prop:"weather"}},[e("Input",{attrs:{placeholder:"请输入"},model:{value:a.data.weather,callback:function(t){a.$set(a.data,"weather",t)},expression:"data.weather"}})],1)],1),e("Col",{attrs:{xl:8,lg:8,md:8,sm:24,xs:24}},[e("FormItem",{attrs:{label:"采收批号",prop:"batchNumber",rules:a.required}},[e("Input",{attrs:{placeholder:"请输入"},model:{value:a.data.batchNumber,callback:function(t){a.$set(a.data,"batchNumber",t)},expression:"data.batchNumber"}})],1)],1),e("Col",{attrs:{xl:8,lg:8,md:8,sm:24,xs:24}},[e("FormItem",{attrs:{label:"采收面积",prop:"area",rules:"1"===a.data.harvestingType?a.required:{}}},[e("Input",{attrs:{type:"number",placeholder:"请输入"},model:{value:a.data.area,callback:function(t){a.$set(a.data,"area",t)},expression:"data.area"}},[e("span",{attrs:{slot:"append"},slot:"append"},[a._v("亩")])])],1)],1),e("Col",{attrs:{xl:8,lg:8,md:8,sm:24,xs:24}},[e("FormItem",{attrs:{label:"采收时间",prop:"startTime",rules:a.required}},[e("Input",{attrs:{type:"date",placeholder:"请输入"},model:{value:a.data.startTime,callback:function(t){a.$set(a.data,"startTime",t)},expression:"data.startTime"}})],1)],1),e("Col",{attrs:{xl:8,lg:8,md:8,sm:24,xs:24}},[e("FormItem",{attrs:{label:"结束时间",prop:"endTime",rules:a.required}},[e("Input",{attrs:{type:"date",placeholder:"请输入"},model:{value:a.data.endTime,callback:function(t){a.$set(a.data,"endTime",t)},expression:"data.endTime"}})],1)],1),e("Col",{attrs:{xl:8,lg:8,md:8,sm:24,xs:24}},[e("FormItem",{attrs:{label:"采收数量",prop:"amount",rules:a.required}},[e("Input",{attrs:{type:"number",placeholder:"请输入"},model:{value:a.data.amount,callback:function(t){a.$set(a.data,"amount",t)},expression:"data.amount"}},[e("span",{attrs:{slot:"append"},slot:"append"},[a._v("KG")])])],1)],1),e("Col",{attrs:{xl:8,lg:8,md:8,sm:24,xs:24}},[e("FormItem",{attrs:{label:"负责人",prop:"principal",rules:a.required}},[e("Input",{attrs:{placeholder:"请输入"},model:{value:a.data.principal,callback:function(t){a.$set(a.data,"principal",t)},expression:"data.principal"}})],1)],1)],1),e("Row",{attrs:{gutter:24}},[e("Col",{attrs:{xl:12,lg:12,md:12,sm:24,xs:24}},[e("FormItem",{attrs:{label:"备注",prop:"remark"}},[e("Input",{attrs:{type:"textarea",placeholder:"请输入"},model:{value:a.data.intro,callback:function(t){a.$set(a.data,"intro",t)},expression:"data.intro"}})],1)],1),e("Col",{attrs:{xl:14,lg:14,md:14,sm:24,xs:24}},[e("FormItem",[e("p",[a._v("图片")]),a._l(a.uploadList,(function(t,r){return e("div",{key:r,staticClass:"demo-upload-list"},["finished"===t.status?[e("img",{attrs:{src:t.url}}),e("div",{staticClass:"demo-upload-list-cover"},[e("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(e){return a.handleView(t.name)}}}),e("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(e){return a.handleRemove(t)}}})],1)]:[t.showProgress?e("Progress",{attrs:{percent:t.percentage,"hide-info":""}}):a._e()]],2)})),e("Upload",{ref:"upload",staticClass:"business-license-upload",attrs:{"show-upload-list":!1,format:["jpg","jpeg","png"],"max-size":2048,"on-format-error":a.handleFormatError,multiple:"",type:"drag",action:""}},[e("div",{staticClass:"business-license-middle"},[e("Icon",{attrs:{type:"md-add",size:"20"}}),e("br"),a._v("\n                                点击上传\n                            ")],1)])],2)],1)],1)],1)],1),e("FooterToolbar",[e("Button",{attrs:{type:"primary",loading:a.loading,size:"large"},on:{click:a.handleSubmit}},[a._v("提交")])],1)],1)],1)},l=[],s=(e("a481"),e("7f7f"),{name:"index",data:function(){return{breadcrumbList:[{title:"基地",to:"/plant"},{title:"采收管理",to:"/plant/harvest"},{title:"采收编辑"}],data:{harvestingType:"1",baze:"",plantBatchNumber:"",herbal:"",herbalPart:"",growthYears:"",batchNumber:"",excavationMethod:"",startTime:"",endTime:"",weather:"",area:"",amount:"",principal:"",images:"",remark:""},uploadList:[],plantNumber:[],required:{required:!0,message:"请输入",trigger:"blur"},loading:!1}},mounted:function(){this.loadData()},methods:{loadData:function(){this.$route.query.harvestId},handleView:function(a){this.imgName=a,this.visible=!0},handleRemove:function(a){var t=this.$refs.upload.fileList;this.$refs.upload.fileList.splice(t.indexOf(a),1)},handleFormatError:function(a){this.$Notice.warning({title:"文件格式错误",desc:"您上传的文件 "+a.name+" 格式不正确, 请上jpg,jpeg,png."})},handleSubmit:function(){var a=this;this.$refs["form"].validate((function(t){t?(a.$Message.success("Success!"),a.$router.replace({name:"plant-harvest"})):a.$Message.error("Fail!")}))},handleSelect:function(a){}}}),o=s,n=(e("378b"),e("2877")),i=Object(n["a"])(o,r,l,!1,null,null,null);t["default"]=i.exports},"93f5":function(a,t,e){}}]);
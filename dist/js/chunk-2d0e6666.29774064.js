(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e6666"],{"991a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[t._m(0),n("div",{ref:"container",staticClass:"container",attrs:{id:"container"}}),n("el-row",[n("el-col",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.addElem(t.prop)}}},[t._v("创建图形")])],1)],1)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("创建弯曲文字")])])}],l=n("1b62"),i=n("362d"),o=n.n(i),c={name:"TextPathT",mixins:[l["b"]],data:function(){return{prop:{x:0,y:50,fill:"#333",fontSize:16,fontFamily:"Arial",text:"All the world's a stage, and all the men and women merely players.",data:"M10,10 C0,0 10,150 100,100 S300,150 5.0.300"}}},methods:{addElem:function(t){var e=this.pageLayer[0].layer,n=new o.a.TextPath(t);e.add(n),e.batchDraw(),console.log("创建图形成功\n",n)}}},s=c,d=n("2877"),u=Object(d["a"])(s,a,r,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0e6666.29774064.js.map
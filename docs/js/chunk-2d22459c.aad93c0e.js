(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22459c"],{e083:function(n,t,e){"use strict";e.r(t);var r=function(){var n=this,t=n._self._c;return t("div",{staticClass:"app-container"},[n._m(0),t("div",{ref:"container",staticClass:"container",attrs:{id:"container"}}),t("el-row",[t("el-col",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return n.addElem(n.line1)}}},[n._v("创建折线1")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return n.addElem(n.line2)}}},[n._v("创建折线2")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return n.addElem(n.line3)}}},[n._v("创建折线3")])],1)],1)],1)},i=[function(){var n=this,t=n._self._c;return t("div",[t("h1",[n._v("创建折线1")])])}],o=e("1b62"),a=e("362d"),s=e.n(a),l={name:"LineSimple",mixins:[o["b"]],data(){return{line1:{points:[5,70,140,23,250,60,300,20],stroke:"red",strokeWidth:15,lineCap:"round",lineJoin:"round"},line2:{points:[5,70,140,23,250,60,300,20],stroke:"green",strokeWidth:2,lineJoin:"round",dash:[33,10]},line3:{points:[5,70,140,23,250,60,300,20],stroke:"blue",strokeWidth:10,lineCap:"round",lineJoin:"round",dash:[29,20,.001,20]}}},methods:{addElem(n){const t=this.pageLayer[0].layer,e=Object.assign({},n,{points:this.getLineLoca()}),r=new s.a.Line(e);t.add(r),t.batchDraw(),console.log("创建图形成功",r)},getLineLoca(){const n=parseInt(20*Math.random()),t=[];for(let e=0;e<=n;e++){const n=parseInt(40*Math.random())+20*e+50,r=parseInt(40*Math.random())+20*e+50;t.push(n,r)}return t}}},c=l,d=e("2877"),u=Object(d["a"])(c,r,i,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d22459c.aad93c0e.js.map
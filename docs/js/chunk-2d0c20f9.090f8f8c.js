(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c20f9"],{4964:function(n,t,e){"use strict";e.r(t);var a=function(){var n=this,t=n._self._c;return t("div",{staticClass:"app-container"},[n._m(0),t("div",{ref:"container",staticClass:"container",attrs:{id:"container"}}),t("el-row",[t("el-col",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return n.addElem(n.line1)}}},[n._v("创建折线1")])],1)],1)],1)},i=[function(){var n=this,t=n._self._c;return t("div",[t("h1",[n._v("创建折线2")])])}],r=e("1b62"),l=e("362d"),o=e.n(l),s={name:"LinePolygon",mixins:[r["b"]],data(){return{line1:{points:[23,20,23,160,70,93,150,109,240,164,270,93],fill:"#00D2FF",stroke:"black",strokeWidth:5,closed:!0}}},methods:{addElem(n){const t=this.pageLayer[0].layer,e=new o.a.Line(n);t.add(e),t.batchDraw(),console.log("创建图形成功",e)}}},c=s,d=e("2877"),u=Object(d["a"])(c,a,i,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0c20f9.090f8f8c.js.map
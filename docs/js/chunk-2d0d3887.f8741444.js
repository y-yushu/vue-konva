(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3887"],{"5cbe":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-container"},[t._m(0),e("div",{ref:"container",staticClass:"container",attrs:{id:"container"}})])},o=[function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("保持比例 keepRatio")])])}],i=a("1b62"),r=a("362d"),s=a.n(r),d={name:"KeepRatio",mixins:[i["b"]],data(){return{text1:{x:50,y:70,fontSize:30,text:"keepRatio = true",draggable:!0},text2:{x:50,y:200,fontSize:30,text:"keepRatio = false",draggable:!0}}},created(){setTimeout(()=>{this.addElem()},20)},methods:{addElem(){const t=this.pageLayer[0].layer,e=new s.a.Text(this.text1),a=new s.a.Transformer({nodes:[e],keepRatio:!0,enabledAnchors:["top-left","top-right","bottom-left","bottom-right"]});t.add(e),t.add(a);const n=new s.a.Text(this.text2),o=new s.a.Transformer({nodes:[n],keepRatio:!1,enabledAnchors:["top-left","top-right","bottom-left","bottom-right"]});t.add(n),t.add(o),t.draw()}}},l=d,c=a("2877"),p=Object(c["a"])(l,n,o,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0d3887.f8741444.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cbcb7"],{"4ad8":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-container"},[t._m(0),e("div",{ref:"container",staticClass:"container",attrs:{id:"container"}})])},s=[function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("通过父级监听事件")])])}],i=a("1b62"),r=a("362d"),c=a.n(r),l={name:"EventDelegation",mixins:[i["b"]],data(){return{propStyle:{x:240,y:120,numPoints:15,innerRadius:40,outerRadius:70,fill:"blue",scale:{x:2,y:.5},name:"my star"}}},created(){setTimeout(()=>{this.addElem()},20)},methods:{addElem(){const t=this.pageLayer[0].layer,e=new c.a.Star(this.propStyle);t.on("click",t=>{const e=t.target;this.$message({message:"点击了"+e.name()})}),t.add(e),t.batchDraw()}}},o=l,d=a("2877"),u=Object(d["a"])(o,n,s,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0cbcb7.3b0764c3.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d212fc4"],{ab6c:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-container"},[t._m(0),e("div",{ref:"container",staticClass:"container",attrs:{id:"container"}})])},s=[function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("阴影样式")])])}],o=a("1b62"),n=a("362d"),r=a.n(n),d={name:"Shadow",mixins:[o["b"]],data(){return{textStyle:{text:"Text Shadow!",fontFamily:"Calibri",fontSize:40,x:20,y:20,stroke:"red",strokeWidth:2,shadowColor:"black",shadowBlur:0,shadowOffset:{x:10,y:10},shadowOpacity:.5},lineStyle:{stroke:"green",strokeWidth:10,lineJoin:"round",lineCap:"round",points:[50,140,250,160],shadowColor:"black",shadowBlur:10,shadowOffset:{x:10,y:10},shadowOpacity:.5},rectStyle:{x:100,y:120,width:100,height:50,fill:"#00D2FF",stroke:"black",strokeWidth:4,shadowColor:"black",shadowBlur:10,shadowOffset:{x:10,y:10},shadowOpacity:.5}}},created(){setTimeout(()=>{this.initialize()},20)},methods:{initialize(){const t=this.pageLayer[0].layer,e=new r.a.Text(this.textStyle),a=new r.a.Line(this.lineStyle),i=new r.a.Rect(this.rectStyle);t.add(e),t.add(a),t.add(i),t.batchDraw()}}},l=d,h=a("2877"),c=Object(h["a"])(l,i,s,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d212fc4.c4239ec7.js.map
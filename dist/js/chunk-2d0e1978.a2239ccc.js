(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1978"],{"7aa9":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[e._m(0),n("div",{ref:"container",staticClass:"container",attrs:{id:"container"}})])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("旋转捕捉")])])}],i=n("1b62"),c=n("362d"),s=n.n(c),d={name:"CenteredScaling2",mixins:[i["b"]],data:function(){return{textStyle:{x:50,y:70,fontSize:30,text:"旋转该文本",draggable:!0}}},created:function(){var e=this;setTimeout((function(){e.addElem()}),20)},methods:{addElem:function(){var e=this.pageLayer[0].layer,t=new s.a.Text(this.textStyle),n=new s.a.Transformer({nodes:[t],centeredScaling:!0,rotationSnaps:[0,90,180,270],resizeEnabled:!1});e.add(t),e.add(n),e.batchDraw()}}},o=d,l=n("2877"),u=Object(l["a"])(o,a,r,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0e1978.a2239ccc.js.map
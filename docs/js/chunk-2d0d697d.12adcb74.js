(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d697d"],{"72e1":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-container"},[e._m(0),t("div",{ref:"container",staticClass:"container",attrs:{id:"container"}}),t("el-row",[t("el-col",[t("el-button",{attrs:{type:"primary"},on:{click:e.closeMonitoring}},[e._v("取消事件监听")])],1)],1)],1)},n=[function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("取消监听事件")])])}],r=s("1b62"),a=s("362d"),o=s.n(a),c={name:"RemoveEventListener",mixins:[r["b"]],data(){return{propStyle:{x:120,y:120,radius:70,fill:"red",stroke:"black",strokeWidth:4},prop:""}},created(){setTimeout(()=>{this.addElem()},20)},methods:{addElem(){const e=this.pageLayer[0].layer,t=new o.a.Circle(this.propStyle);t.on("click",()=>{this.$message({message:"触发监听事件"})}),this.prop=t,e.add(t),e.batchDraw()},closeMonitoring(){this.prop.off("click"),this.$message({message:"关闭监听事件",type:"success"})}}},l=c,d=s("2877"),p=Object(d["a"])(l,i,n,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0d697d.12adcb74.js.map
webpackJsonp([1],{"/F/+":function(e,t,a){"use strict";var o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._l(5,function(t){return a("p",[e._v(e._s(e.greeting)+" ! ")])}),0)},staticRenderFns:[]};t.a=o},"5Rk0":function(e,t){e.exports={data:function(){return{greeting:"Hello"}}}},"7RUx":function(e,t,a){e.exports=a.p+"static/img/GraphicCard.a0edcb9.png"},"7zck":function(e,t){},"JF/K":function(e,t){},K18L:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"appp"}},[t("img",{attrs:{src:a("7RUx")}}),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var s=a("VU/8")({name:"App"},n,!1,function(e){a("K18L")},null,null).exports,r=a("/ocq"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var c=a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Graphic Card Placement"}}},i,!1,function(e){a("JF/K")},"data-v-39007f2b",null).exports;o.default.use(r.a);var p=new r.a({routes:[{path:"/",name:"HelloWorld",component:c}]}),l=a("3EgV"),u=a.n(l),d=(a("7zck"),{common_test:"666",selectedRegion:"广东"}),m=a("ARhN"),f=a.n(m),v={"黑龙江":{pos:[127.9688,45.368],value:5},"内蒙古":{pos:[110.3467,41.4899],value:50},"吉林":{pos:[125.8154,44.2584],value:50},"北京":{pos:[116.4551,40.2539],value:50},"辽宁":{pos:[123.1238,42.1216],value:50},"河北":{pos:[114.4995,38.1006],value:50},"天津":{pos:[117.4219,39.4189],value:50},"山西":{pos:[112.3352,37.9413],value:50},"陕西":{pos:[109.1162,34.2004],value:50},"甘肃":{pos:[103.5901,36.3043],value:50},"宁夏":{pos:[106.3586,38.1775],value:50},"青海":{pos:[101.4038,36.8207],value:50},"新疆":{pos:[87.9236,43.5883],value:50},"西藏":{pos:[91.11,29.97],value:50},"四川":{pos:[103.9526,30.7617],value:50},"重庆":{pos:[108.384366,30.439702],value:50},"山东":{pos:[117.1582,36.8701],value:50},"河南":{pos:[113.4668,34.6234],value:50},"江苏":{pos:[118.8062,31.9208],value:50},"安徽":{pos:[117.29,32.0581],value:50},"湖北":{pos:[114.3896,30.6628],value:50},"浙江":{pos:[119.5313,29.8773],value:50},"福建":{pos:[119.4543,25.9222],value:50},"江西":{pos:[116.0046,28.6633],value:50},"湖南":{pos:[113.0823,28.2568],value:50},"贵州":{pos:[106.6992,26.7682],value:50},"云南":{pos:[102.9199,25.4663],value:50},"广东":{pos:[113.12244,23.009505],value:300},"广西":{pos:[108.479,23.1152],value:50},"海南":{pos:[110.3893,19.8516],value:50},"上海":{pos:[121.4648,31.2891],value:50},test:{pos:[50,50],value:200}},h=[{fromName:"广东",toName:"福建",coords:x("广东","福建")},{fromName:"广东",toName:"北京",coords:x("广东","北京")},{fromName:"广东",toName:"上海",coords:x("广东","上海")}],g=!1,b=!1,_=0,w={fromName:"",toName:"",coords:[]};function k(){g=!0}function y(){_=0,b=!0}function N(){w.fromName="",w.toName="",w.coords=[]}function x(e,t){return""==e||""==t?["",""]:[v[e].pos,v[t].pos]}var R=function(e){var t=[];for(var a in e){var o=e[a].pos;o.push(e[a].value),t.push(o)}return t};var z={name:"",methods:{drawMap:function(e){var t=f.a.init(document.getElementById(e));t.setOption({tooltip:{trigger:"item"},legend:{orient:"vertical",top:"bottom",left:"right",data:["ProvincePoint","line"],textStyle:{color:"#fff"}},geo:{map:"china",roam:!0,scaleLimit:{max:10,min:1},center:[115,23],zoom:7,label:{emphasis:{show:!1}},itemStyle:{normal:{areaColor:"#323c48",borderColor:"#111"},emphasis:{areaColor:"#2a333d"}}},visualMap:{min:0,max:300,type:"piecewise",realtime:!1,splitNumber:5},series:[{name:"ProvincePoint",type:"scatter",coordinateSystem:"geo",data:R(v),symbolSize:12,label:{normal:{show:!1},emphasis:{show:!1}},itemStyle:{emphasis:{borderColor:"#fff",borderWidth:1}}},{name:"line",type:"lines",coordinateSystem:"geo",zlevel:2,large:!0,effect:{show:!0,symbolSize:5},lineStyle:{normal:{color:new f.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#58B3CC"},{offset:1,color:"#F58158"}],!1),width:1,opacity:.2,curveness:.1}},data:h}]}),t.on("click",function(e){var a=[e.event.offsetX,e.event.offsetY],o=t.convertFromPixel("geo",a);if(v.test.pos=o,console.log(o),t.setOption({series:[{data:R(v)},{data:h}]}),g&&"lines"==e.componentSubType)for(var n=0;n<h.length;++n)if(h[n].fromName==e.data.fromName&&h[n].toName==e.data.toName){h.splice(n,1),t.setOption({series:[{},{data:h}]}),g=!1;break}if(b){if("scatter"==e.componentSubType){var s=e.data[2];if(0==_)N(),w.fromName=s,w.coords.push(v[s].pos),++_;else if(1==_){w.toName=s,w.coords.push(v[s].pos);var r={fromName:w.fromName,toName:w.toName,coords:w.coords};h.push(r),t.setOption({series:[{},{data:h}]}),N(),b=!1}}}else"scatter"==e.componentSubType&&(d.selectedRegion=e.data[2],console.log(d.selectedRegion))})}},mounted:function(){this.$nextTick(function(){this.drawMap("map"),document.getElementById("delline").addEventListener("click",k,!1),document.getElementById("addline").addEventListener("click",y,!1)})}},S={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticStyle:{height:"800px","background-color":"purple"},attrs:{id:"map"}}),this._v(" "),t("v-layout",[t("v-flex",{attrs:{sm12:""}},[t("v-btn",{attrs:{dark:"",block:"",id:"buyregion"}},[this._v("购买区域")])],1),this._v(" "),t("v-flex",{attrs:{sm12:""}},[t("v-btn",{attrs:{dark:"",block:"",id:"addline"}},[this._v("添加线路")])],1),this._v(" "),t("v-flex",{attrs:{sm12:""}},[t("v-btn",{attrs:{dark:"",block:"",id:"delline"}},[this._v("删除线路")])],1)],1)],1)},staticRenderFns:[]};var T=a("VU/8")(z,S,!1,function(e){a("hbqv")},"data-v-08baf540",null).exports,C=(a("gcp3"),{render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"shop"}})},staticRenderFns:[]});var E=a("VU/8")({},C,!1,function(e){a("zW6x")},null,null).exports;a("KrjX");console.log(f.a.version);var F={num:0},X=0,G=9e4,M=[1,2,3,4,5,6,7,8,9,10],P={bitcoin:{icon:"monetization_on",data:0},cash:{icon:"account_balance_wallet",data:0}},U=[{name:"Graphic Card",items:[{name:"9800GT",heat:.01,speed:1e-4,space:1,powercs:"",prize:500},{name:"GTX1060",heat:.01,speed:.001,space:1,powercs:"",prize:1e3},{name:"GTX1070",heat:.01,speed:.005,space:1,powercs:"",prize:2e3},{name:"RTX280Ti",heat:.01,speed:.009,space:1,powercs:"",prize:4e3},{name:"Titan RTX",heat:.01,speed:.015,space:1,powercs:"",prize:8e3},{name:"RX460",heat:.01,speed:.03,space:1,powercs:"",prize:600},{name:"RX470",heat:.01,speed:.05,space:1,powercs:"",prize:2e3},{name:"RX570",heat:.01,speed:.08,space:1,powercs:"",prize:3e3},{name:"R9",heat:.01,speed:.1,space:1,powercs:"",prize:9e3}]},{name:"Radiator",items:[{name:"初级散热器",effect:0,speed:0,space:2,powercs:"",prize:1}]}],W="广东",L=[{"广东":{curren_space:3,max_space:18,racks:[]},"福建":{curren_space:2,max_space:8,racks:[]}}],V=[{curren_space:4,max_space:18,racks:[]}];for(var $ in L[0])for(var H=0;H<L[0][$].curren_space;H++){L[0][$].racks.push({capacity:6,occupy:0,items:[]})}V[0]=L[0][W];o.default.use(u.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:p,template:"<App/>",components:{App:s}}),new o.default({el:"#map",template:"<Map/>",components:{Map:T},data:{shopinfo:U}}),new o.default({el:"#shop",template:"<Shop/>",components:{Shop:E}});var I=10;new o.default({el:"#content",data:{numcard:F,accountdata:P,shopinfo:U,erlist:M,window:0,showingregion:V},methods:{addcard:function(e){P.cash.data>=e.prize&&(function(e){for(var t=!0,a=0;a<L[0][W].racks.length;a++)if(L[0][W].racks[a].capacity-L[0][W].racks[a].occupy>=e.space){t=!1,L[0][W].racks[a].items.push(e),L[0][W].racks[a].occupy+=1;break}return t}(e)||(P.cash.data-=e.prize,X+=e.speed,++F.num))},mousework:function(){P.cash.data+=1e4},btc2Cash:function(){var e=.2*P.bitcoin.data*G;P.bitcoin.data=0,P.cash.data+=e},racktest:function(e){e.items.push({name:++I})},removecard:function(e,t,a){a.items.splice(e,1),a.occupy-=t.space,function(e){F.num<=0?F.num=0:(X-=e.speed,--F.num)}(t)},changeregion:function(){W=d.selectedRegion,V[0]=L[0][d.selectedRegion]}}}),new o.default({el:"#pagefoot"}),setInterval(function(){P.bitcoin.data+=X},1e3),setInterval(function(){M.push(10*Math.random()),M.length>=50&&M.shift()},500)},gcp3:function(e,t,a){"use strict";var o=a("5Rk0"),n=a.n(o),s=a("/F/+");var r=function(e){a("tfke")};a("VU/8")(n.a,s.a,!1,r,null,null).exports},hbqv:function(e,t){},tfke:function(e,t){},zW6x:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.59dab96a227ca2dec831.js.map
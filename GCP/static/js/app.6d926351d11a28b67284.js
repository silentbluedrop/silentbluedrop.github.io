webpackJsonp([1],{"/F/+":function(e,t,a){"use strict";var n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._l(5,function(t){return a("p",[e._v(e._s(e.greeting)+" ! ")])}),0)},staticRenderFns:[]};t.a=n},"5Rk0":function(e,t){e.exports={data:function(){return{greeting:"Hello"}}}},"6lN0":function(e,t){},"7RUx":function(e,t,a){e.exports=a.p+"static/img/GraphicCard.9005370.png"},"7zck":function(e,t){},"JF/K":function(e,t){},K18L:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"appp"}},[t("img",{attrs:{src:a("7RUx")}}),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var o=a("VU/8")({name:"App"},i,!1,function(e){a("K18L")},null,null).exports,r=a("/ocq"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var c=a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Graphic Card Placement"}}},s,!1,function(e){a("JF/K")},"data-v-39007f2b",null).exports;n.default.use(r.a);var l=new r.a({routes:[{path:"/",name:"HelloWorld",component:c}]}),p=a("3EgV"),u=a.n(p),m=(a("7zck"),a("ARhN")),d=a.n(m),f={"武汉":[114.31,30.52],"大庆":[125.03,46.58],test:[50,50]},h=function(e){for(var t=[],a=0;a<e.length;a++){var n=f[e[a].name];n&&t.push(n.concat(e[a].value))}return t};var v={name:"",methods:{drawPie:function(e){var t=d.a.init(document.getElementById(e));t.setOption({tooltip:{trigger:"item"},legend:{orient:"vertical",top:"bottom",left:"right",data:["test"],textStyle:{color:"#fff"}},geo:{map:"china",roam:!0,scaleLimit:{max:10,min:1},center:[115,23],zoom:7,label:{emphasis:{show:!1}},itemStyle:{normal:{areaColor:"#323c48",borderColor:"#111"},emphasis:{areaColor:"#2a333d"}}},visualMap:{min:0,max:300,type:"piecewise",realtime:!1,splitNumber:2},series:[{name:"test",type:"scatter",coordinateSystem:"geo",data:h([{name:"武汉",value:273},{name:"大庆",value:279},{name:"test",value:29}]),symbolSize:12,label:{normal:{show:!1},emphasis:{show:!1}},itemStyle:{emphasis:{borderColor:"#fff",borderWidth:1}}}]}),t.on("click",function(e){var a=[e.event.offsetX,e.event.offsetY],n=t.convertFromPixel("geo",a);f.test=n,console.log(n),t.setOption({series:{data:h([{name:"武汉",value:273},{name:"大庆",value:279},{name:"test",value:29}])}})})}},mounted:function(){this.$nextTick(function(){this.drawPie("map")})}},g={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticStyle:{height:"800px","background-color":"purple"},attrs:{id:"map"}})},staticRenderFns:[]};var w=a("VU/8")(v,g,!1,function(e){a("6lN0")},"data-v-ef1f7d86",null).exports,_=(a("gcp3"),{render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"shop"}})},staticRenderFns:[]});var x=a("VU/8")({},_,!1,function(e){a("zW6x")},null,null).exports;a("KrjX");console.log(d.a.version);for(var b={num:0},z=0,R=9e4,k=[1,2,3,4,5,6,7,8,9,10],y={bitcoin:{icon:"monetization_on",data:0},cash:{icon:"account_balance_wallet",data:0}},F=[{name:"Graphic Card",items:[{name:"9800GT",heat:.01,speed:1e-4,powercs:"",prize:500},{name:"GTX1060",heat:.01,speed:.001,powercs:"",prize:1e3},{name:"GTX1070",heat:.01,speed:.005,powercs:"",prize:2e3},{name:"RTX280Ti",heat:.01,speed:.009,powercs:"",prize:4e3},{name:"Titan RTX",heat:.01,speed:.015,powercs:"",prize:8e3},{name:"RX460",heat:.01,speed:.03,powercs:"",prize:600},{name:"RX470",heat:.01,speed:.05,powercs:"",prize:2e3},{name:"RX570",heat:.01,speed:.08,powercs:"",prize:3e3},{name:"R9",heat:.01,speed:.1,powercs:"",prize:9e3}]},{name:"Radiator",items:[{name:"初级散热器",effect:0,speed:0,powercs:"",prize:1}]}],C=[{curren_space:6,max_space:20,racks:[]},{}],T=0;T<20;++T){for(var X={capacity:6,occupy:T%6,items:[]},S=0;S<T%4;++S)X.items.push({name:S});C[0].racks.push(X)}n.default.use(u.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:l,template:"<App/>",components:{App:o}}),new n.default({el:"#map",template:"<Map/>",components:{Map:w},data:{shopinfo:F}}),new n.default({el:"#shop",template:"<Shop/>",components:{Shop:x}}),new n.default({el:"#content",data:{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",numcard:b,accountdata:y,shopinfo:F,erlist:k,window:0,regions:C,rack:{capacity:6,occupy:2,items:[]}},methods:{addcard:function(e){y.cash.data>=e.prize&&(F[0].items.push({name:"new card"}),y.cash.data-=e.prize,z+=e.speed,++b.num)},removecard:function(){b.num<=0?b.num=0:(z-=1e-4,--b.num)},mousework:function(){y.cash.data+=1e4},btc2Cash:function(){var e=.2*y.bitcoin.data*R;y.bitcoin.data=0,y.cash.data+=e},racktest:function(e,t){t.items.push({name:99})},racktest2:function(e,t){t.items.shift()}}}),new n.default({el:"#pagefoot"}),setInterval(function(){y.bitcoin.data+=z},1e3),setInterval(function(){k.push(10*Math.random()),k.length>=50&&k.shift()},500)},gcp3:function(e,t,a){"use strict";var n=a("5Rk0"),i=a.n(n),o=a("/F/+");var r=function(e){a("tfke")};a("VU/8")(i.a,o.a,!1,r,null,null).exports},tfke:function(e,t){},zW6x:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.6d926351d11a28b67284.js.map
webpackJsonp([1],{EEbw:function(t,e){t.exports={version:"0.20.1"}},JfbK:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s=n("MMSg"),o=n.n(s),i=(n("doPI"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]});var u=n("VU/8")({name:"App",beforeCreate:function(){this.$store.dispatch("registerWeb3")}},i,!1,function(t){n("syO8")},null,null).exports,c=n("/ocq"),r=n("//Fk"),l=n.n(r),d={name:"Top",data:function(){return{latitude:null,longitude:null,jyusyo:null,time:null,unixtime:null,os:null,MakeItasokoModal:!1,Itasokolist:[],DetailItasokoModal:!1,dtime:null,djyusyo:null,dlatitude:null,dlongitude:null,dos:null}},computed:{web3:function(){return this.$store.state.web3}},mounted:function(){this.$store.dispatch("getContractInstance");var t=document.querySelector(".burger"),e=document.querySelector("#"+t.dataset.target);t.addEventListener("click",function(){t.classList.toggle("is-active"),e.classList.toggle("is-active")})},methods:{getgps:function(){var t=this;navigator.geolocation?console.log("この端末では位置情報が取得できます"):alert("この端末では位置情報が取得できません"),navigator.geolocation.getCurrentPosition(function(e){t.latitude=e.coords.latitude,t.longitude=e.coords.longitude;var n=new XMLHttpRequest;n.onreadystatechange=function(){4===n.readyState&&200===n.status&&this.response&&(t.jyusyo=null,t.jyusyo=this.response.results[0].formatted_address.split(/\s+/g)[1])},n.open("GET","https://maps.googleapis.com/maps/api/geocode/json?latlng="+t.latitude+","+t.longitude+"&key=AIzaSyA9pPnnB3RsOJyycAgVdLT0QF53i1wSnxo",!0),n.responseType="json",n.send(null)},function(t){switch(t.code){case 1:alert("位置情報の利用が許可されていません");break;case 2:alert("現在位置が取得できませんでした");break;case 3:alert("その他のエラー(エラーコード:"+t.code+")")}})},getjyusyo:function(){var t=new XMLHttpRequest;t.onreadystatechange=function(){4===t.readyState&&200===t.status&&this.response&&console.log(this.response)},t.open("GET","https://maps.googleapis.com/maps/api/geocode/json?latlng=36.0890142,140.0960055&key=AIzaSyA9pPnnB3RsOJyycAgVdLT0QF53i1wSnxo",!0),t.responseType="json",t.send(null)},getos:function(){return navigator.platform},unixcurrent:function(){return Date.now()},unixtodate:function(t){var e=new Date(1e3*t+32400);return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)+":"+("0"+e.getSeconds()).slice(-2)},make:function(){var t=this;l.a.resolve().then(function(){return new l.a(function(e,n){t.$store.state.contractInstance().makeItasoko(t.unixtime,t.jyusyo,t.longitude,t.latitude,t.os,{gas:3e5,value:t.$store.state.web3.web3Instance().toWei(t.amount,"ether"),from:t.$store.state.web3.coinbase},function(n,a){n?console.log(n):(t.time=null,t.jyusyo=null,t.longitude=null,t.latitude=null,t.os=null,e())})})}),t.MakeItasokoModal=!1},displayItasokos:function(t){var e=this;e.Itasokolist=[],l.a.resolve(t).then(function(n){return new l.a(function(n,a){e.$store.state.contractInstance().getItasokoByOwner.call(t,function(t,e){if(!t){for(var a=new Array(e.length),s=0;s<e.length;s++)a[s]=e[s].c[0];n(a)}})})}).then(function(t){return l.a.all([new l.a(function(n,a){for(var s=l.a.resolve(),o=0;o<t.length;o++)!function(n){s=s.then(function(){return new l.a(function(a,s){e.$store.state.contractInstance().Itasokos.call(t[n],function(t,n){if(!t){var s={};s.time=n[0].c[0],s.jyusyo=n[1],s.longitude=n[2].c[0],s.latitude=n[3].c[0],s.os=n[4],e.Itasokolist.push(s),a()}})})})}(o);console.log("表示"),n()})])})}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"piggy"},[t._m(0),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-5"},[n("div",{staticClass:"box",staticStyle:{"text-align":"left"}},[n("h2",{staticClass:"subtitle"},[t._v("現在位置をブロックチェーンに書き込む")]),t._v(" "),n("p",[t._v("Aribuyを記録する")]),t._v(" "),n("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){t.getgps(),t.MakeItasokoModal=!0,t.time=t.unixtodate(t.unixcurrent()/1e3),t.unixtime=t.unixcurrent(),t.os=t.getos()}}},[t._v("記録！")])])]),t._v(" "),n("div",{staticClass:"column is-7"},[n("div",{staticClass:"box"},[n("h2",{staticClass:"subtitle"},[t._v("あなたのAribuy一覧")]),t._v(" "),n("table",{staticClass:"table is-hoverable",staticStyle:{width:"100%","table-lauout":"fixed","word-break":"break-all","word-wrap":"break-all"}},[t._m(1),t._v(" "),t._m(2),t._v(" "),n("tbody",t._l(t.Itasokolist,function(e,a){return n("tr",{key:a},[n("td",[t._v(" "+t._s(t.unixtodate(e.time/1e3))+" ")]),t._v(" "),n("td",[t._v(t._s(e.jyusyo))]),t._v(" "),n("td",[n("a",{staticClass:"button is-info is-outlined",on:{click:function(n){t.dtime=t.unixtodate(e.time/1e3),t.djyusyo=e.jyusyo,t.dlatitude=e.latitude,t.dlongitude=e.longitude,t.dos=e.os,t.DetailItasokoModal=!0}}},[t._v("表示")])])])}))]),t._v(" "),n("a",{staticClass:"button is-info is-outlined",on:{click:function(e){t.displayItasokos(t.web3.coinbase)}}},[t._v("表示")])])])]),t._v(" "),t._m(3)]),t._v(" "),n("b-modal",{attrs:{active:t.MakeItasokoModal},on:{"update:active":function(e){t.MakeItasokoModal=e}}},[n("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[n("header",{staticClass:"modal-card-head"},[t.jyusyo?t._e():n("p",{staticClass:"modal-card-title"},[t._v("現在地を読み込み中です...")]),t._v(" "),t.jyusyo?n("p",{staticClass:"modal-card-title"},[t._v("以下でAribuyを記録しますか？")]):t._e()]),t._v(" "),n("section",{staticClass:"modal-card-body"},[t.jyusyo?t._e():n("p",[t._v("少々お待ちください...")]),t._v(" "),t.jyusyo?n("p",[t._v("時刻:"+t._s(t.time))]):t._e(),t._v(" "),t.jyusyo?n("p",[t._v("unixtime:"+t._s(t.unixtime))]):t._e(),t._v(" "),t.jyusyo?n("p",[t._v("住所:"+t._s(t.jyusyo))]):t._e(),t._v(" "),t.jyusyo?n("p",[t._v("緯度:"+t._s(t.latitude))]):t._e(),t._v(" "),t.jyusyo?n("p",[t._v("経度:"+t._s(t.longitude))]):t._e(),t._v(" "),t.jyusyo?n("p",[t._v("端末OS:"+t._s(t.os))]):t._e()]),t._v(" "),n("footer",{staticClass:"modal-card-foot"},[t.jyusyo?n("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){t.make()}}},[t._v("情報記入")]):t._e(),t._v(" "),n("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){t.MakeItasokoModal=!1}}},[t._v("閉じる")])])])]),t._v(" "),n("b-modal",{attrs:{active:t.DetailItasokoModal},on:{"update:active":function(e){t.DetailItasokoModal=e}}},[n("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v("Itasokoの詳細")])]),t._v(" "),n("section",{staticClass:"modal-card-body"},[n("p",[t._v("時刻:"+t._s(t.dtime))]),t._v(" "),n("p",[t._v("住所:"+t._s(t.djyusyo))]),t._v(" "),n("p",[t._v("緯度:"+t._s(t.dlatitude))]),t._v(" "),n("p",[t._v("経度:"+t._s(t.dlongitude))]),t._v(" "),n("p",[t._v("端末OS:"+t._s(t.dos))])]),t._v(" "),n("footer",{staticClass:"modal-card-foot"},[n("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){t.DetailItasokoModal=!1}}},[t._v("閉じる")])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("section",{staticClass:"hero is-default is-bold"},[e("div",{staticClass:"hero-head"},[e("nav",{staticClass:"navbar"},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-brand"},[e("a",{staticClass:"navbar-item title",attrs:{href:"../"}},[this._v("\n                Aribuy\n              ")]),this._v(" "),e("span",{staticClass:"navbar-burger burger",attrs:{"data-target":"navbarMenu"}},[e("span"),this._v(" "),e("span"),this._v(" "),e("span")])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticStyle:{width:"30%"}},[this._v("時間")]),this._v(" "),e("th",{staticStyle:{width:"55%"}},[this._v("場所")]),this._v(" "),e("th",{staticStyle:{width:"15%"}},[this._v("button")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tfoot",[e("tr",[e("th",[this._v("時間")]),this._v(" "),e("th",[this._v("場所")]),this._v(" "),e("th",[this._v("button")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-6"})])}]};var y=n("VU/8")(d,p,!1,function(t){n("JfbK"),n("Yimm")},"data-v-8961cc7e",null).exports;a.a.use(c.a);var m=new c.a({mode:"history",routes:[{path:"",name:"Top",component:y}]}),b=n("NYxO"),v={web3:{isInjected:!1,web3Instance:null,networkId:null,coinbase:null,balance:null,error:null},contractInstance:null},f=n("woOf"),_=n.n(f),g=n("8k0n"),w=n.n(g),h=new l.a(function(t,e){var n=window.web3;if(void 0!==n){var a=new w.a(n.currentProvider);t({injectedWeb3:a.isConnected(),web3:function(){return a}})}else e(new Error("Unable to connect to Metamask"))}).then(function(t){return new l.a(function(e,n){t.web3().version.getNetwork(function(a,s){a?n(new Error("Unable to retrieve network ID")):(t=_()({},t,{networkId:s}),e(t))})})}).then(function(t){return new l.a(function(e,n){t.web3().eth.getCoinbase(function(a,s){a?n(new Error("Unable to retrieve coinbase")):(t=_()({},t,{coinbase:s}),e(t))})})}).then(function(t){return new l.a(function(e,n){t.web3().eth.getBalance(t.coinbase,function(a,s){a?n(new Error("Unable to retrieve balance for address: "+t.coinbase)):(t=_()({},t,{balance:s}),e(t))})})}),I=function(t){var e=window.web3;e=new w.a(e.currentProvider),setInterval(function(){if(e&&C.state.web3.web3Instance)if(e.eth.coinbase!==C.state.web3.coinbase){var t=e.eth.coinbase;e.eth.getBalance(e.eth.coinbase,function(e,n){e?console.log(e):C.dispatch("pollWeb3",{coinbase:t,balance:parseInt(n,10)})})}else e.eth.getBalance(C.state.web3.coinbase,function(t,e){t?console.log(t):parseInt(e,10)!==C.state.web3.balance&&C.dispatch("pollWeb3",{coinbase:C.state.web3.coinbase,balance:e})})},500)},k=[{constant:!1,inputs:[],name:"nagesen",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_time",type:"uint256"},{name:"_jyusyo",type:"string"},{name:"_latitude",type:"uint256"},{name:"_longitude",type:"uint256"},{name:"_os",type:"string"}],name:"makeItasoko",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"Itasokos",outputs:[{name:"time",type:"uint256"},{name:"jyusyo",type:"string"},{name:"longitude",type:"uint256"},{name:"latitude",type:"uint256"},{name:"os",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"ownerItasokoCount",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"contractowner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"getItasokoByOwner",outputs:[{name:"",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"ItasokoToOwner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"ariId",type:"uint256"}],name:"NewAribuy",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"}],x=new l.a(function(t,e){t(new w.a(window.web3.currentProvider).eth.contract(k).at("0x947f139d8b2d8e98510c639a9a3125e2abd72be4"))});a.a.use(b.a);var C=new b.a.Store({strict:!0,state:v,mutations:{registerWeb3Instance:function(t,e){console.log("registerWeb3instance Mutation being executed",e);var n=e,a=t.web3;a.coinbase=n.coinbase,a.networkId=n.networkId,a.balance=parseInt(n.balance,10),a.isInjected=n.injectedWeb3,a.web3Instance=n.web3,t.web3=a,I()},pollWeb3Instance:function(t,e){console.log("pollWeb3Instance mutation being executed",e),t.web3.coinbase=e.coinbase,t.web3.balance=parseInt(e.balance,10)},registerContractInstance:function(t,e){t.contractInstance=function(){return e}}},actions:{registerWeb3:function(t){var e=t.commit;console.log("registerWeb3 Action being executed"),h.then(function(t){console.log("committing result to registerWeb3Instance mutation"),e("registerWeb3Instance",t)}).catch(function(t){console.log("error in action registerWeb3",t)})},pollWeb3:function(t,e){var n=t.commit;console.log("pollWeb3 action being executed"),n("pollWeb3Instance",e)},getContractInstance:function(t){var e=t.commit;x.then(function(t){e("registerContractInstance",t)}).catch(function(t){return console.log(t)})}}});a.a.config.productionTip=!1,a.a.use(o.a),new a.a({el:"#app",router:m,store:C,components:{App:u},template:"<App/>"})},"R/pS":function(t,e){t.exports=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"name",outputs:[{name:"o_name",type:"bytes32"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"owner",outputs:[{name:"",type:"address"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"content",outputs:[{name:"",type:"bytes32"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"addr",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"reserve",outputs:[],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"subRegistrar",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_newOwner",type:"address"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_registrar",type:"address"}],name:"setSubRegistrar",outputs:[],type:"function"},{constant:!1,inputs:[],name:"Registrar",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_a",type:"address"},{name:"_primary",type:"bool"}],name:"setAddress",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_content",type:"bytes32"}],name:"setContent",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"disown",outputs:[],type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"_name",type:"bytes32"},{indexed:!1,name:"_winner",type:"address"}],name:"AuctionEnded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_name",type:"bytes32"},{indexed:!1,name:"_bidder",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"NewBid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"}],name:"Changed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"},{indexed:!0,name:"addr",type:"address"}],name:"PrimaryChanged",type:"event"}]},UIsv:function(t,e){t.exports=[{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"owner",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_refund",type:"address"}],name:"disown",outputs:[],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"addr",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"reserve",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_newOwner",type:"address"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_a",type:"address"}],name:"setAddr",outputs:[],type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"}],name:"Changed",type:"event"}]},Yimm:function(t,e){},doPI:function(t,e){},oPsS:function(t,e){t.exports=[{constant:!1,inputs:[{name:"from",type:"bytes32"},{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"from",type:"bytes32"},{name:"to",type:"address"},{name:"indirectId",type:"bytes32"},{name:"value",type:"uint256"}],name:"icapTransfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"to",type:"bytes32"}],name:"deposit",outputs:[],payable:!0,type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"AnonymousDeposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"bytes32"},{indexed:!1,name:"value",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"bytes32"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"bytes32"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"indirectId",type:"bytes32"},{indexed:!1,name:"value",type:"uint256"}],name:"IcapTransfer",type:"event"}]},syO8:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.50cf805cced2082855dc.js.map
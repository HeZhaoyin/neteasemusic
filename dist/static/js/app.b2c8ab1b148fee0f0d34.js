webpackJsonp([1],[,,,,,,,,,,,,,,,,,function(t,n,s){"use strict";var i="http://musicapi.duapp.com/api.php";n.a={getMusicListUrl:function(t,n,s){return i+"?type=topPlayList&cat="+t+"&offset="+n+"&limit="+s},getMusicDetailList:function(t){return"https://api.imjad.cn/cloudmusic?type=playlist&id="+t},getSong:function(t){return i+"?type=url&id="+t}}},,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,s){t.exports=s.p+"static/img/banner11.3a409d7.jpg"},function(t,n,s){t.exports=s.p+"static/img/banner44.8d343ad.jpg"},,function(t,n,s){"use strict";var i=s(80),e=s.n(i),a=s(25),r=s.n(a);r.a.defaults.timeout=5e3,r.a.interceptors.response.use(function(t){return 654===t.status&&window.alert("请求超时！"),200!==t.data.code?(window.alert("数据返回有误"),e.a.reject(t)):t},function(t){return console.log("promise error:"+t),e.a.reject(t)}),n.a=r.a},function(t,n,s){"use strict";var i=s(15),e=s(156),a=s(144),r=s.n(a),c=s(139),o=s.n(c),l=s(141),u=s.n(l),v=s(142),p=s.n(v),f=s(143),d=s.n(f);i.a.use(e.a),n.a=new e.a({routes:[{path:"/search",component:r.a,redirect:"/search/character",children:[{path:"character",component:o.a},{path:"musicList",component:u.a},{path:"radio",component:p.a},{path:"ranking",component:d.a}]},{path:"",redirect:"/search"}]})},function(t,n,s){"use strict";var i=s(15),e=s(9),a=s(25),r=s.n(a),c=s(17);i.a.use(e.b);var o=new e.b.Store({state:{showMusicList:!1,showPlayer:!1,isPlaying:!1,musicList:[],playList:[],playCurrentIndex:0,audio:{id:"",name:"歌曲名称",author:"歌手",coverSrc:"../../static/img/a91.png"}},getters:{showMusicList:function(t){return t.showMusicList}},mutations:{changeShowList:function(t){t.showMusicList=!t.showMusicList},changeShowPlayer:function(t){t.showPlayer=!t.showPlayer},setMusicList:function(t,n){t.musicList=n},play:function(t){t.isPlaying=!0},pause:function(t){t.isPlaying=!1},setAudio:function(t){t.audio=t.playList[t.playCurrentIndex]},addToPlayList:function(t,n){for(var s={id:n.id,name:n.name,author:n.ar[0].name,coverSrc:n.al.picUrl},i=!1,e=0;e<t.playList.length;e++)s.id==t.playList[e].id&&(i=!0,t.playCurrentIndex=e);i||(t.playList.push(s),t.playCurrentIndex=t.playList.length-1)},prev:function(t){t.playCurrentIndex--,t.playCurrentIndex<0&&(t.playCurrentIndex=t.playList.length-1),console.log(t.playCurrentIndex),console.log(t.playList),t.audio=t.playList[t.playCurrentIndex]},next:function(t){t.playCurrentIndex++,t.playCurrentIndex>t.playList.length-1&&(t.playCurrentIndex=0),t.audio=t.playList[t.playCurrentIndex]}},actions:{getSong:function(t,n){var s=t.commit,i=t.state;console.log("开始获取数据"),r.a.get(c.a.getSong(n)).then(function(t){console.log("获取数据成功"),s("setAudio"),i.audio.musicSrc=t.data.data[0].url})}}});n.a=o},function(t,n){},function(t,n,s){s(127);var i=s(2)(s(68),s(154),null,null);t.exports=i.exports},,,,,,,,,,,,,,,,,,function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=s(137),e=s.n(i),a=s(136),r=s.n(a),c=s(9),o=s(135),l=s.n(o);n.default={name:"app",components:{searchHeader:l.a,musicPlayer:e.a,musicMenu:r.a},computed:s.i(c.a)(["showMusicList","showPlayer"])}},function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{}},methods:{changeShowPlayer:function(){this.$store.commit("changeShowPlayer")}}}},function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=s(9),e=s(17),a=s(82),r=s.n(a);n.default={data:function(){return{list:[],opacity:0}},mounted:function(){var t=this;this.$nextTick(function(){t.getList()})},computed:s.i(i.a)(["musicList"]),methods:{changeShowPlayer:function(){this.$store.commit("changeShowPlayer")},hide:function(){this.$store.commit("changeShowList")},getList:function(){var t=this;this.musicList.id&&this.$http.get(e.a.getMusicDetailList(this.musicList.id)).then(function(n){t.list=n.data.playlist.tracks,t.$nextTick(function(){t.initScroll()})})},initScroll:function(){var t=this;this.menuScroll?this.menuScroll.refresh():(this.menuScroll=new r.a(this.$refs.menuWrapper,{probeType:3,click:!0,startX:0,startY:0}),this.menuScroll.on("scroll",function(n){t.opacity=-n.y/300}))},addToPlayList:function(t){var n=document.getElementById("player");this.$store.commit("addToPlayList",t),this.$store.commit("changeShowPlayer"),this.$store.dispatch("getSong",t.id),n.play()}}}},function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=s(9);n.default={data:function(){return{musicSrc:""}},mounted:function(){this.$nextTick(function(){})},methods:{changeShowPlayer:function(){this.$store.commit("changeShowPlayer")},play:function(){this.$store.commit("play"),this.$refs.player.play()},pause:function(){this.$store.commit("pause"),this.$refs.player.pause()},canPlay:function(){this.$store.commit("play"),this.$refs.player.play()},prev:function(){this.$store.commit("prev")},next:function(){this.$store.commit("next")}},computed:s.i(i.a)(["audio","isPlaying","playList"])}},function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{index:1,distance:0,startX:0,endX:0,isTrans:!0,timer:null}},mounted:function(){var t=this;this.$nextTick(function(){t.setOl(),t.timer=setInterval(t.autoPlay,2e3),t.$refs.bannerUl.addEventListener("webkitTransitionEnd",function(){t.index>=5?(t.isTrans=!1,t.index=1):t.index<=0&&(t.isTrans=!1,t.index=4),t.play(100*-t.index),t.setOl()})})},methods:{setOl:function(){for(var t=this.$refs.bannerOl.children,n=0;n<t.length;n++)t[n].className="";this.$refs.bannerOl.children[this.index-1].className="current"},autoPlay:function(){this.isTrans=!0,this.index++,this.play(100*-this.index)},play:function(t){this.$refs.bannerUl&&(this.$refs.bannerUl.style.transform="translate("+t+"vw)")},start:function(t){this.startX=t.touches[0].clientX},move:function(t){clearInterval(this.timer),this.isTrans=!1,this.distance=t.touches[0].clientX-this.startX,this.play(100*-this.index+this.distance/375*100)},end:function(){this.distance>0?this.index--:this.index++,this.isTrans=!0,this.play(100*-this.index),this.timer=setInterval(this.autoPlay,2e3)}}}},function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=s(138),e=s.n(i),a=s(140),r=s.n(a);n.default={components:{banner:e.a,myMusicList:r.a}}},function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=s(17);s(9);n.default={data:function(){return{list:[]}},mounted:function(){var t=this;this.$nextTick(function(){t.getList()})},methods:{getList:function(){var t=this;this.$http.get(i.a.getMusicListUrl("全部","0","6")).then(function(n){t.list=n.data.playlists})},goMenu:function(t){this.$store.commit("changeShowList"),this.$store.commit("setMusicList",t)}},components:{}}},function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={}},function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={}},function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={}},function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"search",data:function(){return{}},components:{}}},function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=s(15),e=s(50),a=s.n(e),r=s(47),c=s(49),o=(s.n(c),s(48)),l=s(46);i.a.prototype.$http=l.a,i.a.config.productionTip=!1,new i.a({el:"#app",store:o.a,router:r.a,template:"<App/>",components:{App:a.a}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},,,function(t,n,s){t.exports=s.p+"static/img/banner22.b393750.jpg"},function(t,n,s){t.exports=s.p+"static/img/banner33.69ffd9b.jpg"},function(t,n,s){t.exports=s.p+"static/img/a9o.99bfb20.png"},function(t,n,s){t.exports=s.p+"static/img/stick.068c272.png"},function(t,n,s){s(125);var i=s(2)(s(69),s(152),"data-v-600fd0f4",null);t.exports=i.exports},function(t,n,s){s(124);var i=s(2)(s(70),s(151),"data-v-555ebd0d",null);t.exports=i.exports},function(t,n,s){s(123);var i=s(2)(s(71),s(150),"data-v-4e0ae40f",null);t.exports=i.exports},function(t,n,s){s(128);var i=s(2)(s(72),s(155),"data-v-c29f1bfc",null);t.exports=i.exports},function(t,n,s){s(122);var i=s(2)(s(73),s(149),"data-v-2f776a43",null);t.exports=i.exports},function(t,n,s){s(119);var i=s(2)(s(74),s(146),"data-v-17cd089e",null);t.exports=i.exports},function(t,n,s){s(126);var i=s(2)(s(75),s(153),null,null);t.exports=i.exports},function(t,n,s){s(121);var i=s(2)(s(76),s(148),null,null);t.exports=i.exports},function(t,n,s){s(118);var i=s(2)(s(77),s(145),null,null);t.exports=i.exports},function(t,n,s){s(120);var i=s(2)(s(78),s(147),"data-v-1dc1b450",null);t.exports=i.exports},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{},[t._v("\n\ti'm ranking\n")])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"my-music-list"},[t._m(0),t._v(" "),s("div",{staticClass:"list"},[s("ul",t._l(t.list,function(n){return s("li",{on:{click:function(s){t.goMenu(n)}}},[s("span",{staticClass:"count-listen"},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(n.playCount))]),t._v(" "),s("img",{attrs:{src:n.coverImgUrl+"?param=300y300",alt:""}}),t._v(" "),s("p",[t._v(t._s(n.name))])])}))])])},staticRenderFns:[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"title"},[s("span",[t._v("推荐歌单")]),t._v(" "),s("span",{staticClass:"flag"},[t._v(">")])])}]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{},[s("div",{staticClass:"search-nav"},[s("ul",[s("li",[s("router-link",{attrs:{to:"/search/character"}},[t._v("个性推荐"),s("transition",{attrs:{name:"fadein"}},[s("span")])],1)],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/search/musicList"}},[t._v("歌单"),s("transition",{attrs:{name:"fadein"}},[s("span")])],1)],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/search/radio"}},[t._v("主播电台"),s("transition",{attrs:{name:"fadein"}},[s("span")])],1)],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/search/ranking"}},[t._v("排行榜"),s("transition",{attrs:{name:"fadein"}},[s("span")])],1)],1)])]),t._v(" "),s("keep-alive",[s("router-view")],1)],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{},[t._v("\n\t我是radio\n")])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"chara-main"},[s("banner"),t._v(" "),t._m(0),t._v(" "),s("myMusicList"),t._v(" "),s("div",{staticClass:"footer"})],1)},staticRenderFns:[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"center-nav"},[s("div",[s("span",[s("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),s("p",[t._v("私人FM")])]),t._v(" "),s("div",[s("span",[s("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),s("p",[t._v("每日歌曲推荐")])]),t._v(" "),s("div",[s("span",[s("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),s("p",[t._v("云音乐热歌榜")])])])}]}},function(t,n,s){t.exports={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"music-player"},[i("div",{staticClass:"player-header"},[i("span",{staticClass:"back",on:{click:t.changeShowPlayer}},[i("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),i("div",{staticClass:"title"},[i("p",{staticClass:"music-name"},[t._v(t._s(t.audio.name))]),t._v(" "),i("p",{staticClass:"music-author"},[t._v(t._s(t.audio.author))])]),t._v(" "),t._m(0)]),t._v(" "),i("div",{staticClass:"main"},[i("img",{staticClass:"stick",class:{"stick-no-play":t.isPlaying},attrs:{src:s(134),alt:""}})]),t._v(" "),i("div",{staticClass:"cd"},[i("img",{staticClass:"cd-circle",class:{roll:t.isPlaying},attrs:{src:s(133),alt:""}}),t._v(" "),i("img",{staticClass:"cd-main",class:{roll:t.isPlaying},attrs:{src:t.audio.coverSrc+"?param=300y300",alt:""}})]),t._v(" "),i("audio",{ref:"player",attrs:{id:"player",control:"true",src:t.audio.musicSrc},on:{canplay:t.canPlay}}),t._v(" "),i("div",{staticClass:"control"},[t._m(1),t._v(" "),i("span",{on:{click:t.prev}},[i("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),t.isPlaying?i("span",{staticClass:"control-main",on:{click:t.pause}},[i("i",{staticClass:"iconfont"},[t._v("")])]):i("span",{staticClass:"control-main control-play",on:{click:t.play}},[i("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),i("span",{on:{click:t.next}},[i("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),t._m(2)])])},staticRenderFns:[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("span",[s("i",{staticClass:"iconfont"},[t._v("")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("span",[s("i",{staticClass:"iconfont"},[t._v("")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("span",[s("i",{staticClass:"iconfont"},[t._v("")])])}]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"music-menu",attrs:{id:"mymenu"}},[s("div",{staticClass:"header",style:{background:"rgba(192,192,192,"+t.opacity+")"}},[s("span",{staticClass:"back",on:{click:t.hide}},[s("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),s("span",{staticClass:"header-title"},[t._v("歌单")]),t._v(" "),s("span",{on:{click:t.changeShowPlayer}},[s("i",{staticClass:"iconfont"},[t._v("")])])]),t._v(" "),s("div",{ref:"menuWrapper",staticClass:"warpper"},[s("div",[s("div",{staticClass:"main",attrs:{id:"mymain"}},[s("div",{staticClass:"cover-main"},[s("img",{staticClass:"cover",attrs:{src:t.musicList.coverImgUrl+"?param=300y300",alt:""}}),t._v(" "),s("span",{staticClass:"count-listen"},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(t.musicList.playCount))])]),t._v(" "),s("p",{staticClass:"title"},[t._v(t._s(t.musicList.name))]),t._v(" "),s("p",{staticClass:"creator"},[s("img",{staticClass:"creator-avatar",attrs:{src:t.musicList.creator.avatarUrl+"?param=70y70",alt:""}}),t._v(t._s(t.musicList.creator.nickname))])]),t._v(" "),s("div",{staticClass:"list",attrs:{id:"mylist"}},[s("ul",t._l(t.list,function(n,i){return s("li",{on:{click:function(s){t.addToPlayList(n)}}},[s("span",{staticClass:"index"},[t._v(t._s(i+1))]),t._v(" "),s("div",{staticClass:"music-info"},[s("p",{staticClass:"music-name"},[t._v(t._s(n.name))]),t._v(" "),s("p",{staticClass:"music-author"},[s("span",[t._v(t._s(n.ar[0].name))]),t._v(" - "),s("span",[t._v(t._s(n.al.name))])])])])}))])])]),t._v(" "),s("div",{staticClass:"mask-bg",style:{backgroundImage:"url("+t.musicList.coverImgUrl+"?param=300y300)"}})])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",[s("div",{staticClass:"header"},[t._m(0),t._v(" "),s("span",{on:{click:t.changeShowPlayer}},[s("i",{staticClass:"iconfont"},[t._v("")])])])])},staticRenderFns:[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("span",[s("i",{staticClass:"iconfont"},[t._v("")])])}]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{},[t._v("\n\t我是musicList\n")])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{attrs:{id:"app"}},[s("transition",{attrs:{name:"movein"}},[s("musicPlayer",{directives:[{name:"show",rawName:"v-show",value:t.showPlayer,expression:"showPlayer"}]})],1),t._v(" "),s("transition",{attrs:{name:"movein"}},[t.showMusicList?s("musicMenu"):t._e()],1),t._v(" "),s("searchHeader"),t._v(" "),s("router-view"),t._v(" "),s("div",{staticClass:"nav-main"},[s("ul",[s("li",{staticClass:"current"},[s("router-link",{attrs:{to:"/search"}},[s("p",[s("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),s("span",[t._v("发现音乐")])])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/myMusic"}},[s("p",[s("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),s("span",[t._v("我的音乐")])])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/friends"}},[s("p",[s("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),s("span",[t._v("朋友")])])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/user"}},[s("p",[s("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),s("span",[t._v("账号")])])],1)])])],1)},staticRenderFns:[]}},function(t,n,s){t.exports={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"banner"},[s("ul",{ref:"bannerUl",class:{trans:t.isTrans},on:{touchmove:function(n){n.preventDefault(),t.move(n)},touchstart:function(n){n.preventDefault(),t.start(n)},touchend:function(n){n.preventDefault(),t.end(n)}}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)]),t._v(" "),s("ol",{ref:"bannerOl"},[s("li"),t._v(" "),s("li"),t._v(" "),s("li"),t._v(" "),s("li")])])},staticRenderFns:[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("li",[i("img",{attrs:{src:s(44),alt:""}})])},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("li",[i("img",{attrs:{src:s(43),alt:""}})])},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("li",[i("img",{attrs:{src:s(131),alt:""}})])},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("li",[i("img",{attrs:{src:s(132),alt:""}})])},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("li",[i("img",{attrs:{src:s(44),alt:""}})])},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("li",[i("img",{attrs:{src:s(43),alt:""}})])}]}}],[79]);
//# sourceMappingURL=app.b2c8ab1b148fee0f0d34.js.map
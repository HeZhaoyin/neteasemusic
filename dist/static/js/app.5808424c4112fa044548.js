webpackJsonp([1],[,,,,,,,,,,function(t,s,n){"use strict";var i="http://musicapi.duapp.com/api.php";s.a={getMusicListUrl:function(t,s,n){return i+"?type=topPlayList&cat="+t+"&offset="+s+"&limit="+n},getMusicDetailList:function(t){return"https://api.imjad.cn/cloudmusic?type=playlist&id="+t},getSong:function(t){return i+"?type=url&id="+t}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,s,n){t.exports=n.p+"static/img/banner11.3a409d7.jpg"},function(t,s,n){t.exports=n.p+"static/img/banner44.8d343ad.jpg"},,function(t,s,n){"use strict";var i=n(82),e=n.n(i),a=n(26),r=n.n(a);r.a.defaults.timeout=5e3,r.a.interceptors.response.use(function(t){return 654===t.status&&window.alert("请求超时！"),200!==t.data.code?(window.alert("数据返回有误"),e.a.reject(t)):t},function(t){return console.log("promise error:"+t),e.a.reject(t)}),s.a=r.a},function(t,s,n){"use strict";var i=n(16),e=n(160),a=n(147),r=n.n(a),c=n(142),o=n.n(c),l=n(144),u=n.n(l),d=n(145),v=n.n(d),p=n(146),f=n.n(p);i.a.use(e.a),s.a=new e.a({routes:[{path:"/search",component:r.a,redirect:"/search/character",children:[{path:"character",component:o.a},{path:"musicList",component:u.a},{path:"radio",component:v.a},{path:"ranking",component:f.a}]},{path:"",redirect:"/search"}]})},function(t,s,n){"use strict";var i=n(16),e=n(6),a=n(26),r=n.n(a),c=n(10);i.a.use(e.b);var o=new e.b.Store({state:{showMusicList:!1,showPlayer:!1,showPlayerList:!1,isPlaying:!1,musicList:[],playList:[],playCurrentIndex:0,audio:{id:"",name:"歌曲名称",author:"歌手",coverSrc:"../../static/img/a91.png"}},getters:{showMusicList:function(t){return t.showMusicList}},mutations:{changeShowList:function(t){t.showMusicList=!t.showMusicList},changeShowPlayer:function(t){t.showPlayer=!t.showPlayer},changeShowPlayerList:function(t){t.showPlayerList=!t.showPlayerList},setMusicList:function(t,s){t.musicList=s},setPlayCurrentIndex:function(t,s){t.playCurrentIndex=s},play:function(t){t.isPlaying=!0},pause:function(t){t.isPlaying=!1},setAudio:function(t){t.audio=t.playList[t.playCurrentIndex]},addToPlayList:function(t,s){for(var n={id:s.id,name:s.name,author:s.ar[0].name,coverSrc:s.al.picUrl},i=!1,e=0;e<t.playList.length;e++)n.id==t.playList[e].id&&(i=!0,t.playCurrentIndex=e);i||(t.playList.push(n),t.playCurrentIndex=t.playList.length-1)},prev:function(t){t.playCurrentIndex--,t.playCurrentIndex<0&&(t.playCurrentIndex=t.playList.length-1),console.log(t.playCurrentIndex),console.log(t.playList),t.audio=t.playList[t.playCurrentIndex]},next:function(t){t.playCurrentIndex++,t.playCurrentIndex>t.playList.length-1&&(t.playCurrentIndex=0),t.audio=t.playList[t.playCurrentIndex]}},actions:{getSong:function(t,s){var n=t.commit,i=t.state;console.log("开始获取数据"),r.a.get(c.a.getSong(s)).then(function(t){console.log("获取数据成功"),n("setAudio"),i.audio.musicSrc=t.data.data[0].url,document.getElementById("player").play()})}}});s.a=o},function(t,s){},function(t,s,n){n(128);var i=n(1)(n(69),n(157),null,null);t.exports=i.exports},,,,,,,,,,,,,,,,,,function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=n(139),e=n.n(i),a=n(138),r=n.n(a),c=n(6),o=n(137),l=n.n(o);s.default={name:"app",components:{searchHeader:l.a,musicPlayer:e.a,musicMenu:r.a},computed:n.i(c.a)(["showMusicList","showPlayer"])}},function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{}},methods:{changeShowPlayer:function(){this.$store.commit("changeShowPlayer")}}}},function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=n(6),e=n(10),a=n(18),r=n.n(a);s.default={data:function(){return{list:[],opacity:0,headerTitle:"歌单"}},mounted:function(){var t=this;this.$nextTick(function(){t.getList()})},computed:n.i(i.a)(["musicList"]),methods:{changeShowPlayer:function(){this.$store.commit("changeShowPlayer")},hide:function(){this.$store.commit("changeShowList")},getList:function(){var t=this;this.musicList.id&&this.$http.get(e.a.getMusicDetailList(this.musicList.id)).then(function(s){t.list=s.data.playlist.tracks,t.$nextTick(function(){t.initScroll()})})},initScroll:function(){var t=this;this.menuScroll?this.menuScroll.refresh():(this.menuScroll=new r.a(this.$refs.menuWrapper,{probeType:3,click:!0,startX:0,startY:0}),this.menuScroll.on("scroll",function(s){t.opacity=-s.y/300,-s.y>200?t.headerTitle=t.musicList.name:t.headerTitle="歌单"}))},addToPlayList:function(t){this.$store.commit("addToPlayList",t),this.$store.commit("changeShowPlayer"),this.$store.dispatch("getSong",t.id)}}}},function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=n(6),e=n(140),a=n.n(e);s.default={data:function(){return{musicSrc:""}},mounted:function(){this.$nextTick(function(){})},methods:{changeShowPlayer:function(){this.$store.commit("changeShowPlayer")},play:function(){this.$store.commit("play"),this.$refs.player.play()},pause:function(){this.$store.commit("pause"),this.$refs.player.pause()},canPlay:function(){this.$store.commit("play"),this.$refs.player.play()},prev:function(){this.$store.commit("prev")},next:function(){this.$store.commit("next")},changeShowPlayerList:function(){this.$store.commit("changeShowPlayerList")}},components:{playerList:a.a},computed:n.i(i.a)(["audio","isPlaying","playList","showPlayerList"])}},function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=n(6),e=n(18),a=n.n(e);s.default={computed:n.i(i.a)(["showPlayerList","playList","playCurrentIndex"]),mounted:function(){var t=this;this.$nextTick(function(){t.initScroll()})},methods:{initScroll:function(){this.menuScroll?this.menuScroll.refresh():this.menuScroll=new a.a(this.$refs.menuWrapper,{probeType:3,click:!0,startX:0,startY:0})},changeShowPlayerList:function(){this.$store.commit("changeShowPlayerList")},changePlayCurrent:function(t){this.$store.commit("setPlayCurrentIndex",t),this.$store.commit("setAudio")}}}},function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{index:1,distance:0,startX:0,endX:0,isTrans:!0,timer:null}},mounted:function(){var t=this;this.$nextTick(function(){t.setOl(),t.timer=setInterval(t.autoPlay,2e3),t.$refs.bannerUl.addEventListener("webkitTransitionEnd",function(){t.index>=5?(t.isTrans=!1,t.index=1):t.index<=0&&(t.isTrans=!1,t.index=4),t.play(100*-t.index),t.setOl()})})},methods:{setOl:function(){for(var t=this.$refs.bannerOl.children,s=0;s<t.length;s++)t[s].className="";this.$refs.bannerOl.children[this.index-1].className="current"},autoPlay:function(){this.isTrans=!0,this.index++,this.play(100*-this.index)},play:function(t){this.$refs.bannerUl&&(this.$refs.bannerUl.style.transform="translate("+t+"vw)")},start:function(t){clearInterval(this.timer),this.startX=t.touches[0].clientX},move:function(t){this.isTrans=!1,this.distance=t.touches[0].clientX-this.startX,this.play(100*-this.index+this.distance/375*100)},end:function(){if(document.body.clientWidth)var t=document.body.clientWidth;else if(document.documentElement.clientWidth)var t=document.documentElement.clientWidth;this.distance>.3*t?this.index--:this.distance<.3*-t&&this.index++,this.isTrans=!0,this.play(100*-this.index),this.timer=setInterval(this.autoPlay,2e3),this.distance=0}}}},function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=n(141),e=n.n(i),a=n(143),r=n.n(a);s.default={components:{banner:e.a,myMusicList:r.a}}},function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=n(10);n(6);s.default={data:function(){return{list:[]}},mounted:function(){var t=this;this.$nextTick(function(){t.getList()})},methods:{getList:function(){var t=this;this.$http.get(i.a.getMusicListUrl("全部","0","6")).then(function(s){t.list=s.data.playlists})},goMenu:function(t){this.$store.commit("changeShowList"),this.$store.commit("setMusicList",t)}},components:{}}},function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=n(10),e=n(18),a=n.n(e);s.default={data:function(){return{list:[],listIndex:0,isLoading:!0}},mounted:function(){var t=this;this.$nextTick(function(){t.getList()})},methods:{initScroll:function(){var t=this;this.menuScroll?this.menuScroll.refresh():(this.menuScroll=new a.a(this.$refs.menuWrapper,{probeType:3,click:!0,startX:0,startY:0}),this.menuScroll.on("scroll",function(s){s.y<t.menuScroll.maxScrollY-50&&(t.isLoading||(t.listIndex+=6,t.getList(),t.isLoading=!0))}))},getList:function(){var t=this;this.$http.get(i.a.getMusicListUrl("全部",this.listIndex,"6")).then(function(s){for(var n=0;n<s.data.playlists.length;n++)t.list.push(s.data.playlists[n]);t.$nextTick(function(){t.isLoading=!1,t.initScroll()})})},goMenu:function(t){this.$store.commit("changeShowList"),this.$store.commit("setMusicList",t)}}}},function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={}},function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={}},function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"search",data:function(){return{}},components:{}}},function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=n(16),e=n(51),a=n.n(e),r=n(48),c=n(50),o=(n.n(c),n(49)),l=n(47);i.a.prototype.$http=l.a,i.a.config.productionTip=!1,new i.a({el:"#app",store:o.a,router:r.a,template:"<App/>",components:{App:a.a}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,,function(t,s,n){t.exports=n.p+"static/img/banner22.b393750.jpg"},function(t,s,n){t.exports=n.p+"static/img/banner33.69ffd9b.jpg"},function(t,s,n){t.exports=n.p+"static/img/a9o.99bfb20.png"},function(t,s,n){t.exports=n.p+"static/img/stick.068c272.png"},function(t,s,n){n(126);var i=n(1)(n(70),n(155),"data-v-600fd0f4",null);t.exports=i.exports},function(t,s,n){n(125);var i=n(1)(n(71),n(154),"data-v-555ebd0d",null);t.exports=i.exports},function(t,s,n){n(124);var i=n(1)(n(72),n(153),"data-v-4e0ae40f",null);t.exports=i.exports},function(t,s,n){n(130);var i=n(1)(n(73),n(159),"data-v-f2e205f4",null);t.exports=i.exports},function(t,s,n){n(129);var i=n(1)(n(74),n(158),"data-v-c29f1bfc",null);t.exports=i.exports},function(t,s,n){n(123);var i=n(1)(n(75),n(152),"data-v-2f776a43",null);t.exports=i.exports},function(t,s,n){n(120);var i=n(1)(n(76),n(149),"data-v-17cd089e",null);t.exports=i.exports},function(t,s,n){n(127);var i=n(1)(n(77),n(156),"data-v-68ed0a37",null);t.exports=i.exports},function(t,s,n){n(122);var i=n(1)(n(78),n(151),null,null);t.exports=i.exports},function(t,s,n){n(119);var i=n(1)(n(79),n(148),null,null);t.exports=i.exports},function(t,s,n){n(121);var i=n(1)(n(80),n(150),"data-v-1dc1b450",null);t.exports=i.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{},[t._v("\n\ti'm ranking\n")])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"my-music-list"},[t._m(0),t._v(" "),n("div",{staticClass:"list"},[n("ul",t._l(t.list,function(s){return n("li",{on:{click:function(n){t.goMenu(s)}}},[n("span",{staticClass:"count-listen"},[n("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(s.playCount))]),t._v(" "),n("img",{attrs:{src:s.coverImgUrl+"?param=300y300",alt:""}}),t._v(" "),n("p",[t._v(t._s(s.name))])])}))])])},staticRenderFns:[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"title"},[n("span",[t._v("推荐歌单")]),t._v(" "),n("span",{staticClass:"flag"},[t._v(">")])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{},[n("div",{staticClass:"search-nav"},[n("ul",[n("li",[n("router-link",{attrs:{to:"/search/character"}},[t._v("个性推荐"),n("transition",{attrs:{name:"fadein"}},[n("span")])],1)],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/search/musicList"}},[t._v("歌单"),n("transition",{attrs:{name:"fadein"}},[n("span")])],1)],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/search/radio"}},[t._v("主播电台"),n("transition",{attrs:{name:"fadein"}},[n("span")])],1)],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/search/ranking"}},[t._v("排行榜"),n("transition",{attrs:{name:"fadein"}},[n("span")])],1)],1)])]),t._v(" "),n("keep-alive",[n("router-view")],1)],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{},[t._v("\n\t我是radio\n")])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"chara-main"},[n("banner"),t._v(" "),t._m(0),t._v(" "),n("myMusicList"),t._v(" "),n("div",{staticClass:"footer"})],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"center-nav"},[n("div",[n("span",[n("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),n("p",[t._v("私人FM")])]),t._v(" "),n("div",[n("span",[n("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),n("p",[t._v("每日歌曲推荐")])]),t._v(" "),n("div",[n("span",[n("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),n("p",[t._v("云音乐热歌榜")])])])}]}},function(t,s,n){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"music-player"},[i("div",{staticClass:"player-header"},[i("span",{staticClass:"back",on:{click:t.changeShowPlayer}},[i("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),i("div",{staticClass:"title"},[i("p",{staticClass:"music-name"},[t._v(t._s(t.audio.name))]),t._v(" "),i("p",{staticClass:"music-author"},[t._v(t._s(t.audio.author))])]),t._v(" "),t._m(0)]),t._v(" "),i("div",{staticClass:"main"},[i("img",{staticClass:"stick",class:{"stick-no-play":t.isPlaying},attrs:{src:n(136),alt:""}})]),t._v(" "),i("div",{staticClass:"cd"},[i("img",{staticClass:"cd-circle",class:{roll:t.isPlaying},attrs:{src:n(135),alt:""}}),t._v(" "),i("img",{staticClass:"cd-main",class:{roll:t.isPlaying},attrs:{src:t.audio.coverSrc+"?param=300y300",alt:""}})]),t._v(" "),i("audio",{ref:"player",attrs:{id:"player",control:"true",src:t.audio.musicSrc},on:{canplay:t.canPlay}}),t._v(" "),i("div",{staticClass:"control"},[t._m(1),t._v(" "),i("span",{on:{click:t.prev}},[i("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),t.isPlaying?i("span",{staticClass:"control-main",on:{click:t.pause}},[i("i",{staticClass:"iconfont"},[t._v("")])]):i("span",{staticClass:"control-main control-play",on:{click:t.play}},[i("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),i("span",{on:{click:t.next}},[i("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),i("span",{on:{click:t.changeShowPlayerList}},[i("i",{staticClass:"iconfont"},[t._v("")])])]),t._v(" "),i("div",{staticClass:"mask-bg"}),t._v(" "),i("div",{staticClass:"mask-img",style:{backgroundImage:"url("+t.audio.coverSrc+"?param=300y300)"}}),t._v(" "),i("transition",{attrs:{name:"fade"}},[t.showPlayerList?i("div",{staticClass:"play-list-mask",on:{click:t.changeShowPlayerList}}):t._e()]),t._v(" "),i("transition",{attrs:{name:"slide"}},[t.showPlayerList?i("playerList"):t._e()],1)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("span",[n("i",{staticClass:"iconfont"},[t._v("")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("span",[n("i",{staticClass:"iconfont"},[t._v("")])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"music-menu",attrs:{id:"mymenu"}},[n("div",{staticClass:"header",style:{background:"rgba(192,192,192,"+t.opacity+")"}},[n("span",{staticClass:"back",on:{click:t.hide}},[n("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),n("span",{staticClass:"header-title"},[t._v(t._s(t.headerTitle))]),t._v(" "),n("span",{on:{click:t.changeShowPlayer}},[n("i",{staticClass:"iconfont"},[t._v("")])])]),t._v(" "),n("div",{ref:"menuWrapper",staticClass:"warpper"},[n("div",[n("div",{staticClass:"main",attrs:{id:"mymain"}},[n("div",{staticClass:"cover-main"},[n("img",{staticClass:"cover",attrs:{src:t.musicList.coverImgUrl+"?param=300y300",alt:""}}),t._v(" "),n("span",{staticClass:"count-listen"},[n("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(t.musicList.playCount))])]),t._v(" "),n("p",{staticClass:"title"},[t._v(t._s(t.musicList.name))]),t._v(" "),n("p",{staticClass:"creator"},[n("img",{staticClass:"creator-avatar",attrs:{src:t.musicList.creator.avatarUrl+"?param=70y70",alt:""}}),t._v(t._s(t.musicList.creator.nickname))])]),t._v(" "),n("div",{staticClass:"list",attrs:{id:"mylist"}},[n("ul",t._l(t.list,function(s,i){return n("li",{on:{click:function(n){t.addToPlayList(s)}}},[n("span",{staticClass:"index"},[t._v(t._s(i+1))]),t._v(" "),n("div",{staticClass:"music-info"},[n("p",{staticClass:"music-name"},[t._v(t._s(s.name))]),t._v(" "),n("p",{staticClass:"music-author"},[n("span",[t._v(t._s(s.ar[0].name))]),t._v(" - "),n("span",[t._v(t._s(s.al.name))])])])])}))])])]),t._v(" "),n("div",{staticClass:"mask-bg",style:{backgroundImage:"url("+t.musicList.coverImgUrl+"?param=300y300)"}})])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[n("div",{staticClass:"header"},[t._m(0),t._v(" "),n("span",{on:{click:t.changeShowPlayer}},[n("i",{staticClass:"iconfont"},[t._v("")])])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("span",[n("i",{staticClass:"iconfont"},[t._v("")])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{ref:"menuWrapper",staticClass:"warpper"},[n("div",[n("ul",t._l(t.list,function(s){return n("li",{on:{click:function(n){t.goMenu(s)}}},[n("div",{staticClass:"cover"},[n("img",{attrs:{src:s.coverImgUrl+"?param=300y300",alt:""}}),t._v(" "),n("span",{staticClass:"listen-count"},[n("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(s.playCount))]),t._v(" "),n("span",{staticClass:"author"},[n("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(s.creator.nickname))])]),t._v(" "),n("p",[t._v(t._s(s.name))])])})),t._v(" "),n("div",{staticClass:"footer"},[t.isLoading?n("span",[n("i",{staticClass:"iconfont"},[t._v("")]),t._v("加载中....")]):n("span",[t._v("上拉加载")])])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"movein"}},[n("musicPlayer",{directives:[{name:"show",rawName:"v-show",value:t.showPlayer,expression:"showPlayer"}]})],1),t._v(" "),n("transition",{attrs:{name:"movein"}},[t.showMusicList?n("musicMenu"):t._e()],1),t._v(" "),n("searchHeader"),t._v(" "),n("router-view"),t._v(" "),n("div",{staticClass:"nav-main"},[n("ul",[n("li",{staticClass:"current"},[n("router-link",{attrs:{to:"/search"}},[n("p",[n("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),n("span",[t._v("发现音乐")])])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/myMusic"}},[n("p",[n("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),n("span",[t._v("我的音乐")])])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/friends"}},[n("p",[n("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),n("span",[t._v("朋友")])])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/user"}},[n("p",[n("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),n("span",[t._v("账号")])])],1)])])],1)},staticRenderFns:[]}},function(t,s,n){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"banner"},[n("ul",{ref:"bannerUl",class:{trans:t.isTrans},on:{touchmove:function(s){s.preventDefault(),t.move(s)},touchstart:function(s){s.preventDefault(),t.start(s)},touchend:function(s){s.preventDefault(),t.end(s)}}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)]),t._v(" "),n("ol",{ref:"bannerOl"},[n("li"),t._v(" "),n("li"),t._v(" "),n("li"),t._v(" "),n("li")])])},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("li",[i("img",{attrs:{src:n(45),alt:""}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("li",[i("img",{attrs:{src:n(44),alt:""}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("li",[i("img",{attrs:{src:n(133),alt:""}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("li",[i("img",{attrs:{src:n(134),alt:""}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("li",[i("img",{attrs:{src:n(45),alt:""}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("li",[i("img",{attrs:{src:n(44),alt:""}})])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"list-main"},[n("div",{ref:"menuWrapper",staticClass:"warpper"},[n("div",[n("ul",t._l(t.playList,function(s,i){return n("li",{class:{current:i==t.playCurrentIndex},on:{click:function(s){t.changePlayCurrent(i)}}},[n("span",[t._v(t._s(s.name))]),t._v(" "),n("span",{staticClass:"author"},[t._v("-")]),t._v(" "),n("span",{staticClass:"author"},[t._v(t._s(s.author))])])}))])]),t._v(" "),n("div",{staticClass:"close",on:{click:t.changeShowPlayerList}},[t._v("关闭")])])},staticRenderFns:[]}}],[81]);
//# sourceMappingURL=app.5808424c4112fa044548.js.map
webpackJsonp([1],[,,,,,,,function(t,s,i){"use strict";var n="http://musicapi.duapp.com/api.php",e="https://api.imjad.cn/cloudmusic";s.a={getMusicListUrl:function(t,s,i){return n+"?type=topPlayList&cat="+t+"&offset="+s+"&limit="+i},getMusicDetailList:function(t){return e+"?type=playlist&id="+t},getSong:function(t){return n+"?type=url&id="+t},getSearchList:function(t){return e+"?type=search&s="+t}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,s,i){t.exports=i.p+"static/img/banner11.3a409d7.jpg"},function(t,s,i){t.exports=i.p+"static/img/banner44.8d343ad.jpg"},,function(t,s,i){"use strict";var n=i(82),e=i.n(n),a=i(26),r=i.n(a);r.a.defaults.timeout=5e3,r.a.interceptors.response.use(function(t){return 654===t.status&&window.alert("请求超时！"),200!==t.data.code?(window.alert("数据返回有误"),e.a.reject(t)):t},function(t){return console.log("promise error:"+t),e.a.reject(t)}),s.a=r.a},function(t,s,i){"use strict";var n=i(17),e=i(161),a=i(148),r=i.n(a),c=i(143),o=i.n(c),l=i(145),u=i.n(l),h=i(146),m=i.n(h),d=i(147),p=i.n(d);n.a.use(e.a),s.a=new e.a({routes:[{path:"/search",component:r.a,redirect:"/search/character",children:[{path:"character",component:o.a},{path:"musicList",component:u.a},{path:"radio",component:m.a},{path:"ranking",component:p.a}]},{path:"",redirect:"/search"}]})},function(t,s,i){"use strict";var n=i(17),e=i(6),a=i(26),r=i.n(a),c=i(7);n.a.use(e.b);var o=new e.b.Store({state:{showMusicList:!1,showPlayer:!1,showPlayerList:!1,isPlaying:!1,musicList:[],playList:[],playCurrentIndex:0,audio:{id:"",name:"歌曲名称",author:"歌手",coverSrc:"../../static/img/a91.png"},duration:0,currTime:0},getters:{showMusicList:function(t){return t.showMusicList},audio:function(t){return t.audio}},mutations:{changeShowList:function(t){t.showMusicList=!t.showMusicList},changeShowPlayer:function(t){t.showPlayer=!t.showPlayer},changeShowPlayerList:function(t){t.showPlayerList=!t.showPlayerList},setMusicList:function(t,s){t.musicList=s},setPlayCurrentIndex:function(t,s){t.playCurrentIndex=s},play:function(t){t.isPlaying=!0},pause:function(t){t.isPlaying=!1},setAudio:function(t){t.audio=t.playList[t.playCurrentIndex]},addToPlayList:function(t,s){for(var i={id:s.id,name:s.name,author:s.ar[0].name,coverSrc:s.al.picUrl},n=!1,e=0;e<t.playList.length;e++)i.id==t.playList[e].id&&(n=!0,t.playCurrentIndex=e);n||(t.playList.push(i),t.playCurrentIndex=t.playList.length-1)},prev:function(t){t.playCurrentIndex--,t.playCurrentIndex<0&&(t.playCurrentIndex=t.playList.length-1),t.audio=t.playList[t.playCurrentIndex]},next:function(t){t.playCurrentIndex++,t.playCurrentIndex>t.playList.length-1&&(t.playCurrentIndex=0),t.audio=t.playList[t.playCurrentIndex]},setDuration:function(t,s){t.duration=s},setCurrTime:function(t,s){t.currTime=s}},actions:{getSong:function(t,s){var i=t.commit,n=t.state;console.log("开始获取数据"),r.a.get(c.a.getSong(s)).then(function(t){console.log("获取数据成功"),i("setAudio"),n.audio.musicSrc=t.data.data[0].url,document.getElementById("player").load()})}}});s.a=o},function(t,s){},function(t,s,i){i(128);var n=i(1)(i(69),i(158),null,null);t.exports=n.exports},,,,,,,,,,,,,,,,,,function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i(140),e=i.n(n),a=i(139),r=i.n(a),c=i(6),o=i(138),l=i.n(o);s.default={name:"app",components:{searchHeader:l.a,musicPlayer:e.a,musicMenu:r.a},computed:i.i(c.a)(["showMusicList","showPlayer"])}},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i(7),e=i(11),a=i.n(e);s.default={data:function(){return{searchContent:"",isSearching:!1,searchList:[],fnSearching:!1}},methods:{resetSearch:function(){this.searchContent="",this.isSearching=!1,this.searchList=[],this.fnSearching=!1},changeShowPlayer:function(){this.$store.commit("changeShowPlayer")},showSearch:function(t){t?(this.isSearching=!0,this.$refs.myInput.style.width="80vw",this.$refs.myInput.style.textAlign="left"):(this.isSearching=!1,this.$refs.myInput.style.width="70vw",this.$refs.myInput.style.textAlign="center",this.searchContent="",this.searchList=[])},getSearchList:function(){var t=this;""!==this.searchContent.replace(/(^\s+)|(\s+$)/g,"")?this.$http.get(n.a.getSearchList(this.searchContent)).then(function(s){console.log(s.data.result.songs),t.searchList=s.data.result.songs,t.fnSearching=!0,t.$nextTick(function(){t.initScroll()})}):this.searchList=[]},initScroll:function(){this.menuScroll?this.menuScroll.refresh():this.menuScroll=new a.a(this.$refs.menuWrapper,{probeType:3,click:!0,startX:0,startY:0})},addToPlayList:function(t){this.resetSearch(),this.$store.commit("addToPlayList",t),this.$store.commit("changeShowPlayer"),this.$store.dispatch("getSong",t.id)}}}},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i(6),e=i(7),a=i(11),r=i.n(a);s.default={data:function(){return{list:[],opacity:0,headerTitle:"歌单",isLoading:!0}},mounted:function(){var t=this;this.$nextTick(function(){t.isLoading=!0,t.getList()})},computed:i.i(n.a)(["musicList"]),methods:{changeShowPlayer:function(){this.$store.commit("changeShowPlayer")},hide:function(){this.$store.commit("changeShowList")},getList:function(){var t=this;this.musicList.id&&this.$http.get(e.a.getMusicDetailList(this.musicList.id)).then(function(s){t.list=s.data.playlist.tracks,t.isLoading=!1,t.$nextTick(function(){t.initScroll()})})},initScroll:function(){var t=this;this.menuScroll?this.menuScroll.refresh():(this.menuScroll=new r.a(this.$refs.menuWrapper,{probeType:3,click:!0,startX:0,startY:0}),this.menuScroll.on("scroll",function(s){t.opacity=-s.y/300,-s.y>200?t.headerTitle=t.musicList.name:t.headerTitle="歌单"}))},addToPlayList:function(t){this.$store.commit("addToPlayList",t),this.$store.commit("changeShowPlayer"),this.$store.dispatch("getSong",t.id)}}}},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i(6),e=i(141),a=i.n(e);s.default={data:function(){return{musicSrc:""}},mounted:function(){this.$nextTick(function(){})},methods:{changeShowPlayer:function(){this.$store.commit("changeShowPlayer")},play:function(){this.$store.commit("play"),this.$refs.player.play()},pause:function(){this.$store.commit("pause"),this.$refs.player.pause()},canPlay:function(){this.$store.commit("play"),this.$refs.player.play()},prev:function(){this.$store.commit("prev")},next:function(){this.$store.commit("next")},changeShowPlayerList:function(){this.$store.commit("changeShowPlayerList")},timeUpdate:function(){var t=document.getElementById("player");this.$store.commit("setDuration",t.duration),this.$store.commit("setCurrTime",t.currentTime)}},components:{playerList:a.a},computed:i.i(n.a)(["audio","isPlaying","playList","showPlayerList","duration","currTime"]),filters:{parseTime:function(t){if(t)var s=("00"+Math.floor(t/60)).substr(-2),i=("00"+Math.floor(t%60)).substr(-2);else var s="00",i="00";return s+":"+i}}}},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i(6),e=i(11),a=i.n(e);s.default={computed:i.i(n.a)(["showPlayerList","playList","playCurrentIndex"]),mounted:function(){var t=this;this.$nextTick(function(){t.initScroll()})},methods:{initScroll:function(){this.menuScroll?this.menuScroll.refresh():this.menuScroll=new a.a(this.$refs.menuWrapper,{probeType:3,click:!0,startX:0,startY:0})},changeShowPlayerList:function(){this.$store.commit("changeShowPlayerList")},changePlayCurrent:function(t){this.$store.commit("setPlayCurrentIndex",t),this.$store.commit("setAudio")}}}},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{index:1,distance:0,startX:0,endX:0,isTrans:!0,timer:null}},mounted:function(){var t=this;this.$nextTick(function(){t.setOl(),t.timer=setInterval(t.autoPlay,2e3),t.$refs.bannerUl.addEventListener("webkitTransitionEnd",function(){t.index>=5?(t.isTrans=!1,t.index=1):t.index<=0&&(t.isTrans=!1,t.index=4),t.play(100*-t.index),t.setOl()})})},methods:{setOl:function(){for(var t=this.$refs.bannerOl.children,s=0;s<t.length;s++)t[s].className="";this.$refs.bannerOl.children[this.index-1].className="current"},autoPlay:function(){this.isTrans=!0,this.index++,this.play(100*-this.index)},play:function(t){this.$refs.bannerUl&&(this.$refs.bannerUl.style.transform="translate("+t+"vw)")},start:function(t){clearInterval(this.timer),this.startX=t.touches[0].clientX},move:function(t){this.isTrans=!1,this.distance=t.touches[0].clientX-this.startX,this.play(100*-this.index+this.distance/375*100)},end:function(){if(document.body.clientWidth)var t=document.body.clientWidth;else if(document.documentElement.clientWidth)var t=document.documentElement.clientWidth;this.distance>.1*t?this.index--:this.distance<.1*-t&&this.index++,this.isTrans=!0,this.play(100*-this.index),this.timer=setInterval(this.autoPlay,2e3),this.distance=0}}}},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i(142),e=i.n(n),a=i(144),r=i.n(a);s.default={components:{banner:e.a,myMusicList:r.a}}},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i(7);i(6);s.default={data:function(){return{list:[]}},mounted:function(){var t=this;this.$nextTick(function(){t.getList()})},methods:{getList:function(){var t=this;this.$http.get(n.a.getMusicListUrl("全部","0","6")).then(function(s){t.list=s.data.playlists})},goMenu:function(t){this.$store.commit("changeShowList"),this.$store.commit("setMusicList",t)}},components:{}}},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i(7),e=i(11),a=i.n(e);s.default={data:function(){return{list:[],listIndex:0,isLoading:!0}},mounted:function(){var t=this;this.$nextTick(function(){t.getList()})},methods:{initScroll:function(){var t=this;this.menuScroll?this.menuScroll.refresh():(this.menuScroll=new a.a(this.$refs.menuWrapper,{probeType:3,click:!0,startX:0,startY:0}),this.menuScroll.on("scroll",function(s){s.y<t.menuScroll.maxScrollY-50&&(t.isLoading||(t.listIndex+=6,t.getList(),t.isLoading=!0))}))},getList:function(){var t=this;this.$http.get(n.a.getMusicListUrl("全部",this.listIndex,"6")).then(function(s){for(var i=0;i<s.data.playlists.length;i++)t.list.push(s.data.playlists[i]);t.$nextTick(function(){t.isLoading=!1,t.initScroll()})})},goMenu:function(t){this.$store.commit("changeShowList"),this.$store.commit("setMusicList",t)}}}},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={}},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={}},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"search",data:function(){return{}},components:{}}},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i(17),e=i(51),a=i.n(e),r=i(48),c=i(50),o=(i.n(c),i(49)),l=i(47);n.a.prototype.$http=l.a,n.a.config.productionTip=!1,new n.a({el:"#app",store:o.a,router:r.a,template:"<App/>",components:{App:a.a}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,,function(t,s,i){t.exports=i.p+"static/img/banner22.b393750.jpg"},function(t,s,i){t.exports=i.p+"static/img/banner33.69ffd9b.jpg"},function(t,s,i){t.exports=i.p+"static/img/a9o.99bfb20.png"},function(t,s){t.exports="data:image/png;base64,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"},function(t,s,i){t.exports=i.p+"static/img/stick.068c272.png"},function(t,s,i){i(126);var n=i(1)(i(70),i(156),"data-v-600fd0f4",null);t.exports=n.exports},function(t,s,i){i(125);var n=i(1)(i(71),i(155),"data-v-555ebd0d",null);t.exports=n.exports},function(t,s,i){i(124);var n=i(1)(i(72),i(154),"data-v-4e0ae40f",null);t.exports=n.exports},function(t,s,i){i(130);var n=i(1)(i(73),i(160),"data-v-f2e205f4",null);t.exports=n.exports},function(t,s,i){i(129);var n=i(1)(i(74),i(159),"data-v-c29f1bfc",null);t.exports=n.exports},function(t,s,i){i(123);var n=i(1)(i(75),i(153),"data-v-2f776a43",null);t.exports=n.exports},function(t,s,i){i(120);var n=i(1)(i(76),i(150),"data-v-17cd089e",null);t.exports=n.exports},function(t,s,i){i(127);var n=i(1)(i(77),i(157),"data-v-68ed0a37",null);t.exports=n.exports},function(t,s,i){i(122);var n=i(1)(i(78),i(152),null,null);t.exports=n.exports},function(t,s,i){i(119);var n=i(1)(i(79),i(149),null,null);t.exports=n.exports},function(t,s,i){i(121);var n=i(1)(i(80),i(151),"data-v-1dc1b450",null);t.exports=n.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{},[t._v("\n\ti'm ranking\n")])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"my-music-list"},[t._m(0),t._v(" "),i("div",{staticClass:"list"},[i("ul",t._l(t.list,function(s){return i("li",{on:{click:function(i){t.goMenu(s)}}},[i("span",{staticClass:"count-listen"},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(s.playCount))]),t._v(" "),i("img",{attrs:{src:s.coverImgUrl+"?param=300y300",alt:""}}),t._v(" "),i("p",[t._v(t._s(s.name))])])}))])])},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"title"},[i("span",[t._v("推荐歌单")]),t._v(" "),i("span",{staticClass:"flag"},[t._v(">")])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{},[i("div",{staticClass:"search-nav"},[i("ul",[i("li",[i("router-link",{attrs:{to:"/search/character"}},[t._v("个性推荐"),i("transition",{attrs:{name:"fadein"}},[i("span")])],1)],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/search/musicList"}},[t._v("歌单"),i("transition",{attrs:{name:"fadein"}},[i("span")])],1)],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/search/radio"}},[t._v("主播电台"),i("transition",{attrs:{name:"fadein"}},[i("span")])],1)],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/search/ranking"}},[t._v("排行榜"),i("transition",{attrs:{name:"fadein"}},[i("span")])],1)],1)])]),t._v(" "),i("keep-alive",[i("router-view")],1)],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{},[t._v("\n\t我是radio\n")])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"chara-main"},[i("banner"),t._v(" "),t._m(0),t._v(" "),i("myMusicList"),t._v(" "),i("div",{staticClass:"footer"})],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"center-nav"},[i("div",[i("span",[i("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),i("p",[t._v("私人FM")])]),t._v(" "),i("div",[i("span",[i("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),i("p",[t._v("每日歌曲推荐")])]),t._v(" "),i("div",[i("span",[i("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),i("p",[t._v("云音乐热歌榜")])])])}]}},function(t,s,i){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"music-player"},[n("div",{staticClass:"player-header"},[n("span",{staticClass:"back",on:{click:t.changeShowPlayer}},[n("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),n("div",{staticClass:"title"},[n("p",{staticClass:"music-name"},[t._v(t._s(t.audio.name))]),t._v(" "),n("p",{staticClass:"music-author"},[t._v(t._s(t.audio.author))])]),t._v(" "),t._m(0)]),t._v(" "),n("div",{staticClass:"main"},[n("img",{staticClass:"stick",class:{"stick-no-play":t.isPlaying},attrs:{src:i(137),alt:""}})]),t._v(" "),n("div",{staticClass:"cd"},[n("img",{staticClass:"cd-circle",class:{roll:t.isPlaying},attrs:{src:i(135),alt:""}}),t._v(" "),n("img",{staticClass:"cd-main",class:{roll:t.isPlaying},attrs:{src:t.audio.coverSrc+"?param=300y300",alt:""}})]),t._v(" "),n("audio",{ref:"player",attrs:{id:"player",control:"true",src:t.audio.musicSrc},on:{timeupdate:t.timeUpdate,canplay:t.canPlay}}),t._v(" "),n("div",{staticClass:"time-line"},[n("span",{staticClass:"now-time"},[t._v(t._s(t._f("parseTime")(t.currTime)))]),t._v(" "),t._m(1),t._v(" "),n("span",{staticClass:"end-time"},[t._v(t._s(t._f("parseTime")(t.duration)))])]),t._v(" "),n("div",{staticClass:"control"},[t._m(2),t._v(" "),n("span",{on:{click:t.prev}},[n("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),t.isPlaying?n("span",{staticClass:"control-main",on:{click:t.pause}},[n("i",{staticClass:"iconfont"},[t._v("")])]):n("span",{staticClass:"control-main control-play",on:{click:t.play}},[n("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),n("span",{on:{click:t.next}},[n("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),n("span",{on:{click:t.changeShowPlayerList}},[n("i",{staticClass:"iconfont"},[t._v("")])])]),t._v(" "),n("div",{staticClass:"mask-bg"}),t._v(" "),n("div",{staticClass:"mask-img",style:{backgroundImage:"url("+t.audio.coverSrc+"?param=300y300)"}}),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.showPlayerList?n("div",{staticClass:"play-list-mask",on:{click:t.changeShowPlayerList}}):t._e()]),t._v(" "),n("transition",{attrs:{name:"slide"}},[t.showPlayerList?n("playerList"):t._e()],1)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("span",[i("i",{staticClass:"iconfont"},[t._v("")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"line"},[i("span",{staticClass:"line-ball"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("span",[i("i",{staticClass:"iconfont"},[t._v("")])])}]}},function(t,s,i){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"music-menu",attrs:{id:"mymenu"}},[n("div",{staticClass:"header",style:{background:"rgba(192,192,192,"+t.opacity+")"}},[n("span",{staticClass:"back",on:{click:t.hide}},[n("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),n("span",{staticClass:"header-title"},[t._v(t._s(t.headerTitle))]),t._v(" "),n("span",{on:{click:t.changeShowPlayer}},[n("i",{staticClass:"iconfont"},[t._v("")])])]),t._v(" "),n("div",{ref:"menuWrapper",staticClass:"warpper"},[n("div",[n("div",{staticClass:"main",attrs:{id:"mymain"}},[n("div",{staticClass:"cover-main"},[n("img",{staticClass:"cover",attrs:{src:t.musicList.coverImgUrl+"?param=300y300",alt:""}}),t._v(" "),n("span",{staticClass:"count-listen"},[n("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(t.musicList.playCount))])]),t._v(" "),n("p",{staticClass:"title"},[t._v(t._s(t.musicList.name))]),t._v(" "),n("p",{staticClass:"creator"},[n("img",{staticClass:"creator-avatar",attrs:{src:t.musicList.creator.avatarUrl+"?param=70y70",alt:""}}),t._v(t._s(t.musicList.creator.nickname))])]),t._v(" "),n("div",{staticClass:"list",attrs:{id:"mylist"}},[t.isLoading?n("div",{staticClass:"loading"},[n("img",{attrs:{src:i(136),alt:""}}),t._v(" "),n("p",[t._v("加载中...")])]):n("ul",t._l(t.list,function(s,i){return n("li",{on:{click:function(i){t.addToPlayList(s)}}},[n("span",{staticClass:"index"},[t._v(t._s(i+1))]),t._v(" "),n("div",{staticClass:"music-info"},[n("p",{staticClass:"music-name"},[t._v(t._s(s.name))]),t._v(" "),n("p",{staticClass:"music-author"},[n("span",[t._v(t._s(s.ar[0].name))]),t._v(" - "),n("span",[t._v(t._s(s.al.name))])])])])}))]),t._v(" "),n("div",{staticClass:"bottom"})])]),t._v(" "),n("div",{staticClass:"mask-bg",style:{backgroundImage:"url("+t.musicList.coverImgUrl+"?param=300y300)"}})])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"header"},[t.isSearching?t._e():i("span",[i("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),i("form",{attrs:{id:"myform",action:"",onsubmit:"return false;"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchContent,expression:"searchContent"}],ref:"myInput",attrs:{id:"mySearch",type:"search",name:"",placeholder:"搜索音乐、歌词、电台"},domProps:{value:t.searchContent},on:{search:t.getSearchList,focus:function(s){t.showSearch(!0)},input:function(s){s.target.composing||(t.searchContent=s.target.value)}}})]),t._v(" "),t.isSearching?i("span",{staticClass:"cancel",on:{click:function(s){t.showSearch(!1)}}},[t._v("取消")]):i("span",{on:{click:t.changeShowPlayer}},[i("i",{staticClass:"iconfont"},[t._v("")])])]),t._v(" "),t.isSearching?i("div",{ref:"menuWrapper",staticClass:"search-main"},[t.fnSearching?t._e():i("ul",{staticClass:"unfn-search"},[i("li",{on:{click:t.getSearchList}},[t._v("搜索“"+t._s(t.searchContent)+"”")])]),t._v(" "),t.fnSearching?i("ul",t._l(t.searchList,function(s){return i("li",{on:{click:function(i){t.addToPlayList(s)}}},[i("p",[t._v(t._s(s.name))]),t._v(" "),i("p",{staticClass:"author"},[t._v(t._s(s.ar[0].name)+" - "+t._s(s.al.name))])])})):t._e()]):t._e()])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{ref:"menuWrapper",staticClass:"warpper"},[i("div",[i("ul",t._l(t.list,function(s){return i("li",{on:{click:function(i){t.goMenu(s)}}},[i("div",{staticClass:"cover"},[i("img",{attrs:{src:s.coverImgUrl+"?param=200y200",alt:""}}),t._v(" "),i("span",{staticClass:"listen-count"},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(s.playCount))]),t._v(" "),i("span",{staticClass:"author"},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(s.creator.nickname))])]),t._v(" "),i("p",[t._v(t._s(s.name))])])})),t._v(" "),i("div",{staticClass:"footer"},[t.isLoading?i("span",[i("i",{staticClass:"iconfont"},[t._v("")]),t._v("加载中....")]):i("span",[t._v("上拉加载")])])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"app"}},[i("transition",{attrs:{name:"movein"}},[i("musicPlayer",{directives:[{name:"show",rawName:"v-show",value:t.showPlayer,expression:"showPlayer"}]})],1),t._v(" "),i("transition",{attrs:{name:"movein"}},[t.showMusicList?i("musicMenu"):t._e()],1),t._v(" "),i("searchHeader"),t._v(" "),i("router-view"),t._v(" "),i("div",{staticClass:"nav-main"},[i("ul",[i("li",{staticClass:"current"},[i("router-link",{attrs:{to:"/search"}},[i("p",[i("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),i("span",[t._v("发现音乐")])])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/myMusic"}},[i("p",[i("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),i("span",[t._v("我的音乐")])])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/friends"}},[i("p",[i("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),i("span",[t._v("朋友")])])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/user"}},[i("p",[i("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),i("span",[t._v("账号")])])],1)])])],1)},staticRenderFns:[]}},function(t,s,i){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"banner"},[i("ul",{ref:"bannerUl",class:{trans:t.isTrans},on:{touchmove:function(s){s.preventDefault(),t.move(s)},touchstart:function(s){s.preventDefault(),t.start(s)},touchend:function(s){s.preventDefault(),t.end(s)}}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)]),t._v(" "),i("ol",{ref:"bannerOl"},[i("li"),t._v(" "),i("li"),t._v(" "),i("li"),t._v(" "),i("li")])])},staticRenderFns:[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("li",[n("img",{attrs:{src:i(45),alt:""}})])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("li",[n("img",{attrs:{src:i(44),alt:""}})])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("li",[n("img",{attrs:{src:i(133),alt:""}})])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("li",[n("img",{attrs:{src:i(134),alt:""}})])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("li",[n("img",{attrs:{src:i(45),alt:""}})])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("li",[n("img",{attrs:{src:i(44),alt:""}})])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"list-main"},[i("div",{ref:"menuWrapper",staticClass:"warpper"},[i("div",[i("ul",t._l(t.playList,function(s,n){return i("li",{class:{current:n==t.playCurrentIndex},on:{click:function(s){t.changePlayCurrent(n)}}},[i("span",[t._v(t._s(s.name))]),t._v(" "),i("span",{staticClass:"author"},[t._v("-")]),t._v(" "),i("span",{staticClass:"author"},[t._v(t._s(s.author))])])}))])]),t._v(" "),i("div",{staticClass:"close",on:{click:t.changeShowPlayerList}},[t._v("关闭")])])},staticRenderFns:[]}}],[81]);
//# sourceMappingURL=app.e5240e1fdd69935f8bca.js.map
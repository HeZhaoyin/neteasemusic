<template lang="html">

		<div class="music-menu" id="mymenu">
			<div class="header" :style="{'background':'rgba(192,192,192,' + opacity + ')'}">
				<span class="back" @click="hide"><i class="iconfont">&#xe647;</i></span>
				<span class="header-title">{{headerTitle}}</span>
				<span @click="changeShowPlayer"><i class="iconfont">&#xe649;</i></span>
			</div>

			<div ref="menuWrapper" class="warpper">
				<div>
				<div class="main" id="mymain">
					<div class="cover-main">
						<img class="cover" :src="musicList.coverImgUrl + '?param=300y300'" alt="">
						<span class="count-listen"><i class="iconfont">&#xe6b0;</i>{{musicList.playCount}}</span>
					</div>
					<p class="title">{{musicList.name}}</p>
					<p class="creator"><img class="creator-avatar" :src="musicList.creator.avatarUrl + '?param=70y70'" alt="">{{musicList.creator.nickname}}</p>
				</div>
				<div class="list" id="mylist">
					<div class="loading" v-if="isLoading">
						<img src="../../static/img/loading.png" alt="">
						<p>加载中...</p>
					</div>
					<ul v-else>
						<li v-for="(item,index) in list" @click="addToPlayList(item)">
							<span class="index">{{index+1}}</span>
							<div class="music-info">
								<p class="music-name">{{item.name}}</p>
								<p class="music-author"><span>{{item.ar[0].name}}</span> - <span>{{item.al.name}}</span></p>
							</div>
						</li>
					</ul>
				</div>
				<div class="bottom"></div>
				</div>
			</div>

			<div class="mask-bg" :style="{backgroundImage:'url(' + musicList.coverImgUrl + '?param=300y300)'}"></div>
		</div>


</template>

<script>
import { mapState } from 'vuex'
import api from '../api/api.js'
import BScroll from 'better-scroll'
export default {
	data(){
		return{
			list:[],
			opacity:0,
			headerTitle:'歌单',
			isLoading:true
		}
	},
	mounted:function(){
		this.$nextTick(()=>{
			this.isLoading = true;
			this.getList();
		})
	},
	computed: mapState([
	  'musicList'
  	]),
	methods:{
		changeShowPlayer:function(){
			this.$store.commit('changeShowPlayer');
		},
		hide:function(){
			this.$store.commit('changeShowList');
		},
		getList:function(){
			if (this.musicList.id) {
				this.$http.get(api.getMusicDetailList(this.musicList.id)).then((res)=>{
					this.list = res.data.playlist.tracks;
					this.isLoading = false;
					this.$nextTick(()=>{
						this.initScroll();
					})
				})
			}
		},
		initScroll:function(){
			if (!this.menuScroll) {
				this.menuScroll = new BScroll(this.$refs.menuWrapper, {
		          probeType: 3,
				  click:true,
				  startX: 0,
				  startY: 0
		        });
				this.menuScroll.on('scroll', (pos) => {
					this.opacity = -pos.y / 300;
					if (-pos.y > 200) {
						this.headerTitle = this.musicList.name;
					}else{
						this.headerTitle = '歌单';
					}
				})
			}else{
				this.menuScroll.refresh();
			}
		},
		addToPlayList:function(item){
			this.$store.commit('addToPlayList',item);
			this.$store.commit('changeShowPlayer');
			this.$store.dispatch('getSong',item.id);
		}
	}
}
</script>

<style scoped>
.music-menu{
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 998;
	overflow-y: scroll;
	overflow-x: hidden;
}
.music-menu .mask-bg{
	width: 120%;
	height: 120%;
	position: absolute;
	background-size: contain;
	top: -10%;
	left: -10%;
	z-index: -1;
	-webkit-filter: blur(20px);
	filter: blur(20px);
}
.header{
	width: 100vw;
	height: 6vh;
	text-align: center;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #fff;
	padding: 0 0.3rem;
	box-sizing: border-box;
}
.header>.back>.iconfont{
	font-size: 1.4rem;
}
.header>.header-title{
	font-size: 1.1rem;
	color: #fff;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	padding: 0 2rem;
}
.main{
	width: 100vw;
	height: 11rem;
	padding: 7vh 0 1vh 1rem;
	color: #fff;
	overflow: hidden;
	background-color: rgba(0,0,0,0.4);
}
.cover-main,.cover-main>.cover{
	width: 10rem;
	height: 10rem;
	float: left;
	margin-right: 1rem;
	position: relative;
}
.cover-main>.count-listen{
	position: absolute;
	right: 0;
	color: #fff;
	font-size: 0.8rem;
	padding: 0.2rem 0.2rem;
}
.cover-main>.count-listen>.iconfont{
	font-size: 0.5rem;
	margin-right: 3px;
}
.main>.title{
	padding-right: 2rem;
	font-size: 1rem;
}
.main>.creator{
	display: flex;
	align-items: center;
	margin-top: 1rem;
}
.main>.creator>.creator-avatar{
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	margin-right: 0.5rem;
}
.list,.list>ul{
	width: 100%;
	background-color: #fff;
}
.list>ul>li{
	width: 100%;
	background-color: #fff;
	border-bottom: 1px solid #e4e4e4;
	display: flex;
	padding: 0.6rem 0;
	font-size: 1rem;
}
.list>ul>li>.index{
	float: left;
	width: 2rem;
	font-size: 1.2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #999;
}
.list>ul>li>.music-info>.music-author{
	font-size: 0.7rem;
	color: #666;
}
.warpper{
	height: 100vh;
}
.loading{
	height: 50vh;
	text-align: center;
	padding-top: 2rem;
	font-size: 1rem;
}
.loading>img{
	animation: roll 1s infinite linear;
}

.bottom{
	width: 100vw;
	height: 10vh;
	background-color: #fff;
}
</style>

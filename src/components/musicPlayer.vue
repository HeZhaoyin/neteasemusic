<template lang="html">
<div class="music-player">
	<div class="player-header">
		<span class="back" @click="changeShowPlayer"><i class="iconfont">&#xe647;</i></span>
		<div class="title">
			<p class="music-name">{{audio.name}}</p>
			<p class="music-author">{{audio.author}}</p>
		</div>
		<span><i class="iconfont">&#xe62a;</i></span>
	</div>
	<div class="main">
		<img :class="{'stick-no-play':isPlaying}" class="stick" src="../../static/img/stick.png" alt="">
	</div>
	<div class="cd">
		<img :class="{roll:isPlaying}" class="cd-circle" src="../../static/img/a9o.png" alt="">
		<img :class="{roll:isPlaying}" class="cd-main" :src="audio.coverSrc + '?param=300y300'" alt="">
	</div>
	<audio @timeupdate="timeUpdate" id="player" @canplay="canPlay" control="true" ref="player" :src="audio.musicSrc"></audio>
	<div class="time-line">
		<span class="now-time">{{currTime | parseTime}}</span>
			<div class="line">
				<span class="line-ball"></span>
			</div>
		<!-- <span class="end-time">{{audio.duration | parseTime}}</span> -->
		<span class="end-time">{{duration | parseTime}}</span>
	</div>
	<div class="control">
		<span><i class="iconfont">&#xe6bf;</i></span>
		<span @click="prev"><i class="iconfont">&#xe6c9;</i></span>
		<span @click="pause" class="control-main" v-if="isPlaying"><i class="iconfont">&#xe682;</i></span>
		<span @click="play" class="control-main control-play" v-else><i class="iconfont">&#xe628;</i></span>
		<span @click="next"><i class="iconfont">&#xe6c8;</i></span>
		<span @click="changeShowPlayerList"><i class="iconfont">&#xe659;</i></span>
	</div>
	<div class="mask-bg"></div>
	<div class="mask-img" :style="{backgroundImage:'url(' + audio.coverSrc + '?param=300y300)'}"></div>
	<transition name="fade">
		<div class="play-list-mask" v-if="showPlayerList" @click="changeShowPlayerList"></div>
	</transition>
	<transition name="slide">
		<playerList v-if="showPlayerList"></playerList>
	</transition>
</div>
</template>

<script>
import { mapState } from 'vuex'
import playerList from './playerList.vue'
export default {
	data(){
		return {
			musicSrc:''
		}
	},
	mounted:function(){
		this.$nextTick(()=>{

		})
	},
	methods:{
		changeShowPlayer:function(){
			this.$store.commit('changeShowPlayer');
		},
		play:function(){
			this.$store.commit('play');
			this.$refs.player.play();
		},
		pause:function(){
			this.$store.commit('pause');
			this.$refs.player.pause();
		},
		canPlay:function(){
			this.$store.commit('play');
			this.$refs.player.play();
		},
		prev:function(){
			this.$store.commit('prev');
		},
		next:function(){
			this.$store.commit('next');
		},
		changeShowPlayerList:function(){
			this.$store.commit('changeShowPlayerList');
		},
		timeUpdate:function(){
			let player = document.getElementById('player');
			this.$store.commit('setDuration',player.duration);
			this.$store.commit('setCurrTime',player.currentTime)
		}
	},
	components:{
		playerList
	},
	computed: mapState([
		'audio',
		'isPlaying',
		'playList',
		'showPlayerList',
		'duration',
		'currTime'
	]),
	filters:{
		parseTime:function(time){
			if (time) {
				var min = ('00' + Math.floor(time / 60)).substr(-2);
				var sec = ('00' + Math.floor(time % 60)).substr(-2);
			}else{
				var min = '00';
				var sec = '00';
			}
			return min + ':' + sec;
		}
	}
}
</script>

<style scoped>
.music-player{
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	color: #fff;
	overflow: hidden;
}
.player-header{
	height: 6vh;
	background-color: rgba(0,0,0,0);
	border-bottom: 1px solid rgba(245,245,245,0.2);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0.3rem;
}
.player-header .iconfont{
	font-size: 1.6rem;
}
.player-header>.title{
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	white-space: nowrap;
	overflow: hidden;
}
.player-header>.title>p{
	box-sizing: border-box;
	text-align: center;
	overflow: hidden;
	text-overflow: ellipsis;
	padding: 0 2rem;
}
.player-header>.title>.music-name{
	font-size: 1rem;
}
.player-header>.title>.music-author{
	font-size: 0.9rem;
}
.main{
	width: 100vw;
	height: 75vh;
	overflow: hidden;
	position: relative;
}
.main>.stick{
	width: 8rem;
	position: absolute;
	left: 50%;
	top: -1.5rem;
	margin-left: -1.7rem;
	transition: all 0.5s linear;
	transform-origin: 1.4rem 1.4rem;
	z-index: 1;
	transform: rotateZ(-25deg);
}
.main>.stick-no-play{
	transform: rotateZ(-4deg);
}
.cd{
	width: 100vw;
	height: 40vh;
	position: absolute;
	top: 15%;
}
.cd>img{
	position: absolute;
	left: 50%;
}
.cd>img.roll{
	animation: roll 6s infinite linear;
}
.cd>img.cd-circle{
	width: 21rem;
	margin-left: -10.5rem;
}
.cd>img.cd-main{
	width: 14rem;
	border-radius: 50%;
	top: 3.5rem;
	margin-left: -7rem;
}
@keyframes roll {
	0%{transform: rotateZ(0deg);}
	100%{transform: rotateZ(360deg);}
}

/*时间线*/
.time-line{
	height: 5vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.time-line .line{
	width: 70vw;
	height: 1px;
	background-color: gray;
	display: flex;
	align-items: center;
	position: relative;
}
.time-line .line .line-ball{
	position: absolute;
	left: 0%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 20px;
	width: 20px;
	background-color: #fff;
	border-radius: 50%;
}
.time-line .line .line-ball::after{
	content: '';
	display: inline-block;
	height: 5px;
	width: 5px;
	background-color: red;
	border-radius: 50%;
}
.time-line .now-time{

}
.time-line .end-time{

}


.control{
	width: 100vw;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
}
.control>span{
	display: inline-block;
	width: 20vw;
	text-align: center;
	box-sizing: border-box;
}
.control>.control-main>.iconfont{
	font-size: 4rem;
}
.control>.control-play>{
	position: relative;
	top: -0.5rem;
}
.mask-bg{
	width: 100vw;
	height: 100vh;
	position: absolute;
	left: 0;
	top: 0;
	z-index: -1;
	background-color: rgba(128,128,128,0.5);
}
.mask-img{
	width: 140vw;
	height: 140vh;
	position: absolute;
	background-size: 150%;
	background-position: center;
	background-repeat: no-repeat;
	top: -20vh;
	left: -20vw;
	z-index: -2;
	-webkit-filter: blur(8px);
	filter: blur(8px);
	background-color: #fff;
}
.play-list-mask{
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	background-color: rgba(0,0,0,0.7);
}
.fade-enter-active,.fade-leave-active{
	transition: opacity .2s linear;
}
.fade-enter,.fade-leave-active{
	opacity: 0
}
.slide-enter-active,.slide-leave-active{
	transition: all .2s linear;
}
.slide-enter,.slide-leave-active{
	transform: translateY(70vh);
}
</style>

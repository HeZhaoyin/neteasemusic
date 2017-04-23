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
		<img :class="{roll:isPlaying}" class="cd-main" :src="audio.coverSrc" alt="">
	</div>
	<audio control="true" ref="player" :src="audio.musicSrc"></audio>
	<div class="control">
		<span><i class="iconfont">&#xe6bf;</i></span>
		<span><i class="iconfont">&#xe6c9;</i></span>
		<span @click="pause" class="control-main" v-if="isPlaying"><i class="iconfont">&#xe682;</i></span>
		<span @click="play" class="control-main control-play" v-else><i class="iconfont">&#xe628;</i></span>
		<span><i class="iconfont">&#xe6c8;</i></span>
		<span><i class="iconfont">&#xe659;</i></span>
	</div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	data(){
		return {
			musicSrc:''
		}
	},
	methods:{
		changeShowPlayer:function(){
			this.$store.commit('changeShowPlayer');
		},
		play:function(){
			this.$store.commit('setAudio');
			this.$store.commit('play');
			this.$refs.player.play();
		},
		pause:function(){
			this.$store.commit('pause');
			this.$refs.player.pause();
		}
	},
	computed: mapState([
		'audio',
		'isPlaying',
		'playList'
	]),
}
</script>

<style scoped>
.music-player{
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	/*background: url('https://p4.music.126.net/xuW0eAX30At9yn8vp0Z3AA==/83562883723684.jpg?param=500y500');*/
	background-color: skyblue;
	z-index: 999;
	color: #fff;
}
.player-header{
	height: 6vh;
	background-color: rgba(0,0,0,0);
	border-bottom: 1px solid rgba(0,0,0,0.2);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0.3rem;
}
.player-header .iconfont{
	font-size: 1.6rem;
}
.player-header>.title{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.player-header>.title>p{
	text-align: center;
}
.player-header>.title>.music-name{
	font-size: 1rem;
}
.player-header>.title>.music-author{
	font-size: 0.9rem;
}
.main{
	width: 100vw;
	height: 80vh;
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
</style>

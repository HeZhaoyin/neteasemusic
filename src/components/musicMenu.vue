<template lang="html">
	<div class="music-menu">
		<div class="header">
			<span class="back" @click="hide"><i class="iconfont">&#xe647;</i></span>
			<span class="header-title">歌单</span>
		</div>
		<div class="main">
			<img class="cover" :src="musicList.coverImgUrl + '?param=300y300'" alt="">
			<p class="title">{{musicList.name}}</p>
			<p class="creator"><img class="creator-avatar" :src="musicList.creator.avatarUrl" alt="">{{musicList.creator.nickname}}</p>
		</div>
		<div class="mask-bg" :style="{backgroundImage:'url(' + musicList.coverImgUrl + '?param=300y300)'}"></div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	data(){
		return{
		}
	},
	computed: mapState([
	  'musicList'
  	]),
	methods:{
		hide:function(){
			this.$store.commit('changeShowList');
		},
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
	z-index: 999;
	overflow: hidden;
}
.music-menu>.mask-bg{
	width: 120%;
	height: 120%;
	position: absolute;
	background-size: contain;
	top: -10%;
	left: -10%;
	z-index: -1;
	-webkit-filter: blur(20px) grayscale(0.5);
	filter: blur(20px) grayscale(0.5);
}
.header{
	height: 5vh;
	text-align: center;
	position: relative;
}
.header>.back{
	color: #fff;
	position: absolute;
	left: 1rem;
}
.header>.back>.iconfont{
	font-size: 1.4rem;
}
.header>.header-title{
	line-height: 5vh;
	font-size: 1.2rem;
	color: #fff;
}
.main{
	width: 100vw;
	height: 12rem;
	margin-top: 1rem;
	padding: 0 1rem;
	color: #fff;
	overflow: hidden;
}
.main>.cover{
	width: 10rem;
	height: 10rem;
	float: left;
	margin-right: 1rem;
}
.main>.title{
	padding-right: 2rem;
	font-size: 1rem;
}
.main>.creator{
	display: flex;
	align-items: center;
}
.main>.creator>.creator-avatar{
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	margin-right: 0.5rem;
}
</style>

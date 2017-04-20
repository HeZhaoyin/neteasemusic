<template lang="html">
	<transition name="movein">
		<div class="music-menu" v-show="showFlag">

			<div class="header">
				<span class="back" @click="hide"><i class="iconfont">&#xe647;</i></span>
				<span class="header-title">歌单</span>
			</div>
			<div class="main">
				<img class="cover" :src="coverImgUrl" alt="">
				<p class="title">{{title}}</p>
				<p class="creator"><img class="creator-avatar" :src="creatorAvatar" alt="">{{creatorName}}</p>
			</div>
			<div class="mask-bg" :style="{backgroundImage:'url(' + coverImgUrl + ')'}"></div>
		</div>
	</transition>
</template>

<script>
export default {
	data(){
		return{
			showFlag:false,
			coverImgUrl:'',
			title:'',
			creatorAvatar:'',
			creatorName:''
		}
	},
	methods:{
		show:function(){
			this.showFlag = true;
		},
		hide:function(){
			this.showFlag = false;
		},
		setData:function(item){
			console.log(item);
			this.coverImgUrl = item.coverImgUrl;
			this.title = item.name;
			this.creatorAvatar = item.creator.avatarUrl;
			this.creatorName = item.creator.nickname;
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
	-webkit-filter: blur(15px);
	filter: blur(15px);
}
.movein-enter-active,.movein-leave-active{
	transition: all .5s;
	transform: translateX(0);
}
.movein-enter,.movein-leave-active{
	opacity: 1;
	transform: translateX(100vw);
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

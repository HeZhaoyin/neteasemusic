<template lang="html">
<div class="music-player">
	<div class="player-header">
		<span class="back" @click="changeShowPlayer"><i class="iconfont">&#xe647;</i></span>
	</div>
</div>
</template>

<script>
export default {
	methods:{
		changeShowPlayer:function(){
			this.$store.commit('changeShowPlayer');
		}
	}
}
</script>

<style scoped>
.music-player{
	width: 100vw;
	height: 100vh;
	position: fixed;
	background-color: skyblue;
	z-index: 999;
}
.player-header{
	height: 5vh;
	background-color: rgba(0,0,0,0);
	border-bottom: 1px solid rgba(0,0,0,0.2);
}
.player-header .back{
	float: left;
}
.player-header .back .iconfont{
	font-size: 1.4rem;
	color: #fff;
}
</style>

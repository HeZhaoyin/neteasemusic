<template lang="html">
<div class="music-player">
	<div class="player-header">
		<span class="back" @click="changeShowPlayer"><i class="iconfont">&#xe647;</i></span>
	</div>
</div>
</template>

<script>
export default {
	props:['showPlayer'],
	methods:{
		changeShowPlayer:function(){
			this.$emit('changeShowPlayer');
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
	height: 30px;
	background-color: rgba(0,0,0,0);
	border-bottom: 1px solid #e0e0e0;
}
.player-header .back{
	float: left;
}
.player-header .back .iconfont{
	font-size: 1.4rem;
	color: #fff;
}
</style>

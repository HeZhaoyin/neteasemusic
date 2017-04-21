<template lang="html">
	<div class="header">
		<transition name="fade">
			<musicPlayer @changeShowPlayer="changeShowPlayer" :showPlayer="showPlayer" v-if="showPlayer"></musicPlayer>
		</transition>
		<musicMenu ref="musicMenu"></musicMenu>
		<span class="go-player" @click="changeShowPlayer"><i class="iconfont">&#xe649;</i></span>
	</div>
</template>

<script>
import musicPlayer from './musicPlayer'
import musicMenu from './musicMenu.vue'
export default {
	data(){
		return {
			showPlayer:false,
		}
	},
	components:{
		musicPlayer,musicMenu
	},
	methods:{
		changeShowPlayer:function(){
			this.showPlayer = !this.showPlayer;
		}
	}
}
</script>

<style scoped>
.header {
  height: 5vh;
  background-color: #c70c0c;
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
  transform: translateX(0);
}
.fade-enter, .fade-leave-active {
  opacity: 1;
  transform: translateX(100vw);
}
.go-player{
	float: right;
	margin-right: 5px;
}
.go-player .iconfont{
	font-size: 1.7rem;
	color: #fff;
}
</style>

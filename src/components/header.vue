<template lang="html">
	<div class="header">
		<transition name="movein">
			<musicPlayer v-if="showPlayer"></musicPlayer>
		</transition>
		<transition name="movein">
			<musicMenu v-if="showMusicList"></musicMenu>
		</transition>
		<span class="go-player" @click="changeShowPlayer"><i class="iconfont">&#xe649;</i></span>
	</div>
</template>

<script>
import musicPlayer from './musicPlayer'
import musicMenu from './musicMenu.vue'
import { mapState } from 'vuex'
export default {
	data(){
		return {
		}
	},
	computed: mapState([
	  'showMusicList',
	  'showPlayer'
  	]),
	components:{
		musicPlayer,musicMenu
	},
	methods:{
		changeShowPlayer:function(){
			this.$store.commit('changeShowPlayer')
		}
	}
}
</script>

<style scoped>
.header {
  height: 5vh;
  background-color: #c70c0c;
}
.movein-enter-active, .movein-leave-active {
  transition: all .5s;
  transform: translateX(0);
}
.movein-enter, .movein-leave-active {
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

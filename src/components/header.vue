<template lang="html">
	<div>
		<div class="header">
			<span><i class="iconfont">&#xe64f;</i></span>
			<span @click="changeShowPlayer"><i class="iconfont">&#xe649;</i></span>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
		}
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
  height: 6vh;
  background-color: #c70c0c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.3rem;
  color: #fff;
}
.header .iconfont{
	font-size: 1.8rem;

}
</style>

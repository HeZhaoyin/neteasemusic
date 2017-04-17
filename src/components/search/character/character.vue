<template lang="html">
  <div>
  	<banner></banner>
	<div class="center-nav">
		<div>
			<span><i class="iconfont">&#xe732;</i></span>
			<p>私人FM</p>
		</div>
		<div>
			<span><i class="iconfont">&#xe683;</i></span>
			<p>每日歌曲推荐</p>
		</div>
		<div>
			<span><i class="iconfont">&#xe767;</i></span>
			<p>云音乐热歌榜</p>
		</div>
	</div>
  </div>
</template>

<script>
import banner from './banner.vue'
export default {
	components:{
		banner
	}
}
</script>

<style scoped>
.center-nav{
	width: 100%;
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid #e0e0e0;
}
.center-nav>div{
	width: 33.33%;
	padding: 1rem 0 0.5rem 0;
	height: 6rem;
	display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.center-nav>div>span{
	display: flex;
	width: 4rem;
	height: 4rem;
	border: 1px solid #c70c0c;
	border-radius: 50%;
	justify-content: center;
	align-items: center;
}
.center-nav>div>span>.iconfont{
	color: #c70c0c;
	font-size: 2.1rem;
}
.center-nav>div>p{
	margin: 0;
}
</style>

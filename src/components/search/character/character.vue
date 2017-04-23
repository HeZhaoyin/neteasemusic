<template lang="html">
  <div class="chara-main">
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
	<myMusicList></myMusicList>
	<div class="footer"></div>
  </div>
</template>

<script>
import banner from './banner.vue'
import myMusicList from './myMusicList.vue'
export default {
	components:{
		banner,
		myMusicList
	}
}
</script>

<style scoped>
.chara-main{
	height: 89vh;
	overflow: scroll;
	-webkit-overflow-scrolling: touch;
}
.center-nav{
	width: 100%;
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid #e0e0e0;
	margin-bottom: 1rem;
}
.center-nav>div{
	width: 33.33%;
	padding: 0.8rem 0 0.5rem 0;
	height: 4.7rem;
	display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.center-nav>div>span{
	display: flex;
	width: 3.2rem;
	height: 3.2rem;
	border: 1px solid #c70c0c;
	border-radius: 50%;
	justify-content: center;
	align-items: center;
}
.center-nav>div>span>.iconfont{
	color: #c70c0c;
	font-size: 1.7rem;
	font-weight: lighter;
}
.center-nav>div>p{
	margin: 0;
	font-size: 0.8rem;
	font-weight: 500;
}
.footer{
	height: 10vh
}
</style>

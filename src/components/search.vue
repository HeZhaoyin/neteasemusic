<template>
	<div class="">
		<mt-header>
		  <mt-button slot="right"><i class="iconfont">&#xe649;</i></mt-button>
		</mt-header>
		<div class="search-nav">
			<ul>
				<li class="current">
					<router-link to="/">个性推荐</router-link>
				</li>
				<li>
					<router-link to="/">歌单</router-link>
				</li>
				<li>
					<router-link to="/">主播电台</router-link>
				</li>
				<li>
					<router-link to="/">排行榜</router-link>
				</li>
			</ul>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import { Header } from 'mint-ui';
export default {
  name: 'search',
  data () {
    return {

    }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-header{
	background: #c70c0c;
}
.search-nav>ul{
	width: 100%;
	overflow: hidden;
	background-color: #e5e5e5;
}
.search-nav>ul>li{
	float: left;
	width: 25%;
	text-align: center;
	line-height: 2rem;
}
.search-nav>ul>li>a{
	color: #000;
	font-size: 0.8rem;
	line-height: 1.6rem;
	display: inline-block;
}
.search-nav>ul>li.current>a{
	color: #c70c0c;

	border-bottom: 3px solid #c70c0c;
}
</style>

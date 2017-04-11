<template lang="html">
	<div class="nav-main">
		<ul>
			<li class="current">
				<p><i class="iconfont">&#xe601;</i></p>
				<span>发现音乐</span>
			</li>
			<li>
				<p><i class="iconfont">&#xe655;</i></p>
				<span>我的音乐</span>
			</li>
			<li>
				<p><i class="iconfont">&#xe608;</i></p>
				<span>朋友</span>
			</li>
			<li>
				<p><i class="iconfont">&#xe673;</i></p>
				<span>账号</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'nav-main',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.nav-main{
	position: absolute;
	bottom: 0;
	width: 100%;
	background: rgba(49,49,49,0.85);
}
.nav-main>ul{
	width: 100%;
	margin: 0;
	padding: 0;
}
.nav-main>ul>li{
	list-style: none;
	width: 25%;
	float: left;
	text-align: center;
	color: #808080;
	padding: 5px 0 2px 0;
}
.nav-main>ul>li.current{
	color: #fff;
}
.nav-main>ul>li>p{
	margin: 0;
}
</style>

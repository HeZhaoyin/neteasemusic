<template>
  <div id="app">
	<router-view></router-view>
	<div class="nav-main">
		<ul>
			<li class="current">
				<router-link to="/search">
					<p><i class="iconfont">&#xe601;</i></p>
					<span>发现音乐</span>
				</router-link>
			</li>
			<li>
				<router-link to="/">
					<p><i class="iconfont">&#xe655;</i></p>
					<span>我的音乐</span>
				</router-link>
			</li>
			<li>
				<router-link to="/">
					<p><i class="iconfont">&#xe608;</i></p>
					<span>朋友</span>
				</router-link>
			</li>
			<li>
				<router-link to="/">
					<p><i class="iconfont">&#xe673;</i></p>
					<span>账号</span>
				</router-link>
			</li>
		</ul>
	</div>
  </div>
</template>

<script type="es6">
  export default {
    name: 'app',
    components: {

    }
  }
</script>



<style>
#app {
	width: 100%;
	height: 100vh;
	max-width: 640px;
	min-width: 300px;
	margin: 0 auto;
	position: relative;
}
body{
	margin: 0;
	font-size: 0.1rem;
}
.nav-main{
	position: absolute;
	bottom: 0;
	width: 100%;
	background: rgba(49,49,49,0.75);
}
.nav-main>ul{
	width: 100%;
}
.nav-main>ul>li{
	width: 25%;
	float: left;
	text-align: center;
	padding: 5px 0 2px 0;
}
.nav-main>ul>li>a{
	color: #808080;
}
.nav-main>ul>li.current>a{
	color: #fff;
}
.nav-main>ul>li>a>p{
	margin: 0;
}
</style>

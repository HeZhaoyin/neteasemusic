<template lang="html">
	<div class="my-music-list">
		<div class="title">
			<span>推荐歌单</span>
			<span class="flag">></span>
		</div>
		<div class="list">
			<ul>
				<li>
					<span class="count-listen"><i class="iconfont">&#xe6b0;</i>10万</span>
					<img src="http://p1.music.126.net/nBa1JtD-p71DjCcs8rq_zw==/19146895486173414.jpg" alt="">
					<p>那人那景都将在遗忘中重新拾起</p>
				</li>
				<li>
					<span class="count-listen"><i class="iconfont">&#xe6b0;</i>10万</span>
					<img src="http://p1.music.126.net/nBa1JtD-p71DjCcs8rq_zw==/19146895486173414.jpg" alt="">
					<p>那人那景都将在遗忘中重新拾起</p>
				</li>
				<li>
					<span class="count-listen"><i class="iconfont">&#xe6b0;</i>10万</span>
					<img src="http://p1.music.126.net/nBa1JtD-p71DjCcs8rq_zw==/19146895486173414.jpg" alt="">
					<p>那人那景都将在遗忘中重新拾起</p>
				</li>
				<li>
					<span class="count-listen"><i class="iconfont">&#xe6b0;</i>10万</span>
					<img src="http://p1.music.126.net/nBa1JtD-p71DjCcs8rq_zw==/19146895486173414.jpg" alt="">
					<p>那人那景都将在遗忘中重新拾起</p>
				</li>
				<li>
					<span class="count-listen"><i class="iconfont">&#xe6b0;</i>10万</span>
					<img src="http://p1.music.126.net/nBa1JtD-p71DjCcs8rq_zw==/19146895486173414.jpg" alt="">
					<p>那人那景都将在遗忘中重新拾起</p>
				</li>
				<li>
					<span class="count-listen"><i class="iconfont">&#xe6b0;</i>10万</span>
					<img src="http://p1.music.126.net/nBa1JtD-p71DjCcs8rq_zw==/19146895486173414.jpg" alt="">
					<p>那人那景都将在遗忘中重新拾起</p>
				</li>
				<li>
					<span class="count-listen"><i class="iconfont">&#xe6b0;</i>10万</span>
					<img src="http://p1.music.126.net/nBa1JtD-p71DjCcs8rq_zw==/19146895486173414.jpg" alt="">
					<p>那人那景都将在遗忘中重新拾起</p>
				</li>
				<li>
					<span class="count-listen"><i class="iconfont">&#xe6b0;</i>10万</span>
					<img src="http://p1.music.126.net/nBa1JtD-p71DjCcs8rq_zw==/19146895486173414.jpg" alt="">
					<p>那人那景都将在遗忘中重新拾起</p>
				</li>
				<li>
					<span class="count-listen"><i class="iconfont">&#xe6b0;</i>10万</span>
					<img src="http://p1.music.126.net/nBa1JtD-p71DjCcs8rq_zw==/19146895486173414.jpg" alt="">
					<p>那人那景都将在遗忘中重新拾起</p>
				</li>
				<li>
					<img src="http://p1.music.126.net/nBa1JtD-p71DjCcs8rq_zw==/19146895486173414.jpg" alt="">
					<p>那人那景都将在遗忘中重新拾起</p>
				</li>
				<li>
					<img src="http://p1.music.126.net/nBa1JtD-p71DjCcs8rq_zw==/19146895486173414.jpg" alt="">
					<p>那人那景都将在遗忘中重新拾起</p>
				</li>
				<li>
					<img src="http://p1.music.126.net/nBa1JtD-p71DjCcs8rq_zw==/19146895486173414.jpg" alt="">
					<p>那人那景都将在遗忘中重新拾起</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			list:[]
		}
	}
}
</script>

<style scoped>
.my-music-list{

}
.my-music-list>.title{
	padding-left: 0.7rem;
	border-left: 3px solid #c70c0c;
}
.my-music-list>.title>span{
	font-size: 0.9rem;
	font-weight: 500;
}
.my-music-list>.title>.flag{
	display: inline-block;
	transform: scaleY(2);
	font-weight: 200;
	position: relative;
	top: -1px;
}
.list{
	width: 100%;
}
.list>ul{
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 5px;
}
.list>ul>li{
	width: 32%;
	position: relative;
}
.list>ul>li>img{
	width: 100%;
}
.list>ul>li>p{
	margin: 0;
}
.list>ul>li>.count-listen{
	position: absolute;
	right: 0;
	color: #fff;
	font-size: 0.8rem;
}
.list>ul>li>.count-listen>.iconfont{
	font-size: 0.5rem;
}
</style>

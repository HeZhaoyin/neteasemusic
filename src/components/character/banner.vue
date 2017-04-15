<template lang="html">
	<div class="banner">
		<ul @touchmove="move" @touchstart="start">
			<li><img src="../../assets/banner44.jpg" alt=""></li>
			<li><img src="../../assets/banner11.jpg" alt=""></li>
			<li><img src="../../assets/banner22.jpg" alt=""></li>
			<li><img src="../../assets/banner33.jpg" alt=""></li>
			<li><img src="../../assets/banner44.jpg" alt=""></li>
		</ul>
		<ol>
			<li></li>
		</ol>
	</div>
</template>

<script>
export default {
	data(){
		return {
			distance:0,
			startX:0,
			endX:0
		}
	},
	methods:{
		start:function(e){
			this.startX = e.touches[0].clientX;
		},
		move:function(e){
			this.distance = e.touches[0].clientX - this.startX;
			console.log(this.distance);
		}
	}
}
</script>

<style scoped>
.banner{
	overflow: hidden;
}
.banner>ul{
	width: 500%;
	overflow: hidden;
	transform: translate(-20%);
}
.banner>ul>li{
	float: left;
	width: 20%;
}
.banner>ul>li>img{
	width: 100%;
}
</style>

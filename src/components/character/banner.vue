<template lang="html">
	<div class="banner">
		<ul ref="bannerUl" @touchmove="move" @touchstart="start" @touchend="end" :class="{trans:isTrans}">
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
			index:1,
			distance:0,
			startX:0,
			endX:0,
			isTrans:true,
			timer:null
		}
	},
	mounted: function () {
	  this.$nextTick(() => {
	    this.timer = setInterval(this.autoPlay,2000);
		this.$refs.bannerUl.addEventListener('webkitTransitionEnd',() => {
			if (this.index >= 4) {
				this.isTrans = false;
				this.index = 0;
				this.play(-this.index * 20);
			}
		})
	  })
	},
	methods:{
		autoPlay:function(){
			this.isTrans = true;
			this.index++;
			this.play(-this.index * 20);
		},
		play:function(dis){
			this.$refs.bannerUl.style.transform = 'translate('+ dis +'%)';
		},
		start:function(e){
			this.startX = e.touches[0].clientX;
		},
		move:function(e){
			clearInterval(this.timer);
			this.isTrans = false;
			this.distance = e.touches[0].clientX - this.startX;
			this.play(-this.index * 20 + this.distance / 375 * 20);
		},
		end:function(){
			if (this.distance > 0) {
				this.index--;
			}else{
				this.index++;
			}
			this.isTrans = true;
			this.play(-this.index * 20);
			this.timer = setInterval(this.autoPlay,2000);
		},
		toggleTransition:function(){
			this.isTrans = !this.isTrans;
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
	display: block;
	width: 100%;
}
.trans{
	transition: all 0.3s ease;
}
</style>

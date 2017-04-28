<template lang="html">
	<div class="list-main">
		<div ref="menuWrapper" class="warpper">
			<div>
				<ul>
					<li v-for="(item,index) in playList" :class="{current:index==playCurrentIndex}" @click="changePlayCurrent(index)">
						<span>{{item.name}}</span>
						<span class="author">-</span>
						<span class="author">{{item.author}}</span>
					</li>
				</ul>
			</div>
		</div>
		<div @click="changeShowPlayerList" class="close">关闭</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
export default {
	computed: mapState([
		'showPlayerList',
		'playList',
		'playCurrentIndex'
	]),
	mounted:function(){
		this.$nextTick(()=>{
			this.initScroll();
		})
	},
	methods:{
		initScroll:function(){
			if (!this.menuScroll) {
				this.menuScroll = new BScroll(this.$refs.menuWrapper, {
				  probeType: 3,
				  click:true,
				  startX: 0,
				  startY: 0
				});
			}else{
				this.menuScroll.refresh();
			}
		},
		changeShowPlayerList:function(){
			this.$store.commit('changeShowPlayerList');
		},
		changePlayCurrent:function(index){
			this.$store.commit('setPlayCurrentIndex',index);
			this.$store.commit('setAudio');
		}
	}
}
</script>

<style scoped>
.list-main{
	width: 100vw;
	height: 70vh;
	position: absolute;
	z-index: 1000;
	bottom: 0;
	left: 0;
	background-color: rgba(255,255,255,0.9);
	color: #000;
}
.current{
	color: red;
}
.current>.author{
	color: red;
}
.author{
	font-size: 0.6rem;
	color: #666;
}
.warpper{
	width: 100vw;
	height: 65vh;
	overflow: hidden;
}
.warpper>div>ul{
	border-top: 1px solid #ccc;
	padding-left: 1rem;
}
.warpper>div>ul>li{
	font-size: 1rem;
	line-height: 2.5rem;
	border-bottom: 1px solid #ccc;
	white-space: nowrap;
}
.close{
	width: 100vw;
	height: 7vh;
	position: absolute;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.1rem;
	border-top: 1px solid #ccc;
}
</style>

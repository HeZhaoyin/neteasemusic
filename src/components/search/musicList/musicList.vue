<template lang="html">
  <div ref="menuWrapper" class="warpper">
  	<div>
		<ul>
			<li v-for="item in list" @click="goMenu(item)">
				<div class="cover">
					<img :src="item.coverImgUrl + '?param=300y300'" alt="">
					<span class="listen-count"><i class="iconfont">&#xe6b0;</i>{{item.playCount}}</span>
					<span class="author"><i class="iconfont">&#xe673;</i>{{item.creator.nickname}}</span>
				</div>
				<p>{{item.name}}</p>
			</li>
		</ul>
		<div class="footer">
			<span v-if="!isLoading">上拉加载</span>
			<span v-else><i class="iconfont">&#xe649;</i>加载中....</span>
		</div>
  	</div>
  </div>
</template>

<script>
import api from '../../../api/api'
import BScroll from 'better-scroll'
export default {
	data(){
		return{
			list:[],
			listIndex:0,
			isLoading:true
		}
	},
	mounted:function(){
		this.$nextTick(()=>{
			this.getList();
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
				this.menuScroll.on('scroll', (pos) => {
					if (pos.y < (this.menuScroll.maxScrollY - 50)) {
						if (!this.isLoading) {
							this.listIndex += 6;
							this.getList();
							this.isLoading = true;
						}
					}
				})
			}else{
				this.menuScroll.refresh();
			}
		},
		getList:function(){
			this.$http.get(api.getMusicListUrl('全部',this.listIndex,'6')).then((res)=>{
				for (var i = 0; i < res.data.playlists.length; i++) {
					this.list.push(res.data.playlists[i]);
				}
				this.$nextTick(()=>{
					this.isLoading = false;
					this.initScroll();
				})
			})
		},
		goMenu:function(item){
			this.$store.commit('changeShowList');
			this.$store.commit('setMusicList',item);
		}
	},
}
</script>

<style scoped>
.warpper{
	width: 100vw;
	height: 89vh;
	background-color: #fff;
	overflow: hidden;
}
ul{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	font-size: 0.9rem;
}
ul>li{
	width: 49vw;
	margin-bottom: 1rem;
}
ul>li>p{
	padding-left: 0.4rem;
}
ul>li>.cover{
	width: 49vw;
	height: 49vw;
	position: relative;
	color: #fff;
}
ul>li>.cover>img{
	width: 49vw;
	height: 49vw;
}
ul>li>.cover>.author{
	position: absolute;
	left: 0.3rem;
	bottom: 0.4rem;
	font-size: 0.8rem;
}
ul>li>.cover>.listen-count{
	position: absolute;
	top: 0.2rem;
	right: 0.4rem;
	font-size: 0.8rem;
}
ul>li>.cover>.listen-count>.iconfont{
	font-size: 0.5rem;
	margin-right: 0.2rem;
}
ul>li>.cover>.author>.iconfont{
	font-size: 1rem;
	margin-right: 0.2rem;
}
.footer{
	width: 100vw;
	height: 15vh;
	text-align: center;
	font-size: 1rem;
	color: #ccc;
}
.footer>span>.iconfont{
	font-size: 1.6rem;
	color: red;
	margin-right: 0.2rem;
}
</style>

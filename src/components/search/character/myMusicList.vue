<template lang="html">
	<div class="my-music-list">
		<div class="title">
			<span>推荐歌单</span>
			<span class="flag">></span>
		</div>
		<div class="list">
			<ul>
				<li v-for="item in list" @click="goMenu(item)">
					<span class="count-listen"><i class="iconfont">&#xe6b0;</i>{{item.playCount}}</span>
					<img :src="item.coverImgUrl+'?param=300y300'" alt="">
					<p>{{item.name}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import api from '../../../api/api.js'
import { mapState } from 'vuex'
export default {
	data(){
		return{
			list:[]
		}
	},
	mounted:function(){
		this.$nextTick(()=>{
			this.getList();
		})
	},
	methods:{
		getList:function(){
			this.$http.get(api.getMusicListUrl('全部','0','6')).then((res)=>{
				this.list = res.data.playlists;
			})
		},
		goMenu:function(item){
			this.$store.commit('changeShowList');
			this.$store.commit('setMusicList',item);
		}
	},
	components:{

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
	padding: 0 5px;
	font-size: 0.8rem;
}
.list>ul>li>.count-listen{
	position: absolute;
	right: 0;
	color: #fff;
	font-size: 0.8rem;
	padding: 0 2px;
}
.list>ul>li>.count-listen>.iconfont{
	font-size: 0.5rem;
	margin-right: 3px;
}
</style>

<template lang="html">
	<div>
		<div class="header">
			<span v-if="!isSearching"><i class="iconfont">&#xe64f;</i></span>
			<form id="myform" action="" onsubmit="return false;">
				<input id="mySearch" @search="getSearchList" v-model="searchContent" ref="myInput" @focus="showSearch(true)" type="search" name="" placeholder="搜索音乐、歌词、电台">
			</form>
			<span v-if="!isSearching" @click="changeShowPlayer"><i class="iconfont">&#xe649;</i></span>
			<span @click="showSearch(false)" class="cancel" v-else>取消</span>
		</div>
		<div class="search-main" v-if="isSearching" ref="menuWrapper">
			<ul class="unfn-search" v-if="!fnSearching">
				<li @click="getSearchList">搜索“{{searchContent}}”</li>
			</ul>
			<ul v-if="fnSearching">
				<li v-for="song in searchList" @click="addToPlayList(song)">
					<p>{{song.name}}</p>
					<p class="author">{{song.ar[0].name}} - {{song.al.name}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import api from '../api/api'
import BScroll from 'better-scroll'
export default {
	data(){
		return {
			searchContent:'',
			isSearching:false,
			searchList:[],
			fnSearching:false,
		}
	},
	methods:{
		resetSearch:function(){
			this.searchContent = '';
			this.isSearching = false;
			this.searchList = [];
			this.fnSearching = false;
		},
		changeShowPlayer:function(){
			this.$store.commit('changeShowPlayer');
		},
		showSearch:function(flag){
			if (flag) {
				this.isSearching = true;
				this.$refs.myInput.style.width = '80vw';
				this.$refs.myInput.style.textAlign = 'left';
			}else{
				this.isSearching = false;
				this.$refs.myInput.style.width = '70vw';
				this.$refs.myInput.style.textAlign = 'center';
				this.searchContent = '';
				this.searchList = [];
			}
		},
		getSearchList:function(){
			if (this.searchContent.replace(/(^\s+)|(\s+$)/g, "") !== '') {
				this.$http.get(api.getSearchList(this.searchContent)).then((res)=>{
					console.log(res.data.result.songs);
					this.searchList = res.data.result.songs;
					this.fnSearching = true;
					this.$nextTick(()=>{
						this.initScroll();
					})
				})
			}else{
				this.searchList = [];
			}
		},
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
		addToPlayList:function(item){
			this.resetSearch();
			this.$store.commit('addToPlayList',item);
			this.$store.commit('changeShowPlayer');
			this.$store.dispatch('getSong',item.id);
		}
	},
}
</script>

<style scoped>
.header {
  height: 6vh;
  background-color: #c70c0c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.3rem;
  color: #fff;
}
.header>form>input{
	width: 70vw;
	height: 4vh;
	border: none;
	border-radius: 3vh;
	text-align: center;
	font-size: 0.8rem;
	outline: none;
	transition: all .2s linear;
	padding: 0 1rem;
	box-sizing: border-box;
}
.header .iconfont{
	font-size: 1.8rem;
}
.cancel{
	font-size: 1rem;
	margin-right: 0.8rem;
}
.search-main{
	width: 100vw;
	height: 94vh;
	background-color: #fff;
	position: absolute;
	z-index: 999;
	overflow: hidden;
}
.search-main>ul{
	padding-left: 0.7rem;
}
.search-main>ul>li{
	width: 100vw;
	line-height: 1.6rem;
	font-size: 1rem;
	border-bottom: 1px solid #ccc;
}
.search-main>ul>li>.author{
	color: #999;
	font-size: 0.8rem;
}
.search-main>.unfn-search>li:first-child{
	line-height: 3rem;
	color: #1874CD;
}
</style>

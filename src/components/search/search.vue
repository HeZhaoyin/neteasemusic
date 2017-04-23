<template>
<div class="">
  <div class="search-nav">
    <ul>
      <li>
        <router-link to="/search/character">个性推荐<transition name="fadein"><span></span></transition></router-link>
      </li>
      <li>
        <router-link to="/search/musicList">歌单<transition name="fadein"><span></span></transition></router-link>
      </li>
      <li>
        <router-link to="/search/radio">主播电台<transition name="fadein"><span></span></transition></router-link>
      </li>
      <li>
        <router-link to="/search/ranking">排行榜<transition name="fadein"><span></span></transition></router-link>
      </li>
    </ul>
  </div>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</div>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {

    }
  },
  components:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-nav>ul {
  width: 100%;
  height: 5vh;
  overflow: hidden;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e4e4e4;
}

.search-nav>ul>li {
  float: left;
  width: 25%;
  text-align: center;
  line-height: 5vh;
  position: relative;
}

.search-nav>ul>li>a {
  color: #000;
  font-size: 0.8rem;
  line-height: 4.4vh;
  display: inline-block;
}

.search-nav>ul>li>a.router-link-active {
  color: #c70c0c;
  /*border-bottom: 3px solid #c70c0c;*/
}
.search-nav>ul>li>a>span{
	display: inline-block;
    width: 3rem;
    height: 3px;
    position: absolute;
    bottom: 0px;
    left: 50%;
    margin-left: -1.5rem;
    background-color: red;
	transition: all .5s;
	opacity: 0;
}
.search-nav>ul>li>a.router-link-active>span{
	opacity: 1;
}

</style>

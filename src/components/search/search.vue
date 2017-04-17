<template>
<div class="">
  <div class="search-nav">
    <ul>
      <li>
        <router-link to="/search/character">个性推荐</router-link>
      </li>
      <li>
        <router-link to="/search/musicList">歌单</router-link>
      </li>
      <li>
        <router-link to="/search/radio">主播电台</router-link>
      </li>
      <li>
        <router-link to="/search/ranking">排行榜</router-link>
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
  background-color: #e5e5e5;
  border-bottom: 1px solid #999;
}

.search-nav>ul>li {
  float: left;
  width: 25%;
  text-align: center;
  line-height: 2rem;
}

.search-nav>ul>li>a {
  color: #000;
  font-size: 0.8rem;
  line-height: 1.7rem;
  display: inline-block;
}

.search-nav>ul>li>a.router-link-active {
  color: #c70c0c;
  border-bottom: 3px solid #c70c0c;
}
</style>

<template>
<div id="app">
  <transition name="movein">
    <musicPlayer v-show="showPlayer" ref="musicPlayer"></musicPlayer>
  </transition>
  <transition name="movein">
    <musicMenu v-if="showMusicList"></musicMenu>
  </transition>
  <searchHeader></searchHeader>
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
        <router-link to="/myMusic">
          <p><i class="iconfont">&#xe655;</i></p>
          <span>我的音乐</span>
        </router-link>
      </li>
      <li>
        <router-link to="/friends">
          <p><i class="iconfont">&#xe608;</i></p>
          <span>朋友</span>
        </router-link>
      </li>
      <li>
        <router-link to="/user">
          <p><i class="iconfont">&#xe673;</i></p>
          <span>账号</span>
        </router-link>
      </li>
    </ul>
  </div>
</div>
</template>

<script type="es6">
import musicPlayer from './components/musicPlayer'
import musicMenu from './components/musicMenu.vue'
import {
  mapState
} from 'vuex'
import searchHeader from './components/header.vue'
export default {
  name: 'app',
  components: {
    searchHeader,
    musicPlayer,
    musicMenu
  },
  computed: mapState([
    'showMusicList',
    'showPlayer'
  ]),
}
</script>



<style>
#app {
  width: 100vw;
  height: 100vh;
  min-width: 300px;
  margin: 0 auto;
  position: relative;
}

.nav-main {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: rgba(49, 49, 49, 0.97);
  z-index: 998;
}

.nav-main>ul {
  width: 100%;
}

.nav-main>ul>li {
  width: 25%;
  float: left;
  text-align: center;
  padding: 5px 0 2px 0;
}

.nav-main>ul>li>a {
  color: #808080;
}

.nav-main>ul>li>a.router-link-active {
  color: #fff;
}

.nav-main>ul>li>a>p {
  margin: 0;
}

.movein-enter-active,
.movein-leave-active {
  transition: all .5s;
  transform: translateX(0);
}

.movein-enter,
.movein-leave-active {
  opacity: 0;
  transform: translateX(100vw);
}
</style>

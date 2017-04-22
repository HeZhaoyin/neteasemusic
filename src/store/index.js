import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    showMusicList: false,
    showPlayer: false,
    musicList: {}
  },
  getters: {
    showMusicList: state => state.showMusicList
  },
  mutations: {
    changeShowList(state) {
      state.showMusicList = !state.showMusicList;
    },
    changeShowPlayer(state) {
      state.showPlayer = !state.showPlayer;
    },
    setMusicList(state, list) {
      state.musicList = list;
    }
  }
})
export default store

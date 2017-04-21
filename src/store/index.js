import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    showMusicList: false,
    musicList: {}
  },
  getters: {
    showMusicList: state => state.showMusicList
  },
  mutations: {
    changeShowList(state) {
      state.showMusicList = !state.showMusicList;
    },
    setMusicList(state,list) {
		state.musicList = list;
		console.log(state.musicList);
	}
  }
})
export default store

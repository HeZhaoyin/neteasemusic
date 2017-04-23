import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import api from '../api/api.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    showMusicList: false,
    showPlayer: false,
    isPlaying: false,
    musicList: [],
    playList: [],
    playCurrentIndex: 0,
    audio: {
      id: '',
      name: '歌曲名称',
      author: '歌手',
      coverSrc: '../../static/img/a91.png',
    }
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
    },
    play(state) {
      state.isPlaying = true;
    },
    pause(state) {
      state.isPlaying = false;
    },
	setAudio(state) {
		state.audio = state.playList[state.playCurrentIndex];
		Axios.get(api.getSong(state.audio.id)).then((res)=>{
			console.log(res);
			state.audio.musicSrc = res.data.data[0].url;
		})
	},
    addToPlayList(state, item) {
		var song = {
			'id':item.id,
			'name':item.name,
			'author':item.ar[0].name,
			'coverSrc':item.al.picUrl
		};
		var hadMusic = false;
		for (var i = 0; i < state.playList.length; i++) {
			if (song.id == state.playList[i].id) {
				hadMusic = true;
				state.playCurrentIndex = i;
			}
		};
		if (!hadMusic) {
			state.playList.push(song);
			state.playCurrentIndex = state.playList.length - 1;
		}
	}
  }
})
export default store

import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import api from '../api/api.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    showMusicList: false,
    showPlayer: false,
    showPlayerList: false,
    isPlaying: false,
    musicList: [],
    playList: [],
    playCurrentIndex: 0,
    audio: {
      id: '',
      name: '歌曲名称',
      author: '歌手',
      coverSrc: '../../static/img/a91.png',
      musicSrc: ''
    },
    duration: 0,
    currTime: 0
  },
  getters: {
    showMusicList: state => state.showMusicList,
    audio: state => state.audio
  },
  mutations: {
    changeShowList(state) {
      state.showMusicList = !state.showMusicList;
    },
    changeShowPlayer(state) {
      state.showPlayer = !state.showPlayer;
    },
    changeShowPlayerList(state) {
      state.showPlayerList = !state.showPlayerList;
    },
    setMusicList(state, list) {
      state.musicList = list;
    },
    setPlayCurrentIndex(state, index) {
      state.playCurrentIndex = index;
    },
    play(state) {
      state.isPlaying = true;
    },
    pause(state) {
      state.isPlaying = false;
    },
    setAudio(state) {
      state.audio = state.playList[state.playCurrentIndex];
    },
    addToPlayList(state, item) {
      var song = {
        'id': item.id,
        'name': item.name,
        'author': item.ar[0].name,
        'coverSrc': item.al.picUrl
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
    },
    prev(state) {
      state.playCurrentIndex--;
      if (state.playCurrentIndex < 0) {
        state.playCurrentIndex = state.playList.length - 1;
      }
      state.audio = state.playList[state.playCurrentIndex];
    },
    next(state) {
      state.playCurrentIndex++;
      if (state.playCurrentIndex > state.playList.length - 1) {
        state.playCurrentIndex = 0;
      }
      state.audio = state.playList[state.playCurrentIndex];
    },
    setDuration(state, time) {
      state.duration = time;
    },
    setCurrTime(state, time) {
      state.currTime = time;
    }
  },
  actions: {
    getSong({
      commit,
      state
    }, id) {
      console.log('开始获取数据');
      Axios.get(api.getSong(id)).then((res) => {
        console.log('获取数据成功');
        commit('setAudio');
        state.audio.musicSrc = res.data.data[0].url;
        var player = document.getElementById('player');
        player.load();
      })
    }
  }
})
export default store

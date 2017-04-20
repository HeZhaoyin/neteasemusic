import Vue from 'vue'
import Router from 'vue-router'
import search from '@/components/search/search'
import character from '@/components/search/character/character'
import musicList from '@/components/search/musicList/musicList'
import radio from '@/components/search/radio/radio'
import ranking from '@/components/search/ranking/ranking'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/search',
      component: search,
      redirect: '/search/character',
      children: [
        {
          path: 'character',
          component: character
        }, {
          path: 'musicList',
          component: musicList
        }, {
          path: 'radio',
          component: radio
        }, {
          path: 'ranking',
          component: ranking
        }
      ]
    }, {
      path: '',
      redirect: '/search'
    }
  ]
})

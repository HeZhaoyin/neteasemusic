import Vue from 'vue'
import Router from 'vue-router'
import search from '@/components/search'
import character from '@/components/character/character'
import musicList from '@/components/musicList'
import radio from '@/components/radio/radio'
import ranking from '@/components/ranking/ranking'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/search',
      component: search,
	  children:[
		  {
			path:'character',
			component:character
		  },
		  {
			  path:'musicList',
			  component:musicList
		  },
		  {
			  path:'radio',
			  component:radio
		  },
		  {
			  path:'ranking',
			  component:ranking
		  }
	  ]
    }
  ]
})

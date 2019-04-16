import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Index from '@/components/index'
import Show from '@/components/show'
import Serve from '@/components/serve'
import Aboutus from '@/components/aboutus'
Vue.use(Router)

export default new Router({
  routes: [
	    {
			path:'/',
			namr:'Index',
			component:Index
		},
		{
			path:'/Index',
			name:'Index',
			component:Index
		},
		{
			path:'/Show',
			name:'Show',
			component:Show
		},
		{
			path:'/Serve',
			name:'Serve',
			component:Serve
		},
		{
			path:'/about',
			name:'Aboutus',
			component:Aboutus
		}
  ]
})

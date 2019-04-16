<template>
  <div id="app">
		
    <router-view/>

  </div>
</template>

<script>
	import './assets/head.css'
import Index from './components/index.vue'
export default {
  name: 'App',
	data(){
		return{
			
		}
	},
	components:{
		 Index
	}
}
</script>

<style>
	
</style>


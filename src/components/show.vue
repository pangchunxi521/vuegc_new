<template>
	<div id="show">
		<Head></Head>
		
		<div class="sty">
			<div class="stye">
				<Icon type="md-camera" size="60" color="#ccc"/>
				<h2>车辆/</h2>
				<p><i>公司车辆简介</i></p>
			</div>
		</div>
		
		
		<List></List>
		<Foot></Foot>
	</div>
</template>

<script>
import Head from './head.vue';
import List from './list.vue'
import Foot from './foot.vue'
export default {
	name: '',
	data() {
		return {
			bbb: '222'
		};
	},
	components: {
		Head,
		List,
		Foot
	}
};
</script>

<style scoped>
	.sty {
		width: 100%;
		background: url(https://www.haoyi23.com/static/assets/img/pattern.jpg) repeat left top;
		box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.05) inset, 0 -5px 15px 0 rgba(0, 0, 0, 0.05) inset;
	}
	.sty .stye {
		width: 60%;
		margin: 0 auto;
		padding: 25px 0;
	}
	.sty div h2 {
		display: inline;
		margin-left: 10px;
		font-family: 'Lobster', cursive;
		font-size: 24px;
		color: #5d5d5d;
		font-weight: bold;
		text-shadow: 0 1px 0 rgba(255, 255, 255, 0.7);
		vertical-align: middle;
	}
	.sty div p {
		display: inline;
		margin-left: 5px;
		font-size: 14px;
		font-style: italic;
		vertical-align: middle;
		font-weight: 600;
	}
	</style>
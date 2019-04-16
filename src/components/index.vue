
<template>
	<div id="index">
		<Register></Register>
		<Head></Head>
		<div class="player" @click="change">
			<!-- banner轮播 -->
			<div class="row">
				<Carousel v-model="value3" loop :dots="setting.dots">
					<ul>
						<li v-for="banner in banners" :key="banner.id">
							<CarouselItem>
								<div class="demo-carousel posie">
									<img :src="url + banner.img_url" :alt="banner.img_alt" />
								</div>
								<p class="tela">
									<span>
										<i>{{ banner.img_title }}</i>
									</span>
								</p>
							</CarouselItem>
						</li>
					</ul>
				</Carousel>
				<div class="breviary">
					<ul>
						<li v-for="banner in banners" :key="banner.id">
							<img :src="url + banner.img_url" :alt="banner.img_alt" />
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="wel">
			<h2>
				欢迎来到
				<span class="violet">{{ welcome }}</span>
				,一个安全 便捷 惠民 的用车平台
			</h2>
			<p>{{ swel }}</p>
		</div>

		<List></List>

		<Foot></Foot>
	</div>
</template>

<script>
 import '../assets/player.css';
import Register from './register.vue';
import Head from './head.vue';
import List from './list.vue';
import Foot from './foot.vue';
import axios from 'axios';

export default {
	name: '',
	data() {
		return {
			value3: 0,
			welcome: '共发车队',
			swel: '公司以安全第一为原则,为您的出行保驾护航',
			setting: {
				dots: 'outside'
			},
			banners: '',
			url: 'http://www.api.haoyi23.com'
		};
	},
	components: {
		Register,
		Head,
		List,
		Foot
	},
	methods: {
		change: function() {}
	},
	beforeCreate: function() {
		let that = this;
		axios
			.get('/api/v1/banner_list')
			.then(function(response) {
				that.banners = response.data;
			})
			.catch(function(error) {
				console.log(error);
			});
	}
};
</script>

<style scoped>
.player {
	width: 100%;
	padding: 3px;
	background: url(https://www.haoyi23.com/static/assets/img/pattern.jpg) repeat left top;
	padding-top: 10px;
	box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.05) inset, 0 -5px 15px 0 rgba(0, 0, 0, 0.05) inset;
}
.row {
	width: 953px;
	margin: 0 auto;
	border: 10px solid #fff;
}
.ivu-carousel {
	width: 953px;
	height: 330px;
	margin: 0 auto;
}
.posie {
	position: relative;
}
.posie img {
	width: 100%;
	height: 330px;
}
.tela {
	position: absolute;
	background: rgba(0, 0, 0, 0.5);
	width: 100%;
	bottom: 30px;
	text-align: left;
	height: 50px;
	padding: 10px;
}
 span {
	font-size: 20px;
	line-height: 30px;
	color: #eaeaea;
} 
.breviary {
	width: 953px;
	margin: 5px 0;
}

 ul {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	cursor: pointer;
}
 ul li {
	overflow: hidden;
	flex: 1;
	flex-grow: 1;
	flex-shrink: 1;
}

.breviary ul li img {
	width: 100%;
	height: 100%;
}
.wel {
	width: 100%;
	height: 90px;
	padding-top: 30px;
	background: #ffffee;
	text-align: center;
}
.wel h2 {
	font-family: 'Lobster', cursive;
	font-size: 30px;
	color: #5d5d5d;
	font-weight: bold;
}
.violet {
	font-size: 30px;
	color: #9d426b;
}
.wel p {
	font-size: 18px;
	font-style: italic;
	line-height: 20px;
}
ul li {
	list-style: none;
}
</style>

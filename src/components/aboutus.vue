<template>
	<div>
		<Head></Head>
		<div style="background:#ffe;">
		<div class="sty">
			<div class="stye">
				<Icon type="ios-people" size="60" color="#ccc" />
				<h2>关于我们</h2>
			</div>
		</div>
		<div class="main">
			<div class="abs">
				<h3>关于共发</h3>
				<p>
					运城共发汽车租赁有限公司是经国家工商局批准注册的正规汽车租赁企业,我公司经过不断努力、创新,已成为了能够为用户提供全面,专业,安全,舒适的租车服务。
					并得到了广大客户的一致好评。公司可提供奔驰大客,宇通,金龙客车,丰田考斯特,全顺,依维柯,瑞峰,别克GL8等各类车型,可供广大客户选择。
				</p>
				<h3>主要经营</h3>
				<p>单位班车 学校校车 旅游用车 会议用车 婚庆用车 机场单位接送 个人长租 短包业务</p>
				<h3>为什么选择我们</h3>
				<p>
					乘坐共发汽车将会给您家的感觉。您的需求,就是我们的追求。共发车队感谢社会各界朋友的关心和帮助,并将继续开拓进去,与时俱进,为打造安全,舒适,高信誉,超一流的汽车租赁企业而努力!
				</p>
			</div>
		</div>

		<div class="linea">
			<Divider dashed><p>我们的团队</p></Divider>
		</div>
		
		<ul class="lis clearfloat" id="list2">
			<li v-for="son in listsa" :key="son.id" class="one">
				<div><img :src="son.src" alt="" style="width: 211px;height: 158px;"/></div>
				<h3>{{ son.title }}</h3>
				<span>
					<i>{{ son.content }}</i>
				</span>
				<!-- <p class="alt">
					<a :href="href" @mouseenter="chang()" v-show="com">
						<span><Icon type="ios-search" size="30" :color="color" /></span>
					</a>
					<a :href="href" @mouseleave="change()" v-show="!com">
						<span><Icon type="ios-search" size="30" :color="color1" /></span>
					</a>
					<a :href="href" @mouseenter="cli()" v-show="xian">
						<span><Icon type="ios-link" size="30" :color="color" /></span>
					</a>
					<a :href="href" @mouseleave="clie()" v-show="!xian">
						<span><Icon type="ios-link" size="30" color="#dd5a01" /></span>
					</a>
				</p> -->
			</li>
		</ul>
		<div class="linea lineb">
			<Divider dashed>
				<p>
					租车客车到共发
					<br />
					的5大理由
				</p>
			</Divider>
		</div>
		<Txt></Txt>



		<Foot></Foot>
		</div>
	</div>
</template>

<script>
import '../assets/list.css'
import Head from './head.vue';
import Txt from './textplay.vue'
import Foot from './foot.vue';
export default {
	data() {
		return {
			listsa: [
				{
					id: 0,
					src: 'https://www.haoyi23.com/static/assets/img/team/1.jpg',
					title: '山西运城共发车队',
					content: '用车不用东奔西走, 共发车队应有尽有.☎️:15235903198～～13191198482...'
				},
				{
					id: 1,
					src: 'https://www.haoyi23.com/static/assets/img/team/2.jpg',
					title: '山西运城共发车队',
					content: '用车不用东奔西走, 共发车队应有尽有.☎️:15235903198～～13191198482...'
				},
				{
					id: 2,
					src: 'https://www.haoyi23.com/static/assets/img/team/3.jpg',
					title: '山西运城共发车队',
					content: '用车不用东奔西走, 共发车队应有尽有.☎️:15235903198～～13191198482...'
				},
				{
					id: 3,
					src: 'https://www.haoyi23.com/static/assets/img/team/4.jpg',
					title: '山西运城共发车队',
					content: '用车不用东奔西走, 共发车队应有尽有.☎️:15235903198～～13191198482...'
				}
			]
		};
	},
	components: {
		Head,
		Txt,
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
.main{
	width: 100%;
	background: #ffffee;
	    padding-top: 10px;
    padding-bottom: 10px;
    text-align: left;
}
.main .abs {
	width: 60%;
	margin: 0 auto;
}
.main .abs h3{
	    margin-top: 25px;
    font-family: 'Droid Sans', sans-serif;
    font-size: 16px;
    color: #5d5d5d;
    font-weight: bold;
    text-transform: uppercase;
    text-shadow: 0 1px 0 rgba(255,255,255,.7);
}
.main .abs p{
	    line-height: 28px;
    font-size: 13px;
}
</style>

<template>
	<div>
		<Head></Head>
		<div class="sty">
			<div class="stye">
				<Icon type="ios-paper-outline" size="60" />
				<h2>共发车队 /合作模式</h2>
				<p><i>安全 便捷 惠民</i></p>
			</div>
		</div>
		<div class="tel">
			<div class="tela">
				<h3>订车电话：{{ tel }}</h3>
				<p>{{ msga }}</p>
			</div>
		</div>
		<div class="oul">
			<ul class="lis clearfloat">
				<li v-for="item in lists" :key="item.id" class="one">
					<Icon type="ios-car" size="80" />
					<h3>{{ item.title }}</h3>
					<span>{{ item.content }}</span>
					<p class="pa">
						<a :href="href">
							<i>{{ msg }}</i>
						</a>
					</p>
				</li>
			</ul>
		</div>
		<div class="serve">
			<div class="clearfloat tf">
				<p class="tst">
					乘坐共发车队汽车将会给您家的感觉。您的需求,就是我们的追求。共发车队感谢社会各界朋友的关心和帮助,并将继续开拓进去,与时俱进,为打造安全,舒适,高信誉,超一流的汽车租赁企业而努力!
				</p>
				<p class="pt"><a href="">服务宗旨</a></p>
			</div>
		</div>
		<Foot></Foot>
	</div>
</template>

<script>
import Head from './head.vue';
import Foot from './foot.vue'
export default {
	data() {
		return {
			href: 'javascript',
			tel: '15235903198～13191198482',
			msg: '阅读更多',
			msga:
				'运城共发汽车租赁有限公司是经国家工商局批准注册的正规汽车租赁企业,我公司经过不断努力、创新,已成为了能够为用户提供全面,专业,安全,舒适的租车服务。并得到了广大客户的一致好评。公司可提供奔驰大客,宇通,金龙客车,丰田考斯特,全顺,依维柯,瑞峰,别克GL8等各类车型,可供广大客户选择.',
			lists: [
				{
					id: 0,
					title: '长期包租用车',
					content: ' 为常驻运城或临近省市的企业、办事机构提供各类用车，可长期包租...'
				},
				{
					id: 1,
					title: '旅游用车',
					content: ' 为常驻运城或临近省市的企业、办事机构提供各类用车，可长期包租...'
				},
				{
					id: 2,
					title: '市民用车',
					content: '我公司备有中低档轿车、面包车等车型，可供本市市民租用...'
				},
				{
					id: 3,
					title: '婚庆用车',
					content: ' 为个人或婚庆公司提供高档婚庆车和车队服务...'
				},
				{
					id: 4,
					title: '会议用车',
					content:
						'凡在运城或邻近省市召开各类会议，共发车队可为你提供会议用车，如会务组工作用车，贵宾和会议代表接送用车，组织考察参观或集体用车...'
				},
				{
					id: 5,
					title: '展览会用车',
					content:
						'凡在运城或临近省市举办各类大型展览会或博览会，共发车队可为您提供会展筹备工作用车，参展商务客人接送用车，观众参观用车...'
				},
				{
					id: 6,
					title: '宾馆配套用车',
					content:
						'为高档宾馆酒店提供配套贵宾提供用车服务，使您的客人在抵达宾馆前就享受或离开宾馆后能继续享受共发车队的高档用车服务...'
				},
				{
					id: 7,
					title: '文体活动用车',
					content:
						'凡在运城或临近省 市 县举办各类的大型文化体育活动，共发车队都可为您提供安全 便捷 惠民 的工作用车，明星接待专车等舒适的用车环境...'
				},
				{
					id: 8,
					title: '学校校车租赁',
					content: '共发车队可为学校提供学生上下学接送服务...'
				},
				{
					id: 9,
					title: '班车用车',
					content: '为企业提供员工上下班接送服务(长期合作-企业可对班车进行车身喷漆)。...'
				},
				{
					id: 10,
					title: '班车用车',
					content: '为客户提供机场接送用车，并可接受客户委托，去机场代接或代送客人...'
				},
				{
					id: 11,
					title: '节庆活动用车',
					content:
						'在运城或临近省市举办各类节庆活动，车队可为您提供活动用车、贵宾接待专车...'
				}
			]
		};
	},
	components: {
		Head,
		Foot
	}
};
</script>

<style scoped>
.clearfloat:after {
	content: '.';
	display: block;
	visibility: hidden;
	height: 0;
	clear: both;
}
h1 {
	font-size: 100px;
	text-align: center;
}
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
.tela {
	width: 60%;
	margin: 0 auto;
	padding: 10px;
}
.tel,.oul{
	background: #ffe;
}
.tela h3 {
	margin: 25px 0 10px 0;
	font-family: 'Droid Sans', sans-serif;
	font-size: 16px;
	color: #5d5d5d;
	font-weight: bold;
	text-transform: uppercase;
	text-shadow: 0 1px 0 rgba(255, 255, 255, 0.7);
}
.tela p {
	line-height: 28px;
	font-size: 13px;
}
.lis {
	width: 65%;
	margin: 0 auto;
	padding-top: 40px;
	background: #ffe;
}
.one {
	list-style: none;
	float: left;
	/* width: 246px; */
	text-align: center;
	background: #f8f8f8;
	/* background: #f40; */
	border-radius: 2px;
	margin: 30px 20px 0;
	padding: 15px 15px 20px 15px;
	border-bottom: 2px solid #9d426b;
}
.one:hover {
	box-shadow: inset 0px 0px 35px #dcdee2;
}
.one p {
	margin-top: 13px;
	font-family: 'Droid Sans', sans-serif;
	font-size: 14px;
	color: #5d5d5d;
	font-weight: bold;
	text-transform: uppercase;
	text-shadow: 0 1px 0 rgba(255, 255, 255, 0.7);
	/* background: -webkit-linear-gradient(left, red , blue); */
}
.one span {
	padding-bottom: 7px;
	line-height: 24px;
}
.one .pa a {
	display: inline-block;
	padding: 5px 22px;
	background: #9d426b;
	color: #fff;
	text-shadow: none;
}
.one .pa a i:hover , .serve .tf .pt a:hover{
	color: #ffadd2;
}
.serve {
	background: #ffe;
}
.serve div {
	width: 82%;
	margin: 0 auto;
	padding: 24px 0 24px;
	background: #f8f8f8;
}
.serve div .tst {
	width: 72%;
	float: left;
	line-height: 30px;
	font-size: 18px;
	font-style: italic;
	padding: 5px 0 5px 20px;
}
.serve div p a {
	display: inline-block;
	padding: 5px 22px;
	background: #9d426b;
	font-size: 18px;
	color: #fff;
	font-style: italic;
	line-height: 24px;
	text-decoration: none;
	box-shadow: 0 1px 25px 0 rgba(0, 0, 0, 0.05) inset, 0 -1px 25px 0 rgba(0, 0, 0, 0.05) inset;
}
.serve .tf{
	width: 66%;
}
.serve .tf:hover{
	box-shadow: 0 1px 25px 0 rgba(0, 0, 0, 0.05) inset, 0 -1px 25px 0 rgba(0, 0, 0, 0.05) inset;
}
.serve .tf .pt{
	text-align: right;
	margin: 22px 75px 0 56px;
}
.oul{
	padding-bottom: 40px;
}
</style>

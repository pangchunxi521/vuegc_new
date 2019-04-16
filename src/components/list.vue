<template>
	<div class="list ">
		<ul class="lis clearfloat">
			<li v-for="item in lists" :key="item.id" class="one">
				<Icon type="ios-car" size="80" />
				<h3>{{ item.title }}</h3>
				<span>{{ item.content }}</span>
				<p class="pa">
					<a :href="href">
						<router-link to="/Serve"><i>{{ msg }}</i></router-link>
					</a>
				</p>
			</li>
		</ul>

		<div class="linea">
			<Divider dashed><p>最新动态</p></Divider>
		</div>

		<ul class="lis clearfloat" id="list2">
			<li v-for="son in listsa" :key="son.id" class="one">
				<div><img :src="son.src" alt="" /></div>
				<h3>{{ son.title }}</h3>
				<span>
					<i>{{ son.content }}</i>
				</span>
				<p class="alt">
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
				</p>
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

	</div>
</template>

<script>
	import '../assets/list.css'
	import Txt from './textplay.vue'
export default {
	name: '',
	data() {
		return {
			msg: '阅读更多',
			com: false,
			xian: true,
			color: '#fff',
			color1: '#ff5a01',
			href: 'javascript:;',
			asrc: 'https://www.haoyi23.com/static/assets/img/carinfo/15.png',
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
				}
			],
			listsa: [
				{
					id: 0,
					src: 'https://www.haoyi23.com/static/assets/img/carinfo/15.png',
					title: '山西运城共发车队',
					content: '用车不用东奔西走, 共发车队应有尽有.☎️:15235903198～～13191198482...'
				},
				{
					id: 1,
					src: 'https://www.haoyi23.com/static/assets/img/carinfo/19.png',
					title: '山西运城共发车队',
					content: '用车不用东奔西走, 共发车队应有尽有.☎️:15235903198～～13191198482...'
				},
				{
					id: 2,
					src: 'https://www.haoyi23.com/static/assets/img/carinfo/45.png',
					title: '山西运城共发车队',
					content: '用车不用东奔西走, 共发车队应有尽有.☎️:15235903198～～13191198482...'
				},
				{
					id: 3,
					src: 'https://www.haoyi23.com/static/assets/img/carinfo/53.png',
					title: '山西运城共发车队',
					content: '用车不用东奔西走, 共发车队应有尽有.☎️:15235903198～～13191198482...'
				}
			]
			
		};
	},
	methods: {
		// 		chang:function(){
		// 				for(var i=0;i<this.listsa.length;i++){
		// 					console.log(this.color)
		// 					this.color = "#fff"?"#ff5a01":"#fff"
		// 		    }
		// 	    }
		//          chang:function(index){
		// 			 this. i = index
		// 		 }
		chang: function() {
			this.com = !this.com;
		},
		change: function() {
			this.com = true;
		},
		cli: function() {
			this.xian = !this.xian;
		},
		clie: function() {
			this.xian = false;
		}
	},
	beforeCreate: function() {
		setInterval(this.chang, 1000);
		setInterval(this.cli, 1000);
	},
	components:{
			Txt
	}
};
</script>

<style scoped="">

</style>

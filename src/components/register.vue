<template>
	<div id="nav">
		<div class="nav_main">
			<div>
				<span>当前服务器时间:{{ date }}</span>
				<ul class="clearfix">
					<li><a href="http://www.baidu.com" target="_blank">搜索</a></li>
					<li><a href="http://www.google.cn/maps/" target="_blank">地图</a></li>
					<li @click="modal5 = true">注册</li>
					<li @click="modal6 = true">登录</li>
				</ul>
				<Modal v-model="modal5" title="" width="800"><Zhuce></Zhuce></Modal>
				<Modal v-model="modal6" title="" width="400"><Login></Login></Modal>
			</div>
		</div>
	</div>
</template>

<script>
import Zhuce from './zhucek.vue';
import Login from './login.vue';
export default {
	name: '',
	data() {
		return {
			date: '',
			modal5: false,
			modal6: false
		};
	},
	methods: {
		tim: function() {
			const toZero = function(n) {
				return n < 10 ? '0' + n : '' + n;
			};
			let time = new Date(),
				y = time.getFullYear(),
				m = toZero(time.getMonth() + 1),
				d = toZero(time.getDate()),
				h = toZero(time.getHours()),
				mo = toZero(time.getMinutes()),
				s = toZero(time.getSeconds());
			this.date = `${y}/${m}/${d}--${h}:${mo}:${s}`;
		},
		close: function() {
			this.modal5 = false;
		},
		sub: function() {
			//注册数据提交
		}
	},
	created: function() {
		setInterval(this.tim, 1000);
	},
	components: {
		Zhuce,
		Login
	}
};
</script>

<style>
.clearfloat:after {
	content: '.';
	display: block;
	visibility: hidden;
	height: 0;
	clear: both;
}

#nav {
	width: 100%;
	height: 26px;
	font-size: 14px;
	background: #ffe;
}
.nav_main {
	width: 60%;
	margin: 0 auto;
}
#nav div ul {
	float: right;
}
#nav div ul li {
	float: left;
	list-style: none;
	padding: 5px;
}
a {
	color: #000;
}
a:hover {
	color: #f40;
}
</style>

<template>
	<div id="header">
		<img src="https://www.haoyi23.com/static/assets/img/logo.png" />
		<Menu mode="horizontal" :theme="theme1">
			<a href="javascript:;" @mouseover="active">
				<span v-if="sho">
					<MenuItem name="1">
						<Icon type="ios-paper" />
						<router-link to="index">首页</router-link>
					</MenuItem>
				</span>
				<span v-if="nsho" class="act">
					<MenuItem name="1">
						<Icon type="ios-paper" />
						<router-link to="index">首页</router-link>
					</MenuItem>
				</span>
			</a>
			<MenuItem name="2">
				<Icon type="md-bus" />
				<router-link to="show">车型展示</router-link>
			</MenuItem>
			<MenuItem name="3">
				<Icon type="ios-people" />
				<router-link to="serve">公司服务</router-link>
			</MenuItem>
			<MenuItem name="4">
				<Icon type="md-contacts" />
				<router-link to="about">关于我们</router-link>
			</MenuItem>
		</Menu>
		
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	data() {
		return {
			theme1: 'light',
			sho:true,
			nsho:''
		};
	},
	methods: {
		active: function() {
			this.sho = false;
			this.nsho =true;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
	border-bottom: 1px solid #ccc;
}
.ivu-layout-header {
	background: #fff;
}
.ivu-menu {
	float: right;
}
#header {
	height: 160px;
	width: 65%;
	margin: 0 auto;
}
.ivu-menu-horizontal {
	height: 160px;
	line-height: 160px;
}
.ivu-menu-item {
	font-size: 20px;
}
a {
	color: #515a6e;
}
.act{
	width: 112px;
	height: 162px;
	background: #f40;
	color:darkgrey
}

</style>

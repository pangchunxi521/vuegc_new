<template>
	<div class="liyou">
		<div class="aric">
			<transition name="slide-fade"><p v-show="curId === 0">2012年9月成立，注册资金人民币500万元，北京市交通委运管局备案。多年大客车租赁经验，服务客户众多，行业良好口碑。</p></transition>
			<transition name="slide-fade"><p v-show="curId === 1">驾驶员均为A本老师傅，驾驶技术优良，素质高，服务好，安全意识强。熟悉山西及周边各条道路交通路况。...</p></transition>
			<transition name="slide-fade"><p v-show="curId === 2">车辆均为2年左右新车，日常专业服务站维修保养，确保车款良好。可为一年以上新班车客户或者长租客户订购0公里新车。...</p></transition>
			<transition name="slide-fade"><p v-show="curId === 3">全部车辆开通免费WIFI，四季舒适的冷暖空调，DVD音响系统、麦克风，移动充电宝，豪华舒适座椅、安全带。...</p></transition>	
			<transition name="slide-fade"><p v-show="curId === 4">所有车辆安装GPS全球定位系统</p></transition>
		</div>
		<div class="cirl">
			<a href="javascript:;" :class="{ cur: curId === 0 }" @click="curId = 0"></a>
			<a href="javascript:;" :class="{ cur: curId === 1 }" @click="curId = 1"></a>
			<a href="javascript:;" :class="{ cur: curId === 2 }" @click="curId = 2"></a>
			<a href="javascript:;" :class="{ cur: curId === 3 }" @click="curId = 3"></a>			
			<a href="javascript:;" :class="{ cur: curId === 4 }" @click="curId = 4"></a>
		</div>
	</div>
</template>

<script>
export default {
	name: '',
	data() {
		return {
			curId: 0
		};
	}
};
</script>

<style scoped>
.liyou {
	width: 1050px;
	height: 110px;
	margin: 10px auto 0;
}
.liyou div p {
	font-size: 18px;
	line-height: 20px;
	font-weight: 500;
	font-style: italic;
	font-family: 'arial';
	padding: 20px;
}
.liyou div a{
	display: inline-block;
	width: 15px;
	height: 15px;
	background: #CCCCCC;
}
.liyou div .cur{
	background: #9d426b;
}
.liyou .cirl{
	text-align: right;
	margin:20px 50px 0  0;
}
.liyou .aric{
	height: 50px;
	overflow: hidden;
	text-align: center;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(0px);
  opacity: 0;
}
</style>

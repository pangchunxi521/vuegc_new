<template>
	<div id="foot">
	<div class="cib">
		<Row type="flex" justify="center" align="top" class="code-row-bg" >
			<Col span="4">
				<div style="height: 220px;width: 290px;">
			        <h4>关于我们</h4>
					<p>运城共发汽车租赁有限公司是经国家工商局批准注册的正规汽车租赁企业,我公司经过不断努力、创新,已成为了能够为用户提供全面,专业,安全,舒适的租车服务。</p>
					<p><a href="">阅读更多...</a></p>
				</div>
			</Col>
			<Col span="4">
				<div style="height: 220px">
					<h4>微信公众号:</h4>
					<div class="pic">
						<img :src="ewm" alt="">
					</div>
				</div>
			</Col>
			<Col span="4">
				<div style="height: 220px" class="zh">
					<h4>资质证书</h4>
					<img :src="zh1" alt="">
					<img :src="zh2" alt="">
				</div>
			</Col>
			<Col span="4">
				<div style="height: 220px">
					<h4>CONTACT US</h4>
					<p>
						<Icon type="ios-call" />
						<span>
							联系电话：{{tel}}
						</span>
					</p>
					<p>
						<Icon type="md-person" />
						<span>
							联系人：{{ceo}}
						</span>
					</p>
					<p>
						<Icon type="md-mail" />
						<span>
							Email:{{mail}}
						</span>
					</p>
				</div>
			</Col>
		</Row>
	</div>
	</div>
</template>

<script>
	export default {
		name:'',
		data(){
			return{
				ewm:"https://www.haoyi23.com/static/assets/img/wxgzhonghao.jpg",
				zh1:"https://www.haoyi23.com/static/assets/img/zhizhao.jpg",
				zh2:"https://www.haoyi23.com/static/assets/img/shuiwu.jpg",
				tel:"15235903198",
				ceo:"任康平",
				mail:"2827943706@qq.com"
			}
		}
	}
</script>

<style>
	#foot{
		width: 100%;
		margin: 0 auto;
		background:url(https://www.haoyi23.com/static/assets/img/pattern.jpg) repeat left top;
		box-shadow: 0 5px 15px 0 rgba(0,0,0,.05) inset, 0 -5px 15px 0 rgba(0,0,0,.05) inset;
	}
	#foot .cib{
		width: 1170px;
		margin: 0 auto;
		padding-top: 28px;
	}
	.ivu-col-span-4{
		width: 23%;
	}
	#foot .cib div p{
		width: 262px;
	}
	.cib div h4{
		margin: 20px 0 20px;
		font-family: 'Droid Sans', sans-serif;
		font-size: 14px;
		color: #5d5d5d;
		font-weight: bold;
		text-transform: uppercase;
		text-shadow: 0 1px 0 rgba(255,255,255,.7);
	}
	.cib div{
		margin-right: 20px;
	}
	.cib div p{
		font-size:14px ;
		line-height: 24px;
	}
	.cib div p a{
		    color: #333333;
    background: 0 0;
    text-decoration: none;
    outline: 0;
    cursor: pointer;
    transition: color .2s ease;
	}
	.cib div p a:hover{
		color:#2d8cf0
	}
	.cib div .pic img{
		width: 144px;
		height: 144px;
	}
		.cib div .zh img{
		width: 105px;
		height: 77px;
	}
</style>

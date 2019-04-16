<template>
	<div class="loginWrapper">
		<div class="reshide">
		<div class="hd"><h2>新用户注册</h2></div>
		<div class="bd">
			<el-form :model="registerForm" :rules="registerRule" ref="registerForm">
				<el-form-item prop="userName">
					<el-input
						type="userName"
						v-model="registerForm.userName"
						placeholder="账号"
						name="usr"
					></el-input>
				</el-form-item>
				<el-form-item prop="pwd">
					<el-input
						v-model="registerForm.pwd"
						placeholder="密码"
						type="password"
					></el-input>
				</el-form-item>
				<el-form-item prop="checkPwd">
					<el-input
						v-model="registerForm.checkPwd"
						placeholder="请再次输入密码"
						type="password"
					></el-input>
				</el-form-item>
				<el-form-item prop="email">
					<el-input v-model="registerForm.email" placeholder="请输入邮箱"></el-input>
				</el-form-item>
				<!-- <el-form-item prop="captcha">
          <el-input v-model="registerForm.captcha" placeholder="请输入验证码">
            <el-button slot="append" @click='getCaptcha'>{{ captchaMsg }}</el-button>
          </el-input>
        </el-form-item> -->
				<el-form-item>
					<el-button type="primary" @click="submitForm('registerForm')" class="submitBtn">
						立即注册
					</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div class="ft"><router-link to="index">已经有账号？马上登录</router-link></div>
		</div>
	</div>
</template>

<script>
// import { doRegister, sendCaptcha } from '../../lib/vueHelper'
import axios from 'axios';
axios.defaults.headers.common['token'] = 'f4c902c9ae5a2a9d8f84868ad064e706';
axios.defaults.headers.post['Content-type'] = 'application/json';
export default {
	name: 'register',
	data() {
		let validateUser = (rule, value, cb) => {
			let pattern = /^[\w\u4e00-\u9fa5]{3,10}$/g;
			if (value === '') {
				cb(new Error('请输入用户名'));
			} else if (!pattern.test(value)) {
				cb(new Error('请输入3-10个字母/汉字/数字/下划线'));
			} else {
				cb();
			}
		};
		let validatePwd = (rule, value, cb) => {
			var pattern = /^\S{3,20}$/g;
			if (value === '') {
				cb(new Error('请输入密码'));
			} else if (!pattern.test(value)) {
				cb(new Error('请输入3-20个非空白字符'));
			} else {
				if (this.registerForm.checkPwd !== '') {
					this.$refs.registerForm.validateField('checkPwd');
				}
				cb();
			}
		};
		let validateCheckPwd = (rule, value, cb) => {
			if (value === '') {
				cb(new Error('请再次输入密码'));
			} else if (value !== this.registerForm.pwd) {
				cb(new Error('两次输入密码不一致!'));
			} else {
				cb();
			}
		};
		return {
			registerForm: {
				userName: '',
				pwd: '',
				checkPwd: '',
				email: '',
				captcha: ''
			},
			registerRule: {
				userName: [{ validator: validateUser, trigger: 'blur' }],
				pwd: [{ validator: validatePwd, trigger: 'blur' }],
				checkPwd: [{ validator: validateCheckPwd, trigger: 'blur' }],
				email: [
					{ required: true, message: '请输入邮箱', trigger: 'blur' },
					{ type: 'email', message: '请输入正确的邮箱', trigger: 'blur,change' }
				],
				captcha: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
			}
		};
	},
	computed: {
		//     captchaMsg () {
		//       return this.$store.getters.getCaptchaMsg
		//     }
	},
	methods: {
		info() {
			this.$Message.info('注册成功！请点击右下角 ‘确定’ 并重新登录.')
		},
		//提交触发
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				let info = this.info
				let reshide = this.reshide
				if (valid) {
					let data = {
						usr: this.registerForm.userName,
						pwd: this.registerForm.pwd,
						email: this.registerForm.email,
						captcha: this.registerForm.captcha
					};

					let datc = JSON.stringify(data);

					axios
						.get('api/aaaa/2.php', datc)
						.then(function(response) {
							console.log(response);
							info()
							console.log(reshide)
							reshide = false
							console.log(reshide)
						})
						.catch(function(error) {
							console.log(error);
						});
				} else {
					return false;
				}
			});
			//console.log(`账号为${this.registerForm.userName},密码为${this.registerForm.pwd},邮箱为${this.registerForm.email}`);
		},
		getCaptcha() {
			this.$refs.registerForm.validateField('email', vaild => {
				if (!vaild) {
					let data = {
						email: this.registerForm.email
					};
					sendCaptcha(this, data);
				} else {
					return false;
				}
			});
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginWrapper {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun,
		sans-serif;
}
.loginWrapper .hd {
	width: 300px;
}
.loginWrapper .hd h2 {
	font-weight: 400;
	color: #20a0ff;
}
.loginWrapper .hd p {
	font-size: 15px;
	color: #1f2f3d;
}
.loginWrapper .bd {
	width: 300px;
}
.loginWrapper .bd .submitBtn {
	width: 100%;
}
.loginWrapper .bd .el-form-item:last-child {
	margin-bottom: 10px;
}
.loginWrapper .ft {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	width: 300px;
}
.loginWrapper .ft a {
	font-size: 14px;
	text-decoration: none;
	color: #20a0ff;
}
</style>

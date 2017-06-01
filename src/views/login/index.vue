<template>
	<div class="login-container">
		<el-form :model="loginForm" :rules="loginRules" ref="loginForm">
			<el-form-item>
				<el-input v-model="loginForm.email" placeholder="邮箱"></el-input>
			</el-form-item>
			<el-form-item>
				<el-input v-model="loginForm.password" placeholder="密码"></el-input>
			</el-form-item>
			<el-form-item>
				<el0-button type="primary">登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>


	export default {
		name: 'login',
		data: function(){
			// 验证邮箱
			const validateEmail = (rule,value,callback) => {
				if(!(value)){
					callback(new Error('请输入正确的合法邮箱'))
				}else{
					callback()
				}
			};
			// 验证邮箱
			const validatePassword = (rule,value,callback) => {
				if(value.length < 6){
					callback(new Error('密码不能小于6位'))
				}else{
					callback()
				}
			};
			return {
				loginForm: {
					email: 'xx@qq.com',
					password: ''
				},
				loginRules: {
					email: [
						{
							required: true,
							trigger: 'blur',
							validator: validateEmail
						}
					],
					password: [
						{
							required: true,
							trigger: 'blur',
							validator: validatePassword
						}
					],
				}
			}
		}
	}
</script>
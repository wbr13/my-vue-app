<template>
  <div class="background">
    <slot name="title"></slot>
    <el-form class="login_form" ref="loginFormRef" label-width="auto" :model="loginForm" :rules="loginRules">
      <el-form-item prop="userName">
        <span class="labels" slot="label">用户名</span>
        <el-input prefix-icon="el-icon-user" v-model="loginForm.userName"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="labels" slot="label">密码</span>
        <el-input prefix-icon="el-icon-lock" v-model="loginForm.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <slot name="login_button"></slot>
        <el-button class="reset_button" type="danger" @click="resetLogin">重置</el-button>
        <br>
        <el-button class="to_register" type="text" @click="registerDialog=true">还没有账号？立即注册</el-button>
        <br>
        <slot name="switch_button"></slot>
      </el-form-item>
    </el-form>
    <el-button icon="el-icon-back" class="back" type="text" @click="goto('/')">返回主界面</el-button>
    <el-form ref="registerRef" :model="registerForm" :rules="registerRules" label-width="auto">
      <el-dialog class="register_dialog" title="用户注册" width="30%" :border="true"
                 :on-close="cancelRegister" :append-to-body="true" :visible.sync="registerDialog">
        <div class="register_dialog_container">
          <el-form-item label="账号类别" prop="registerType">
            <el-select class="dialog_component" clearable v-model="registerForm.registerType" placeholder="请选择注册类别">
              <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value"/>
            </el-select>
          </el-form-item>
          <el-form-item label="用户名" prop="userName">
            <el-input class="dialog_component" prefix-icon="el-icon-user" v-model="registerForm.userName"
                      placeholder="请设置用户名"/>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input class="dialog_component" prefix-icon="el-icon-lock" v-model="registerForm.password"
                      placeholder="请设置密码" show-password/>
          </el-form-item>
          <el-form-item label="确认密码" prop="passwordConfirm">
            <el-input class="dialog_component" prefix-icon="el-icon-lock" v-model="registerForm.passwordConfirm"
                      placeholder="请再次确认密码" show-password/>
          </el-form-item>
        </div>
        <el-button class="dialog_button" @click="register" type="success">注册</el-button>
        <el-button @click="resetRegister" type="info">重置</el-button>
      </el-dialog>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'publicVersion',
  data(){
    return {
      registerDialog: false,
      loginForm: {
        userName: '',
        password: ''
      },
      loginRules: {
        userName: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      },
      registerForm: {
        registerType: '',
        userName: '',
        password: '',
        passwordConfirm: ''
      },
      registerRules: {
        registerType: [
          {
            required: true,
            message: '请选择账号类别',
            trigger: 'blur'
          }
        ],
        userName: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
          {
            min: 6,
            max: 16,
            message: '用户名长度需要在6-16位之间'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            min: 6,
            max: 20,
            message: '密码长度需要在6-20位之间'
          }
        ],
        passwordConfirm: [
          {
            required: true,
            message: '请再次输入密码',
            trigger: 'blur'
          },
          {
            min: 6,
            max: 20,
            message: '密码长度需要在6-20位之间'
          }
        ]
      },
      typeOptions: [{
        value: '工程类账号',
        label: '工程类账号',
      },{
        value: '大众类账号',
        label: '大众类账号',
      }]
    }
  },
  methods: {
    register(){

    },
    cancelRegister(){
      this.registerDialog = false;
      this.$refs.registerRef.resetFields();
    },
    resetLogin(){
      this.$refs.loginFormRef.resetFields();
    },
    resetRegister(){
      this.$refs.registerRef.resetFields();
    },
    goto(value){
      this.$router.push(value);
    }
  }
}
</script>

<style>
.background{
  height: 98vh;
  background-size: cover;
  background-position: center;
  text-align: center;
}
.login_form {
  font-weight: bold;
  position: relative;
  top: 25%;
  left: 38%;
  text-align: center;
  width: 20%;
  height: auto;
}
.labels{
  color: white;
}
.back{
  margin-top: 350px;
  margin-left: 1250px;
  color: white;
}
.register_dialog{
  text-align: center;
}
.dialog_button{
  margin-left: 30px;
}
.dialog_component{
  width: 95%;
}
</style>

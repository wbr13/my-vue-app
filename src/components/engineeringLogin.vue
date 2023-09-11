<template>
  <div class="background">
    <login>
      <template v-slot:title>
        <span class="text">数字桥梁博物馆<br>工程版</span>
      </template>
      <template v-slot:login_button>
        <el-button class="login_button" type="primary" @click="engineeringLogin">登录</el-button>
      </template>
      <template v-slot:switch_button>
        <el-button class="switch_button" @click="goto('/publicVersion')">切换到大众版</el-button>
      </template>
    </login>
  </div>
</template>

<script>
import login from './login.vue'
export default {
  name: 'engineeringVersion',
  components: {
    login
  },
  data(){
    return{

    }
  },
  methods: {
    engineeringLogin(){

    },
    goto(value){
      this.$router.push(value);
    }
  }
}
</script>

<style scoped>
.background{
  background-image: url(../assets/sunset_bridge2.png);
  height: 98vh;
  background-size: cover;
  background-position: center;
  text-align: center;
}
.text{
  font-weight: bold;
  font-size: 54px;
  position: relative;
  top: 20%;
  color: white;
}
.switch_button{
  background: royalblue;
  color: white;
  font-weight: bold;
}
</style>

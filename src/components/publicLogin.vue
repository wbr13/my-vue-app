<template>
  <div class="background">
    <login>
      <template v-slot:title>
        <span class="text">数字桥梁博物馆<br>大众版</span>
      </template>
      <template v-slot:login_button>
        <el-button class="login_button" type="primary" @click="publicLogin">登录</el-button>
      </template>
      <template v-slot:switch_button>
        <el-button class="switch_button" @click="goto('/engineeringLogin')">切换到工程版</el-button>
      </template>
    </login>
  </div>
</template>

<script>
import login from "./login.vue";

export default {
  name: 'publicLogin',
  components: {
    login
  },
  data(){
    return {

    }
  },
  methods: {
    publicLogin(){

    },
    goto(value){
      this.$router.push(value);
    }
  }
}
</script>

<style scoped>
.background{
  background-image: url(../assets/sunset_bridge.png);
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
  color: black;
}
.switch_button{
  background: orange;
  color: white;
  font-weight: bold;
}
</style>

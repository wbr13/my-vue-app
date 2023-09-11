<template>
  <div class="background">
    <span class="text">数字桥梁博物馆</span>
    <el-form class="buttons">
      <el-button class="engineering" @click="goto('/engineeringVersion')">工程版</el-button>
      <el-button class="public" @click="goto('/publicVersion')">大众版</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      backgroundImage: require('../assets/sunrise_bridge.png'),
    }
  },
  methods: {
    goto(value){
      this.$router.push(value);
    }
  },
  created() {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background{
  background-image: url(../assets/sunrise_bridge.png);
  height: 98vh;
  background-size: cover;
  background-position: center;
  text-align: center;
}
.text{
  font-weight: bold;
  font-size: 54px;
  position: relative;
  top: 30%;
}
.buttons{
  position: relative;
  top: 35%;
}
.engineering{
  width: 150px;
  background-color: coral;
  color: white;
  font-size: 20px;
  font-weight: bold;
}
.public{
  width: 150px;
  background-color: royalblue;
  color: white;
  font-size: 20px;
  font-weight: bold;
}
</style>

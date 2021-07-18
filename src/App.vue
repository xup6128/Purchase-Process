<template>
  <div id="app" @click="closeOptBox">
    <user-nav :optBoxActive="optBoxActive" @OptBoxIsActive="optBoxActive = true"/>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import UserNav from './components/UserNav.vue'

export default {
  name: 'App',
  data(){
    return{
      optBoxActive: false,
    };
  },
  components: {
    HelloWorld,
    UserNav,
    
  },
  methods:{
    closeOptBox(){
      // 若optBox開啟則監聽權畫面以關閉optBox顯示
      if(!this.optBoxActive){return};
      this.optBoxActive = false;
    }
  }
}
</script>

<style lang="scss">
  $main-color: #F0F0F0; //backgroundColor
  // $color1: #4C9AFF; //button
  // $color2: #0F85C5; //button__border

  body{
    background-color: $main-color;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>

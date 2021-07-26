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
  body{
    background-color: #F0F0F0 !important;
  }
  .img--resp{
    max-width: 100%;
    height: auto;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>

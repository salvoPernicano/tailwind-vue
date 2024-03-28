<script>
import AppNavigation from './components/AppNavigation.vue';

export default {
  components:{
    AppNavigation,
  },
  data () {
    

    return {}
  }
}
</script>

<template>
  <AppNavigation/>
  <div>
    <router-view></router-view>
  </div>
</template>



<style >
body{
  background-color: rgb(222, 226, 230);
}
</style>

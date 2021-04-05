<template>
  <div class="main">
    <Navbar/>
    <div class="container">
      <div class="loading">

      </div>
      <router-view/>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
import {provide, onBeforeMount} from 'vue'
import store from '@/store'

export default {
  components:{
    Navbar
  },
  setup() {
    provide('store', store)
    onBeforeMount(() => {
      store.actions.getGames()
    })
     
  },
}
</script>
<style>
.container{
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr;
  width: calc(100% - 90px);
  margin-left: 85px ;
}
</style>

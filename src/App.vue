<template>
  <div id="app">
      <div class="top-nav">
        <v-nav></v-nav>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
      
  </div>
</template>

<script>
import nav from './components/Nav/Nav.vue'
export default {
  name: 'app',
  components: {
    'v-nav':nav
  }
}
</script>

<style>
  .top-nav {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: white;
    z-index: 100;
  }

  .content {
    margin-top: 45px;
  }
</style>

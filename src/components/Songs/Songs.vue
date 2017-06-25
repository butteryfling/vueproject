<template>
  <div class="songs">
    <div class="songs-tab">
      <div class="tab-item">
        <router-link to="/one">最新</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/two">最热</router-link>
      </div>
    </div>
    

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  .songs-tab {
    display:flex;
    width:80%;
    height:40px;
    line-height:40px;
    margin: 5px auto;
  }
  
  .tab-item {
    flex:1;
    text-align:center;
  }

  .tab-item a{
    display:block;
    font-size:14px;
    color:rgb(77,85,93);
  }

  .active {
    border-bottom: 2px solid red;
  }
</style>
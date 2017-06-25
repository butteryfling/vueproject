<template>
  <div class="nav-top">
    <div class="tab-item">
      <router-link to="/personal">个性推荐</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/songs">歌单</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/board">排行榜</router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .nav-top {
    display:flex;
    width:100%;
    height:40px;
    line-height:40px;
    margin-bottom: 10px;
    border-bottom: 1px solid #C8C3C3;
  }
  
  .tab-item {
    flex:1;
    text-align:center;
  }

  .tab-item a{
    display: inline-block;
    font-size:18px;
    color:rgb(77,85,93);
    text-decoration: none;
  }

  .active {
    border-bottom: 2px solid red;
  }
</style>
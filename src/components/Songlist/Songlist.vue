<template>
  <div class="songs-wrapper">
    <h1>{{title}}</h1>
    <ul  class="clear">
      <li v-for="value in songs" class="songs-list">
        <div class="each-song">
          <img :src="value.picUrl">
          <span>{{value.name}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    songs : {
      type: Array
    },
    title : {
      type: String
    }
  }
}
</script>

<style>
  h1{
    font-size: 18px;
  }

  h1::before {
    content: "";
    display: inline-block;
    width: 5px;
    height: 18px;
    background-color: red;
    vertical-align: middle;
    margin-right: 10px;
    margin-bottom: 3px;
  }
  .songs-list{
    float: left;
    width: 50%;
  }
  .each-song{
    /*height: 80px;*/
    width: 100%;
    padding: 5px;
  }
  .each-song img{
    width: 100%;
  }
</style>
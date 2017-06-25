<template>
  <div class="one">
    <div class="zuixin-wrapper">
      <ul  class="clear">
        <li v-for="value in songs_xin" class="songs-list">
          <div class="each-song">
            <img :src="value.coverImgUrl">
            <span>{{value.name}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      songs_xin:{}
    }
  },
  created() {
    this.$http.get('http://localhost:8080/data/zuixin.json').then(response => {
      // get body data
      this.songs_xin = response.body.playlists
      console.log(this.songs_xin)
    }, response => {
      // error callback
    })
  }
}
</script>

<style scoped>
  .songs-list{
    float: left;
    width: 50%;
  }
  .each-song{
    /*height: 80px;*/
    width: 100%;
    padding: 5px;
    text-align: center;
  }
  .each-song img{
    width: 100%;
  }
</style>
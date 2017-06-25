<template>
  <div class="board">
    <div class="songs-wrapper" v-for="(value,index) in songs_order">
      <div class="list-left" :class="{'textColor':index<3}">
        {{index+1}}
      </div>
      <div class="list-right">
        <ul>
          <li>{{value.name}}</li>
        </ul>
      </div>
      
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      songs_order:[]
    }
  },
  created () {
    this.$http.get('http://localhost:8080/data/board.json').then(response => {
      this.songs_order = response.body.playlist.tracks
      console.log(this.songs_order)
    }, response => {
    })
  }
}
</script>

<style scoped>

  .songs-wrapper{
    display: flex;
    line-height: 40px;
  }

  .list-left {
    flex: 0 0 50px;
    text-align: center;
  }

  .textColor {
    color: red;
  }

  .list-right {
    flex: 1;
  }

  .list-right li {
    border-bottom: 1px solid #E0E0E0;
  }
</style>
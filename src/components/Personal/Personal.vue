<template>
  <div class="personal">
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="value in slides">
            <img :src="value"/>
          </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      
      <!-- 如果需要导航按钮 -->
     <!--  <div class="swiper-button-prev"></div>
     <div class="swiper-button-next"></div> -->
      
      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
    
    <songlist :songs="songs_tui" title="推荐歌单"></songlist>
    <songlist :songs="songs_du" title="独家放送"></songlist>
    <songlist :songs="songs_mv" title="推荐MV"></songlist>
  </div>

</template>

<script>
import Songlist from '../Songlist/Songlist.vue'
export default {
  name: 'personal',
  data() {
    return {
      songs_tui:[],
      songs_du:[],
      songs_mv:[],
      slides: ['../../src/assets/banner1.jpg', '../../src/assets/banner2.jpg', '../../src/assets/banner3.jpg','../../src/assets/banner4.jpg']
    }
  },
  mounted () {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        autoplay : 1500,
        // 如果需要滚动条
        scrollbar: '.swiper-scrollbar'
    })   
    setInterval(function(){
      console.log(mySwiper.autoplaying);
      if (!mySwiper.autoplaying) {
        mySwiper.startAutoplay();
      }
    },1500)
  },
  methods: {
      
  },
  created() {
    this.$http.get('http://localhost:8080/data/tuijian.json').then(response => {
      // get body data
      this.songs_tui = response.body.result
      console.log(this.songs_tui)
    }, response => {
      // error callback
    })

    this.$http.get('http://localhost:8080/data/dujiafangsong.json').then(response => {
      // get body data
      this.songs_du = response.body.result
      console.log(this.songs_du)
    }, response => {
      // error callback
    })

    this.$http.get('http://localhost:8080/data/tuijianmv.json').then(response => {
      // get body data
      this.songs_mv = response.body.result
      console.log(this.songs_mv)
    }, response => {
      // error callback
    })
  },
  components: {
    Songlist
  }
}
</script>

<style scoped>
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

  .swiper-container {
      height: 200px;
      /*margin-bottom: 80px;*/
  }

  .swiper-slide img{
    width: 100%;
  }

  .swiper-scrollbar {
    display: none;
  }
</style>
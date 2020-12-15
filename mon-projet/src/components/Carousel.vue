<template>
  <div class="car">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
     
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-src="images/Group 20.jpg"></b-carousel-slide>  
      <b-carousel-slide img-src="images/Group 21.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="images/Group 22.jpg"></b-carousel-slide>  
    </b-carousel>  
  </div>
</template>

<script>

  export default {
    name:'Carousel',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>
<style scoped lang='scss'>
.car{
  margin: 0 2%;
}
</style>

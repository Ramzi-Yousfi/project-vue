<template>
<div>
 
 <Main1/>
<Carousel/>
 <Main2/>

</div>
</template>
<script>

import Carousel from '@/components/Carousel.vue';
import Main1 from '@/components/Main1.vue';
import Main2 from '@/components/Main2.vue';
export default {
    name:'Accueil',
    components: {
    Main1,
    Carousel,
     Main2,
    
      
  },
}

</script>
<style lang="sass" scoped>

</style>
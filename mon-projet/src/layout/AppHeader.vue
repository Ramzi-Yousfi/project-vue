<template>
<div class="app-header">
 <NavBar/>
  <SideBar/>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SideBar from '@/components/SideBar.vue'
export default {
  name:"app-header",
   components: {
    NavBar,
    SideBar
  },
  props: {
   
  }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>


</style>


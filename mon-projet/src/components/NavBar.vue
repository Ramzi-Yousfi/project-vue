<template>
    <nav id="nav-bar">
    <div class="header-top">
      <router-link  to="/"><img src="images/Nanou 1.svg" alt=""></router-link>
      <div id="btn">
        <span class="fas fa-bars"></span>
      </div>
      <div id="user">
        <div class="search-bar">
          <input type="text" id="recherche" class="invisible" placeholder="Que cherchez vous">
          <i class="fas fa-search"></i>
        </div>
        <a href=""><i class="far fa-heart"></i></a>
        <router-link  to="/register"><i class="fas fa-user"></i></router-link>
        <a href=""><i class="fas fa-shopping-basket"></i></a>
      </div>
      <div class="basket invisible">
        <i class="fas fa-caret-up"></i>
        <div><h1>votre panier et vide </h1>
          <button>voir le panier</button>
        </div>
      </div>
      <div class="heart invisible">
        <i class="fas fa-caret-up"></i>
        <div>
          <h1>votre liste des souhais est vide </h1>
          <button>voir la liste des souhais</button>
        </div>
      </div>
    </div>
  </nav>

</template>

<script >
export default {
  name: 'navbar',
  props: {
   
  },
  methods: {


}
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
@import '@/assets/scss/style.scss'

</style>


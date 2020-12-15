<template>
    <nav class="side-bar">
    <div class="text"><a href="#"></a><br></div>
    <ul>
      <li class="menu" v-on:click="hide"><a href="#">Bébé Fille</a>
        <ul id="sub-menu" class="invisible">
          <li><a href="">1-6 mois</a></li>
          <li><a href="">6-12 mois</a></li>
          <li><a href="">12-24 mois</a></li>
          <li><a href="">plus que 24 mois</a></li>
        </ul>
      </li>
      <li class="menu2" v-on:click="hide2"><a href="#">Bébé Garçon</a>
        <ul id="sub-menu2" class="invisible">
          <li><a href="">1-6 mois</a></li>
          <li><a href="">6-12 mois</a></li>
          <li><a href="">12-24 mois</a></li>
          <li><a href="">plus que 24 mois</a></li>
        </ul>
      </li>
      <li class="menu"><a href="#"><i class="fas fa-baby"></i> Naissance </a></li>
      <li class="menu"><a href="#"><i class="fas fa-baby-carriage"></i> Poussettes</a></li>
      <li class="menu"><a href="#">Ventes Flash </a></li>
      <div class="search-bar-2">
        <input type="text" id="recherche" placeholder="Que cherchez vous">
        <a href=""><i class="fas fa-search"></i></a>
      </div>
    </ul>
    </nav>

</template>

<script>
export default {
  name: 'navbar',
  props: {
   
  },
  methods :{
   hide:function(){
   
    let sub1 = document.getElementById('sub-menu');
   sub1.classList.toggle("invisible");
   },
    hide2:function(){
   
    let sub2 = document.getElementById('sub-menu2');
   sub2.classList.toggle("invisible");

}}}

</script>



<style lang='scss'>
@import '@/assets/scss/style.scss';

</style>


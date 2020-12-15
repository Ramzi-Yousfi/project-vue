<template>
    <div class="app-footer">
        <div class="container ">
     
        <div class="colone">
          <img src="images/Delivery.svg" alt="">
          <h1 class="align-items-center">Livraison gratuite</h1>
        </div>
     
    
        <div class="colone">
          <img src="images/Secure.svg" alt="">
          <h1 class="align-items-center">Paiement 100% sécurisé</h1>
        </div>
    
      
        <div class="colone">
          <img src="images/Refresh.svg" alt="">
          <h1 class="align-items-center">Retours gratuits</h1>
        </div>
     
     
        <div class="colone">
          <img src="images/Clock.svg" alt="">
          <h1 class="align-items-center">14 jours pour changer d'avis</h1>
        </div>
      </div>
   
      <div class="newsletter">
        <label for="news">Inscription Newsleter</label>
        <div class="news">
          <input type="text" id="news" placeholder="votre Email">
          <a href="">envoyer</a>
        </div>
      </div>
      <p class="cgu">CGV | CGU | conditions spécifiques Nanou</p>
</div>
</template>
<script>
export default {
  name:"app-footer",
  props: {
   
  }
}
</script>
<style lang='scss'>
@import '@/assets/scss/style.scss'
</style>


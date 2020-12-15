<template>
<div class="register">
   <div class=" justify-content-md-center contact">
    <form class="form-signin col-md-5 ">
        <div class="text-center mb-4 logo-contact">
          <img class="mb-4" src="images/Nanou 1.svg" alt="" width="200" height="200">
          <h1 class="h3 mb-3 font-weight-normal">connectez-vous</h1>
        </div>
      
        <div class="form-label-group">
          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
          <label for="inputEmail"></label>
        </div>
      
        <div class="form-label-group">
          <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
          <label for="inputPassword"></label>
        </div>
      
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Se sevenir de moi
          </label>
        </div>
        
        <button class="btn-1 btn-lg btn-primary btn-block" type="submit">Me connecter</button>
        <br>
        <br>
        <div class="text-center mb-4">
            <h1 class="h3 mb-3 font-weight-normal">Pas encore client ?</h1>
          </div>
          <div class="d-flex justify-content-center mt-5" >
              <a href="#" class="btn btn-primary btn-lg active btn-inscription " role="button" aria-pressed="true"  v-on:click="show">Inscriver-vous</a>
          </div>
        <p class="mt-5 mb-3 text-muted text-center">&copy; Nanou</p>
      </form>
    </div>
      <form class="inscription invisible ">
        <div class="form-row ">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email" required>
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Mot de passe</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Mot de passe" required>
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Addresse</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="1234 rue " required >
        </div>
        <div class="form-group">
          <label for="inputAddress2">Complement d'adresse</label>
          <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, étage" required>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">ville</label>
            <input type="text" class="form-control" id="inputCity" required>
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">état</label>
            <select id="inputState" class="form-control" required>
              <option selected>France </option>
              <option>France </option>
              <option>Italie</option>
              <option>Suisse </option>
              <option>Allemagne</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="inputZip">Code postal</label>
            <input type="text" class="form-control" id="inputZip" required pattern="[0-9]{5}">
          </div>
        </div>
        
        <button type="submit" class="btn btn-primary btn-inscription-2">m'inscrire</button>
      </form>
</div>
</template>
<script>
export default {
    name:'Register',
     methods :{
   show:function(){
    let ins=document.querySelector('.contact')
    let  enr= document.querySelector('.inscription');
    // ins.classList.add('invisible')
    // enr.classList.remove("invisible");
    // enr.Style=('magin','-400px 0 0 0 ')
   ins.style.transition = "all 2s ease-in-out";
   ins.style.display = "none";
   enr.style.transition = "all 2s ease-in-out";
  enr.style.height = "400px";
    enr.classList.remove("invisible");
   },
   
}}
</script>
<style lang="sass" scoped>

</style>
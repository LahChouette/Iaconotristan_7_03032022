<template>
    
  <div class="card">
    
    <h1 class="card__title">Connexion</h1>
    <p class="card__subtitle">
        Tu n'as pas encore de compte ? <span class="card__action"><router-link to="/signup">Créer un compte</router-link></span>
    </p>
    <div class="form-row">
      <input class="form-row__input" type="text" placeholder="Username"/>
    </div>
    <div class="form-row">
      <input class="form-row__input" type="password" placeholder="Mot de passe"/>
    </div>
    <div class="form-row">
      <button class="button">
        Connexion
      </button>
    </div>
  </div>
</template>

<script>
//import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'Login',
  /*components: {
    HelloWorld
  }*/
}
</script>
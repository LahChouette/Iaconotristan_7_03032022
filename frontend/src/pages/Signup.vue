<template>
  <div class="card">
    <h1 class="card__title">Inscription</h1>
    <p class="card__subtitle">Tu as déjà un compte ? <span class="card__action"><router-link to="/">Se connecter</router-link></span></p>
    <div class="form-row">
      <input class="form-row__input" type="text" placeholder="Username"/>
    </div>
    <div class="form-row">
      <input class="form-row__input" type="text" placeholder="Adresse mail"/>
    </div>
    <div class="form-row">
      <input class="form-row__input" type="password" placeholder="Mot de passe"/>
    </div>
    <div class="form-row">
      <button class="button">
        Créer mon compte
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup'
}
</script>
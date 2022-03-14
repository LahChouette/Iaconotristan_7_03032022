<template>

  <div class="card">
    <p>Coucou ici le menu qui s'affiche quand on est connecté</p>
    <h1 class="card__title">Connexion</h1>
    <p class="card__subtitle">Tu n'as pas encore de compte ? <span class="card__action">Créer un compte</span></p>
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
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
  max-width: 100%;
  background:white;
  border-radius: 16px;
  padding:32px;
}
.card__title {
  text-align:center;
  font-weight: 800;
}
.card__subtitle {
  text-align: center;
  color:#666;
  font-weight: 500;
}
  .button {
    background: #2196F3;
    color:white;
    border-radius: 8px;
    font-weight: 800;
    font-size: 15px;
    border: none;
    width: 100%;
    padding: 16px;
    transition: .4s background-color;
  }
  .card__action {
    color:#2196F3;
    text-decoration: underline;
  }
  .card__action:hover {
    cursor:pointer;
  }
  .button:hover {
    cursor:pointer;
    background: #1976D2;
  }
  
  .form-row {
    display: flex;
    margin: 16px 0px;
    gap:16px;
    flex-wrap: wrap;
  }
  .form-row__input {
    padding:8px;
    border: none;
    border-radius: 8px;
    background:#f2f2f2;
    font-weight: 500;
    font-size: 16px;
    flex:1;
    min-width: 100px;
    color: black;
  }
  .form-row__input::placeholder {
    color:#aaaaaa;
  }

</style>
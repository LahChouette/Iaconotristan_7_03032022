<template>
  <div class="card">
    <h1 class="card__title">Connexion</h1>
    <p class="card__subtitle">
      Tu n'as pas encore de compte ?
      <span class="card__action"
        ><router-link to="/signup">Créer un compte</router-link></span
      >
    </p>
    <div class="form-row">
      <input
        class="form-row__input"
        type="text"
        placeholder="Username"
        v-model="username"
      />
    </div>
    <div class="form-row">
      <input
        class="form-row__input"
        type="password"
        placeholder="Mot de passe"
        v-model="password"
      />
    </div>
    <div class="form-row">
      <button class="button" @click.prevent="logIn">Connexion</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Signup",
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    // Création d'un nouvel user dans la base
    logIn() {
      if (this.username !== null || this.password !== null) {
        axios
          .post("http://localhost:3000/api/user/login", {
            username: this.username,
            password: this.password,
          })
          .then((response) => {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userId", response.data.userId);
            localStorage.setItem("username", response.data.username);
            localStorage.setItem("isAdmin", response.data.isAdmin);
            this.$router.push("/wall");
          })
          .catch((error) => console.log(error));
      } else {
        alert("oops ! Un problème est survenue avec vos saisies");
      }
    },
  },
};
</script>

<style scoped>
.card {
  max-width: 100%;
  background: white;
  border-radius: 16px;
  padding: 32px;
  margin-top: 60px;
}
.card__title {
  text-align: center;
  font-weight: 800;
}
.card__subtitle {
  text-align: center;
  color: #666;
  font-weight: 500;
}
.button {
  background: #2196f3;
  color: white;
  border-radius: 8px;
  font-weight: 800;
  font-size: 15px;
  border: none;
  width: 100%;
  padding: 16px;
  transition: 0.4s background-color;
}
.card__action {
  color: #2196f3;
  text-decoration: underline;
}
.card__action:hover {
  cursor: pointer;
}
.button:hover {
  cursor: pointer;
  background: #1976d2;
}

.form-row {
  display: flex;
  margin: 16px 0px;
  gap: 16px;
  flex-wrap: wrap;
}
.form-row__input {
  padding: 8px;
  border: none;
  border-radius: 8px;
  background: #f2f2f2;
  font-weight: 500;
  font-size: 16px;
  flex: 1;
  min-width: 100px;
  color: black;
}
.form-row__input::placeholder {
  color: #aaaaaa;
}
</style>
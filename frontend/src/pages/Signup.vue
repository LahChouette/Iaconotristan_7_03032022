<template>
  <div class="card">
    <h1 class="card__title">Inscription</h1>
    <p class="card__subtitle">
      Tu as déjà un compte ?
      <span class="card__action"
        ><router-link to="/login">Se connecter</router-link></span
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
        type="text"
        placeholder="Adresse mail"
        v-model="email"
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
      <button class="button" @click.prevent="sendSignup">
        Créer mon compte
      </button>
    </div>
  </div>
</template>

<script>
import Axios from '@/_services/axios.service'

export default {
  name: "Signup",
  data() {
    return {
      username: null,
      email: null,
      password: null,
    };
  },
  methods: {
    sendSignup() {
      const regexPassword = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/;
      const regexEmail =
        /^[a-z0-9!#$ %& '*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&' * +/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/g;
      const usernameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

      if (
        (this.email !== null ||
          this.username !== null ||
          this.password !== null) &&
        regexPassword.test(this.password) &&
        regexEmail.test(this.email) &&
        usernameRegex.test(this.username)
      ) {
        Axios
          .post("user/signup", {
            username: this.username,
            email: this.email,
            password: this.password,
          })
          .then(() => {
            this.$router.push({ path: "/login" });
          })
          .catch((err) => {
            console.log(err);
            alert("oops ! Un problème est survenue avec vos saisies");
          });
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
  background: #38618c;
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
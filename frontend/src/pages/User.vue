<template>
  <div class="card">
    <h1 class="card__title">Espace Perso de {{ user.username }}</h1>
    <p>Email : {{ user.email }}</p>
    <p>Pseudo : {{ user.username }}</p>
    <div class="form-row">
      <button class="button" @click="logout">Déconnexion</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "User",
  data() {
    return {
      user: "",
    };
  },

  created() {
    this.displayProfil();
  },

  methods: {
    // Affiche le profil du user courant
    displayProfil() {
      const id = localStorage.getItem("userId");
      axios
        .get("http://localhost:3000/api/user/me", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.user = response.data;
        })
        .catch(() => {
          //window.location.reload();
        });
    },

    logout() {
       localStorage.clear();
       this.$router.push({ path: "/login" }); 
    }
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
</style>
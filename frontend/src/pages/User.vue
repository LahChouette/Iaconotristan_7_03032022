<template>
  <div class="card">
    <i class="fa-regular fa-circle-user"></i>
    <h1 class="card__title">{{ user.username }}</h1>
    <p class="card__info">Email : {{ user.email }}</p>
    <div class="form-row">
      <button class="button">Changer le mot de passe</button>
      <button class="button-del" @click="deleteAccount">Supprimer le compte</button>
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
    },

    deleteAccount() {
      axios
        .delete("http://localhost:3000/api/user/delete", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then(() => {
          localStorage.clear();
          this.$router.push({ path: "/signup" });
        })
        .catch((error) => console.log(error));
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
.fa-regular {
  font-family: "Font Awesome 6 Free";
  font-weight: 400;
  font-size: 200px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.card__title {
  text-align: center;
  font-weight: 800;
}

.card__info {
  font-weight: 200;
  font-size: 18px;
  white-space: nowrap;
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

.button-del {
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
.button-del:hover {
  cursor: pointer;
  background: #f32a23;
}

.form-row {
  display: flex;
  margin: 16px 0px;
  gap: 16px;
  flex-wrap: wrap;
}
</style>


<template>
  <div class="card">
    <i class="fa-regular fa-circle-user"></i>
    <h1 class="card__title">{{ user.username }}</h1>
    <p class="card__info">Email: {{ user.email }}</p>
    <div class="form-row">
      <p class="card__info">Changer de mot de passse:</p>
      <input
        class="form-row__input"
        type="password"
        placeholder="Nouveau mot de passe"
        v-model="newPassword"
      />
      <input
        class="form-row__input"
        type="password"
        placeholder="Répéter le nouveau mot de passe"
        v-model="RepeatNewPassword"
      />
      <button class="button" @click="changePassword">
        Changer le mot de passe
      </button>
    </div>
    <div class="form-row">
      <button class="button-dec" @click="logout">Déconnexion</button>
      <button class="button-del" @click="deleteAccount">
        Supprimer le compte
      </button>
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
      newPassword: null,
      RepeatNewPassword: null
      
    };
  },

  created() {
    this.displayProfil();
  },

  methods: {
    // Affiche le profil du user courant
    displayProfil() {
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

    changePassword() {
      //Controle de la saisie du nouveau password
      //Controle de repeat et non null
      if (
        this.newPassword == this.RepeatNewPassword &&
        this.newPassword != "" &&
        this.RepeatNewPassword != ""
      ) {
        axios
          .put(
            "http://localhost:3000/api/user/update",
            {
              newPassword: this.newPassword
            },
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
              }
            }
          )
          .then(response => {
            console.log("pwd change", response);
          })
          .catch(err => {
            console.log("admin", err);
          });
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

.button-dec {
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

.button-dec:hover {
  cursor: pointer;
  background: #1976d2;
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


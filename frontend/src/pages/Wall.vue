<template>
  <div class="main">
    <div class="card-user">
      <span class="card__action-me"
        ><router-link to="/user/me"
          ><i class="fa-solid fa-user-gear"></i></router-link
      ></span>
    </div>
    <div class="message">
      <div>
        <div class="block-post">
          <form class="form-block">
            <div class="input-group input-group-1">
              <i class="fa-regular fa-circle-user"></i>
              <input class="input-text" id="input_text" type="text" v-model="content" placeholder="Racontez nous une incroyable histoire"/>
            </div>
            <div class="input-group">
              <div class="custom-file">
                <input
                  name="inputFile"
                  type="file"
                  id="inputFile"
                  aria-describedby="inputFileAddon"
                  @change="onFileChange"
                />
              </div>
            </div>
            <input type="submit" class="button-env" value="Submit"  @click.prevent="createPost"/>
          </form>
        </div>
      </div>
    </div>
    <div class="mur">
      <h3 class="mur__titre">Publications récents</h3>
    </div>
    <Post/>
  </div>
</template>

<script>
import axios from "axios";
import Post from "../components/Post";
export default {
  name: "Mur",
  components: {
    Post
  },
   data() {
    return {
      content: null,
      postImage: null,
    };
  },
  methods: {
    createPost() {
      const fd = new FormData();
      fd.append("inputFile", this.postImage);
      fd.append("content", this.content);
      console.log("test récup", fd.get("inputFile"));
      console.log("test récup", fd.get("content"));
      if (fd.get("inputFile") == "null" && fd.get("content") == "null") {
          alert('rien a publier');
      } else {
        axios
          .post("http://localhost:3000/api/post/create", fd, {
            headers: {
              Authorization: "Bearer " + window.localStorage.getItem("token")
            }
          })
          .then(response => {
            //Si retour positif de l'API reload de la page pour affichage du dernier post
            if (response) {
              this.$router.push({ path: "/wall" });
            }
          })
          .catch(error => (error));
      }
    },
    onFileChange(e) {
      console.log(e);
      this.postImage = e.target.files[0] || e.dataTransfer.files;
      console.log(this.postImage);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  max-width: 100%;
  background: white;
  border-radius: 16px;
  padding: 32px;
  margin-top: 60px;
}

.form-block {
  border: solid 2px #38618c;
  border-radius: 16px;
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  background: #efefef;
}

.card-user {
  display: flex;
  justify-content: center;
  align-content: center;
}

.button-env {
  background: #38618c;
  color: white;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  font-weight: 800;
  font-size: 15px;
  border: none;
  width: 100%;
  padding: 16px;
  transition: 0.4s background-color;
  margin-top: 12px;
}

.input-group {
  display: flex;
  margin: 10px;
  align-items: center;
}

.input-group-1 {
  display: flex;
  gap: 10px;
}

.button-env:hover {
  cursor: pointer;
}

.fa-solid {
  font-size: 40px;
  color: #38618c;
}

.fa-regular {
  font-size: 40px;
  color: #38618c;
}

.mur__titre {
  color:#38618c;
}

.input-text {
  border: solid 2px #38618c;
  border-radius: 16px;
  width: 100%;
  height: 30px;
  background: #efefef;
}
</style>
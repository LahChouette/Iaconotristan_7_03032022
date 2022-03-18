<template>
  <div>
    <div>{{ error }}</div>
    <div v-for="post in allPosts" :key="post.id">
      <div class="block-post">
        <div class="form-block">
          <div class="input-group input-group-1">
            <div class="username">
              <span class="username2">
                <i class="fa-regular fa-circle-user"></i>
                <p class="nom">{{ post.User.username }}</p>
              </span>
              <i
                class="fa-solid fa-trash-can"
                v-if="userId == post.UserId || isAdmin == 'true'"
                v-on:click="deleteMsg(post.id)"
              ></i>
            </div>
            <h5 v-if="post.content !== 'null'">{{ post.content }}</h5>
            <div v-show="post.attachement" class="imageDiv">
              <img class="retoucheImg" :src="post.attachement" alt="Image" />
            </div>
            <span class="date"
              ><i>{{ post.createdAt }}</i></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
import Axios from "@/_services/axios.service";
export default {
  name: "Post",
  data() {
    return {
      userId: localStorage.getItem("userId"),
      username: localStorage.getItem("username"),
      isAdmin: localStorage.getItem("isAdmin"),
      allPosts: [],
      post: "",
      error: "",
    };
  },
  created() {
    this.displayMsg();
  },
  methods: {

    displayMsg() {
      Axios.get("/post")
        .then((response) => {
          this.allPosts = response.data;
        })
        .catch(() => {
          this.error = "Problème avec les messages";
        });
    },

    deleteMsg(pid) {
      Axios.delete("/post/delete/" + pid)
        .then(() => {
          alert("Message Supprimé");
          location.reload();
        })
        .catch(() => {});
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-block {
  border: solid 2px #38618c;
  border-radius: 16px;
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  background: #efefef;
}
.input-group {
  margin: 10px;
  align-items: center;
  margin-top: -7px;
}

.date {
  display: flex;
  flex-direction: row-reverse;
}

.username {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.username2 {
  display: flex;
  align-items: center;
  gap: 7px;
}
.fa-regular {
  color: #38618c;
  font-size: 27px;
}

.fa-solid {
  color: #38618c;
}

.nom {
  font-size: 18px;
  color: #38618c;
  font-weight: 600;
}

.retoucheImg {
  max-width: 50%;
}

.imageDiv {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
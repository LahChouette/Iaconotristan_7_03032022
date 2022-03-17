<template>
  <div>
    <div v-for="post in allPosts" :key="post.id">
      <div class="block-post">
        <div class="form-block">
          <div class="input-group input-group-1">
            <div class="username">
              <span class="username2">
                <i class="fa-regular fa-circle-user"></i>
                <p>{{ post.User.username }}</p>
              </span>
              <i class="fa-solid fa-trash-can" @click="deleteMessage"></i>
            </div>
            <h5>{{ post.content }}</h5>
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
import axios from "axios";

export default {
  name: "Post",
  data() {
    return {
      userId: localStorage.getItem("userId"),
      username: localStorage.getItem("username"),
      isAdmin: localStorage.getItem("isAdmin"),
      allPosts: [],
      post: "",
    };
  },
  created() {
    this.displayMsg();
  },
  methods: {
    // Permet d'afficher tous les messages
    displayMsg() {
      axios
        .get("http://localhost:3000/api/post", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.allPosts = response.data;
        })
        .catch(() => {
          alert("probléme afficher les message");
        });
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
</style>
<template>
  <div class="main">
    <h1>le muuur :D</h1>
    <span class="card__action"><router-link to="/user/me"><i class="fa-solid fa-user-gear"></i></router-link></span>
  </div>
</template>

<script>
export default {
    name: "Mur",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
  max-width: 100%;
  background:white;
  border-radius: 16px;
  padding:32px;
  margin-top: 60px;
}

.fa-solid {
  font-size: 40px;
  color: black;
}

</style>
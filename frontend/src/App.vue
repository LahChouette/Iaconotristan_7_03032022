<template>
  <img alt="Groupomania logo" src="./assets/inconlogo.png">
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;800&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  max-width: 100%;
  margin:0;
  padding: 0;
  min-height: 100vh;
}

img {
  width: 100%;
}

body {
  background: #38618c;
  display: flex;
  align-items: center;
  justify-content: center;

  padding:32px;
}

</style>
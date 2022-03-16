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
#app {
  max-width: 100%;
  margin:0;
  padding: 0;
  min-height: 100vh;
}

img {
  width: 100%;
}

body {
  background: #f3802e;
  display: flex;
  align-items: center;
  justify-content: center;

  padding:32px;
}

</style>
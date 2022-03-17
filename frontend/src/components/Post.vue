<template>
  <div>
    <div class="block-post">
      <div class="form-block">
        <div class="input-group input-group-1">
            <span><i class="fa-regular fa-circle-user"></i>username</span>
            <span><i>date message</i></span>
            <h5> message</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
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
</style>
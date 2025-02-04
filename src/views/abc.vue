<template>
  abc
  <!-- <Search /> -->
  <hr />
  <div class="container">
    <div class="box" v-for="i in 10"></div>
  </div>
</template>

<script setup>
// import Search from "../../views/testPinia/Search.vue";
// import Search from "./testPinia/Search.vue";
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  height: 300px;
  background-color: #ccc;
  overflow: hidden;
}
.box {
  margin: 5px;
  width: 100px;
  height: 100px;
  background-color: pink;
}
.box:hover {
  transform: scale(1.1);
  transition: 0.02ms;
}
</style>

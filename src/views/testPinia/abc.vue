<template>
  abc
  <!-- <Search /> -->
  <hr />
  <div class="temp">
    <A></A>
    <B></B>
    <C></C>
  </div>

  <div class="container">
    <div
      class="inner"
      v-for="i in 10"
    ></div>
  </div>
</template>

<script setup>
import A from "./ABC/A.vue";
import B from "./ABC/B.vue";
import C from "./ABC/C.vue";
</script>

<style scoped>
.temp {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.container {
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  height: 300px;
  background-color: #ccc;
  overflow: hidden;
}
.inner {
  margin: 5px;
  width: 100px;
  height: 100px;
  background-color: pink;
}
.inner:hover {
  transform: scale(1.1);
  transition: 0.02ms;
}
</style>

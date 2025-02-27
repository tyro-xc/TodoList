<script setup>
import { ref } from "vue";
const numR = ref(0);
const numG = ref(200);
const numB = ref(0);
</script>

<template>
  R:<input type="range" v-model="numR" max="255" /><button>{{ numR }}</button
  ><br />
  G:<input type="range" v-model="numG" max="255" /><button>{{ numG }}</button
  ><br />
  B:<input type="range" v-model="numB" max="255" /><button>{{ numB }}</button
  ><br />

  <div :style="{ backgroundColor: `rgb(${numR},${numG},${numB})` }">123</div>
</template>

<style scoped>
div {
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 10px;
  transition: 0.5s;
}
div:hover {
  border-radius: 50px;
}
</style>

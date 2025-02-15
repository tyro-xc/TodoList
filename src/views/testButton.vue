<template>
  <div v-for="i in 10" :key="i">
    <button
      v-for="j in 10"
      :key="j"
    ></button>
  </div>
  <input
    type="range"
    min="0"
    max="2"
    step="0.1"
    v-model="num"
    @change="zoomLevel"
  />

  <button>{{ num }}</button>
</template>
<script setup>
import { ref } from "vue";
const num = ref(1);

const zoomLevel = () => {
  document.documentElement.style.zoom =
    num.value;
};
</script>
<style scoped>
button {
  width: 20px;
  height: 20px;
}
</style>

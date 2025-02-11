<template>
  <div class="container" >
    <div class="box" @mousedown="draggable.startDrag" v-for="i in 10"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useDraggable } from "@/util/useDraggable";
const draggable = useDraggable();
</script>

<style scoped>
.container {
 display: flex; 
 flex-wrap: wrap;
 justify-content: space-between;
}
.box {
  margin: 2px;
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #ccc;
  position: absolute;
}
button {
  margin: 0 auto;
}

h1 {
  line-height: inherit;
  background-color: #ccc;
}
</style>

<template>
  <div @mousedown="startDrag" @mousemove="drag" @mouseup="endDrag" style="user-select: none;">
    <button>1234</button>
    <h1>{{ i }}</h1>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
const i = ref(0);

let isDragging = false;
let startX, startY, offsetX, offsetY;

function startDrag(e) {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  offsetX = e.target.offsetLeft;
  offsetY = e.target.offsetTop;
}

function drag(e) {
  if (isDragging) {
    e.preventDefault();
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    e.target.style.left = offsetX + dx + 'px';
    e.target.style.top = offsetY + dy + 'px';
  }
}

function endDrag() {
  isDragging = false;
}
</script>

<style scoped>
div {
  width: 300px;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 2px;
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
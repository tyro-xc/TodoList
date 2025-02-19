<template>
  <div class="container">
    <section>section1</section>
    <section>section2</section>
    <section>section3</section>
    <section>section4</section>
    <section>section5</section>
    <div class="progress-section">
      <div class="progress-bar-wrap">
        <div class="progress-bar"></div>
      </div>
      <div class="progess-num"></div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
let progressSection = null;
let progressBar = null;
let progressNum = null;
let x, y;

window.addEventListener("mousemove", (e) => {
  x = e.clientX;
  y = e.clientY;
    //   console.log(123);

});
function updateProgressBar() {
  if (progressSection && progressBar && progressNum) {
    progressSection.style.transform = "translateX(" + x + "px," + y + "px)";
    progressBar.style.height = getScrollPercentange() + "%";
    progressNum.innerText = Math.floor(getScrollPercentange()) + "%";
    requestAnimationFrame(updateProgressBar);
  }
}
function getScrollPercentange() {
  return window.scrollY / document.body.scrollHeight - window.innerHeight / 100;
}

onMounted(() => {
  progressSection = document.querySelector(".progress-section");
  progressBar = document.querySelector(".progress-bar");
  progressNum = document.querySelector(".progess-num");
  updateProgressBar();
});


</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* font-family: "Electrolize", "sans-serif"; */
}
.container {
  overscroll-behavior-y: none;
  background-color: #101010 !important;
  color: white;
}
.progress-section {
  position: fixed;
  /* right: 50px; */
  /* top:40%; */
  left: 20px;
  top: 10px;
  width: 60px;
  height: 20%;
  display: flex;
  justify-content: space-between;
  will-change: transform;
  transition: 0.3s ease-out;
}

.progress-bar-wrap {
  position: relative;
  width: 5px;
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
  background-color: rgb(70, 70, 70);
}

.progress-bar {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0%;
  background-color: rgb(189, 189, 189);
}
section {
  height: 1000px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
}
body::-webkit-scrollbar {
    display: none  !important;
}
html {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>

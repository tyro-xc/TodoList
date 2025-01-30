<template>
  <div class="container">
    <h3>RandomGetName</h3>
    <div class="box">
      <span class="desc">name is: </span>
      <span class="content" v-text="content"></span>
      <br /><br /><br />
      <button class="start" :disabled="startState" @click="startFun">
        start
      </button>
      <button class="end" :disabled="endState" @click="endFun">end</button>
      <br /><br /><br /><br />
      <hr />
      <h4>All</h4>
      <button v-for="(i, index) in arr" :key="index" :class="{ red: isRed[i] }">
        {{ i }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, reactive } from "vue";
let getRandom = function (num) {
  return Math.floor(Math.random() * num);
};
const arr = reactive([
  "Ngnix",
  "Kubernetes",
  "MybatisPlus",
  "Script",
  "Tag",
  "RabbitMQ",
  "Kafka",
  "Tomcat",
  "ECMAScript",
  "Promise",
  "Async Await",
]);
const content = ref("????");
const startState = ref(false);
const endState = ref(true);
let timer;
const startFun = function () {
  endState.value = false;
  startState.value = true;
  timer = setInterval(() => {
    content.value = arr[getRandom(arr.length)];
  }, 150);
};
const endFun = function () {
  endState.value = true;
  startState.value = false;
  clearInterval(timer);
};
const isRed = reactive({});
watch(content, () => {
  arr.forEach((i, index) => {
    isRed[i] = i === content.value;
  });
});
</script>

<style scoped>
button {
  margin: 3px;
}
body {
  margin: 0;
  display: flex;
  place-items: center;
}

.red {
  background-color: rgba(240, 143, 143, 0.3);
}

.container {
  margin-top: 0;
  margin: auto;
  width: 400px;
  height: 500px;
  border: 1px solid #ccc;
  border-radius: 2%;
}

h3,
h4 {
  text-align: center;
}

.content {
  text-decoration: underline;
}

.start {
  margin-left: 100px;
  float: left;
}

.end {
  margin-right: 100px;
  float: right;
}

.desc {
  padding-left: 30px;
}

#text {
  margin: 3px;
}
</style>

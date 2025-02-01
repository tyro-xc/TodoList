<template>
  <h1>SearchGithubName</h1>
  <span>https://api.github.com/search/users?q=</span><br />
  <input type="text" v-model="input" />
  <button @click="search">search</button>
  <textarea v-model="textarea" cols="30" rows="10"></textarea>
  <div class="list" style="display: flex; flex-wrap: wrap">
    <div
      class="card"
      style="width: 100px; height: 100px; border: 1px solid #ccc; margin: 5px"
      v-for="item in arr"
      :key="item.id"
    >
      <a :href="item.html_url">{{ item.login }}</a>
      <img :src="item.avatar_url" alt="" width="80%" height="80%" />
      <!-- <p>{{ item.id }}</p> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
const input = ref("");
const textarea = ref("");
const arr = ref([]); // 使用 ref 而不是 reactive

const search = async function () {
  await fetch("https://api.github.com/search/users?q=" + input.value)
    .then((response) => response.json())
    .then((data) => {
      textarea.value = JSON.stringify(data, null, 2);
      console.table(data.items);
      arr.value = data.items; // 使用 .value 来更新响应式数组
    });
};
</script>
<!-- 
12
3 -->

<template>
  <h1>SearchGithubName</h1>
  <span>https:api.github.com/search/users?q=</span><br />
  <!-- <Search /> -->
  <input type="text" v-model="input" />
  <button @click="search">search</button>
  <textarea v-model="textarea" cols="30" rows="10"></textarea>
  <ul>
    <li v-for="i in arr">
      <button>{{ i.login }}</button>
      <button>{{ i.id }}</button>
    </li>
  </ul>
</template>

<script setup>
// import Search from '../components/SearchGithubName/Search.vue';
import { ref, onMounted, reactive } from "vue";
// let URL = "http:api.github.com/searcu/users?q=";
const input = ref("");
const textarea = ref("");
const arr = reactive([]);

const search = function () {
  // console.log('input',input.value);
  fetch("https:api.github.com/search/users?q=" + input.value)
    .then((response) => response.text())
    .then((data) => {
      textarea.value = data;
      console.table(data);
      arr = data.items;
    });
  alert("123");
};

// onMounted()
</script>

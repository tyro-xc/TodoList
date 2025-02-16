<template>
  <input type="text" v-model="input" />
  <button @click="search">search</button><br />
  <List />
</template>

<script setup>
import { ref, watch } from "vue";
import { useSearchStore } from "@/store/search.js";
import List from "./List.vue";
const input = ref("");
const arr = ref([]);
const store = useSearchStore();
store.setSearchVal(arr);
const search = async function () {
  await fetch("https://api.github.com/search/users?q=" + input.value)
    .then((response) => response.json())
    .then((data) => {
      arr.value = data.items;
    });
};
</script>

<style scoped></style>

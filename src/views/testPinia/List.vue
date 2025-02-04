<template>
  <div class="list" style="display: flex; flex-wrap: wrap">
    <div
      class="card"
      style="width: 100px; height: 100px; border: 1px solid #ccc; margin: 5px"
      v-for="item in searchValArr"
      :key="item.id"
    >
      <a :href="item.html_url">{{ item.login }}</a>
      <img :src="item.avatar_url" alt="" width="80%" height="80%" />
      <!-- <p>{{ item.id }}</p> -->
    </div>
  </div>
</template>

<script setup>
import { useSearchStore } from "@/store/search";

const searchValArr = useSearchStore().getSearchVal();
</script>

<style scoped></style>

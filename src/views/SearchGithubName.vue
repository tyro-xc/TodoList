<template>
    <h1>SearchGithubName </h1>
    <span>http:api.github.com/searcu/users?q=</span><br>
    <Search />
</template>

<script setup>
import Search from '../components/SearchGithubName/Search.vue';

import { ref,onMounted } from 'vue';
let URL="http:api.github.com/searcu/users?q=";
onMounted(()=>{
    
})
</script>

<style scoped>

</style>
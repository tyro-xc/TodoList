<template>
    <h1>SearchGithubName </h1>
    <span>https:api.github.com/search/users?q=</span><br>
    <!-- <Search /> -->
    <input type="text" v-model="input">
    <button @click="search">search</button>
    <textarea v-model="textarea" cols="30" rows="10"></textarea>
</template>

<script setup>
// import Search from '../components/SearchGithubName/Search.vue';
import { ref, onMounted } from 'vue';
// let URL = "http:api.github.com/searcu/users?q=";
const input = ref('');
const textarea = ref('');


const search = function () {
    // console.log('input',input.value);
    fetch('https:api.github.com/search/users?q=' + input.value)
        .then(response => response.text())
        .then(data => {
            textarea.value = data;
            console.log(data)
        })
    alert('123')
}

onMounted()

</script>

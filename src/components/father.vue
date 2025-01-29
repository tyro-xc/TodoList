<template>
    <son :num="num"></son>
</template>

<script setup>
import son from './son.vue'
import {ref} from 'vue'
const num = ref(1)
</script>
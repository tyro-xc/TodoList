<template>
    <div style="width: 300px;
    height: 300px;border: 1px solid #ccc;border-radius: 2px;" @mouseover="i++">
        {{ i }}
    </div>
</template>

<script setup>

import { ref, onMounted, watch } from 'vue'
const i = ref(0) 
</script>
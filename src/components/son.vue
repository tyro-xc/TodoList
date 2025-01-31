<template>
<h1>I'm son {{ num }}</h1>
</template>

<script setup>

import {defineProps} from 'vue'

const props = defineProps({
    num:Number,
})
</script>

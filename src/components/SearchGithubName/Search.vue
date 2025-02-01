<template>
    <input type="text" v-model="input"> <button>search</button>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from '../../store/store.js'

const input = ref('');
const store = useStore();
store.setInput(input);
watch(input, (newValue, oldValue) => {
    console.log(newValue, oldValue)
    console.log(store.input);
})

</script>

<style scoped></style>
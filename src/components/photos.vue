<template>

    <div>
        <img v-for="i in 30" :key="i" :src="getRandomImageUrl()" alt="" />
    </div>
</template>

<script setup>
function getRandomImageUrl() {
    const width = Math.floor(Math.random() * 500) + 100;
    const height = Math.floor(Math.random() * 500) + 100;
    return `https://picsum.photos/${width}/${height}`;
}
</script>

<style scoped>
div {
    column-count: 6;
    
}

img {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    object-fit: cover;
}

img:hover {
    scale: 1.08;
    transition: 1.02s;
    box-shadow: 5px 5px 5px black;
}
</style>
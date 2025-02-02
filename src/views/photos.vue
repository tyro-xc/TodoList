<template>

    <div>
        <!-- 使用 v-for 循环生成 10 个 img 标签 -->
        <img v-for="i in 30" :key="i" :src="getRandomImageUrl()" alt="" />
    </div>
</template>

<script setup>
// 定义一个函数，用于生成随机的图片 URL
function getRandomImageUrl() {
    // 生成一个随机数作为图片的宽度和高度
    const width = Math.floor(Math.random() * 500) + 100; // 随机宽度在 100 到 600 之间
    const height = Math.floor(Math.random() * 500) + 100; // 随机高度在 100 到 600 之间

    // 构造图片 URL，使用 Picsum API 来获取随机图片
    return `https://picsum.photos/${width}/${height}`;
}
</script>

<style scoped>
div {
    column-count: 6;
    max-height: 100vh;
}

img {
    width: 100%;
    height: 100%;
    border-radius: 12px;
}

img:hover {
    scale: 1.08;
    transition: 1.02s;
    box-shadow: 5px 5px 5px black;
}
</style>
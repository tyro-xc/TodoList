<template>
    <div>
        <!-- 循环渲染图片 -->
        <template v-for="i in 30" :key="i">
            <!-- 使用 img 的 @load 和 @error 事件 -->
            <img :src="randomImageUrls[i]" @load="imageLoaded(i)" @error="imageError(i)" v-if="imagesLoaded[i]" />
            <p v-else>loading</p>
        </template>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 存储图片加载状态
const imagesLoaded = ref(Array(30).fill(false));

// 计算属性生成随机图片 URL 数组
const randomImageUrls = computed(() => {
    return Array.from({ length: 30 }, () => {
        const width = Math.floor(Math.random() * 500) + 100;
        const height = Math.floor(Math.random() * 500) + 100;
        return `https://picsum.photos/${width}/${height}`;
    });
});

// 图片加载成功处理函数
const imageLoaded = (index) => {
    imagesLoaded.value[index] = true;
};

// 图片加载失败处理函数
const imageError = (index) => {
    imagesLoaded.value[index] = false;
};
</script>

<style scoped>
div {
    column-count: 6;
}
</style>



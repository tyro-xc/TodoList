<template>
  <div class="main">
    <el-container>
      <el-aside height="100vh">
        <el-scrollbar>
          <el-menu router>
            <el-menu-item index="/welcome"> Welcome </el-menu-item>
            <el-menu-item index="/TodoList"> TodoList </el-menu-item>
            <el-menu-item index="/testButton"> testButton </el-menu-item>
            <el-menu-item index="/RandomGetName"> RandomGetName </el-menu-item>
            <el-menu-item index="/table"> table </el-menu-item>
            <el-menu-item index="/testColor"> testColor </el-menu-item>
            <el-menu-item index="/debounce"> debounce </el-menu-item>
            <el-menu-item index="/SearchGithubName"
              >SearchGithubName</el-menu-item
            >
            <el-menu-item index="/abc"> abc</el-menu-item>
            <el-sub-menu index="1">
              <template #title>testPinia</template>
              <el-menu-item index="/search">search</el-menu-item>
              <el-menu-item index="list">list</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="/photos"> photos</el-menu-item>
            <el-menu-item index="/testFloat"> testFloat</el-menu-item>
            <el-menu-item index="/lyrics"> lyrics</el-menu-item>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header>
          <el-button @click="fn" type="success">toggleFullScreen</el-button>
          <el-text size="large" type="success">{{ time }}</el-text>
        </el-header>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { getCurrentTime } from "@/util/time.js";
const time = ref(getCurrentTime());

const fn = () => {
  document.fullscreenElement
    ? document.exitFullscreen()
    : document.documentElement.requestFullscreen();
};
onMounted(() => {
  const intervalId = setInterval(() => {
    time.value = getCurrentTime(); // 更新 time 的值
  }, 1000);
});
// onBeforeUnmount(() => {
//   clearInterval(intervalId);
// });
</script>

<style scoped>
.el-main {
  height: 95vh;
  /* padding: 0px; */
}

.el-aside {
  /* background-color: rgb(51.2, 126.4, 204); */
  background-color: #001529;
  width: 20%;
  min-width: 200px;
  height: 100vh;
}

.el-header {
  background-color: rgb(51.2, 126.4, 204);
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-menu {
  background-color: #001529;
}

.el-menu-item {
  color: rgb(0, 200, 164);
}
</style>

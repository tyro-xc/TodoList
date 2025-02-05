<template>
  <div class="main">
    <el-container>
      <el-aside height="100vh">
        <el-menu router>
          <el-menu-item index="/TodoList"> TodoList </el-menu-item>
          <el-menu-item index="/testButton"> testButton </el-menu-item>
          <el-menu-item index="/RandomGetName"> RandomGetName </el-menu-item>
          <el-menu-item index="/testColor"> testColor </el-menu-item>
          <el-menu-item index="/debounce"> debounce </el-menu-item>
          <el-menu-item index="/SearchGithubName">SearchGithubName </el-menu-item>

          <el-menu-item index="/abc"> abc</el-menu-item>
          <el-sub-menu index="1">
            <template #title style="--el-menu-text-color: white">testPinia</template>
            <el-menu-item index="/search">search</el-menu-item>
            <el-menu-item index="list">list</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="/photos"> photos</el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>header</el-header>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup></script>

<style scoped>
.el-main {
  height: 100vh;
}

.outer {
  margin: 0;
  padding: 0;
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
}

.el-menu {
  background-color: #001529;
}

.el-menu-item {
  color: rgb(0, 200, 164);
  /* background-color: ; */
}
</style>
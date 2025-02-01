<template>
  <el-container>
    <el-aside width="200px" height="100vh">
      <el-menu router>
        <el-menu-item index="/TodoList">
          <RouterLink to="/TodoList">TodoList</RouterLink>
        </el-menu-item>

        <el-menu-item index="/testButton">
          <RouterLink to="/testButton">testButton</RouterLink>
        </el-menu-item>
        <el-menu-item index="/RandomGetName">
          <RouterLink to="/RandomGetName">RandomGetName</RouterLink>
        </el-menu-item>
        <el-menu-item index="/testColor">
          <RouterLink to="/testColor">testColor</RouterLink>
        </el-menu-item>
        <el-menu-item index="/debounce">
          <RouterLink to="/debounce">debounce</RouterLink>
        </el-menu-item>

        <el-menu-item index="/SearchGithubName">
          <RouterLink to="/SearchGithubName">SearchGithubName</RouterLink>
        </el-menu-item>

        <el-menu-item index="/abc">
          <RouterLink to="/abc">abc</RouterLink>
        </el-menu-item>

      </el-menu>
    </el-aside>
    <el-container>
      <el-header>header</el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup></script>

<style scoped>
.outer {
  margin: 0;
  padding: 0;
}

.el-aside {
  /* background-color: rgb(51.2, 126.4, 204); */
  background-color: #001529;
  height: 100vh;
}

.el-header {
  /* background-color: rgb(115.2, 117.6, 122.4); */
  background-color: rgb(51.2, 126.4, 204);
}

.el-main {
  /* background-color: rgb(159.5, 206.5, 255); */
  /* background-color: rgb(243, 233, 215); */
}

.el-menu {
  background-color: #001529;
}

.el-menu-item {
  background-color: rgb(234, 234, 234);
}
</style>

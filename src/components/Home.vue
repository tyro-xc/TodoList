<template>
  <el-container>
    <el-aside width="200px" height="100vh">
      <el-menu router>
        <el-menu-item index="/">
          <RouterLink to="/">Home</RouterLink>
        </el-menu-item>
        <el-menu-item index="/TodoList">
          <RouterLink to="/TodoList">TodoList</RouterLink>
        </el-menu-item>
        <el-menu-item index="/confetti">
          <RouterLink to="/confetti">confetti</RouterLink>
        </el-menu-item>
        <el-menu-item index="/testButton">
          <RouterLink to="/testButton">testButton</RouterLink>
        </el-menu-item>

        <el-menu-item index="/testColor">
          <RouterLink to="/testColor">testColor</RouterLink>
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
* {
  margin: 0;
  padding: 0;
}
.el-aside {
  background-color: rgb(51.2, 126.4, 204);
  height: 100vh;
}

.el-header {
  background-color: rgb(115.2, 117.6, 122.4);
}

/* .el-main{background-color: rgb(159.5, 206.5, 255);} */
.el-menu {
  background-color: rgb(197.7, 225.9, 255);
}
</style>

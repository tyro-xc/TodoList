<template>
  <div id="ListContainer">
    <MyItem
      v-for="todo in props.todos"
      :key="todo.id"
      :todo="todo"
      :checkTodo="checkTodo"
      :deleteTodo="deleteTodo"
    />
  </div>
</template>

<script setup>
import MyItem from "./MyItem.vue";

const props = defineProps([
  "todos",
  "deleteTodo",
  "checkTodo",
]);
// console.log(props.todos);
</script>

<style scoped>
#ListContainer {
  border: 1px solid #ccc;
  border-bottom: none;
  width: 350px;
  /* height: 300px; */
  height: auto;
  margin: 10px 0 0 20px;
  border-radius: 2px;
}
</style>

<template>
  <div id="container">
    <MyHeader :addTodo="addTodo" />
    <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
    <MyFooter
      :todos="todos"
      :checkAllTodo="checkAllTodo"
      :clearAllTodo="clearAllTodo"
    />
  </div>
</template>

<script setup>
import MyFooter from "./TodoList/MyFooter.vue";
import MyHeader from "./TodoList/MyHeader.vue";
import MyList from "./TodoList/MyList.vue";
import { ref, watch } from "vue";
import { nanoid } from "nanoid";

const todos = ref(JSON.parse(localStorage.getItem("todos")) || []);

const addTodo = function (todo) {
  todos.value.unshift(todo);
};
const checkTodo = function (id) {
  todos.value.forEach((todo) => {
    if (todo.id === id) todo.done = !todo.done;
  });
};
const deleteTodo = function (id) {
  todos.value = todos.value.filter((todo) => {
    return todo.id !== id;
  });
};
const checkAllTodo = function (done) {
  todos.value.forEach((todo) => {
    todo.done = done;
  });
};
const clearAllTodo = function () {
  if (confirm("Are you sure to delete all finished todos?")) {
    todos.value = todos.value.filter((todo) => {
      return !todo.done;
    });
  }
};
watch(
  todos,
  (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  },
  { deep: true }
);
</script>

<style scoped>
#container {
  margin: 20px;
  border: 2px solid #ccc;
  width: 400px;
  height: 500px;
  border-radius: 3px;
  /* overflow: auto; */
}
</style>

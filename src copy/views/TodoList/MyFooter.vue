<template>
    <div id="FooterContainer" v-show="props.todos.length">
      <input
        type="checkbox"
        :checked="isAll"
        @change="checkAll"
      />
      finished({{ finished }})/total({{
        props.todos.length
      }}）
      <button id="btn" @click="props.clearAllTodo">
        clear finished
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  const props = defineProps([
    "todos",
    "checkAllTodo",
    "clearAllTodo",
  ]);
  
  const finished = computed(() => {
    return props.todos.reduce(
      (pre, current) => pre + (current.done ? 1 : 0),
      0
    );
  });
  
  const isAll = computed(() => {
    return (
      props.todos.length === finished.value &&
      props.todos.length > 0
    );
  });
  
  const checkAll = function (e) {
    props.checkAllTodo(e.target.checked);
  };
  </script>
  
  <style scoped>
  #FooterContainer {
    margin: 10px 30px 0 20px;
  }
  
  #btn {
    float: right;
  }
  </style>
  
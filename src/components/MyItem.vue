<template>
  <div id="ItemContainer">
    <input
      type="checkbox"
      :checked="props.todo.done"
      @change="checkTodo(props.todo.id)"
    />
    <span>{{ props.todo.todo }}</span>
    <button id="btn" @click="del(props.todo.id)">
      delete
    </button>
  </div>
</template>

<script setup>
const props = defineProps([
  "todo",
  "checkTodo",
  "deleteTodo",
]);
const checkTodo = function (id) {
  props.checkTodo(id);
};

const del = function (id) {
  // alert(id);
  if (confirm("Are you sure to remove it from list?")) {
    props.deleteTodo(id);
  }
};
</script>

<style scoped>
#ItemContainer {
  border-bottom: 1px solid #ccc;
  width: 350px;
  height: 30px;
  margin: 0 0 0 0;
}

#ItemContainer:hover {
  background-color: #ccc;
}

#ItemContainer:hover button {
  display: initial;
}

#btn {
  float: right;
  display: none;
  margin: 5px;
}
</style>

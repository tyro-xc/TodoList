<template>
  <input
    type="text"
    placeholder="please input something"
    id="inputEle"
    v-model="inputVal"
    @keyup.enter="add"
  />
  &nbsp;
  <button @click="add">add</button>
</template>

<script setup>
import { ref } from "vue";
import { nanoid } from "nanoid";

const props = defineProps(["addTodo"]);
const inputVal = ref("");
const add = function () {
  if (!inputVal.value.trim()) {
    return alert("input not null!");
  }
  props.addTodo({
    id: nanoid(),
    todo: inputVal.value,
    done: false,
  });
  inputVal.value = "";
};
</script>

<style scoped>
#inputEle {
  width: 250px;
  margin: 10px 0 0 20px;
}
</style>

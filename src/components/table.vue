<template>
  <div>
    <el-table :data="tableData" border stripe>
      <el-table-column prop="id" label="id" width="80"></el-table-column>
      <el-table-column
        prop="completed"
        label="completed"
        width="80"
      ><input type="checkbox" :checked="completed"></el-table-column>
      <el-table-column prop="title" label="title"></el-table-column>
    </el-table>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
const tableData = reactive([]);
// for (let i = 1; i <= 100; i++) {
//   fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
//     .then((res) => res.json())
//     .then((data) => tableData.push(data));
// }
// console.log(tableData);
const fetchData = async () => {
  for (let i = 1; i <= 100; i++) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`);
    const data = await res.json();
    tableData.push(data);
  }
};
fetchData();
console.log(tableData);
</script>
<style scoped></style>

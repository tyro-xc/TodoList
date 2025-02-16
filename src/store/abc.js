import { defineStore } from "pinia";

import { ref } from "vue";

export const useABCStore = defineStore("abcVal", () => {
  const abcVal = ref([]);
  const setabcVal = function (newVal) {
    abcVal.value = newVal;
  };
  const removeabcVal = function () {
    abcVal.value = "";
  };
  const getabcVal = function () {
    return abcVal.value;
  };

  return {
    abcVal,
    setabcVal,
    removeabcVal,
    getabcVal,
  };
});

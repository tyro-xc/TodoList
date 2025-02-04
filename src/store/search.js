import { defineStore } from "pinia";

import { ref } from "vue";

export const useSearchStore = defineStore("searchVal", () => {
  const searchVal = ref([]);
  const setSearchVal = function (newVal) {
    searchVal.value = newVal;
  };
  const removeSearchVal = function () {
    searchVal.value = "";
  };
  const getSearchVal = function () {
    return searchVal.value;
  };

  return {
    searchVal,
    setSearchVal,
    removeSearchVal,
    getSearchVal,
  };
});

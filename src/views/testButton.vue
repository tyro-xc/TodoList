<template>

    <div v-for="i in 10" :key="i">
     <button v-for=" j in 10" :key="j"></button>
    </div>
   
</template>

<style scoped>
button{
    width: 20px;
    height: 20px;
}
</style>
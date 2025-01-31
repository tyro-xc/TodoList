import { defineStore } from "pinia"
import { ref } from "vue"


export const store=defineStore( 'input',()=>{

const input=ref('')
const setInput=(val)=>{
input.value=val
}
const getInput=()=>{
return input.value
}
const clearInput=()=>{
input.value=''
}
return{
input,
setInput,
getInput,
clearInput}


})


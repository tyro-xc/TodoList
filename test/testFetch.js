import { writeFile } from "node:fs";

// async function A(){
//   await fetch("https://search.bilibili.com/upuser?keyword=123")
//   .then((response) => response)
//   .then((data) => {
//     console.log(data);
//     console.log('start');
//     writeFile('output.txt', JSON.stringify(data),()=>{});
//     console.log('end');
//   });
// }
// for (let i = 0; i < 10; i++) {
//   await A();
//   console.log("____________________________________");
// }

fetch("https://search.bilibili.com/upuser?keyword=123") //https://search.bilibili.com/upuser?keyword=123
  .then((res) => {
    console.log(res,typeof res);
    return res.text();
  })
  .then((data) => {
    // console.log(data);
    console.log("start");
    writeFile("output.html", data, () => {});
    console.log("end");
  });
/* 
  
*/

// for (let i = 0; i < 10; i++) {
//   (function (i) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000 * i);
//   })(i);
// }

// const fn=()=>{
//   ()=>{
//     ()=>{
//       console.log(23);
//     }
//   }
// }
// // (fn()())()()
// ((fn())())()
// console.log(123);

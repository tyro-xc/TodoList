// fetch("https://search.bilibili.com/upuser?keyword=123")
//   .then((response) => response)
//   .then((data) => {
//     console.log(data);
//     // console.log(data);
//   });

// fetch("https://search.bilibili.com/upuser?keyword=123")//https://search.bilibili.com/upuser?keyword=123
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });
/* 
  
*/

// for (let i = 0; i < 10; i++) {
//   (function (i) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000 * i);
//   })(i);
// }


const fn=()=>{
  ()=>{
    ()=>{
      console.log(23);
    }
  }
}
(fn())()
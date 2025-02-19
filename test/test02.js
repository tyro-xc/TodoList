// const fn=()=>{
//     console.clear();
//     const date=new Date();
//     const hour=date.getHours()<10?'0'+date.getHours():date.getHours();
//     const minute=date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes();
//     const second=date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();
//     const time=hour+':'+minute+':'+second;
//     console.log(time);
// }
// setInterval(fn,1000)

// const fun=()=>()=>123;
// function a(){
//     return function n(){
//         return 123;
//     }
// }
// console.log(a()())
// console.log(fun());

// function getBeijingTime() {
//     // 获取当前时间
//     var now = new Date();
//     // 获取当前时间的时区偏移量（分钟）
//     var offset = now.getTimezoneOffset();
//     // 北京时间是东八区，比UTC早8小时，所以偏移量是-480分钟
//     var beijingOffset = -480;
//     // 计算北京时间
//     var beijingTime = new Date(now.getTime() + (beijingOffset - offset) * 60000);
//     return beijingTime;
//     }
    
//     console.log(getBeijingTime());
// const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,]
// console.log(arr);
import { writeFile } from 'node:fs';

let data = 'Hello, Node.js';
writeFile('output1.txt', data,()=>{});
    
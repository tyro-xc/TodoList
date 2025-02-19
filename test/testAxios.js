// // const axios = require('axios');
// import axios from 'axios';
// //
// // axios.get('URL_ADDRESS')
// axios.get("https:www.bilibili.com").then(res=>{
//     for(let key in res){
//         console.log(key)
//     }
//     console.clear();
//     console.log(res.request)
//     console.table(res.request)
// })
const str=`Lorem ipsum dolor sit.
Eaque aspernatur nam iusto.
Animi ratione nihil magni.
Libero eius vitae adipisci.
Quas consequuntur beatae labore!
Deserunt perferendis odio numquam!
Nihil placeat maxime consequatur!
Molestiae, natus! Odio, iusto?
Odio dicta quam ipsa.
Dolores amet sed voluptatem!`;

const arr = str.replace(/\n/g, " ").split(' ');
const arr1=[]
for(let k of arr){
    console.log(k,);
}
// console.log(arr1);



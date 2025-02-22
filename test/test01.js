// const str = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
//     A natus est labore reiciendis nemo illum doloremque aperiam? Molestiae
//      vel accusamus, debitis doloribus sed asperiores, ad, magnam minus 
//      neque delectus odit?`;
// const result = [];

// for (const c of str) {
//   console.log(c);
// }

// let url =
//   "https://api.openweathermap.org/data/2.5/forecast?q=Beijing,cn&appid=800f49846586c3ba6e7052cfc89af16c";
// fetch(url).then((resp) => {
//   resp.json().then((data) => {
//     let info = {
//       city: data.city.name,
//       weather: data.list[0].weather[0].main,
//       time: data.list[0].dt_txt,
//     };
//     alert(JSON.stringify(info, null, "  "));
//   });
// });

// //  for (const c in global) {
// //     console.log("____________________");
// //     console.log(c,global[c]);
// //  }
// // //  console.log(global);
function abs() {
    if (arguments.length === 0) {
        return 0;
    }
    let x = arguments[0];
    return x >= 0 ? x : -x;
}
console.log(abs());


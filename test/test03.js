const str = `Lorem, ipsum dolor sit amet consectetur adipisicing 
    elit. A natus est labore reiciendis nemo illum doloremque aperiam? 
    Molestia evel accusamus, debitis doloribus sed asperiores, ad,
    magnam minusneque delectus odit?`;
const result = [];
for (let c of str) {
  if (!result[c]) {
    result[c] = 1;
  } else {
    result[c]++;
  }
}

console.dir(result, result.length);
for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}


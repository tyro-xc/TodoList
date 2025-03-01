// const arr=[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
const arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//random array element
function getRandomEle(arr ){
    return arr[Math.floor(Math.random()*(arr.length) )]
}
// per word's random length
function generateWord(){
    let word=[]
    for(let i=0;i<10;i++){
        word.push(getRandomEle(arr))
    }
    return word.join('')
}
//random sentence 

function generateRandomSentence(){
    let sentence=[]
    for(let i=0;i<10;i++){
        sentence.push(generateWord(arr))
    }
    return sentence.join('')
}
// console.log(getRandomEle(arr));

console.log(generateWord());
console.log(generateRandomSentence());
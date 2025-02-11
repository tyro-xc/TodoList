
// const fn=()=>{
//     console.clear();
//     const date=new Date();
//     const hour=date.getHours()<10?'0'+date.getHours():date.getHours();
//     const minute=date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes();
//     const second=date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();
//     const time=hour+':'+minute+':'+second;
//     return time ;
// }
// export const time=setInterval(fn,1000)

export function getCurrentTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
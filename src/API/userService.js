import request from '@/utils/request.js'


export function getAllUserService() {
  return request.get('/selectAllUser')
}

export function userLoginService(loginData) {
    const params=new URLSearchParams();
    for(let key in loginData){
        params.append(key,loginData[key]); 
    }
    return request.get('/login',params)
  }
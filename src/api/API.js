import axios from "axios";


const instance = axios.create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0',
    withCredentials : true,
    headers : {
        "API-KEY" : "3942348e-0f62-40e2-a126-0216d80a64be"
   }
})

export const SocialAPI = {
    getUsers(page=1){
       return instance.get(`/users?count=30&page=${page}`)
    },
    login(email,password){
       return instance.post(`/auth/login`, {email,password})
    },
    getProfile(userId){
        return instance.get(`/profile/${userId}`)
    },
    photoput(file){
       const formData =new FormData()
       formData.append('file', file)
       return instance.put(`/profile/photo`,formData)
    }
}
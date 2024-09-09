 import axios from 'axios'

 const api = axios.create({
    baseURL: "backend-user-registration.vercel.app"
 })

 export default api

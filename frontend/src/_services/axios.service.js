import axios from 'axios'
import { router}  from '@/_helpers/router'

const Axios = axios.create({
    baseURL: 'http://localhost:3000/api'
})

Axios.interceptors.request.use(request => {
    const token = localStorage.getItem('token')
    if(token){
        request.headers.Authorization = 'Bearer '+token
    }

    return request
})

Axios.interceptors.response.use(response => {
    return response
}, err => {
    console.log(err.response.status)
    if(err.response.status == 401){
        localStorage.removeItem('token')
        router.push('/login')
    }
    return Promise.reject(err)
})

export default Axios
import { router } from './router'

export default function authGuard(to){
    let token = localStorage.getItem('token')
    if(token){
        return true
    }

    router.push('/login')
    return false
}
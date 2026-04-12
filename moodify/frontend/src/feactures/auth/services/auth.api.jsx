import axios from 'axios'


const api = axios.create({
    baseURL:"http://localhost:3000/api/auth",
    withCredentials:true,
})

export async function register({username,email,password}) {
    
    const respone = await api.post('/register',{username,email,password})
    return respone.data
}

export async function login({email,password}) {
    const respone = await api.post('/login',{email,password})

    return respone.data
}

export async function getMe() {
    const respone = await api.get('/get-me')

    return respone.data
}

export async function logout() {
    const respone = await api.post('/logout')

    return respone.data
}

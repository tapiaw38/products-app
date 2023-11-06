import axios from 'axios'

const authApi = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
})

export default authApi

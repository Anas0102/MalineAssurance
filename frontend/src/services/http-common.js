import axios from "axios"
const http=axios.create({
    baseURL:"http://MalineAssurance.onrender.com",
    headers:{"Content-Type":"application/json"}
})

export default http;
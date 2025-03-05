import axios from "axios";


const axiosInctanse = axios.create({
    baseURL :  'https://673b36ca339a4ce4451b2b20.mockapi.io/',
    headers : {
        'Content-Type' : 'application/json'
    }
})


export default axiosInctanse
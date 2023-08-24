import axios from "axios";

//const baseURL='https://password-reset-be-wmkd.onrender.com/api/users'
const baseURL='http://localhost:3001/api/users'

console.log(baseURL)
const authInstance= axios.create({
    baseURL : baseURL,
    timeout : 5000,
    headers : {
        'Content-Type' : 'application/json',
    }
});


export default {
    authInstance,
}
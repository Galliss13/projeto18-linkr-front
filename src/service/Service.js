import axios from 'axios';

const urlAxios = 'http://localhost:5000'

export function postSingInSingUp(path, body){
    const promise = axios.post(`${urlAxios + path}`, body)
    return promise
}
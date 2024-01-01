import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "./api/sorteios/"
})

export const api = {
    get(endpoint){
        return axiosInstance.get(endpoint)
    }
}
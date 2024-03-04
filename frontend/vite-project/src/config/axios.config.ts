import axios from 'axios';
import { getLocalStorageItem } from "@/utilities/getLocalStorageItem.ts";

const axiosConfigWithAuth = axios.create({
    proxy: {
        host: 'localhost',
        port:  8080
    },
    timeout: 30000,
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Headers': 'Origin, Content-Type',
    }
});

axiosConfigWithAuth.interceptors.request.use(
    (config) => {
        const token = getLocalStorageItem('token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export {
    axiosConfigWithAuth
};

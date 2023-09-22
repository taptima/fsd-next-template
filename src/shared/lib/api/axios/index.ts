import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
});

export const axiosInstanceFrontend = axios.create();

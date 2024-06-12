import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    timeout: 1000,
});

const axiosAuthInstance = axios.create({
    baseURL: 'http://localhost:8080/auth',
    timeout: 1000,
});

export default {axiosInstance, axiosAuthInstance};
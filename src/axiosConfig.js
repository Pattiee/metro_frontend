import axios from "axios";

// Enable globally
axios.defaults.withCredentials = true;

const ADMIN_SERVICE_BASE_API_URL = "http://localhost:8081/api/admin";
const AUTH_SERVICE_BASE_API_URL = "http://localhost:8081/api/auth";
const USER_SERVICE_BASE_API_URL = "http://localhost:8081/api/users";
const PRODUCTS_SERVICE_BASE_API_URL = "http://localhost:8081/api/items";


// Axios instance for authentication-related requests
const authAxiosInstance = axios.create({
    headers: { 'Content-Type': 'application/json' },
    baseURL: AUTH_SERVICE_BASE_API_URL,
});


// Axios instance for user-related requests
const userAxiosInstance = axios.create({
    headers: { 'Content-Type': 'application/json' },
    baseURL: USER_SERVICE_BASE_API_URL,
});

// Axios instance for admin-related requests
const adminAxiosInstance = axios.create({
    headers: { 'Content-Type': 'application/json' },
    baseURL: ADMIN_SERVICE_BASE_API_URL,
});


// Axios instance for products-related requests
const productsAxiosInstance = axios.create({
    headers: { 'Content-Type': 'application/json' },
    baseURL: PRODUCTS_SERVICE_BASE_API_URL,
});

const AxiosConfig = {
    authAxiosInstance,
    userAxiosInstance,
    adminAxiosInstance,
    productsAxiosInstance
};

export default AxiosConfig;
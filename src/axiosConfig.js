import axios from "axios";

// Enable globally or per instance
// axios.defaults.withCredentials = false;

const ADMIN_SERVICE_BASE_API_URL = process.env.REACT_APP_ADMIN_BASE_URL;
const AUTH_SERVICE_BASE_API_URL = process.env.REACT_APP_AUTH_BASE_URL;
const USER_SERVICE_BASE_API_URL = process.env.REACT_APP_USER_BASE_URL;
const PRODUCTS_SERVICE_BASE_API_URL = process.env.REACT_APP_PRODUCTS_BASE_URL;


// Axios instance for authentication-related requests
const authAxiosInstance = axios.create({
    headers: { 'Content-Type': 'application/json' },
    baseURL: AUTH_SERVICE_BASE_API_URL,
    withCredentials: true,
});


// Axios instance for user-related requests
const userAxiosInstance = axios.create({
    headers: { 'Content-Type': 'application/json' },
    baseURL: USER_SERVICE_BASE_API_URL,
    withCredentials: true,
});

// Axios instance for admin-related requests
const adminAxiosInstance = axios.create({
    headers: { 'Content-Type': 'application/json' },
    baseURL: ADMIN_SERVICE_BASE_API_URL,
    withCredentials: true,
});


// Axios instance for products-related requests
const productsAxiosInstance = axios.create({
    headers: { 'Content-Type': 'application/json' },
    baseURL: PRODUCTS_SERVICE_BASE_API_URL,
    withCredentials: false,
});

const AxiosConfig = {
    authAxiosInstance,
    userAxiosInstance,
    adminAxiosInstance,
    productsAxiosInstance
};

export default AxiosConfig;
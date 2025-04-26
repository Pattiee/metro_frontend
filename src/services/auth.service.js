import AxiosConfig from "../axiosConfig";


export const register = async (registrationRequest) => await AxiosConfig.authAxiosInstance.post("/sign-up", registrationRequest);

export const login = async (loginRequest) => await AxiosConfig.authAxiosInstance.post('/login', loginRequest);

export const logoutBackendApi = async () => await AxiosConfig.authAxiosInstance.post("/logout");

export const getCurrentUser = async () => await AxiosConfig.authAxiosInstance.get('/me');
import AxiosConfig from "../axiosConfig";


export const register = async (registrationRequest) => await AxiosConfig.authAxiosInstance.post("/sign-up", registrationRequest);

export const login = async (loginRequest) => await AxiosConfig.authAxiosInstance.post('/login', loginRequest);

export const logout = async () => await AxiosConfig.authAxiosInstance.post("/logout");


// const getCurrentUser = () => {
//     return JSON.parse(localStorage.getItem("user"));
// }
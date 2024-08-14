import AxiosConfig from "../axiosConfig";


const register = async (registrationRequest) => await AxiosConfig.authAxiosInstance.post("/sign-up", registrationRequest);

const login = async (loginRequest) => await AxiosConfig.authAxiosInstance.post('/login', loginRequest);

const logout = async () => await AxiosConfig.authAxiosInstance.post("/logout");


// const getCurrentUser = () => {
//     return JSON.parse(localStorage.getItem("user"));
// }


const AuthService = {
    register,
    login,
    logout
};

export default AuthService;
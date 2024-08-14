import { userAxiosInstance } from "../axiosConfig"

const getAllUsers = async () => await userAxiosInstance.get();

const getUserByIdAndEmail = async (userId) => await userAxiosInstance.get("/id?=" + userId);

const UserService = {
    getAllUsers,
    getUserByIdAndEmail }
export default UserService;
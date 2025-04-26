import AxiosConfig from "../axiosConfig"

export const getAllUsers = async () => await AxiosConfig.userAxiosInstance.get();

export const getUserByIdAndEmail = async (userId) => await AxiosConfig.userAxiosInstance.get("?id=" + userId);

// const UserService = {
//     getAllUsers,
//     getUserByIdAndEmail }
// export default UserService;
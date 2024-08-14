import AxiosConfig from "../axiosConfig";


export const getProducts = async () => await AxiosConfig.productsAxiosInstance.get();
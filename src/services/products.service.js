import AxiosConfig from "../axiosConfig";


// Get all products
export const getProducts = async () => {
  return await AxiosConfig.productsAxiosInstance.get();
};

// Get single product using a request param `id`
export const getProductById = async (id) => {
  return await AxiosConfig.productsAxiosInstance.get('', {
    params: { id } // Sending 'id' as a query parameter
  });
};

// Delete product using path variable `id`
export const deleteProductById = async (id) => {
  return await AxiosConfig.productsAxiosInstance.delete(`/${id}`);
};
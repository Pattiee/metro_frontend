import AxiosConfig from "../axiosConfig";


// Get all products and/or with optional filters
export const getProducts = async ({ id, category, isFeatured }) => {
  const params = {};

  if (id != null && id !== undefined && id !== '') params.id = id;
  if (category) params.category = category;
  if (isFeatured !== undefined) params.isFeatured = isFeatured;

  return await AxiosConfig.productsAxiosInstance.get('', { params });
};

// Get featured products
export const getFeaturedProducts = async () => {
  return await AxiosConfig.productsAxiosInstance.get('/featured');
};

// Get featured products
export const getFavoriteProducts = async (userId) => {
  return await AxiosConfig.productsAxiosInstance.get(`/${userId}/favorites`);
};

// Get single product using a request param id
// Use getProducts with param id
export const getProductById = async (id) => {
  if (id !== null && id !== "") {
    const params = {}
    params.id = id;
    return await AxiosConfig.productsAxiosInstance.get('', { params });
  }
};

// Delete product using path variable `id`
export const deleteProductById = async (id) => {
  return await AxiosConfig.productsAxiosInstance.delete(`/${id}`);
};
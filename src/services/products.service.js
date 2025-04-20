import AxiosConfig from "../axiosConfig";


// Get products with optional filters
export const getProducts = async ({ id, category, isFeatured }) => {
  const params = {};

  if (id != null || id !== undefined) params.id = id;
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
import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom"; // Use this to get the query params
import { motion } from 'framer-motion';
import ProductReviews from '../components/Product/ProductReviews';
import RelatedProducts from '../components/Product/RelatedProducts';
import ProductDetails from '../components/Product/ProductDetails'
import { getProductById, getProducts } from '../services/products.service';

const ProductDetailsPage = () => {
  const [product, setProduct] = useState(null);
  const [searchParams] = useSearchParams(); // Extract query params from the URL
  const productId = searchParams.get('id'); // Get the productId from ?id=123

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        await getProducts({ id: productId }).then(res => {
          setProduct(res?.data);
        }).catch(err => {
          console.error(err)
        });
      } catch (err) {
        console.error("Error fetching product", err);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  if (!product) return <div className="p-6">Loading...</div>;

  // Calculate discount price if applicable
  const discounted = product?.percent_discount && product?.percent_discount > 0;
  const discountPrice = discounted
    ? (product?.price - product?.price * (product?.percent_discount / 100)).toFixed(2)
    : product?.price;

  return (
    <motion.div
      className="py-12 px-6 max-w-6xl mx-auto bg-gray-50"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}>

      {/* Product Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 md:p-10 rounded-2xl shadow-xl">

        {/* Image as background div */}
        <div className="aspect-[4/3] w-full bg-gray-100 rounded-2xl shadow-md overflow-hidden">
          <div
            className="w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${product?.imageUrl || 'https://via.placeholder.com/500'})`,
            }}
          ></div>
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">{product?.name}</h1>

            {/* Condition Tag */}
            {product?.condition && (
              <div className="inline-block mb-2">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full shadow-sm ${
                    product?.condition === 'new'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {product?.condition === 'new' ? 'New Product' : 'Refurbished'}
                </span>
              </div>
            )}

            {/* Price and Discount */}
            <div className="mb-3">
              {discounted && (
                <p className="text-base text-gray-400 line-through">${product?.price.toFixed(2)}</p>
              )}
              <div className="flex items-center gap-2">
                <p className="text-orange-600 font-semibold text-2xl">
                  ${discountPrice}
                </p>
                {discounted && (
                  <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded-full">
                    -{product?.percent_discount}% OFF
                  </span>
                )}
              </div>
            </div>


            {/* Remaining Units */}
            {product?.stock !== undefined && product?.stock !== null && (
              <p
                className={`text-sm font-medium mt-2 ${
                  product.stock <= 5 ? 'text-red-500' : 'text-gray-600'
                }`}
              >
                {product.stock <= 5
                  ? `Hurry! Only ${product.stock} left in stock.`
                  : `${product.stock} units remaining`}
              </p>
            )}

            {/* Category */}
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
              {product?.category}
            </p>

            {/* Product Description */}
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              {product?.description}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => console.log('Added to cart:', product)}
            className="bg-orange-500 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-orange-600 transition-all duration-300 shadow"
          >
            Add to Cart
          </button>
        </div>
      </div>


      {/* Reviews, Details and Related Products Sections */}
      <ProductDetails product={product}/>
      <ProductReviews />
      <RelatedProducts />
    </motion.div>
  );
};

export default ProductDetailsPage;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductReviews from '../components/Product/ProductReviews';
import RelatedProducts from '../components/Product/RelatedProducts';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const mockProduct = {
          id,
          name: `MetroFit Headphones ${id}`,
          category: 'Electronics',
          price: 79.99,
          image: 'https://via.placeholder.com/600x400',
          description: 'Experience immersive sound quality with MetroFit headphones. Stylish, wireless, and built for comfort.',
        };
        setProduct(mockProduct);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    console.log('Added to cart:', product);
  };

  if (!product) return <div className="p-6">Loading...</div>;

  return (
    <motion.div
      className="py-12 px-6 max-w-6xl mx-auto bg-gray-50"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}>
      
      <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-xl shadow-md">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="rounded-xl w-full object-cover shadow-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
          <p className="text-orange-600 font-semibold text-xl mb-1">${product.price}</p>
          <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide">{product.category}</p>
          <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

          <button
            onClick={handleAddToCart}
            className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition shadow"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <ProductReviews />
      <RelatedProducts />
    </motion.div>
  );
};

export default ProductDetailsPage;

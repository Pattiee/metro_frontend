import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/products/${product.id}`); // Adjust route path if needed
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent navigating when clicking the button
    onAddToCart(product);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out cursor-pointer group"
    >
      {/* Image Section */}
      <div
        className="w-full h-40 bg-gray-200 mb-4 rounded-t-lg"
        style={{
          backgroundImage: `url(${product.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-medium">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="mt-2 font-bold text-orange-500">${product.price}</p>

        <button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

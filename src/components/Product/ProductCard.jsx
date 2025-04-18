import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState('');
  const [progress, setProgress] = useState(100);
  const [offerExpired, setOfferExpired] = useState(false);

  const discounted = product?.discount && product?.discount > 0;
  const discountPrice = discounted
    ? (product?.price - product?.price * (product?.discount / 100)).toFixed(2)
    : product?.price;

  useEffect(() => {
    if (!product?.offerExpiresAt) return;

    const start = new Date();
    const end = new Date(product?.offerExpiresAt);
    const totalTime = end - start;

    const countdown = setInterval(() => {
      const now = new Date();
      const timeRemaining = end - now;

      if (timeRemaining <= 0) {
        clearInterval(countdown);
        setTimeLeft('');
        setOfferExpired(true);
        setProgress(0);
        return;
      }

      const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);

      const percent = Math.max(0, (timeRemaining / totalTime) * 100);
      setProgress(percent.toFixed(0));
    }, 1000);

    return () => clearInterval(countdown);
  }, [product?.offerExpiresAt]);

  const handleCardClick = () => {
    navigate(`/products/${product?.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out cursor-pointer group relative"
    >
      {/* Badge Section */}
      <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
        {discounted && (
          <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
            -{product?.discount}%
          </span>
        )}
        {product?.offerExpiresAt && (
          <span className={`text-xs px-2 py-1 rounded-full ${
            offerExpired ? 'bg-gray-500' : 'bg-red-500 text-white'
          }`}>
            {offerExpired ? 'Offer Expired' : 'Limited Offer'}
          </span>
        )}
      </div>

      {/* Image */}
      <div
        className="w-full h-40 bg-gray-200 mb-4 rounded-t-lg"
        style={{
          backgroundImage: `url(${product?.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-lg font-medium">{product?.name}</h3>
        <p className="text-sm text-gray-500">{product?.category}</p>

        <div className="mt-2 flex items-center justify-between">
          {discounted && ( <p className="text-sm text-gray-400 line-through">${product?.price.toFixed(2)}</p> )}
          <p className="font-bold text-orange-500 text-lg">${discountPrice}</p>
        </div>

        {/* Countdown */}
        {product?.offerExpiresAt && (
          <>
            <p className={`text-xs mt-1 ${offerExpired ? 'text-gray-400' : 'text-red-500'}`}>
              {offerExpired ? 'Deal has ended' : `Ends in ${timeLeft}`}
            </p>

            {/* Progress Bar */}
            <div className="mt-1 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-red-500 transition-all duration-1000 ease-linear"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </>
        )}

        <button
          onClick={handleAddToCart}
          disabled={offerExpired}
          className={`mt-4 w-full py-2 rounded-md transition ${
            offerExpired
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-orange-500 text-white hover:bg-orange-600'
          }`}
        >
          {offerExpired ? 'Expired' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

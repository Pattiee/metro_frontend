import React from 'react';

const ProductReviews = () => {
  return (
    <div className="mt-16">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Customer Reviews</h2>
      <div className="bg-white rounded-lg p-4 shadow-sm space-y-4">
        <div className="border-b pb-3">
          <p className="font-medium text-gray-700">Jane Doe</p>
          <p className="text-sm text-gray-500 italic">"Amazing quality and super comfortable!"</p>
        </div>
        <div>
          <p className="font-medium text-gray-700">John Smith</p>
          <p className="text-sm text-gray-500 italic">"Battery lasts forever, and sound is 🔥!"</p>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;

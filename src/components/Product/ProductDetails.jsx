import React from 'react'

const ProductDetails = ({ product }) => {
 return (
    <div className="mt-16">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Product Details</h2>
      <div className="bg-white rounded-lg p-4 shadow-sm space-y-4">
        <div className="border-b pb-3">
          <p className="font-medium text-gray-700">Condition</p>
         <p className="text-sm text-gray-500 italic">{ product?.condition }</p>
        </div>
        <div>
          <p className="font-medium text-gray-700">Description</p>
         <p className="text-sm text-gray-500 italic">{ product?.desc }</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails

import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../sections/Footer';
import Hero from '../sections/Hero'
import NavBar from '../components/NavBar'
import ProductCard from '../components/Product/ProductCard'

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Sugar",
      category: "Food",
      price: 29.99,
      image: "https://via.placeholder.com/300" // Replace with actual image URL
    },
    {
      id: 2,
      name: "Dell Server T310",
      category: "Servers",
      price: 19.99,
      image: "https://via.placeholder.com/300"
    },
    {
      id: 3,
      name: "Product 3",
      category: "Category C",
      price: 39.99,
      image: "https://via.placeholder.com/300"
    },
    {
      id: 4,
      name: "Product 4",
      category: "Category D",
      price: 49.99,
      image: "https://via.placeholder.com/300"
    }
  ];

  // Handle add product to card
  const handleAddToCart = (product) => {
    console.log('Adding to cart:', product);
    // /products/:id
    // You can integrate your cart logic here (e.g., context, redux, API call)
  };


  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <div>
        <NavBar/>
      </div>

      {/* Hero Section */}
      <div>
        <Hero/>
      </div>

      {/* Featured Products */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6 text-orange-600">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products?.map(product => (<ProductCard key={product.id} product={product} onAddToCart={handleAddToCart}/>))}
        </div>
      </section>

      {/* Favourites */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6 text-orange-600">Your Favourites</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition">
              <div className="w-full h-40 bg-gray-200 mb-4 rounded-lg"></div>
              <h3 className="text-lg font-medium">Favourite {idx + 1}</h3>
              <p className="text-sm text-gray-500">Category</p>
              <p className="mt-2 font-bold text-orange-500">$19.99</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6 text-orange-600">Browse by Category</h2>
        <div className="flex flex-wrap gap-4">
          {['Clothing', 'Electronics', 'Home', 'Beauty'].map((cat, idx) => (
            <div
              key={idx}
              className="bg-orange-100 text-orange-700 px-6 py-3 rounded-full font-medium hover:bg-orange-200 cursor-pointer transition"
            >
              {cat}
            </div>
          ))}
        </div>

        {/* Featured Products */}
        <div className="py-12 px-6">
          {/* <h2 className="text-2xl font-semibold mb-6 text-orange-600">Featured Products</h2> */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, idx) => (
              <div key={idx} className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition">
                <div className="w-full h-40 bg-gray-200 mb-4 rounded-lg"></div>
                <h3 className="text-lg font-medium">Product {idx + 1}</h3>
                <p className="text-sm text-gray-500">Category</p>
                <p className="mt-2 font-bold text-orange-500">$29.99</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Home;

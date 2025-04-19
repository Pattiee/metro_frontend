import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../sections/Footer';
import Hero from '../sections/Hero'
import NavBar from '../components/NavBar'
import ProductCard from '../components/Product/ProductCard'
import Loader from '../components/Loader'
import { getProducts } from '../services/products.service';

const Home = () => {
  const [loading, setLoading]=useState(true);
  const [products, setProducts] = useState([]);

  // const products = [
  //   {
  //     id: 1,
  //     name: "Sugar",
  //     category: "Food",
  //     price: 29.99,
  //     discount: 20, // <-- percent
  //     image: "https://via.placeholder.com/300" // Replace with actual image URL
  //   },
  //   {
  //     id: 2,
  //     name: "Dell Server T310",
  //     category: "Servers",
  //     price: 19.99,
  //     discount: 27,
  //     image: "https://via.placeholder.com/300"
  //   },
  //   {
  //     id: 3,
  //     name: 'MetroFit Pro Wireless',
  //     category: 'Audio Gear',
  //     price: 120.0,
  //     discount: 25,
  //     image: 'https://via.placeholder.com/400',
  //     offerExpiresAt: '2025-04-20T23:59:59Z' // use a real future date!
  //   },
  //   {
  //     id: 4,
  //     name: 'MetroFit Max',
  //     category: 'Headphones',
  //     price: 100.0,
  //     discount: 30,
  //     image: 'https://via.placeholder.com/400',
  //     offerExpiresAt: '2025-04-19T23:59:59Z'
  // description: 'Experience immersive sound quality with MetroFit headphones. Stylish, wireless, and built for comfort.',
  //   }
  // ];

  const loadProducts = async () => {
      await getProducts().then(res => {
        setProducts(res?.data);
        console.log(res?.data);
      }).catch(err => {
        console.error("ERROR: " + err);
      }).finally(() => {
        setLoading(false);
      });
    }

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading){
       console.log("Loading");
       return <div>Loading data...</div>
   }

  // Handle add product to cart
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
          {products?.map(product => (<ProductCard key={product?.productId} product={product} onAddToCart={handleAddToCart}/>))}
        </div>
      </section>

      {/* Favourites */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6 text-orange-600">Your Favourites</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products?.map(product => (<ProductCard key={product?.productId} product={product} onAddToCart={handleAddToCart}/>))}
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
            {products?.map(product => (<ProductCard key={product?.productId} product={product} onAddToCart={handleAddToCart}/>))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Home;

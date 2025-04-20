import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../sections/Footer';
import Hero from '../sections/Hero'
import NavBar from '../components/NavBar'
import ProductCard from '../components/Product/ProductCard'
import Loader from '../components/Loader'
import { getProducts } from '../services/products.service';
import { Button } from 'react-scroll';

const Home = () => {
  const [message, setMessage] = useState('');
  const [filter, setFilter] = useState('');
  const [loading, setLoading]=useState(true);
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const loadProducts = async () => {
    await getProducts({}).then(res => {
      setProducts(res?.data);
      console.log(res?.data);
    }).catch(err => {
      console.error("ERROR: " + err);
    }).finally(() => {
      setLoading(false);
      if (products.length < 1) {
        setMessage("No products found");
      }
    });
  }

  const handleFilter = async (e, category) => {
    if (filter.toLocaleLowerCase() === category.toLowerCase()) {
      setFilter('');
      loadProducts();
      return;
    } else {
      await getProducts({ category: category }).then(res => {
        setProducts(res?.data);
        setFilter(category);
        console.log(filter);
      }).catch(err => {
        console.error("ERROR: " + err);
      }).finally(() => {
        setLoading(false);
        if (products.length < 1) {
          setMessage("No products found");
        }
      });
    }
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
    
      <>
        {/* Featured Products */}
        {
          products?.length > 0 && (
            <section className="py-12 px-6">
              <h2 className="text-2xl font-semibold mb-6 text-orange-600">Featured Products</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {products?.map(product => product?.featured && (<ProductCard key={product?.productId} product={product} onAddToCart={handleAddToCart} />))}
              </div>
            </section>
          )
        }

        {/* Favourites */}
        {
          favoriteProducts?.length > 0 && (
            <section className="py-12 px-6 bg-gray-50">
              <h2 className="text-2xl font-semibold mb-6 text-orange-600">Your Favourites</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {favoriteProducts?.length > 0 ? products?.map(product => (<ProductCard key={product?.productId} product={product} onAddToCart={handleAddToCart} />)) : <div>{ message }</div>}
              </div>
            </section>
          )
        }
      </>
      

      {/* Categories */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6 text-orange-600">Browse by Category</h2>
        <div className="flex flex-wrap gap-4">
          {['Clothing', 'Electronics', 'Furniture', 'Beauty'].map((category, idx) => (
            <button
              key={idx}
              className={`flex px-6 py-3 rounded-full font-medium hover:bg-orange-200 cursor-pointer transition ${filter === category ? 'bg-orange-500 text-white hover:text-orange-700': 'bg-orange-100 text-orange-700'}`}
              onClick={(e) => handleFilter(e, category)}
            >
              {category}
              {filter === category && (<p className='px-2'>{products.length}</p>)}
            </button>
          ))}
        </div>

        {/* Featured Products */}
        <div className="py-12 px-6">
          {/* <h2 className="text-2xl font-semibold mb-6 text-orange-600">Featured Products</h2> */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products?.length > 0 ? products?.map(product => (<ProductCard key={product?.productId} product={product} onAddToCart={handleAddToCart} />)) : <div>{ message }</div> }
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Home;

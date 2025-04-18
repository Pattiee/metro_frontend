import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

// Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Auth from './pages/Auth';
import ProductDetailsPage from './pages/ProductDetailsPage';


const App = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Routes>
        <Route index element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="*" element={ <NotFound/> } />
      </Routes>
    </div>
  );
};

export default App;

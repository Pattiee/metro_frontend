import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { ROLES } from './roles'
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { checkAuth } from './slices/authSlice';
// import { fet };
import ProtectedRoute from './utils/ProtectedRoute';
import FloatingCart from './components/FloatingCart'

// Pages
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';
import AuthPage from './pages/AuthPage';
import AdminDashboard from './pages/AdminDashboard'
import AccountInfo from './pages/AccountInfo'
import ProductDetailsPage from './pages/ProductDetailsPage';
import Cart from './pages/Cart';


const App = () => {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const hideCartOn = ['/auth', '/cart', '/checkout'];

  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900">
      <Toaster position='top-center' />
      
      <Routes>
        <Route index element={<Home />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path="/product" element={<ProductDetailsPage />} />
        <Route path='/checkout' element={ <Checkout/> } />
        <Route path='/cart' element={ <Cart/> } />
        <Route path="*" element={<NotFound />} />
        
        {/* Protected routes */}
        <Route path='/admin' element={
          <ProtectedRoute roles={[ROLES.ADMIN]}>
            <AdminDashboard/>
          </ProtectedRoute>}>
        </Route>

        <Route path='/users' element={
          <ProtectedRoute roles={[ROLES.USER]}>
            <AccountInfo/>
          </ProtectedRoute>}>
        </Route>
      </Routes>

      {!hideCartOn.includes(pathname) && <FloatingCart/>}
    </div>
  );
};

export default App;

import React, { useEffect } from 'react';
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
import AdminLayout from './layouts/AdminLayout'
import AddProduct from './pages/admin/AddProduct';
import UsersPage from './pages/admin/UsersPage';
import UpdateUser from './pages/admin/UpdateUser';


const App = () => {
  // const { user } = useAuth();
  const { pathname } = useLocation();
  const hideCartOn = ['/auth', '/cart', '/checkout', '/admin/*'];
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900">
      <Toaster position='top-center' />
      
      <Routes>
        <Route index element={<Home />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path="/product" element={<ProductDetailsPage />} />
        <Route path='/checkout' element={ <Checkout/> } />
        <Route path='/cart' element={ <Cart/> } />
        
        {/* Protected routes */}
        {/* <Route path='/admin/users' element={ <ProtectedRoute children={<UsersPage/>} roles={[ROLES.ADMIN]}/> } /> */}

        <Route path='/admin' element={
            <ProtectedRoute roles={[ROLES.USER]}>
              <AdminLayout/>
            </ProtectedRoute>}
        >
          <Route index element={<AdminDashboard />} />
          <Route path="add_products" element={<AddProduct />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="update_user" element={<UpdateUser />} />
        </Route>

        {/* <Route path='/user' element={
          <ProtectedRoute roles={[ROLES.USER]}>
            <Routes>
              <Route path='/' element={ <AccountInfo/> } />
            </Routes>
          </ProtectedRoute>}>
        </Route> */}
      </Routes>

      

      {!hideCartOn.includes(pathname) && <FloatingCart/>}
    </div>
  );
};

export default App;

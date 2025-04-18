import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

// Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Auth from './pages/Auth'


const App = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path="*" element={ <NotFound/> } />
    </Routes>
  );
};

export default App;

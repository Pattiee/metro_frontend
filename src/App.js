import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import 'react-bootstrap'

import './index.css'
import Admin from "./pages/Admin/Admin.js";

// Authorization
import RequireAuth from "./components/RequireAuth.js";

// Routes
import { Home, ShoppingHome, HousingHomePage, Auth, ProfilePage, Error, Contact } from "./router/routes.js";

// Sections
import Layout from "./components/Layout.js";
import { useAuth } from "./hooks/useAuth.js";


// Roles
import Roles from "./utils/Roles.js";


const App = () => {

  

  const { user } = useAuth();

  const navigate = useNavigate();

  return (
      <Routes>
          <Route path="/" element={<Layout/>}>
            {/* Public routes */}
            <Route path="/auth" element={<Auth/>}/>
            <Route index element={<Home/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/access-denied" element={<Error/>}/>

            {/* User and admin routes */}
            <Route element={<RequireAuth allowedRoles={[Roles.USER]}/>}>
              <Route path="/shopping" element={<ShoppingHome/>}/>
              <Route path="/housing" element={<HousingHomePage/>}/>
              <Route path="/profile" element={<ProfilePage/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Route>


            {/* Admin routes */}
            <Route element={<RequireAuth allowedRoles={[Roles.ADMIN]}/>}>
              <Route path="/admin" element={<Admin/>}/>
            </Route>

            {/* Catch all */}
            <Route path="/*" element={<Error/>}/>
          </Route>
      </Routes>
  );
}

export default App;

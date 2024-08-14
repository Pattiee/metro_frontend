import React, { useEffect, useState } from 'react';
import { Login } from './folder/Login';
import { Register } from './folder/Register';

import './authPage.css';


const AuthPage = () => {

  const [registered, setIsRegistered] = useState(true);

  useEffect(() => {

  }, []);

  return (
    <div className='authPage'>
      {registered === true ?
      <div className='login-component'>
        <Login updateRegState={() => setIsRegistered(false)}/>
      </div>
      :
      <div className='registration-component'>
        <Register updateLoginState={() => setIsRegistered(true)}/>
      </div>
      }
    </div>
  );
};

export default AuthPage;
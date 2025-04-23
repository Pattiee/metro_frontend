import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../services/auth.service';
import toast from 'react-hot-toast';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [firstname, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    try {
      if (isLogin) {
        await login({ username, password }).then((res) => {
          toast.success("Login success");
          console.log("Login success: ", res.data);
          navigate('/');
        }).catch((loginErr) => {
          toast.error(loginErr?.message ?? "Something went wrong.");
          setErrorMessage(loginErr?.message ?? "Login failed");
        });
      } else {
        await register({ firstname, username, password }).then((res) => {
          toast.success("Account created successfully");
          console.log("Account created successfully: ", res.data);
          navigate('/login');
        }).catch((registrationErr) => {
          toast.error(registrationErr?.message ?? "Something went wrong.");
          setErrorMessage(registrationErr?.message ?? "Registration failed");
        });
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className='w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8'>

        <div>
          <h2 className='text-xl py-2 text-gray-900 dark:text-white'>
            {isLogin ? "Login to your account" : "Create an account"}
          </h2>
        </div>

        {errorMessage && <p className='text-red-500 text-center mb-4'>{errorMessage}</p>}

        <form className='space-y-4' onSubmit={handleSubmit}>
          {/* First name (only for registration) */}
          {!isLogin && (
            <input
              type='text'
              placeholder='First name'
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              className='w-full px-4 py-2 bg-white dark:bg-gray-700 text-black dark:text-white autofill:bg-white autofill:text-black border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400'
              required
            />
          )}

          {/* Username */}
          <input
            type='email'
            placeholder='Username'
            value={username}
            autoComplete='username webauthn'
            onChange={(e) => setUsername(e.target.value)}
            className='w-full px-4 py-2 bg-white dark:bg-gray-700 text-black dark:text-white autofill:bg-white autofill:text-black border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400'
            required
          />

          {/* Password */}
          <input
            type='password'
            placeholder='Password'
            value={password}
            autoComplete='current-password webauthn'
            onChange={(e) => setPassword(e.target.value)}
            className='w-full px-4 py-2 bg-white dark:bg-gray-700 text-black dark:text-white autofill:bg-white autofill:text-black border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400'
            required
          />

          {/* Submit Button */}
          <button
            type='submit'
            disabled={loading}
            className='w-full bg-orange-500 dark:bg-orange-600 text-white py-2 rounded-md hover:bg-orange-600 dark:hover:bg-orange-700 transition disabled:opacity-50'
          >
            {loading ? (
              <div className="flex justify-center items-center">
                {/* Spinner */}
                <div className="border-4 border-t-4 border-orange-500 border-solid w-6 h-6 rounded-full animate-spin"></div>
              </div>
            ) : isLogin ? (
              "Login"
            ) : (
              "Register"
            )}
          </button>
        </form>

        <p className='text-center text-sm mt-4 text-gray-700 dark:text-gray-300'>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={() => setIsLogin(!isLogin)} className='text-orange-500 dark:text-orange-400 hover:underline font-medium'>
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;

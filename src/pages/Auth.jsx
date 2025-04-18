import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Auth = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Home Link */}
        <div className="text-sm text-right mb-4">
          <Link to="/" className="text-orange-500 hover:underline font-semibold">← Back Home</Link>
        </div>

        {/* Toggle Tabs */}
        <div className="flex justify-between mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('login')}
            className={`w-1/2 py-2 text-sm font-medium ${
              activeTab === 'login'
                ? 'text-orange-600 border-b-2 border-orange-500'
                : 'text-gray-500'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`w-1/2 py-2 text-sm font-medium ${
              activeTab === 'register'
                ? 'text-orange-600 border-b-2 border-orange-500'
                : 'text-gray-500'
            }`}
          >
            Register
          </button>
        </div>

        {/* Forms */}
        {activeTab === 'login' ? (
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition font-semibold"
            >
              Sign In
            </button>
          </form>
        ) : (
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition font-semibold"
            >
              Create Account
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;

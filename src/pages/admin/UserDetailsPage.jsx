import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const UserDetailsPage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [selectedRole, setSelectedRole] = useState('');
  const roleOptions = import.meta.env.VITE_ROLES?.split(',') || [];

  useEffect(() => {
    axios.get(`/api/v1/users/${userId}`)
      .then(res => {
        setUser(res.data);
        setSelectedRole(res.data.role);
      })
      .catch(() => toast.error('Failed to fetch user details'));
  }, [userId]);

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleUpdateRole = () => {
    axios.patch(`/api/v1/users/${userId}/role`, { role: selectedRole })
      .then(() => {
        toast.success('Role updated successfully');
        setUser((prev) => ({ ...prev, role: selectedRole }));
      })
      .catch(() => toast.error('Failed to update role'));
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700 dark:text-gray-300">
        Loading user...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-orange-600 dark:text-orange-400">
          User Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
          <div><strong>First Name:</strong> {user.firstName}</div>
          <div><strong>Last Name:</strong> {user.lastName}</div>
          <div><strong>Email:</strong> {user.email}</div>
          <div><strong>Phone:</strong> {user.phoneNumber}</div>
          <div><strong>Region:</strong> {user.region}</div>
          <div>
            <strong>Status:</strong>{' '}
            <span className={`font-medium ${
              user.enabled ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            }`}>
              {user.enabled ? 'Active' : 'Inactive'}
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Role
          </label>
          <select
            value={selectedRole}
            onChange={handleRoleChange}
            className="w-full mt-1 p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          >
            <option value="" disabled>Select a role</option>
            {roleOptions.map((role) => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
          <button
            onClick={handleUpdateRole}
            className="mt-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded shadow-md transition"
          >
            Update Role
          </button>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="text-sm text-orange-600 dark:text-orange-400 underline"
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default UserDetailsPage;

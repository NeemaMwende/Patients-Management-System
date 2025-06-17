import { useAuth } from '../context/AuthContext';
import React from 'react';

const NurseDashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Nurse Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span>Welcome, {user?.first_name || user?.username}</span>
            <button
              onClick={logout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      {/* Nurse dashboard content goes here */}
    </div>
  );
};

export default NurseDashboard;

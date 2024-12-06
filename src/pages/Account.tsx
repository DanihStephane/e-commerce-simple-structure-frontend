import React, { useState } from 'react';
import { User } from 'lucide-react';

export const Account = () => {
  const [user] = useState({
    name: 'John Doe',
    email: 'john@example.com',
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gray-100 p-4 rounded-full">
              <User className="h-12 w-12 text-gray-600" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-center mb-8">My Account</h1>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={user.name}
                readOnly
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={user.email}
                readOnly
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <h2 className="text-lg font-semibold">Account Actions</h2>
            <div className="space-y-2">
              <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors">
                Edit Profile
              </button>
              <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded hover:bg-gray-200 transition-colors">
                Order History
              </button>
              <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded hover:bg-gray-200 transition-colors">
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
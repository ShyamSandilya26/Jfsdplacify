import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState('Admin'); // Default to Admin login
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginTypeChange = (type) => {
    setLoginType(type);
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (loginType === 'Admin') {
      console.log('Logging in as Admin');
      navigate('/admin'); // Navigate to admin dashboard
    } else if (loginType === 'Student') {
      console.log('Logging in as Student');
      navigate('/student'); // Navigate to student dashboard
    } else if (loginType === 'Employer') {
      // Handle employer login
      console.log('Employer login');
      // Add navigation logic here
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Placify Login</h2>

        {/* Toggle between login types */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 rounded-l-lg ${
              loginType === 'Admin' ? 'bg-gray-200' : 'bg-white'
            } border border-gray-300`}
            onClick={() => handleLoginTypeChange('Admin')}
          >
            Admin
          </button>
          <button
            className={`px-4 py-2 ${
              loginType === 'Student' ? 'bg-gray-200' : 'bg-white'
            } border border-gray-300`}
            onClick={() => handleLoginTypeChange('Student')}
          >
            Student
          </button>
          <button
            className={`px-4 py-2 rounded-r-lg ${
              loginType === 'Employer' ? 'bg-gray-200' : 'bg-white'
            } border border-gray-300`}
            onClick={() => handleLoginTypeChange('Employer')}
          >
            Employer
          </button>
        </div>

        {/* Login form */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
          >
            Login as {loginType}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

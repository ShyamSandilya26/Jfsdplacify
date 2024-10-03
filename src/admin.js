import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout functionality here (e.g., clear user session)
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-900">Admin Dashboard</div>
        <div className="space-x-4">
          <button
            onClick={() => navigate('/')} // Redirect to Home
            className="text-blue-500 hover:text-blue-700"
          >
            Home
          </button>
          <button
            onClick={handleLogout} // Logout
            className="text-red-500 hover:text-red-700"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Admin Dashboard</h1>
        <p className="text-lg mb-4">
          Here you can manage users, view reports, and perform administrative tasks.
        </p>

        {/* Example Admin Functions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">Manage Users</h2>
            <p className="text-gray-700">View and manage all registered users.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Go to Users
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">View Reports</h2>
            <p className="text-gray-700">Generate and view reports for user activities.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Go to Reports
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">Settings</h2>
            <p className="text-gray-700">Configure application settings.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Go to Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

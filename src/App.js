import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginPage from './login'; 
import RegisterPage from './register'; 
import AboutPage from './about';
import AdminDashboard from './admin';
import StudentDashboard from './student'; 

const App = () => {
  return (
    <Router>
      <div>
        {/* Header */}
        <header className="bg-blue-900 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Placify</h1>
            <nav>
              <Link to="/" className="mr-4 hover:underline">Home</Link>
              <Link to="/login" className="mr-4 hover:underline">Login</Link>
              <Link to="/register" className="mr-4 hover:underline">Register</Link>
              <Link to="/about" className="mr-4 hover:underline">About</Link>
            </nav>
          </div>
        </header>

        {/* Routes */}
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <main className="container mx-auto mt-12">
                <h2 className="text-4xl font-bold text-center mb-8">Welcome to Placify</h2>
                <p className="text-center text-xl mb-12">
                  Connecting students with opportunities and employers with talent
                </p>
                <div className="text-center">
                  <Link to="/register">
                    <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
                      Get Started
                    </button>
                  </Link>
                </div>
                {/* Info Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center">
          <div className="p-6 border rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-4">For Students</h3>
            <p>Explore job opportunities, apply for positions, and track your application status all in one place.</p>
          </div>
          <div className="p-6 border rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-4">For Employers</h3>
            <p>Post job listings, review applications, and connect with qualified candidates efficiently.</p>
          </div>
          <div className="p-6 border rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-4">For Institutions</h3>
            <p>Manage placement records, generate reports, and facilitate employer-student interactions seamlessly.</p>
          </div>
        </div>

        {/* Call to Action Section */}
        <section className="bg-gray-100 text-center py-12 mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
          <p className="text-lg mb-6">
            Join our platform today and take the next step in your career journey.
          </p>
          <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-gray-800">
            Sign Up Now
          </button>
        </section>
              </main>
            }
          />
          
          {/* Login Route */}
          <Route path="/login" element={<LoginPage />} />

          {/* Register Route */}
          <Route path="/register" element={<RegisterPage />} />

          {/* About Route */}
          <Route path="/about" element={<AboutPage />} />

          {/*admin route */}
          <Route path="/admin" element={<AdminDashboard/>} />

          <Route path="/student" element={<StudentDashboard />} /> 

        </Routes>

        {/* Footer */}
        <footer className="bg-blue-900 text-white mt-16 p-6">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Placify. All rights reserved.</p>
            <p>Contact: support@placify.com</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;

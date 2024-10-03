import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const navigate = useNavigate();

  // Sample job data (you can replace this with data from a server or API)
  const jobsData = [
    { id: 1, title: 'Software Engineer', company: 'Tech Co.' },
    { id: 2, title: 'Data Analyst', company: 'Analytics Inc.' },
    { id: 3, title: 'Product Manager', company: 'Innovate Ltd.' },
  ];

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Handle job search
  const filteredJobs = jobsData.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle applying to a job
  const handleApply = (job) => {
    if (!appliedJobs.includes(job)) {
      setAppliedJobs([...appliedJobs, job]);
    }
  };

  const handleLogout = () => {
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-900">Student Dashboard</div>
        <div className="space-x-4">
          <button
            onClick={handleLogout}
            className="text-red-500 hover:text-red-700"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Student Dashboard</h1>
        <p className="text-lg mb-4">Search and apply for jobs, and manage your applications.</p>

        {/* Job Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search for jobs..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Available Jobs */}
        <h2 className="text-2xl font-bold mb-4">Available Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="text-gray-700">{job.company}</p>
              <button
                onClick={() => handleApply(job)}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Apply
              </button>
            </div>
          ))}
        </div>

        {/* Applied Jobs */}
        <h2 className="text-2xl font-bold mt-8 mb-4">Applied Jobs</h2>
        {appliedJobs.length > 0 ? (
          <ul className="list-disc pl-5">
            {appliedJobs.map((job) => (
              <li key={job.id} className="text-lg">
                {job.title} at {job.company}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">You have not applied to any jobs yet.</p>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;

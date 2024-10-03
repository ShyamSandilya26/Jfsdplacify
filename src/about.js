import React from 'react';

const AboutPage = () => {
  return (
    <div>
      {/* About Section in Landscape Mode */}
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">About Placify</h1>
        <div className="flex flex-wrap justify-between items-start">
          
          {/* Goals Section */}
          <section className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Goals</h2>
            <p className="text-gray-700 text-lg">
              At Placify, our mission is to bridge the gap between students and employers, fostering skill development and facilitating career growth through modern technology.
              Connecting talented students with leading employers to foster career growth and innovation.
            </p>
          </section>

          {/* Key Features Section */}
          <section className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700 text-lg">
              <li>Student and employer profile matching</li>
              <li>Real-time job updates</li>
              <li>Customizable profiles for students and employers</li>
              <li>Direct messaging between students and employers</li>
              <li>Insights and analytics for performance tracking</li>
            </ul>
          </section>

          {/* Team Section */}
          <section className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/3">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Meet the Team</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold">Shyam</h3>
              </div>
              <div>
                <h3 className="text-xl font-bold">Pranav</h3>
              </div>
              <div>
                <h3 className="text-xl font-bold">Mani Kanta</h3>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

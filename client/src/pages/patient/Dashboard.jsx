import React from 'react';
import { Link } from 'react-router-dom';

const PatientDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4879dab1-4810-4389-9102-34ebce4f3ffe.png"
                alt="MedCare Logo"
                className="h-8 w-auto mr-2"
              />
              <span className="text-xl font-bold text-blue-700">MedCare</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link to="/patient/profile" className="text-gray-700 hover:text-blue-600 px-3 py-2">Profile</Link>
              <button className="text-red-600 hover:text-red-800 px-3 py-2">Logout</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Welcome Header */}
      <header className="bg-blue-700 text-white py-12 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome to Your Dashboard</h1>
          <p className="text-blue-100">Your health at a glance — updates, reminders & records.</p>
        </div>
      </header>

      {/* Carousel Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500 text-xl">
            {/* Replace with actual carousel component */}
            🖼 Carousel Placeholder (e.g., Health Tips / Hospital Banners)
          </div>
        </div>
      </section>

      {/* Patient Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Upcoming Appointments */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Upcoming Appointments</h2>
          <p className="text-gray-600">You have a general checkup on Aug 5, 2025 at 11:00 AM.</p>
        </div>

        {/* Prescriptions */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Latest Prescriptions</h2>
          <p className="text-gray-600">Dr. Smith prescribed Paracetamol, Vitamin D3 on Jul 28, 2025.</p>
        </div>

        {/* Messages / Reminders */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Messages</h2>
          <p className="text-gray-600">Your lab results are ready. Please check your reports.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} MedCare Patient Dashboard. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PatientDashboard;

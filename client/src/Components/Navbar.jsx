import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/patient" className="flex items-center">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4879dab1-4810-4389-9102-34ebce4f3ffe.png"
                alt="MedCare Logo"
                className="h-8 w-auto mr-2"
              />
              <span className="text-2xl font-bold text-sky-700">MedCare</span>
            </Link>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/patient/profile" className="text-sky-700 hover:text-sky-900 px-3 py-2 ">Profile</Link>
            <Link to="/patient/appointments" className="text-sky-700 hover:text-sky-900 px-3 py-2">Appointments</Link>
            <Link to="/patient/billing" className="text-sky-700 hover:text-sky-900 px-3 py-2">Billing</Link>
            <Link to="/patient/history" className="text-sky-700 hover:text-sky-900 px-3 py-2">Medical History</Link>
            <button className="text-red-600 hover:text-red-800 px-3 py-2">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



import React from 'react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4879dab1-4810-4389-9102-34ebce4f3ffe.png" 
                alt="Hospital logo" 
                className="h-8 w-auto mr-2"
              />
              <span className="text-xl font-bold text-sky-700">MedCare</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-sky-600 px-3 py-2">Home</a>
              <a href="#" className="text-gray-700 hover:text-sky-600 px-3 py-2">Services</a>
              <a href="#" className="text-gray-700 hover:text-sky-600 px-3 py-2">Doctors</a>
              <a href="#" className="text-gray-700 hover:text-sky-600 px-3 py-2">Contact</a>
            </div>
            <div className="flex items-center">
              <button className="border border-sky-700 text-sky-700 px-4 py-2 rounded-md mr-4 hover:bg-sky-50 transition">Login</button>
              <button className="bg-sky-700 text-white px-4 py-2 rounded-md hover:bg-sky-800 transition">Register</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-sky-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Advanced Hospital Management Made Simple</h1>
            <p className="text-xl mb-8 text-sky-100">Streamline your healthcare operations with our comprehensive solution for patient records, appointments, billing and more.</p>
            <div className="flex space-x-4">
              <button className="bg-white text-sky-700 px-6 py-3 rounded-md font-medium hover:bg-sky-50 transition">Get Started</button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-sky-600 transition">Learn More</button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2205dbf8-4d47-4696-9756-5395b44f3aa1.png" 
              alt="Doctor and nurse" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive Hospital Management</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our system provides all the tools you need to efficiently manage your healthcare facility</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-sky-700 mb-4 text-4xl">👨‍⚕️</div>
            <h3 className="text-xl font-semibold mb-2">Patient Management</h3>
            <p className="text-gray-600">Complete patient records, medical history, and treatment tracking in one secure system.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-sky-700 mb-4 text-4xl">📅</div>
            <h3 className="text-xl font-semibold mb-2">Appointment Scheduling</h3>
            <p className="text-gray-600">Streamlined scheduling with automated reminders and real-time availability.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-sky-700 mb-4 text-4xl">💳</div>
            <h3 className="text-xl font-semibold mb-2">Billing & Invoicing</h3>
            <p className="text-gray-600">Integrated billing system with insurance claims processing and payment tracking.</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-sky-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-sky-700 mb-2">500+</div>
              <div className="text-gray-600">Hospitals</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-700 mb-2">10K+</div>
              <div className="text-gray-600">Medical Staff</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-700 mb-2">1M+</div>
              <div className="text-gray-600">Patients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-700 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-sky-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your hospital management?</h2>
          <p className="text-xl text-sky-100 mb-8 max-w-3xl mx-auto">Join thousands of healthcare providers who trust our system for their daily operations.</p>
          <button className="bg-white text-sky-700 px-8 py-3 rounded-md font-medium hover:bg-sky-50 transition text-lg">Request a Demo</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MedCare HMS</h3>
              <p className="text-gray-400">Advanced hospital management solutions for healthcare providers of all sizes.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Patient Management</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Appointments</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Billing System</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Reporting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <address className="text-gray-400 not-italic">
                123 Medical Center Drive<br />
                Boston, MA 02115<br /><br />
                Phone: (800) 555-1234<br />
                Email: info@medcarehms.com
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} MedCare Hospital Management System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
     <footer className="bg-gray-900 text-white py-10 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} MedCare Patient Dashboard. All rights reserved.
          </p>
        </div>
      </footer>
  )
}

export default Footer

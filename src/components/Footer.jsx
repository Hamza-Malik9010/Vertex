// components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#FFF8E6] text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        {/* First Row */}
        <div className="flex gap-6 mb-4">
          <Link
            to="/schedule-demo"
            className="bg-[#8D0B41] text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 text-center"
          >
            Schedule a Demo
          </Link>
          <Link
            to="/medical"
            className="bg-[#8D0B41] text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 text-center"
          >
            Medical
          </Link>
          <Link
            to="/dental"
            className="bg-[#8D0B41] text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 text-center"
          >
            Dental
          </Link>
        </div>
        {/* Second Row */}
        <div className="mt-4">
          <img src="/logof2.svg" alt="Logo" className="h-28 mx-auto" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// components/Header.jsx

// components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#FFF8E6] text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <img src="/logof2.svg" alt="Logo" className="h-28 mr-2" />
        </Link>
        <nav className="flex gap-4 text-lg font-semibold">
          <Link to="/dental" className="hover:underline text-[#8D0B41] transition-colors duration-300 hover:text-yellow-500">Dental</Link>
          <Link to="/medical" className="hover:underline text-[#8D0B41] transition-colors duration-300 hover:text-yellow-500">Medical</Link>
          <Link to="/schedule-demo" className="hover:underline text-[#8D0B41] transition-colors duration-300 hover:text-yellow-500">Schedule a Demo</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;






/*
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#3F00FF] text-white py-4 shadow-md">
      <div className="container ml-0 mr-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-28 mr-2 ml-0" />
        </Link>
        <nav className="flex gap-4">
          <Link to="/dental" className="hover:underline">Dental</Link>
          <Link to="/medical" className="hover:underline">Medical</Link>
          <Link to="/schedule-demo" className="hover:underline">Schedule a Demo</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

*/




/*  import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">Vertex Healthcare Solutions</h1>
        <nav className="flex gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/dental" className="hover:underline">Dental</Link>
          <Link to="/medical" className="hover:underline">Medical</Link>
          <Link to="/schedule-demo" className="hover:underline">Schedule a Demo</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;   */
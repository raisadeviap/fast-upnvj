import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/UPN.png';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo dengan link home */}
          <Link to="/" className="flex items-center">
            <img 
              src={Logo} 
              alt="UPNVJ Logo" 
              className="h-12"
            />
            <span className="ml-3 text-xl font-semibold">Fast UPNVJ</span>
          </Link>

          {/* Navigation Links dengan underline pada hover */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="relative group hover:text-primary transition-colors"
            >
              Beranda
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/" 
              className="relative group hover:text-primary transition-colors"
            >
              Tentang Kami
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/" 
              className="relative group hover:text-primary transition-colors"
            >
              Layanan
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Login Button */}
          <button 
            onClick={() => navigate('/login')}
            className="btn btn-primary btn-sm md:btn-md"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
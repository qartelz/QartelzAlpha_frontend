import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../../assets/images/product.png";

const Footer = () => {
  return (
    <footer className="bodyclr px-20 text-white py-8">
      <div className="container mx-auto px-4">
        <hr className="border-t border-gray-600 opacity-50 my-4" />
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex justify-center">
            {/* <img src={Logo} alt="Logo" className="h-12" /> */}
          </div>
          {/* Navigation */}
          <div className="flex flex-wrap justify-center space-x-2">
            <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
            <NavLink to="/opstmt" className="hover:text-gray-300">Opstmt</NavLink>
            <NavLink to="/asset-liab" className="hover:text-gray-300">Asset & Liab</NavLink>
            <NavLink to="/oca-ocl" className="hover:text-gray-300">OCA & OCL</NavLink>
            <NavLink to="/ratios" className="hover:text-gray-300">Ratios</NavLink>
            <NavLink to="/wc-tl-assmt" className="hover:text-gray-300">WC TL Assmt</NavLink>
            <NavLink to="/ff" className="hover:text-gray-300">FF</NavLink>
            <NavLink to="/kfi" className="hover:text-gray-300">Kfi</NavLink>
          </div>
          {/* Copyright */}
          <div className="flex justify-center">
            <span>&copy; 2024 </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => (
  <nav className="bg-gray-900 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <img src={logo} alt="ForOne Logo" className="w-32" />
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;

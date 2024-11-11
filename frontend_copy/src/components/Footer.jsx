import React from 'react';
import footerLogo from "../assets/footer-logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      {/* Top Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side - Store Info */}
        <div className="md:w-1/3 w-full">
          <h1 className="mb-5 w-36 title text-7xl text-yellow-400" > Skribb</h1>
          <p className="mb-4">Sri Balaji Books & Stationery, AVN College Polytechnic Gate, Reliveedhi, Ward-23, Visakhapatnam.</p>
          <p className="mb-2 text-xl"><strong>Store Hours:</strong></p>
          <p>Mon-Sat: 9:00 AM - 8:00 PM</p>
          <p>Sun: Closed</p>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="md:w-1/3 w-full">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-row gap-2">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li><a href="/all-products" className="hover:text-primary">All Products</a></li>
            <li><a href="/about-us" className="hover:text-primary">About Us</a></li>
            
          </ul>
        </div>

        {/* Right Side - Contact Info */}
        <div className="md:w-1/3 w-full">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="mb-2"><strong>Email:</strong> <a href="mailto:1975sailada@gmail.com" className="hover:text-primary">1975sailada@gmail.com</a></p>
          <p className="mb-2"><strong>Phone:</strong> <a href="tel:+919908969388" className="hover:text-primary">+91 9908969388</a></p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
        
        {/* Left Side - Policy Links */}
      

        {/* Right Side - Social Icons */}
        <div className="flex gap-6">
          <a href="https://www.facebook.com/avnv331" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaFacebook size={24} />
          </a>
         
          <a href="https://www.instagram.com/avncollege/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="container mx-auto mt-4 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Skribb - Sri Balaji Books & Stationary. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
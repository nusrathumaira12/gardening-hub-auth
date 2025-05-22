import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white mt-16 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold text-amber-400 mb-2">Contact Us</h2>
          <p>Email: support@greentalks.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Location: Earth, Nature Lane 42</p>
        </div>

        {/* Terms */}
        <div>
          <h2 className="text-xl font-bold text-amber-400 mb-2">Legal</h2>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline text-gray-300">Terms of Service</a></li>
            <li><a href="#" className="hover:underline text-gray-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline text-gray-300">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-bold text-amber-400 mb-2">Follow Us</h2>
          <div className="flex justify-center md:justify-start gap-4 text-2xl mt-2">
            <a href="#" className="hover:text-amber-400 transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-amber-400 transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-amber-400 transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-amber-400 transition-colors"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} GreenTalks. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

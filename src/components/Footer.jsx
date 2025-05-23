import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { PiPlant } from 'react-icons/pi';

const Footer = () => {
  return (
    <footer className="bg-green-900  text-white mt-16 py-10 px-4 text-center mx-auto w-full">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center justify-between">
 {/* Logo and Name */}
 <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center text-2xl font-bold text-white mb-2 pl-2">
            <PiPlant className="text-4xl text-green-100 mr-3" />
            <span className="text-white">Green<span className="text-amber-400">T</span>alks</span>
          </div>
          <p className="text-gray-300 text-sm">Cultivating nature, sharing green wisdom.</p>
        </div>


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
            <li><a href="/terms" className="hover:underline text-gray-300">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:underline text-gray-300">Privacy Policy</a></li>
            <li><a href="/cookie" className="hover:underline text-gray-300">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-bold text-amber-400 mb-2  md:justify-end md:text-end md:mr-7">Follow Us</h2>
          <div className="flex   gap-4 text-2xl mt-2  md:justify-end justify-center">
            <a href="https://www.facebook.com/" className="hover:text-amber-400 transition-colors"><FaFacebookF /></a>
            <a href="https://x.com/" className="hover:text-amber-400 transition-colors"><FaTwitter /></a>
            <a href="https://www.instagram.com/" className="hover:text-amber-400 transition-colors"><FaInstagram /></a>
            <a href="https://www.linkedin.com/" className="hover:text-amber-400 transition-colors"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

<hr />

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} GreenTalks. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;



"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Pages Section */}
        <div className="flex flex-col items-center md:items-start md:flex-row md:gap-6">
          <div className="w-24 h-24 flex-shrink-0">
            <img
              src="/logo.jpg.svg"
              alt="Salon Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold tracking-wide underline underline-offset-4 mb-4">
              SCISSORS VIP SALON
            </div>
            <h3 className="font-bold text-lg mb-2">Pages</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/term" className="hover:text-white">Terms</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/home" className="hover:text-white">Home</Link></li>
            <li><Link href="/services1" className="hover:text-white">Services</Link></li>
            <li><Link href="/pricing1" className="hover:text-white">Pricing</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Social + Location */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg mb-4">Find & Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-5 text-xl mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaFacebook /></a>
            <a href="https://www.instagram.com/scissorsvipsaloon?igsh=MWl5cHJhZDYzZHk4cQ%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400"><FaInstagram /></a>
          </div>

          {/* Google Map Embed */}
          <div className="w-full h-40 rounded overflow-hidden border border-gray-600">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.4240343378237!2d55.4767034!3d24.9359022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f7f89fe433ac3%3A0x2e7b4082fdcd7b9e!2sScissors%20vip%20mens%20saloon!5e0!3m2!1sen!2sae!4v1719400000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <p className="text-center text-gray-400 text-sm mt-10">
        © {new Date().getFullYear()} Salon. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;


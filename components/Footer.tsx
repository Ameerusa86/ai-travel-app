import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="w-11/12 lg:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Contact Us</h2>
          <p className="mb-2">1234 Street Name</p>
          <p className="mb-2">City, State, 12345</p>
          <p className="mb-2">Email: contact@company.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-white transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-white transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 mt-8">
        <p>
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

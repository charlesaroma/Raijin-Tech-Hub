import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social media icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Raijin Tech Hub</h3>
            <p className="text-gray-400">
              We are dedicated to providing innovative digital solutions for businesses. Our team specializes in custom software, IT consultancy, and more.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Contact</h4>
              <p className="text-gray-400">
                <strong>Email:</strong>{" "}
                <a href="mailto:raijintechug@gmail.com" className="text-teal-400 hover:text-teal-500">
                  raijintechug@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-teal-400">Custom Software & Web Development.</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-teal-400">IT Consultancy & Strategy</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-teal-400">Cloud Solutions & Migration</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-teal-400">UI/UX Design & Development</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-teal-400">Digital Transformation & Automation</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-3 items-center">
              <a
                href="https://wa.me/256777982066"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 flex items-center"
              >
                <FaWhatsapp size={24} className="mr-1" />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/raijin_tech_hub/profilecard/?igsh=dGxqd3kwMzVxZjR3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 flex items-center"
              >
                <FaInstagram size={24} className="mr-1" />
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/charles-aroma-8955b62a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 flex items-center"
              >
                <FaLinkedin size={24} className="mr-1" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Raijin Tech Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

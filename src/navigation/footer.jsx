import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook, FaEnvelope, FaArrowRight, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[var(--color-primary-900)] to-[var(--color-primary-950)] text-[var(--color-accent-100)] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[var(--color-primary-500)] rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[var(--color-secondary-500)] rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-[5%] py-12 lg:py-16">
        {/* Top Border Accent */}
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-primary-500)] to-transparent mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-[var(--color-accent-100)] to-[var(--color-primary-400)] bg-clip-text text-transparent">
              Raijin Tech Hub
            </h3>
            <p className="text-[var(--color-accent-400)] leading-relaxed mb-6">
              We are dedicated to providing innovative digital solutions for businesses. Our team specializes in custom software, IT consultancy, and cutting-edge technology implementations.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary-800)] flex items-center justify-center group-hover:bg-[var(--color-primary-700)] transition-colors duration-300">
                  <FaEnvelope className="text-[var(--color-primary-400)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--color-accent-500)] mb-1">Email Us</p>
                  <a 
                    href="mailto:raijintechug@gmail.com" 
                    className="text-[var(--color-accent-100)] hover:text-[var(--color-secondary-400)] transition-colors duration-300 font-medium cursor-pointer"
                  >
                    raijintechug@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[var(--color-accent-100)]">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Custom Software & Web Development",
                "IT Consultancy & Strategy",
                "Cloud Solutions & Migration",
                "UI/UX Design & Development",
                "Digital Transformation & Automation"
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/discover" 
                    className="group flex items-center gap-2 text-[var(--color-accent-400)] hover:text-[var(--color-secondary-400)] transition-all duration-300 cursor-pointer"
                  >
                    <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-4 group-hover:ml-0" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[var(--color-accent-100)]">
              Connect With Us
            </h4>
            <p className="text-[var(--color-accent-400)] text-sm mb-6">
              Follow us on social media for updates, insights, and the latest tech trends.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://wa.me/256777982066"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-3 bg-[var(--color-primary-800)] hover:bg-green-600 rounded-xl transition-all duration-300 cursor-pointer border border-[var(--color-primary-700)] hover:border-green-500"
              >
                <FaWhatsapp className="text-xl text-green-400 group-hover:text-white transition-colors duration-300" />
                <span className="text-sm font-medium text-[var(--color-accent-300)] group-hover:text-white transition-colors duration-300">WhatsApp</span>
              </a>
              <a
                href="https://www.instagram.com/raijin_tech_hub/profilecard/?igsh=dGxqd3kwMzVxZjR3"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-3 bg-[var(--color-primary-800)] hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-xl transition-all duration-300 cursor-pointer border border-[var(--color-primary-700)] hover:border-pink-500"
              >
                <FaInstagram className="text-xl text-pink-400 group-hover:text-white transition-colors duration-300" />
                <span className="text-sm font-medium text-[var(--color-accent-300)] group-hover:text-white transition-colors duration-300">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/charles-aroma-8955b62a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-3 bg-[var(--color-primary-800)] hover:bg-blue-600 rounded-xl transition-all duration-300 cursor-pointer border border-[var(--color-primary-700)] hover:border-blue-500"
              >
                <FaLinkedin className="text-xl text-blue-400 group-hover:text-white transition-colors duration-300" />
                <span className="text-sm font-medium text-[var(--color-accent-300)] group-hover:text-white transition-colors duration-300">LinkedIn</span>
              </a>
              <a
                href="https://www.facebook.com/GVNG8/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-3 bg-[var(--color-primary-800)] hover:bg-blue-700 rounded-xl transition-all duration-300 cursor-pointer border border-[var(--color-primary-700)] hover:border-blue-600"
              >
                <FaFacebook className="text-xl text-blue-500 group-hover:text-white transition-colors duration-300" />
                <span className="text-sm font-medium text-[var(--color-accent-300)] group-hover:text-white transition-colors duration-300">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-[var(--color-primary-800)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[var(--color-accent-500)] text-sm flex items-center gap-2">
              &copy; {currentYear} Raijin Tech Hub. All rights reserved. Made with{" "}
              <FaHeart className="text-red-500 animate-pulse" /> by Raijin Team
            </p>
            <div className="flex gap-6 text-sm">
              <Link 
                to="/company" 
                className="text-[var(--color-accent-400)] hover:text-[var(--color-secondary-400)] transition-colors duration-300 cursor-pointer"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/company" 
                className="text-[var(--color-accent-400)] hover:text-[var(--color-secondary-400)] transition-colors duration-300 cursor-pointer"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

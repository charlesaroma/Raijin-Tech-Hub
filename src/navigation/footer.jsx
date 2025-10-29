import React from "react";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

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
            <h3 className="text-lg lg:text-xl font-bold mb-3 bg-gradient-to-r from-[var(--color-accent-100)] to-[var(--color-primary-400)] bg-clip-text text-transparent">
              Raijin Tech Hub
            </h3>
            <p className="text-xs text-[var(--color-accent-400)] leading-relaxed mb-4">
              We are dedicated to providing innovative digital solutions for businesses. Our team specializes in custom software, IT consultancy, and cutting-edge technology implementations.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-lg bg-[var(--color-primary-800)] flex items-center justify-center group-hover:bg-[var(--color-primary-700)] transition-colors duration-300">
                  <Icon icon="mdi:email" className="text-xs text-[var(--color-primary-400)]" />
                </div>
                <div>
                  <p className="text-[10px] text-[var(--color-accent-500)] mb-0.5">Email Us</p>
                  <a 
                    href="mailto:raijintechug@gmail.com" 
                    className="text-xs text-[var(--color-accent-100)] hover:text-[var(--color-secondary-400)] transition-colors duration-300 font-medium cursor-pointer"
                  >
                    raijintechug@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-sm font-bold mb-3 text-[var(--color-accent-100)]">
              Our Services
            </h4>
            <ul className="space-y-2">
              {[
                "Custom Software & Web Development",
                "IT Consultancy & Strategy",
                "AI Integration & Chatbot Solutions",
                "UI/UX Design & Development",
                "Digital Transformation & Automation"
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/discover" 
                    className="group flex items-center gap-2 text-xs text-[var(--color-accent-400)] hover:text-[var(--color-secondary-400)] transition-all duration-300 cursor-pointer"
                  >
                    <Icon icon="mdi:arrow-right" className="text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-4 group-hover:ml-0" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-sm font-bold mb-3 text-[var(--color-accent-100)]">
              Follow Us
            </h4>
            <div className="flex gap-3">
              <a
                href="https://wa.me/256777982066"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 rounded-lg bg-[var(--color-primary-800)] hover:bg-green-600 flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="WhatsApp"
              >
                <Icon icon="mdi:whatsapp" className="text-base text-green-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="https://www.instagram.com/raijin_tech_hub"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 rounded-lg bg-[var(--color-primary-800)] hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Instagram"
              >
                <Icon icon="mdi:instagram" className="text-base text-pink-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/company/raijin-technologies-ug/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 rounded-lg bg-[var(--color-primary-800)] hover:bg-blue-600 flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="LinkedIn"
              >
                <Icon icon="mdi:linkedin" className="text-base text-blue-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="https://www.facebook.com/GVNG8"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 rounded-lg bg-[var(--color-primary-800)] hover:bg-blue-700 flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Facebook"
              >
                <Icon icon="mdi:facebook" className="text-base text-blue-500 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-[var(--color-primary-800)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-[var(--color-accent-500)] text-xs flex items-center gap-2">
              &copy; {currentYear} Raijin Tech Hub. All rights reserved. Made with{" "}
              <Icon icon="mdi:heart" className="text-red-500 text-[10px] animate-pulse" /> by Charles Aroma
            </p>
            <div className="flex gap-4 text-xs">
              <Link 
                to="/privacy-policy" 
                className="text-[var(--color-accent-400)] hover:text-[var(--color-secondary-400)] transition-colors duration-300 cursor-pointer"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="text-[var(--color-accent-400)] hover:text-[var(--color-secondary-400)] transition-colors duration-300 cursor-pointer"
              >
                Terms of Service
              </Link>
              <Link 
                to="/company" 
                className="text-[var(--color-accent-400)] hover:text-[var(--color-secondary-400)] transition-colors duration-300 cursor-pointer"
              >
                Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-(--color-primary-900) text-(--color-white-50) overflow-hidden border-t border-(--color-primary-700)">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-(--color-primary-500) rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-(--color-secondary-500) rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-[5%] py-12 lg:py-16">
        {/* Top Border Accent */}
        <div className="w-full h-1 bg-linear-to-r from-transparent via-(--color-primary-200) to-transparent mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info Section */}
          <div className="lg:col-span-2">
            <h3 className="text-lg lg:text-xl font-bold mb-3 text-(--color-accent-400)">
              Raijin Tech Hub
            </h3>
            <p className="text-sm text-(--color-white-600) leading-relaxed mb-4">
              We are dedicated to providing innovative digital solutions for
              businesses. Our team specializes in custom software, IT
              consultancy, and cutting-edge technology implementations.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-(--color-primary-700) flex items-center justify-center group-hover:bg-(--color-secondary-500) transition-colors duration-300">
                  <Icon icon="mdi:email" className="text-sm text-(--color-white-600)" />
                </div>
                <div>
                  <p className="text-sm text-(--color-white-600) mb-0.5">Email Us</p>
                  <a
                    href="mailto:raijintechug@gmail.com"
                    className="text-sm text-(--color-white-50) hover:text-(--color-secondary-400) transition-colors duration-300 font-medium cursor-pointer"
                  >
                    raijintechug@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-(--color-primary-700) flex items-center justify-center group-hover:bg-(--color-secondary-500) transition-colors duration-300">
                  <Icon icon="mdi:phone" className="text-sm text-(--color-white-600)" />
                </div>
                <div>
                  <p className="text-sm text-(--color-white-600) mb-0.5">Call Us</p>
                  <a
                    href="tel:+256777982066"
                    className="text-sm text-(--color-white-50) hover:text-(--color-secondary-400) transition-colors duration-300 font-medium cursor-pointer"
                  >
                    +256 777 982 066
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-sm font-bold mb-3 text-(--color-accent-400)">Our Services</h4>
            <ul className="space-y-2">
              {[
                "Custom Software & Web Development",
                "IT Consultancy & Strategy",
                "AI Integration & Chatbot Solutions",
                "UI/UX Design & Development",
                "Digital Transformation & Automation",
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    to="/service"
                    className="group flex items-center gap-2 text-sm text-(--color-white-600) hover:text-(--color-secondary-400) transition-all duration-300 cursor-pointer whitespace-nowrap"
                  >
                    <div className="relative flex items-center transition-all duration-300 group-hover:pl-4">
                      <Icon
                        icon="mdi:arrow-right"
                        className="absolute left-0 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 text-(--color-secondary-500)"
                      />
                      <span className="transition-transform duration-300">
                        {service}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="lg:min-w-37.5">
            <h4 className="text-sm font-bold mb-3 text-(--color-accent-400)">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://wa.me/256777982066"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 rounded-lg bg-(--color-primary-800) hover:bg-green-600 flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="WhatsApp"
              >
                <Icon
                  icon="mdi:whatsapp"
                  className="text-base text-green-400 group-hover:text-(--color-white-50) transition-colors duration-300"
                />
              </a>
              <a
                href="https://www.instagram.com/raijin_tech_hub"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 rounded-lg bg-(--color-primary-800) hover:bg-linear-to-br hover:from-purple-600 hover:to-pink-600 flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Instagram"
              >
                <Icon
                  icon="mdi:instagram"
                  className="text-base text-pink-400 group-hover:text-(--color-white-50) transition-colors duration-300"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/raijin-technologies-ug/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 rounded-lg bg-(--color-primary-800) hover:bg-blue-600 flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="LinkedIn"
              >
                <Icon
                  icon="mdi:linkedin"
                  className="text-base text-blue-400 group-hover:text-(--color-white-50) transition-colors duration-300"
                />
              </a>
              <a
                href="https://www.facebook.com/GVNG8"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 rounded-lg bg-(--color-primary-800) hover:bg-blue-700 flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Facebook"
              >
                <Icon
                  icon="mdi:facebook"
                  className="text-base text-blue-500 group-hover:text-(--color-white-50) transition-colors duration-300"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-(--color-white-600)/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-(--color-white-600) text-sm flex items-center gap-1.5">
              &copy; {currentYear} Raijin Tech Hub. All rights reserved.
              <span className="text-(--color-white-600)/50 mx-1">|</span>
              <a
                href="https://charles-aroma.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-(--color-white-600) hover:text-(--color-secondary-400) transition-colors duration-300 group/dev cursor-pointer"
              >
                <Icon
                  icon="mdi:code-braces"
                  className="text-(--color-secondary-500) text-sm"
                />
                <span>
                  Developed by{" "}
                  <span className="text-(--color-white-50) group-hover/dev:text-(--color-secondary-400) transition-colors duration-300 font-medium">
                    Charles Aroma
                  </span>
                </span>
              </a>
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-(--color-white-600) hover:text-(--color-secondary-400) transition-colors duration-300 cursor-pointer"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-(--color-white-600) hover:text-(--color-secondary-400) transition-colors duration-300 cursor-pointer"
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

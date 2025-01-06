import React from "react";
import {
  FaLaptopCode,
  FaShieldAlt,
  FaMobileAlt,
  FaCloud,
  FaCogs,
  FaPaintBrush,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Importing Link for navigation

const DiscoverPage = () => {
  const expertiseItems = [
    {
      title: "Cybersecurity & Pen Testing",
      description:
        "Ensure your digital infrastructure is secure with our expert penetration testing and cybersecurity services.",
      icon: <FaShieldAlt size={40} className="text-teal-500" />,
    },
    {
      title: "IT Consultancy & Strategy",
      description:
        "Our IT consultants provide strategic advice to optimize your technology landscape for the future.",
      icon: <FaLaptopCode size={40} className="text-teal-500" />,
    },
    {
      title: "Cloud Solutions & Migration",
      description:
        "Seamlessly migrate your infrastructure to the cloud with our scalable and secure cloud solutions.",
      icon: <FaCloud size={40} className="text-teal-500" />,
    },
    {
      title: "UI/UX Design & Development",
      description:
        "Create stunning and user-friendly interfaces that offer the best user experience for your clients.",
      icon: <FaPaintBrush size={40} className="text-teal-500" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Our mobile app development team builds intuitive apps that drive engagement and deliver results.",
      icon: <FaMobileAlt size={40} className="text-teal-500" />,
    },
    {
      title: "Digital Transformation & Automation",
      description:
        "Transform your business processes through cutting-edge digital technologies and automation.",
      icon: <FaCogs size={40} className="text-teal-500" />,
    },
  ];

  return (
    <section className="pt-15 bg-gray-100">
      <div className="container mx-auto px-6 lg:py-14 text-center">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600 mb-8">
          Discover Our Expertise
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Explore the wide range of services that we offer to enhance your business operations and technology stack.
        </p>

        {/* Grid for expertise items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl border border-teal-200"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-teal-50 rounded-full">{item.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-teal-600 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="relative bg-gradient-to-t from-gray-800 to-gray-300 py-12 mt-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-8">Ready to Take the Next Step?</h2>
          <p className="text-lg text-white mb-8">
            Our team is here to help you grow. Let’s discuss how we can assist you in achieving your business goals.
          </p>
          <Link to="/contact">
            <button className="bg-gradient-to-r from-teal-500 to-purple-600 text-white px-8 py-4 rounded-md shadow-md hover:bg-gradient-to-l focus:outline-none">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default DiscoverPage;

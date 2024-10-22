import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons

const Contact = () => {
  return (
    <section id="contact" className="contact-section pb-4 lg:mb-32">
      <div className="pb-24 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-16 lg:mb-24">Get in Touch</h2>

        <div className="contact-info">
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center p-4 border border-gray-300 rounded-lg transition-all duration-300 transform hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:shadow-lg">
              <FaEnvelope className="text-indigo-500 mr-3 transition duration-300" />
              <p className="text-gray-700 transition duration-300">
                <strong className="text-white">Email:</strong> <span className="text-gray-200">sumaya0akter45@gmail.com</span>
              </p>
            </div>

            <div className="flex items-center p-4 border border-gray-300 rounded-lg transition-all duration-300 transform hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:shadow-lg">
              <FaPhone className="text-indigo-500 mr-3 transition duration-300" />
              <p className="text-gray-700 transition duration-300">
                <strong className="text-white">Phone:</strong> <span className="text-gray-200">+880 1690253986</span>
              </p>
            </div>

            <div className="flex items-center p-4 border border-gray-300 rounded-lg transition-all duration-300 transform hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:shadow-lg">
              <FaMapMarkerAlt className="text-indigo-500 mr-3 transition duration-300" />
              <p className="text-gray-700 transition duration-300">
                <strong className="text-white">Location:</strong> <span className="text-gray-200">House-18, Road-10, Sector-10, Uttara, Dhaka-1230</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

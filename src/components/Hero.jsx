import React, { useState, useEffect } from "react";
import profilePic from "../assets/SumayaProfile.png";
import Pdf from "../assets/Sumaya AkterCV.pdf"; // Ensure this path is correct
import { HERO_CONTENT } from "../constants"; // Make sure HERO_CONTENT is defined
import { FaDownload, FaEye } from "react-icons/fa"; // Importing icons

const ROLES = [
  "Full Stack Developer",
  "Frontend Developer",
  "Laravel Developer",
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Effect to cycle through roles every 3 seconds
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % ROLES.length);
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(roleInterval); // Clean up the interval on component unmount
  }, []);

  return (
    <section id="home" className="hero-section pb-4 lg:mb-32 relative overflow-hidden">
      <div className="flex flex-wrap lg:flex-row-reverse items-center">
        {/* Profile Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <img
              src={profilePic}
              alt="Sumaya Akter"
              className="border border-stone-600 rounded-3xl shadow-[0px_0px_25px_5px_rgba(37,99,235,1),_0px_0px_50px_15px_rgba(255,255,255,1)] hover:shadow-[0px_0px_35px_7px_rgba(37,99,235,1),_0px_0px_60px_20px_rgba(255,255,255,1)] transition-shadow duration-300 transform hover:scale-105 max-w-full"
            />
          </div>
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-1/2 px-6">
          <div className="flex flex-col items-center lg:items-start mt-10 lg:mt-0 text-center lg:text-left">
            <h2 className="pb-2 text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-white transition-transform duration-500 transform motion-safe:animate-fadeIn">
              Sumaya Akter
            </h2>

            {/* Dynamic Role Display */}
            <span
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent transition-opacity duration-500 ease-in-out motion-safe:animate-pulse"
              key={currentRoleIndex}
            >
              | {ROLES[currentRoleIndex]} |
            </span>

            {/* Description Text */}
            <p className="my-4 max-w-lg py-6 text-lg lg:text-xl leading-relaxed tracking-tight transition-transform duration-500 motion-safe:animate-fadeIn">
              {HERO_CONTENT}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
              <a
                href={Pdf} // Use the imported Pdf variable
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-blue-500 text-white rounded-full p-3 text-base lg:p-4 lg:text-base transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700 shadow-lg hover:shadow-xl motion-safe:animate-fadeIn"
              >
                <FaEye className="mr-2" /> View Resume
              </a>

              <a
                href={Pdf} // Use the imported Pdf variable
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center bg-white border border-blue-500 rounded-full p-3 text-base lg:p-4 lg:text-base text-blue-500 transition-transform duration-300 transform hover:scale-105 hover:bg-blue-100 shadow-lg hover:shadow-xl motion-safe:animate-fadeIn"
              >
                <FaDownload className="mr-2" /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

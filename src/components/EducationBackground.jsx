import React from "react";

const EducationBackground = () => {
  const educationData = [
    {
      institution: "International University of Business Agriculture and Technology",
      degree: "BSc in Computer Science",
      year: "2024",
    },
    {
      institution: "Patuakhali Polytechnic Institute",
      degree: "Diploma in Computer Science",
      year: "2019",
    },
    {
      institution: "Subidkhali Govt Rahman Ishaque Pilot High School",
      degree: "SSC (Science)",
      year: "2015",
    },
    // Add more education items as needed
  ];

  return (
    <section id="education" className="education-section pb-4 lg:mb-32">
      <div className="pb-24">
        <h2 className="my-20 text-center text-4xl">Education Background</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 border border-gray-300 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-300 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white transition-colors duration-300">
                {edu.degree}
              </h3>
              <p className="text-lg text-white transition-colors duration-300">
                {edu.institution}
              </p>
              <p className="text-md text-gray-200">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationBackground;

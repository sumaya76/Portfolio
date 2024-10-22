import { EXPERIENCES } from "../CONSTANTS"; 

const Experience = () => {
  return (
    <section id="experience" className="experience-section pb-4 lg:mb-32 relative overflow-hidden">
      <div className="pb-24">
        {/* Increase margin around the heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-16 lg:mb-24">
          Professional Experience
        </h2>
        
        {/* Increase the gap between the experience items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {EXPERIENCES.map((experience, index) => (
            <div
              key={index}
              className="experience-item border border-gray-200 p-6 rounded-lg transform transition duration-300 ease-in-out 
                hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-300"
            >
              <div className="flex justify-between items-center mb-4">
                <p className="text-white font-medium text-sm lg:text-base">{experience.year}</p>
                <div className="badge border border-gray-300 px-3 py-1 rounded-full text-xs lg:text-sm text-white">
                  {experience.role}
                </div>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-white mb-2">
                {experience.role} -{" "}
                <span className="text-white">{experience.company}</span>
              </h3>
              <p className="text-white mb-4 text-sm lg:text-base">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-block border border-gray-300 px-3 py-1 text-sm font-medium text-white rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

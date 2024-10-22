import React, { useState } from "react";
import { PROJECTS } from "../CONSTANTS"; // Adjust the import path as necessary

const Projects = () => {
  const [activeProjectId, setActiveProjectId] = useState(null);

  // Function to toggle project details
  const toggleProjectDetails = (id) => {
    setActiveProjectId(activeProjectId === id ? null : id);
  };

  return (
    <section id="projects" className="projects-section pb-4 lg:mb-32 relative overflow-hidden">
      <div className="pb-24">
        <h2 className="my-20 text-center text-4xl">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-10">

          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 bg-white"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="mb-2 text-2xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {project.title}
                </h3>

                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-2 mb-2 inline-block bg-gray-900 text-white rounded-full px-3 py-1 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button Container */}
                <div className="flex space-x-2">
                  {/* View Demo Button */}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 font-semibold text-white bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg shadow-lg hover:from-blue-500 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105"
                    >
                      View Demo
                    </a>
                  )}

                  {/* Project Description Toggle Button */}
                  <button
                    onClick={() => toggleProjectDetails(project.id)}
                    className="inline-block px-6 py-2 font-semibold text-white bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg shadow-lg hover:from-teal-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105"
                  >
                    {activeProjectId === project.id ? "Hide Details" : "Project Details"}
                  </button>
                </div>

                {/* Project Description Section */}
                {activeProjectId === project.id && (
                  <div className="mt-4 text-gray-700">
                    <h4 className="text-lg font-semibold">Project Description</h4>
                    <p>{project.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

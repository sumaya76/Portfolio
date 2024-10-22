import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiGithub, SiWordpress, SiTailwindcss, SiPhp, SiLaravel, SiMysql, SiVisualstudiocode } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai"; // Optional for API integration
import { IoLogoNodejs } from "react-icons/io"; // Optional for Node.js
import { SiGit } from "react-icons/si"; // Git icon for Git Bash

const Technologies = () => {
  const technologies = [
    { icon: <FaHtml5 className="text-7xl text-orange-500" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-7xl text-blue-500" />, name: "CSS3" },
    { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, name: "React" },
    { icon: <FaJs className="text-7xl text-yellow-400" />, name: "JavaScript" },
    { icon: <SiTailwindcss className="text-7xl text-sky-400" />, name: "Tailwind CSS" },
    { icon: <FaBootstrap className="text-7xl text-purple-600" />, name: "Bootstrap" },
    { icon: <SiPhp className="text-7xl text-blue-700" />, name: "PHP" },
    { icon: <SiLaravel className="text-7xl text-red-600" />, name: "Laravel" },
    { icon: <SiMongodb className="text-7xl text-green-600" />, name: "MongoDB" },
    { icon: <IoLogoNodejs className="text-7xl text-green-700" />, name: "Node.js" },
    { icon: <SiGithub className="text-7xl text-black" />, name: "GitHub" },
    { icon: <SiVisualstudiocode className="text-7xl text-blue-600" />, name: "VS Code" },
    { icon: <SiMysql className="text-7xl text-orange-600" />, name: "MySQL" },
    { icon: <SiGit className="text-7xl text-red-500" />, name: "Git" },
    { icon: <AiFillApi className="text-7xl text-indigo-500" />, name: "API" },
    { icon: <SiWordpress className="text-7xl text-blue-700" />, name: "WordPress" },
  ];

  return (
    <section id="technologies" className="technologies-section pb-4 lg:mb-32 relative overflow-hidden">
      <div className="pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="grid grid-cols-8 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-4 cursor-pointer hover:scale-105 transition-transform"
            >
              {tech.icon}
              {/* Display technology name on hover */}
              <span className="mt-2 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;

import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 lg:px-8 shadow-md bg-transparent mb-10" role="navigation"> 
      {/* Added `mb-8` for margin-bottom */}
      
      <div className="flex-grow flex items-center justify-center md:justify-start">
        <ul className="flex flex-col md:flex-row md:space-x-8 text-lg text-white">
          {[
            { name: "Home", id: "home" },
            { name: "Technologies", id: "technologies" },
            { name: "Education", id: "education" },
            { name: "Projects", id: "projects" },
            { name: "Experience", id: "experience" },
            { name: "Contact", id: "contact" },
          ].map(({ name, id }) => (
            <li key={id} className="relative group">
              <a
                href={`#${id}`} // Linking to sections with corresponding IDs
                aria-label={name}
                className="inline-block py-2 transition-all duration-300 text-white hover:text-blue-400 transform hover:scale-110"
              >
                {name}
              </a>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </li>
          ))}
        </ul>
      </div>
      <div className="m-4 md:m-8 flex items-center justify-center gap-6 text-2xl text-white">
        {[
          { icon: <FaLinkedin />, label: "LinkedIn", url: "https://www.linkedin.com/in/sumaya-1920921a5/" },
          { icon: <FaGithub />, label: "GitHub", url: "https://github.com/sumaya76" },
          { icon: <FaInstagram />, label: "Instagram", url: "https://www.instagram.com/sumayaayat/" },
          { icon: <FaFacebook />, label: "Facebook", url: "https://www.facebook.com/sumayaayat.lami.5" },
        ].map(({ icon, label, url }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="transition-transform duration-300 hover:scale-110 hover:text-blue-400"
          >
            {icon}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
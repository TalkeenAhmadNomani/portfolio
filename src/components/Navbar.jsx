import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-90 text-white py-4 px-6 flex justify-between items-center z-50">
      {/* Logo - Clickable (Scrolls to Hero Section) */}
      <div className="flex items-center">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-xl font-bold flex items-center gap-2 cursor-pointer"
        >
          <span className="w-5 h-5 bg-white rounded-full"></span>
          Portfolio
        </button>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-6 text-lg">
        {[
          { name: "About", id: "about" },
          { name: "Skills", id: "skills" },
          { name: "Experience", id: "experience" },
          { name: "Projects", id: "projects" },
          { name: "Extracurricular", id: "extracurricular" }, // Fixed ID
          { name: "Education", id: "education" },
        ].map((item) => (
          <li key={item.name}>
            <button
              onClick={() => scrollToSection(item.id)}
              className="hover:text-gray-400 transition cursor-pointer"
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>

      {/* GitHub Button */}
      <a
        href="https://github.com/youractualgithub" // Replace with actual GitHub username
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 transition transform hover:scale-105"
      >
        <FaGithub size={20} />
        GitHub
      </a>
    </nav>
  );
};

export default Navbar;

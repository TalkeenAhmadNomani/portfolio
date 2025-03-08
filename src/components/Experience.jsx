import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Get Your Home",
    position: "Frontend Developer",
    duration: "June 2023 - Aug 2023",
    description:
      "Developed a user-friendly and responsive dashboard using React.js. Implemented real-time data updates and integrated Framer Motion for smooth animations. Collaborated with designers and backend developers to enhance UI/UX experience.",
  },
  {
    company: "Nexpan Technologies",
    position: "Web Developer Intern",
    duration: "July 2024 - Present",
    description:
      "Worked on building scalable web applications with the MERN stack. Designed and optimized frontend components for performance and accessibility. Enhanced authentication and state management using Redux and JWT.",
  },
];

const ExperienceCard = ({ company, position, duration, description }) => {
  return (
    <motion.div
      className="bg-gray-900 p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/50"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-white text-xl font-semibold mb-2">{company}</h3>
      <p className="text-gray-400 italic mb-2">{position}</p>
      <p className="text-gray-500 text-sm mb-4">{duration}</p>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section className="bg-black text-white py-10 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        <p className="text-gray-400 mb-8">
          Here are some of the experiences that have helped me grow
          professionally.
        </p>
        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              company={experience.company}
              position={experience.position}
              duration={experience.duration}
              description={experience.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

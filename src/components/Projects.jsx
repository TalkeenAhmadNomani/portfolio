import React from "react";
import { motion } from "framer-motion";
import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";

const projects = [
  {
    name: "Resume Screener - NLP",
    image: project1,
    technologies: ["Python", "NLP", "Machine Learning"],
    description:
      "Developed an AI-based resume screening system using NLP techniques to filter and rank candidates based on job descriptions.",
    demo: "https://drive.google.com/demo1",
    code: "https://github.com/user/resume-screener",
    live: "https://resume-screener.live",
  },
  {
    name: "Resume ATS - Gemini",
    image: project2,
    technologies: ["Gemini AI", "React", "Node.js"],
    description:
      "Built an ATS leveraging Gemini AI to analyze and match resumes with job roles efficiently.",
    demo: "https://drive.google.com/demo2",
    code: "https://github.com/user/resume-ats",
    live: "https://resume-ats.live",
  },
  {
    name: "Stay Sleek - MERN",
    image: project3,
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    description:
      "Designed and developed an Airbnb-style website with seamless UI/UX and secure authentication.",
    demo: "https://drive.google.com/demo3",
    code: "https://github.com/user/stay-sleek",
    live: "https://stay-sleek.live",
  },
  {
    name: "Crypt-Coin - React",
    image: project4,
    technologies: ["React", "Chart.js", "CoinGecko API"],
    description:
      "A real-time cryptocurrency tracker showing price trends, historical data, and analytics for over 149 cryptocurrencies.",
    demo: "https://drive.google.com/demo4",
    code: "https://github.com/user/crypt-coin",
    live: "https://crypt-coin.live",
  },
  {
    name: "Market Prediction - ML",
    image: project5,
    technologies: ["Machine Learning", "Python", "Pandas"],
    description:
      "Developed a stock market prediction model using ML algorithms to forecast trends based on historical data.",
    demo: "https://drive.google.com/demo5",
    code: "https://github.com/user/market-prediction",
    live: "https://market-prediction.live",
  },
  {
    name: "AI Image Generator - MERN",
    image: project6,
    technologies: ["MERN Stack", "Hugging Face API", "Cloudinary"],
    description:
      "Implemented an AI-powered image generation platform using Hugging Face API, enabling users to create unique images with text prompts.",
    demo: "https://drive.google.com/demo6",
    code: "https://github.com/user/ai-image-generator",
    live: "https://ai-image-generator.live",
  },
];

const ProjectCard = ({
  name,
  image,
  technologies,
  description,
  demo,
  code,
  live,
}) => {
  return (
    <motion.div
      className="bg-gray-900 p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/50"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={image}
        alt={name}
        className="rounded-lg mb-4 w-full h-40 object-cover"
      />
      <h3 className="text-white text-xl font-semibold mb-2">{name}</h3>
      <div className="flex flex-wrap gap-2 mb-3">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-500 text-white px-3 py-1 text-xs rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex gap-3">
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600"
        >
          Demo Video
        </a>
        <a
          href={code}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Code
        </a>
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Live
        </a>
      </div>
    </motion.div>
  );
};

const ProjectSection = () => {
  return (
    <section className="bg-black text-white py-10 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <p className="text-gray-400 mb-8">
          Here are some of my recent projects that showcase my skills and
          experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

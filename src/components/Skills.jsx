import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const skills = [
  {
    category: "Machine Learning",
    skills: [
      { name: "Jupyter", icon: "devicon-jupyter-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "OpenCV", icon: "devicon-opencv-plain" },
      { name: "TensorFlow", icon: "devicon-tensorflow-original" },
      { name: "PyTorch", icon: "devicon-pytorch-original" },
      { name: "Scikit Learn", icon: "devicon-scikitlearn-plain" },
      { name: "Keras", icon: "devicon-keras-original" },
      { name: "Anaconda", icon: "devicon-anaconda-original" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React Js", icon: "devicon-react-original" },
      { name: "Next Js", icon: "devicon-nextjs-original" },
      { name: "HTML", icon: "devicon-html5-plain" },
      { name: "CSS", icon: "devicon-css3-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "ThreeJS", icon: "devicon-threejs-original" },
      { name: "Sass", icon: "devicon-sass-original" },
      { name: "FramerMotion", icon: "devicon-framer-original" },
    ],
  },
  {
    category: "Backend and Services",
    skills: [
      { name: "Node Js", icon: "devicon-nodejs-plain" },
      { name: "Express Js", icon: "devicon-express-original" },
      { name: "MySQL", icon: "devicon-mysql-plain" },
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
      { name: "AppWrite", icon: "devicon-appwrite-original" },
      { name: "Ethereum", icon: "devicon-ethereum-original" },
    ],
  },
  {
    category: "Language",
    skills: [
      { name: "C++", icon: "devicon-cplusplus-plain" },
      { name: "C", icon: "devicon-c-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "Java", icon: "devicon-java-plain" },
      { name: "Matlab", icon: "devicon-matlab-plain" },
      { name: "Solidity", icon: "devicon-solidity-original" },
    ],
  },
  {
    category: "Others",
    skills: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Netlify", icon: "devicon-netlify-plain" },
      { name: "CapCut", icon: "devicon-canva-original" },
      { name: "Figma", icon: "devicon-figma-plain" },
      { name: "AutoCAD", icon: "devicon-autocad-plain" },
    ],
  },
];

const SkillCard = ({ category, skills }) => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      glareEnable
      glareMaxOpacity={0.2}
    >
      <motion.div
        className="bg-gray-900 p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/50"
        whileHover={{ scale: 1.05, rotate: 2 }}
      >
        <h3 className="text-white text-xl font-semibold mb-4">{category}</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-blue-500 hover:text-black"
              whileHover={{ scale: 1.1 }}
            >
              <i className={`${skill.icon} text-lg mr-2`}></i>
              {skill.name}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Tilt>
  );
};

const SkillsSection = () => {
  return (
    <section className="bg-black text-white py-10 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <p className="text-gray-400 mb-8">
          Here are some of my skills I have been working on.
        </p>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.slice(0, skills.length - 1).map((skillSet, index) => (
            <SkillCard
              key={index}
              category={skillSet.category}
              skills={skillSet.skills}
            />
          ))}

          {/* Last skill category centered */}
          <div className="md:col-span-2 flex justify-center">
            <SkillCard
              category={skills[skills.length - 1].category}
              skills={skills[skills.length - 1].skills}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

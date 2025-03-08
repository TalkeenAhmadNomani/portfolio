import React from "react";

const skills = [
  {
    category: "Frontend",
    skills: [
      "React Js",
      "Next Js",
      "HTML",
      "CSS",
      "JavaScript",
      "ThreeJS",
      "Sass",
      "FramerMotion",
    ],
  },
  {
    category: "Language",
    skills: [
      "C++",
      "C",
      "Python",
      "JavaScript",
      "Java",
      "Matlab",
      "Solidity",
      "SimuLink",
      "R",
    ],
  },
];

const SkillCard = ({ category, skills }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/50">
      <h3 className="text-white text-xl font-semibold mb-4">{category}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-blue-500 hover:text-black"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section className="bg-black text-white py-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <p className="text-gray-400 mb-8">
          Here are some of my skills on which I have been working on.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skillSet, index) => (
            <SkillCard
              key={index}
              category={skillSet.category}
              skills={skillSet.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

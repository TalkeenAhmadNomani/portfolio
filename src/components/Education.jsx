/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Secondary Education (10th)",
    institution: "B.D.Y High School POHADDI bela Darbhanga (BSEB)",
    duration: "2019-2020",
    marks: "85%",
    description:
      "Completed 10th from Bihar Board (BSEB) in Hindi medium, building a strong foundation in mathematics, science, and language skills.",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Patna Muslim High School (BSEB)",
    duration: "2020 - 2022",
    marks: "80%",
    description:
      "Completed 12th from Bihar Board (BSEB) in English medium with a focus on PCM (Physics, Chemistry, Mathematics), enhancing analytical and problem-solving skills.",
  },
  {
    degree: "B.Tech in Mechanical Engineering",
    institution: "NIT Silchar",
    duration: "2022 - 2026",
    marks: "7.85(till 5th sem) CGPA",
    description:
      "Pursuing B.Tech in Mechanical Engineering at NIT Silchar, gaining expertise in design, thermodynamics, manufacturing, and computational analysis.",
  },
];

const EducationCard = ({
  degree,
  institution,
  duration,
  marks,
  description,
}) => {
  return (
    <motion.div
      className="bg-gray-900 p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/50"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-white text-xl font-semibold mb-2">{degree}</h3>
      <p className="text-gray-400 italic mb-2">{institution}</p>
      <p className="text-gray-400">{duration}</p>
      <p className="text-blue-400 font-semibold">Marks: {marks}</p>
      <p className="text-gray-300 mt-2">{description}</p>
    </motion.div>
  );
};

const EducationSection = () => {
  return (
    <section id="education" className="bg-black text-white py-10 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <p className="text-gray-400 mb-8">
          My academic journey, highlighting my achievements and learning
          experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

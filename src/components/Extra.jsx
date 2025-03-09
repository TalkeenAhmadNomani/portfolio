/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const extracurriculars = [
  {
    role: "Head of Video Editing - Gyansagar",
    duration: "March 2024 - Present",
    description:
      "Leading the video editing team at Gyansagar. Managing and overseeing content creation, ensuring high-quality production for digital media campaigns and promotional materials.",
  },
  {
    role: "Digital Media Handler - Gyansagar",
    duration: "Nov 2024 - Present",
    description:
      "Responsible for handling social media accounts, creating engaging digital content, and strategizing online presence for Gyansagar to maximize outreach.",
  },
  {
    role: "Content Creator - Gyansagar",
    duration: "Dec 2024 - Present",
    description:
      "Developing compelling video and written content for Gyansagar, contributing to social impact initiatives through engaging storytelling and informative videos.",
  },
  {
    role: "Member - SDC ASME",
    duration: "Dec 2024 - Present",
    description:
      "Active member of the Student Design Committee (SDC) at ASME, collaborating on innovative projects and technical competitions to enhance engineering skills.",
  },
  {
    role: "Marketing Team Member - ASME EFX 2024",
    duration: "March 2024 - May 2024",
    description:
      "Managed marketing strategies and promotional activities for ASME EFX 2024, ensuring effective outreach and engagement for the event.",
  },
  {
    role: "Video Editor - Think India",
    duration: "March 2023 - Sept 2023",
    description:
      "Edited and produced impactful videos for Think India, enhancing storytelling and engagement for social and educational initiatives.",
  },
  {
    role: "Volunteer - Gyansagar",
    duration: "Jan 2023 - Present",
    description:
      "Actively contributing to Gyansagar as a volunteer, participating in community-driven projects, and supporting various social initiatives.",
  },
  {
    role: "Prob Core Member - ASME",
    duration: "August 2023 - April 2024",
    description:
      "Coordinated with team members to organize engaging events for students. Successfully managed three events during the technical fest: 'Escape the Room' (which had the highest number of participants in the entire fest), 'Effecto Cascada,' and 'Bridge It.' Contributed to event planning, logistics, and execution, ensuring a seamless experience for participants.",
  },
];

const ActivityCard = ({ role, duration, description }) => {
  return (
    <motion.div
      className="bg-gray-900 p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/50"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-white text-xl font-semibold mb-2">{role}</h3>
      <p className="text-gray-400 italic mb-2">{duration}</p>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};


const ExtracurricularSection = () => {
  return (
    <section id="extracurricular" className="bg-black text-white py-10 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Extracurricular Activities</h2>
        <p className="text-gray-400 mb-8">
          These are some of my active engagements beyond academics, showcasing
          my leadership and teamwork skills.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {extracurriculars.map((activity, index) => (
            <ActivityCard
              key={index}
              role={activity.role}
              duration={activity.duration}
              description={activity.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularSection;

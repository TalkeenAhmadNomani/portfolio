import { motion } from "framer-motion";
import Typewriter from "react-typewriter-effect";
import profile from "../assets/profile.jpg";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-4/5 mx-auto h-screen relative">
      {/* Left Side */}
      <div className="text-white max-w-lg text-center md:text-left">
        <h1 className="text-4xl font-bold">
          Hi, I am <span className="text-blue-400">Swarup Chanda</span>
        </h1>
        <div className="overflow-hidden">
          <Typewriter
            textStyle={{ fontSize: "1.5rem" }}
            startDelay={500}
            cursorColor="white"
            multiText={["I am a Coder", "I am a Video Editor"]}
            multiTextDelay={1000}
            typeSpeed={50}
            multiTextLoop
          />
        </div>
        <p className="mt-4 text-lg opacity-80">
          Pursuing a B.Tech in Computer Science and Engineering at NIT Silchar,
          I’m on an odyssey of continuous learning. I’m sculpting a
          multidimensional skill set, weaving my experiences into innovation and
          growth.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-4 px-6 py-3 text-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg focus:ring-2 focus:ring-blue-300"
          aria-label="Download CV"
        >
          Check CV
        </motion.button>
      </div>

      {/* Right Side - Profile Image */}
      <motion.div
        className="relative mt-8 md:mt-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-60 h-60 md:w-72 md:h-72 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
          <img
            src={profile}
            alt="Profile"
            className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-full"
          />
        </div>
      </motion.div>

      {/* Moving Particles Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-moveParticles"></div>
    </section>
  );
};

export default HeroSection;

import { motion } from "framer-motion";
import Typewriter from "react-typewriter-effect";
import profile from "../assets/profile.jpg";

const ParticlesBackground = () => {
  const particles = Array.from({ length: 30 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, index) => {
        const size = Math.random() * 6 + 4;
        return (
          <motion.div
            key={index}
            className="absolute bg-white rounded-full opacity-50"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 50 - 25],
              x: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: Math.random() * 5 + 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-4/5 mx-auto h-screen relative overflow-hidden">
      <ParticlesBackground />
      {/* Left Side */}
      <div className="text-white max-w-lg text-center md:text-left">
        <h1 className="text-4xl font-bold">
          Hi, I am <span className="text-blue-400">Talkeen Ahmad Nomani</span>
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
          Pursuing a B.Tech in Mechanical Engineering Department at NIT Silchar,
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
        <div className="w-80 h-80 md:w-96 md:h-96 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
          <img
            src={profile}
            alt="Profile"
            className="w-72 h-72 md:w-88 md:h-88 object-cover rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

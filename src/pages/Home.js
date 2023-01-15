import profile_img from "../imgs/profile_2_tb.png";
import AutoTypingHelper from "../components/auto-typing-helper";
import CodingSkillsWidget from "../components/coding_skills";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="flex-grow grid grid-cols-1 gap-0"
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -200 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center justify-center relative">
        <img src={profile_img} alt="Alex Lavaee" className="max-h-screen"></img>
        <div className="flex flex-col items-center absolute bottom-6 sm:bottom-14 md:bottom-20 gap-4">
          <div className="bg-gradient-to-t from-yellow-300 via-red-300 to-magic_purple font-extrabold font-baskerville bg-clip-text text-transparent text-5xl lg:text-6xl xl:text-7xl">
            Alex Lavaee
          </div>
          <div className="text-creamy_white font-baskerville text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            <AutoTypingHelper></AutoTypingHelper>
          </div>
          <svg
            className="animate-bounce w-10 h-10 text-red-300 border-2 border-magic_purple rounded-full invisible md:visible"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
      <div className="bg-deep_space">
        <CodingSkillsWidget></CodingSkillsWidget>
      </div>
    </motion.div>
  );
};

export default Home;

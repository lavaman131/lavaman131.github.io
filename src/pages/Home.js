import profile_img from "../imgs/profile_2_tb.png";
import AutoTypingHelper from "../components/auto-typing-helper";
import CodingSkillsWidget from "../components/coding_skills";

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-0">
      <div className="flex flex-col items-center justify-center md:h-screen relative">
        <img src={profile_img} alt="Alex Lavaee" className="max-h-screen"></img>
        <div className="flex flex-col items-center absolute bottom-4 md:bottom-20 gap-4">
          <div className="bg-gradient-to-t from-yellow-300 via-red-300 to-magic_purple font-extrabold font-baskerville bg-clip-text text-transparent text-5xl lg:text-6xl xl:text-7xl">
            Alex Lavaee
          </div>
          <div className="text-creamy_white font-baskerville text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            <AutoTypingHelper></AutoTypingHelper>
          </div>
        </div>
      </div>
      <div className="bg-midnight_blue bg-opacity-100">
        <CodingSkillsWidget></CodingSkillsWidget>
      </div>
    </div>
  );
};

export default Home;

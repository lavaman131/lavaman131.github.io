import ProjectWidget from "../components/project_widget";
import { motion } from "framer-motion";

import human_connectome from "../imgs/projects/human_connectome.jpg";
import plantifydr from "../imgs/projects/plantifydr.png";
import puber from "../imgs/projects/PUber.png";
import disaster_relief from "../imgs/projects/disaster_relief.png";
import operating_system from "../imgs/projects/operating_system.jpg";
import bullyproof from "../imgs/projects/bullyproof.svg";
import mlb from "../imgs/projects/mlb.webp";
import jarvis from "../imgs/projects/jarvis.png";
import comic_books from "../imgs/projects/comic_books.png";

const Projects = () => {
  return (
    <motion.div
      className="flex-grow grid place-items-center bg-space_blue"
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -200 }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid bg-deep_space grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 m-8 sm:m-16">
        <ProjectWidget
          project_name="Autism Brain Region Detection"
          project_img={human_connectome}
          github_link="https://github.com/lavaman131/human_connectome"
        ></ProjectWidget>
        <ProjectWidget
          project_name="Plant Disease Detection App"
          project_img={plantifydr}
          github_link="https://github.com/lavaman131/PlantifyDr"
        ></ProjectWidget>
        <ProjectWidget
          project_name="Disaster Relief"
          project_img={disaster_relief}
          github_link="https://github.com/lavaman131/Disaster-Relief-Project"
        ></ProjectWidget>
        <ProjectWidget
          project_name="Custom Operating System"
          project_img={operating_system}
          github_link="https://github.com/lavaman131/custom-arch-linux-build"
        ></ProjectWidget>
        <ProjectWidget
          project_name="Uber Price Predictor"
          project_img={puber}
          github_link="https://github.com/lavaman131/Puber"
        ></ProjectWidget>
        <ProjectWidget
          project_name="Twitter Hate Speech Filter"
          project_img={bullyproof}
          github_link="https://github.com/lavaman131/BullyProof"
        ></ProjectWidget>
        <ProjectWidget
          project_name="MLB Attendance Prediction"
          project_img={mlb}
          github_link="https://github.com/lavaman131/minnemudac2023"
        ></ProjectWidget>
        <ProjectWidget
          project_name="AI Voice Assistant"
          project_img={jarvis}
          github_link="https://github.com/lavaman131/jarvis"
        ></ProjectWidget>
        <ProjectWidget
          project_name="Statistical Analysis of Comic Books"
          project_img={comic_books}
          github_link="https://alexlavaee.me/graphic_memoir_analysis/"
        ></ProjectWidget>
      </div>
    </motion.div>
  );
};

export default Projects;

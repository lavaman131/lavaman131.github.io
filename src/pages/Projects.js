import ProjectWidget from "../components/project_widget";

import human_connectome from "../imgs/projects/human_connectome.jpg";
import plantifydr from "../imgs/projects/plantifydr.png";
import puber from "../imgs/projects/PUber.png";
import disaster_relief from "../imgs/projects/disaster_relief.png";
import operating_system from "../imgs/projects/operating_system.jpg";
import bullyproof from "../imgs/projects/bullyproof.svg";

const Projects = () => {
  return (
    <div className="flex-grow grid place-items-center bg-deep_space">
      <div className="grid bg-deep_space grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 m-4">
        <ProjectWidget
          project_name="Human Connectome"
          project_img={human_connectome}
          github_link="https://github.com/lavaman131/human_connectome"
        ></ProjectWidget>
        <ProjectWidget
          project_name="PlantifyDr"
          project_img={plantifydr}
          github_link="https://github.com/lavaman131/PlantifyDr"
        ></ProjectWidget>
        <ProjectWidget
          project_name="Disaster Relief"
          project_img={disaster_relief}
          github_link="https://github.com/lavaman131/Disaster-Relief-Project"
        ></ProjectWidget>
        <ProjectWidget
          project_name="Operating System"
          project_img={operating_system}
          github_link="https://github.com/lavaman131/custom-arch-linux-build"
        ></ProjectWidget>
        <ProjectWidget
          project_name="Uber Price Predictor"
          project_img={puber}
          github_link="https://github.com/lavaman131/Puber"
        ></ProjectWidget>
        <ProjectWidget
          project_name="BullyProof"
          project_img={bullyproof}
          github_link="https://github.com/lavaman131/BullyProof"
        ></ProjectWidget>
      </div>
    </div>
  );
};

export default Projects;

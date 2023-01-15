const ProjectWidget = ({ project_name, project_img, github_link }) => {
  return (
    <a
      href={github_link}
      className="flex flex-col font-baskerville text-slate-300 text-bold relative transform transition duration-200 hover:scale-110 hover:cursor-grab hover:z-10 border-8 rounded-lg border-creamy_white hover:border-green-500"
    >
      <div>
        <span className="absolute w-full py-2.5 inset-x-0 bottom-0 bg-magic_purple text-center leading-4">
          {project_name}
        </span>
      </div>
      <img src={project_img} alt="" className="flex-grow"></img>
    </a>
  );
};

export default ProjectWidget;

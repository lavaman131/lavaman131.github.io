import languages_img from "../imgs/languages.png";
const CodingSkillsWidget = () => {
  return (
    <div className="grid grid-cols-1 place-items-center gap-10 m-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-start m-4">
        <div className="flex flex-col gap-4">
          <h1 className="font-baskerville text-xl md:text-2xl lg:text-3xl xl:text-4xl bg-gradient-to-t from-yellow-300 via-red-300 to-magic_purple bg-clip-text text-transparent">
            Skills
          </h1>
          <div className="font-baskerville text-slate-300">
            Programming Languages:
          </div>
          <div className="font-baskerville text-slate-300 flex items-center space-x-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt=""
              className="w-10 h-10 md:w-14 md:h-14"
            />

            <img
              src="https://raw.githubusercontent.com/actions/starter-workflows/main/icons/rust.svg"
              alt=""
              className="w-10 h-10 md:w-14 md:h-14"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt=""
              className="w-10 h-10 md:w-14 md:h-14"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt=""
              className="w-10 h-10 md:w-14 md:h-14"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt=""
              className="w-10 h-10 md:w-14 md:h-14"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              alt=""
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </div>
          <div className="font-baskerville text-slate-300">
            Data Science Frameworks:
          </div>
          <div className="font-baskerville text-slate-300 flex items-center space-x-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
              alt=""
              className="w-10 h-10 md:w-14 md:h-14"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
              alt=""
              className="w-10 h-10 md:w-14 md:h-14"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
              alt=""
              className="w-10 h-10 md:w-14 md:h-14"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
              alt=""
              className="w-10 h-10 md:w-14 md:h-14"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
              alt=""
              className="w-10 h-10 md:w-14 md:h-14"
            />
            <img
              src="https://raw.githubusercontent.com/valohai/ml-logos/master/scipy.svg"
              alt=""
              className="w-10 h-10 md:w-14 md:h-14"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/01/Created_with_Matplotlib-logo.svg"
              alt=""
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </div>
          <div className="font-baskerville text-slate-300">
            Backend Frameworks:
          </div>
          <div className="font-baskerville text-slate-300 flex items-center space-x-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
              alt=""
              className="w-10 h-10 md:w-14 md:h-14"
            />
            <img
              src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
              alt=""
              className="w-10 h-10 md:w-14 md:h-14"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt=""
              className="w-10 h-10 md:w-14 md:h-14"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"
              alt=""
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </div>
          <div className="font-baskerville text-slate-300">
            Frontend Frameworks:
          </div>
          <div className="font-baskerville text-slate-300 flex items-center space-x-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt=""
              className="w-10 h-10 md:w-14 md:h-14"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
              alt=""
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-baskerville text-xl md:text-2xl lg:text-3xl xl:text-4xl bg-gradient-to-t from-yellow-300 via-red-300 to-magic_purple bg-clip-text text-transparent">
            GitHub Stats
          </h1>
          <div className="flex flex-col gap-4">
            <img
              src={languages_img}
              alt="git languages"
              className="w-5/6"
            ></img>
            <img
              src="https://github-readme-stats.lavaman131.vercel.app/api?username=lavaman131&show_icons=true&theme=radical&hide_border=true&&count_private=true&include_all_commits=true"
              alt="git commits"
              className="w-5/6"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingSkillsWidget;

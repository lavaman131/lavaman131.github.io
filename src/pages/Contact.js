import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="flex-grow grid bg-deep_space"
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -200 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col mx-auto justify-center gap-6 md:gap-10">
        <div className="flex flex-row gap-8">
          <h1 className="font-baskerville font-bold text-creamy_white text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Mail
          </h1>
          <a
            className="font-baskerville text-sky-400 before:content-['_↗'] hover:text-sky-200 text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            href="mailto:alavaee@bu.edu"
          >
            alavaee@bu.edu
          </a>
        </div>
        <div className="flex flex-row gap-8">
          <h1 className="font-baskerville font-bold text-creamy_white text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Social Media
          </h1>
          <a
            className="font-baskerville text-sky-400 before:content-['_↗'] hover:text-sky-200 text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            href="https://www.linkedin.com/in/alexlavaee/"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex flex-row gap-8">
          <h1 className="font-baskerville font-bold text-creamy_white text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Developer
          </h1>
          <a
            className="font-baskerville text-sky-400 before:content-['_↗'] hover:text-sky-200 text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            href="https://github.com/lavaman131/"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

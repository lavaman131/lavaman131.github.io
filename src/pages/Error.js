import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import corgi from "../imgs/corgi.webp";

const Error = () => {
  return (
    <motion.div
      className="flex-grow bg-deep_space flex items-center justify-center"
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -200 }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center place-items-center gap-0">
        <div className="flex flex-col items-center justify-center gap-10 m-4">
          <h1 className="text-dark_gold font-bold font-baskerville text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Oops!
          </h1>
          <p className="text-center text-dark_gold font-baskerville text-lg md:text-2xl xl:text-3xl">
            Sorry, an unexpected error has occurred.
          </p>
          <Link
            className="text-dark_gold font-baskerville text-lg md:text-xl lg:text-2xl xl:text-3xl rounded-lg px-4 py-2 bg-magic_purple hover:bg-slate-700"
            to="/"
          >
            Back Home
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center m-4">
          <img
            className="rounded-xl h-2/3 w-2/3 md:w-screen"
            alt="space corgi"
            src={corgi}
          ></img>
        </div>
      </div>
    </motion.div>
  );
};

export default Error;

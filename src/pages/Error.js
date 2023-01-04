import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 h-screen bg-corgi bg-no-repeat bg-cover bg-center bg-fixed">
      <h1 className="text-aqua font-bold font-baskerville text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
        Oops!
      </h1>
      <p className="text-aqua font-baskerville text-lg md:text-2xl xl:text-3xl">
        Sorry, an unexpected error has occurred.
      </p>
      <Link
        className="text-aqua font-baskerville text-lg md:text-xl lg:text-2xl xl:text-3xl rounded-full px-4 py-2 bg-deep_space hover:bg-slate-700"
        to="/"
      >
        Back Home
      </Link>
    </div>
  );
};

export default Error;

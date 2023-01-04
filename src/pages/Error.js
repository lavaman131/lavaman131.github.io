import { Link } from "react-router-dom";
import corgi from "../imgs/corgi.jpg";

const Error = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-deep_space w-full h-screen place-items-center gap-0">
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
        <img alt="space corgi" src={corgi}></img>
      </div>
    </div>
  );
};

export default Error;

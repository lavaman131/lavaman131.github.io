import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import logo from "./imgs/logo.png";

const Navbar = () => {
  useEffect(() => {
    // 👇️ use a ref (best)
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }, []);
  return (
    <nav className="bg-creamy_white bg-opacity-20 sticky top-0 z-50">
      <div className="flex-initial max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div className="flex items-center space-x-1">
              <img
                src={logo}
                alt="logo"
                className="h-12 w-12 mr-2 rounded-full"
              ></img>
            </div>
            <div className="flex items-center space-x-1">
              <Link
                to="/"
                className="py-5 px-3 font-baskerville text-slate-300 hover:text-gray-400"
              >
                Home
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/About"
                className="py-5 px-3 font-baskerville text-slate-300 hover:text-gray-400"
              >
                About
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/Projects"
                className="py-5 px-3 font-baskerville text-slate-300 hover:text-gray-400"
              >
                Projects
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/Contact"
                className="py-5 px-3 font-baskerville text-slate-300 hover:text-gray-400"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-slate-300"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="mobile-menu hidden md:hidden">
        <Link
          to="/About"
          className="block py-2 px-3 text-sm font-baskerville text-slate-300 hover:bg-med_blue"
        >
          About
        </Link>
        <Link
          to="/Projects"
          className="block py-2 px-3 text-sm font-baskerville text-slate-300 hover:bg-med_blue"
        >
          Projects
        </Link>
        <Link
          to="/Contact"
          className="block py-2 px-3 text-sm font-baskerville text-slate-300 hover:bg-med_blue"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

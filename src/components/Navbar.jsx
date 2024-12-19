import React from "react";
import { FaRegStar } from "react-icons/fa";
import ThemeBtn from "./ThemeBtn";
import { NavLink } from "react-router-dom";

const Navbar = ({ musicData }) => {
  return (
    <>
      <nav className="p-4 pt-6 mx-auto border-b border-orange-500 w-full">
        <div className="top-nav flex justify-between mb-4">
          <h1 className="text-orange-500 font-bold md:text-3xl text-2xl font-sans">
            Orange
          </h1>
          <div className="top-right-nav flex gap-4">
            <div className="flex gap-2 items-center bg-orange-500 rounded-md px-3 py-1 text-white font-semibold md:text-sm text-xs">
              <h3 className="flex bg-orange-500 gap-1 items-center font-semibold">
                <FaRegStar className="bg-orange-500" />
                <span className="text-sm bg-orange-500">favourite</span>
              </h3>
              <h2 className="bg-orange-600 md:px-1.5 px-1 rounded-full">
                {musicData.filter((item) => item.addedToFav).length}
              </h2>
            </div>
            {/* Theme btn code */}
            <ThemeBtn />
          </div>
        </div>
        <hr className="border-b border-neutral-300 dark:border-neutral-800 mb-4" />
        <div className="bottom-nav flex items-center justify-center">
          <div className="flex gap-4 items-center">
            <NavLink
              to="/Orange/" end
              className={({ isActive }) =>
                `py-1 px-3 rounded-md text-xs font-semibold border ${
                  isActive ? "bg-orange-500 text-white border-orange-500" : "bg-transparent text-orange-500 border-orange-500"
                }`
              }
            >
              My Playlist
            </NavLink>
            <NavLink
              to="/Orange/genre"
              className={({ isActive }) =>
                `py-1 px-3 rounded-md text-xs font-semibold border ${
                  isActive ? "bg-orange-500 text-white border-orange-500" : "bg-transparent text-orange-500 border-orange-500"
                }`
              }
            >
              Genre
            </NavLink>
            <NavLink
              to="/Orange/artist"
              className={({ isActive }) =>
                `py-1 px-3 rounded-md text-xs font-semibold border ${
                  isActive ? "bg-orange-500 text-white border-orange-500" : "bg-transparent text-orange-500 border-orange-500"
                }`
              }
            >
              Artist
            </NavLink>
            <NavLink
              to="/Orange/addsong"
              className={({ isActive }) =>
                `py-1 px-3 rounded-md text-xs font-semibold border ${
                  isActive ? "bg-orange-500 text-white border-orange-500" : "bg-transparent text-orange-500 border-orange-500"
                }`
              }
            >
              Add Song
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

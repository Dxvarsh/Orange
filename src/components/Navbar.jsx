import React from "react";
import { FaRegStar } from "react-icons/fa";

const Navbar = ({ musicData }) => {
  return (
    <div className="flex justify-between mb-10">
      <h1 className="text-orange-500 font-bold md:text-3xl text-2xl font-sans">
        Orange
      </h1>
      <div className="flex gap-2 items-center bg-orange-500 rounded-md px-3 py-1 text-white font-semibold md:text-sm text-xs">
        <h3 className="flex gap-1 items-center font-semibold">
          <FaRegStar />
          favourite
        </h3>
        <h2 className="bg-orange-600 md:px-1.5 px-1 rounded-full">
          {musicData.filter((item)=> item.addedToFav).length}
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
 
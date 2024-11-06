import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const Card = ({ musicData, handleAddedToFav, index, removeSongData }) => {
  const { imageUrl, songName, artistName, addedToFav } = musicData;

  return (
    <div className="mt-5 flex gap-3 relative items-center p-4 bg-white shadow-md hover:shadow-lg rounded-lg w-full transition-all">
      <img
        src={imageUrl}
        alt="Song Cover"
        className="w-12 h-12 object-cover rounded-full mb-2"
      />

      <div className="text-start mb-2">
        <h3 className="text-md font-semibold text-gray-800 whitespace-nowrap">
          {songName}
        </h3>
        <p className="text-xs text-gray-500">{artistName}</p>
      </div>

      <button
        className={`absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 mt-2 text-sm font-semibold text-white rounded-full ${
          addedToFav ? "bg-teal-500" : "bg-orange-500"
        } ${
          addedToFav ? "hover:bg-teal-600" : "hover:bg-orange-600 "
        } transition-colors`}
        onClick={() => handleAddedToFav(index)}
      >
        {addedToFav ? "Remove" : "Add to Favorite"}
      </button>

      <div
        onClick={() => removeSongData(index)}
        className="absolute right-0 top-0 flex items-center gap-1 rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 cursor-pointer"
      >
        <span className="-mt-0.5">Remove</span>
        <IoCloseSharp />
      </div>
    </div>
  );
};

export default Card;

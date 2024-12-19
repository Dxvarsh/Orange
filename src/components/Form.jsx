import React, { useState } from "react";
import useMusicData from "../contexts/MusicData";

const Form = () => { //Component
  const [songData, setSongData] = useState({
    imageUrl: "",
    songName: "",
    artistName: "",
    addedToFav: false,
  });
  const { realMusicData, formMusicHandler } = useMusicData();

  const handleSubmit = (e) => {
    e.preventDefault();
    formMusicHandler(songData);
    setSongData({
      imageUrl: "",
      songName: "",
      artistName: "",
      addedToFav: false,
    });
  };

  return (
    <form className="max-w-sm mx-auto">
      <div className="mb-5">
        <label
          for="songName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-orange-500"
        >
          Song Name
        </label>
        <input
          value={songData.songName}
          onChange={(e) =>
            setSongData({ ...songData, songName: e.target.value })
          }
          type="text"
          id="songName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
          placeholder="Ami je Tomar"
          required
        />
      </div>
      <div className="mb-5">
        <label
          for="artistName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-orange-500"
        >
          Artist
        </label>
        <input
          value={songData.artistName}
          onChange={(e) =>
            setSongData({ ...songData, artistName: e.target.value })
          }
          type="text"
          id="artistName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
          placeholder="Arijit Singh"
          required
        />
      </div>
      <div className="mb-5">
        <label
          for="imgUrl"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-orange-500"
        >
          Enter Image Url
        </label>
        <input
          value={songData.imageUrl}
          onChange={(e) =>
            setSongData({ ...songData, imageUrl: e.target.value })
          }
          type="text"
          id="imgUrl"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
          placeholder="https://i.imgur.com/bChT47n.jpg"
          required
        />
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            checked={songData.addedToFav}
            onChange={(e) =>
              setSongData({ ...songData, addedToFav: e.target.checked })
            }
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300 "
            required
          />
        </div>
        <label
          for="remember"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-orange-500"
        >
          Added to Favourite
        </label>
      </div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Add Song Card
      </button>
    </form>
  );
};

export default Form;

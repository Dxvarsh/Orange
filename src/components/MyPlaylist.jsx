import React from "react";
import useMusicData from "../contexts/MusicData";
import Card from "./Card";

const MyPlaylist = () => {
  const { realMusicData, handleAddedToFav, removeSongData } = useMusicData();
  return <>
    {/* Card Component */}
    <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {realMusicData.map((data, index) => (
        <Card
          key={index}
          index={index}
          musicData={data}
          removeSongData={removeSongData}
          handleAddedToFav={handleAddedToFav}
        />
      ))}
    </div>
  </>;
};

export default MyPlaylist;

import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

const App = () => {
  const musicData = [
    {
      imageUrl: "https://i.pinimg.com/736x/2d/ba/39/2dba39390ce7dd312956bbbb04f9ab9a.jpg",
      songName: "Kesariya",
      artistName: "Arijit Singh",
      addedToFav: false,
    },
    {
      imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/2e/0b/c0/2e0bc070-112f-a827-6ad8-6bc64f7caaff/840214460180.png/1200x1200bf-60.jpg",
      songName: "Apna Bana Le",
      artistName: "Arijit Singh",
      addedToFav: false,
    },
  ];

  const [realMusicData, setRealMusicData] = useState(musicData);
  const formMusicHandler = (mData) => {
    console.log('data from App.jsx', mData);
    setRealMusicData([...realMusicData, mData])
    console.log(realMusicData);
    
    
  }

  const removeSongData = (musicCardIndex) => {
    return setRealMusicData(realMusicData.filter((_, index) => index!== musicCardIndex))
  }

  const handleAddedToFav = (musicCardIndex) => {
    setRealMusicData((prevData)=>{
      return realMusicData.map((data, index) => {
        if (index === musicCardIndex) return {...data, addedToFav: !data.addedToFav}
        return data
      })
    })
  };



  return (
    <div className="container mx-auto p-4 h-screen">
      <Navbar musicData={realMusicData}/>
      
      <Form formMusicHandler={formMusicHandler}/>

      <div className="mt-10 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {realMusicData.map((data, index) => (
          <Card key={index} index={index} musicData={data} removeSongData={removeSongData} handleAddedToFav={handleAddedToFav}/>
        ))}
      </div>

    </div>
  );
};

export default App;

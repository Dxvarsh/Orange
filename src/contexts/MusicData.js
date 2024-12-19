import { createContext, useContext } from "react";

export const MusicDataContext = createContext(
    {
        realMusicData: [],
        formMusicHandler: () => { },
        removeSongData: () => { },
        handleAddedToFav: () => { },
    }
)

export const MusicDataProvider = MusicDataContext.Provider

export default function useMusicData() {
    return useContext(MusicDataContext)
}
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MyPlaylist from '../components/MyPlaylist'
import Form from '../components/Form'
import Genre from '../components/Genre'
import Artist from '../components/Artist'


const route = () => {
  return (
    <Routes>
        <Route path='/Orange/' element={<MyPlaylist/>}></Route>
        <Route path='/Orange/genre' element={<Genre/>}></Route>
        <Route path='/Orange/addsong' element={<Form/>}></Route>
        <Route path='/Orange/artist' element={<Artist/>}></Route>
    </Routes>
  )
}

export default route
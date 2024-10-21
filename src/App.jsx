import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Trends from './components/Trends'


function App() {
  return(
    <div className="bg-[#1F1E24] w-screen h-screen flex">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trends />} />
      
        
      </Routes>
    </div>
  )
}

export default App
import { useState } from 'react'

import './App.css'
import Location from './components/Location'
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
    <Navbar />
    <div className='container-card'>
      <div className="App">
      <Location />
      </div>
      
    </div>
    
    </>
  )
}

export default App
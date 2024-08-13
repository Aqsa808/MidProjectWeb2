import React from "react"
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Quiz from "./assets/Components/Quiz"
import Layout from "./assets/Components/Layout"
import Home from "./assets/Components/Home"
import About from "./assets/Components/About"
import Leaderboard from "./assets/Components/Leaderboard"
import Contact from "./assets/Components/About"


function App(){
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}> 
        <Route index element={<Home/>} />
        <Route path="quiz" element={<Quiz/>} />
        <Route path="about" element={<About/>} />
        <Route path="leaderboard" element={<Leaderboard/>} />
        <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App;
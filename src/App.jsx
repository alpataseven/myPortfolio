import { useState } from 'react'
import './style.css'
import Navbar from './Components/Navbar'
import Progress from './Components/Progress'
import Home from './Components/Home'
import About from './Components/About'

function App() {
  return (
    <>
      <Progress />
      <header>
        <Navbar />
      </header>
      <main>
        <article id='article1'><Home /></article>
        <article id='article2'><About /></article>
        <article id='article3'></article>
      </main>
    </>
  )
}

export default App
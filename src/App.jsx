import { useState } from 'react'
import './style.css'
import Navbar from './Components/Navbar'
import About from './Components/About'


function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <article id='article1'><About /></article>
        <article id='article2'></article>
        <article id='article3'></article>
      </main>
    </>
  )
}

export default App
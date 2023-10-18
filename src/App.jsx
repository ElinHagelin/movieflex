// import { useState } from 'react'
import LanguagePie from './components/LanguagePie.jsx'
import MonthBar from './components/MonthBar.jsx'
import './App.css'
import LengthLine from './components/LengthLine.jsx'
import GenreBar from './components/GenreBar.jsx'
import Movies from './components/Movies.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <img className='logo' src="../assets/images/cinema+digital+film+movie+multimedia+video+icon-1320186751465241961.svg" alt="logo" />
      <h1>MovieFlex</h1>
      </header>
      <LanguagePie />
      <MonthBar />
      <LengthLine />
      <GenreBar />
      <Movies />
    </>
  )
}

// TODO: Byt loggan till något snyggare som går att animera



export default App

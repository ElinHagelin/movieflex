import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header.jsx'
// import { useState } from 'react'

function App() {
  
  return (
    <>
      <Header />
	  <Outlet />
    </>
  )
}

// TODO: Byt loggan till något snyggare som går att animera



export default App

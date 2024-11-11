import { useState } from 'react'
import './App.css'


import Home from './Home'
import About from './about'
import Layout from './Layout'
import NoPage from './NoPage'
import Contact from './contact'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  

  return (
    <BrowserRouter>
      <Layout/>
      <Routes>
      <Route path='/'/>
        <Route index element={<Home/>}Route/>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path='*' element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

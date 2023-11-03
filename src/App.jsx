import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { About, Certificates, Contact, Home, Projects, SingleCertificateInfo, SingleProjectInfo } from './pages'
import { Container } from '@mui/material'
import { Footer, Navbar } from './componants'

const App = () => {
  return <BrowserRouter>
    <Container maxWidth="sx" >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/single-project/:id' element={<SingleProjectInfo />} />
        <Route path='/certi' element={<Certificates />} />
        <Route path='/certi/single-certi' element={<SingleCertificateInfo />} />
      </Routes>
    </Container>
    <Footer />
  </BrowserRouter >
}

export default App
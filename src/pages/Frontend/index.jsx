import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Index'
import About from './About'
import Contact from './Contact'
import Dashboard from '../Dashboard'

const Frontend = () => {
  return (
    <>
    <Header/>
    <main>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    </main>
    <Footer/>
    </>
  )
}

export default Frontend
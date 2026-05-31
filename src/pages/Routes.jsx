import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Auth from './Auth'

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/*' element={<Frontend/>}/>
        <Route path='/auth/*' element={<Auth/>}/>
    </Routes>
    </>
  )
}

export default AppRoutes
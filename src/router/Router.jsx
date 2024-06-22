import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import LoginPage from '../pages/LoginPage'

const Router = () => {
  return (
    <>
      <Routes>
        <Route index element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/login' element = {<LoginPage/>}/>
      </Routes>
    </>
  )
}

export default Router

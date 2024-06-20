import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'

const Router = () => {
  return (
    <>
      <Routes>
        <Route index element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
      </Routes>
    </>
  )
}

export default Router

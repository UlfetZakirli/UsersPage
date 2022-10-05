import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import UserPage from '../pages/UserPage'

const Routing = () => {
  return (
<>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='userpage' element={<UserPage/>}/>
</Routes>
</>
  )
}

export default Routing
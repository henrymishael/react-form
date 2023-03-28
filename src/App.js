import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Forget from './form/Forget'
import SignIn from './form/SignIn'
import SignUp from './form/SignUp'
import Welcome from './form/Welcome'

export default function App() {
  return (
    <>
    <Link to="/"></Link>
    <Routes>
        <Route path="/welcome" element={ <Welcome />} />
        <Route path="/signin" element={ <SignIn />} />
        <Route path="/signup" element={ <SignUp />} />
        <Route path="/forget" element={ <Forget />} />
    </Routes>
    
    
    </>
  )
}


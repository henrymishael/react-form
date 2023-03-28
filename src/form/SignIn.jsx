import React from 'react'
import { HiArrowNarrowLeft } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { GiPadlock } from "react-icons/gi";
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <>
    
    <div className="major">
        <div className='logo'>
           <Link to='/welcome'>
          <span><HiArrowNarrowLeft/> </span>
        </Link>
        </div>
        <div className="header2">

            <h1>Log In</h1>
        </div>
        <div className="input">
            <div>
            <span><BiUser /></span>
            <input type="text" placeholder="E-mail"></input> 
        </div>
        <div>
           <span><GiPadlock /></span> 
            <input type="text" placeholder="Password"/>        
        </div>
        </div>
        <Link to='/forget'>
        <h6>Forgot Password?</h6> </Link>
        <div> 
        <Link to="/signin">
        <button className="button2">Log In</button>
        </Link>
        </div>
        <div>
        <h5>First time here? <Link to='/signup'><span> Sign up</span></Link></h5>
        </div>
    </div>

    </>
  )
}

import React from 'react'
import { HiArrowNarrowLeft } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { Link } from 'react-router-dom';

export default function Forget() {
  return (
    <>
    <div>
    <div className="major">
        <div className='logo'>
           <Link to='/signup'>
          <span><HiArrowNarrowLeft/> </span>
        </Link>
        </div>
        <div className="header2">

            <h1>Forgot <br />Password?</h1>
        </div>
        <div className="input">
            <div>
            <span><FiMail /></span>
            <input type="text" placeholder="E-mail"></input> 
        </div>
        </div>
        <div> 
        <Link to="/signin">
        <button className="button2">Continue</button>
        </Link>
        </div>
        <div>
        <h5>Remember Password? <Link to='/signIn'><span> Log In</span></Link></h5>
        </div>
    </div>

    </div>
    </>
  )
}

import React from 'react'
import './Form.css'
import {SiCrunchyroll} from "react-icons/si";
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <>
    <div className='main'>
      <div className="logo">
        <SiCrunchyroll/>
      </div>
      <div className="header">
        <h1>  Start <br />Your<br />Adventure</h1>
      </div>
      <div >
      <Link to="/signin">
        <button className="button">Log In</button>
        </Link>
      </div>
      <div>
        <h6>You don't have an account?
          <Link to="/signup">
           <span> Sign up here</span>
          </Link>
           </h6>
      </div>
    </div>
    </>
  )
}

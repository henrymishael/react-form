import React from 'react'
import { Link } from 'react-router-dom'
import { HiArrowNarrowLeft } from "react-icons/hi";
import { BiLink } from "react-icons/bi";

export default function SignUp() {
  return (
    <>
    <div className='mine'>
        <div className='Logo'>
          <Link to='/welcome'>
           <span> <HiArrowNarrowLeft/></span></Link>
        </div>
        <div className='header3'>
          <div>
            <h1>New <br />Account</h1>
          </div>
          <div className='motion'>
            <div><h4><span>1</span>/2</h4>
            </div> <br/>
            <div>
              <h6>STEPS</h6>
            </div>
          </div>
        </div>
        <div className='flint'>
          <div className='border'>
            <BiLink />
        </div>
          <div>
            <h5>Upload a profile picture <br/>(optional)</h5>
          </div>
        </div>
        <div className="input2">
            <label for='name' id='name'>Name</label> <br />
            <input type="text" for='name' id='name' /> <br/><br/>
            <label for='email' id='email'>E-mail </label> <br/>
            <input type="text" for='email' id='email' />        
        </div>
        <div> 
        <Link to="/">
        <button className="button2">Next</button>
        </Link>
        </div>
        <div>
        <h6>Not your first time here?
          <Link to="/signin">
           <span> Log in</span>
          </Link>
           </h6>
      </div>
        </div>
    </>
  )
}

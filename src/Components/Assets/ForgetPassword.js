import React from 'react'
import fbgtpass from '../Images/Upbgdesign.jpg'
import logopass from '../Images/Tlogo.png'
import logopasstwo from '../Images/reset.png'
import { Link } from 'react-router-dom'
import './ForgetPassword.css'



function ForgetPassword() {
    const passwrd={
        backgroundImage:`url(${fbgtpass})`,
        backgroundsize:'cover',
        
    }
  return (
    <div className='container' style={passwrd}>
        <div className='row'>
          <span className='logopasswrd'>
         <Link to='/'> <img src={logopass} alt='logopass' /></Link>
          </span>
          <div className='fcard'>
          <div className="card">
          <div class="card-header" style={{textAlign: 'center'}}>
            <img src={logopasstwo} alt='ResetPassword' style={{ height: '100%', width: '20%' }} />
             </div>
             <div class="card-body">
              <form class>
                <input type='email' placeholder=" Enter Your Email" className='form-control'/>
              </form>
             
              </div>
              <div class="card-footer ftpass">
                <button type="submit" className='btn btn-primary' style={{textAlign: 'center'}}>ResetPassword</button>
             </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default ForgetPassword
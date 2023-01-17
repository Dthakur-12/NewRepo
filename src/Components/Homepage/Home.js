import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { TiSocialGooglePlusCircular } from 'react-icons/ti'
import { TiSocialFacebookCircular } from 'react-icons/ti'
import { TiSocialTwitterCircular } from 'react-icons/ti'
import { BsWhatsapp } from 'react-icons/bs'
import Bg from '../Images/Bgdice.jpg'
import MyBlogo from '../Images/BMylogo.jpg'
import grid from '../Images/grid.png'
import './Home.css'
import LoginNew from '../LoginNew/LoginNewUser'


function Home() {
  const navigate = useNavigate()

  const myStyle = {
    backgroundImage: `url(${Bg})`,
    height: 'auto',
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className='container'>

      <div style={myStyle}>
        <div>
          <img src={MyBlogo} className='mylogo'/>
        </div>
        <div className="row">
          <div className="col-md-7">
            <div className='type_two'>
              <p><b>Lorem Ipsum dolor sit Amet, conse setur adispicing elit</b></p>
            </div>
            <div className='type'>
              <p><b>LOREM IPSUM DOLOR <br /> SIT AMMET </b></p>
            </div>
            <div>
              <p><b>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eius modr incidid jhunt ut labore <br /> et doloagn Lorem ipsum </b></p>
            </div>

          </div>
          <div className="col-md-5">
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className='fbtn' >
              <button onClick={() => navigate('#')} type="button" className="btn btn-primary" style={{ backgroundColor: 'blue', borderRadius: '30px', fontSize: '13px', padding: "10px 45px", }}>Let's Get Started
              </button>
            </div>
          </div>
          <div className="col-md-8 griid">
            <img src={grid} />
          </div>
        </div>

        <div className="row social">
          <div className="col-md-12">
            <div>
              <p className='link'><a href='#'><TiSocialGooglePlusCircular size={'40px'} /></a>
                <a href='#'><TiSocialFacebookCircular size={'40px'} /></a>
                <a href='#'><TiSocialTwitterCircular size={'40px'} /></a>
                <span className='ice'>
                  <a href='#'><BsWhatsapp size={'30px'} /></a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bttn">
        <div className="login">
          <Link to='loginuser'>Log In /</Link>
          <Link to='signupuser'>Sign Up as a User</Link><br />
        </div>
        <div className='signupm'>
          <Link to='loginadvisor'>Log In/</Link>
          <Link to='signupadvisor'>Sign Up as a Adviser</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
import React,{useState} from 'react'
import { useNavigate} from "react-router-dom";
import './NavBar.css'
import navlogo from '../../Images/BMylogo.jpg'
import {FaSearch} from 'react-icons/fa'
import {BsPeople} from 'react-icons/bs'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {GoMail} from 'react-icons/go'
import {CgProfile} from 'react-icons/cg'
import {Link} from 'react-router-dom'

function NavBar() {


   
   // let user=JSON.parse(localStorage.getItem('userToken'));
   // console.log(user);
   
  const [show,setShow]=useState();

  const handleToggle=() => {
   setShow(!show)
  }
  return (
    <div>
        <nav className="navbar  navbar-light bg-light">
  <div className="container">
  <a className="navbar-brand" href="#">
    <Link to='/'>  <img src={navlogo} height="23" alt="MDB Logo" loading="lazy" position='top'/></Link>
        </a>
        <div >
            <ul className='d-flex flex-row space-between navibar'>
                <li>
                <a href= '#'><FaSearch size='20px'/></a>
                </li>
                <li>
                   <a href= '#'><BsPeople size='25px'/></a>
                </li>
                <li>
                   <a href= '#'><IoIosNotificationsOutline size='25px'/></a>
                </li>
                <li>
                   <a href= '#'><GoMail size='25px'/></a>
                </li>
                <li>
                  
                   {/* <a href= '#'><CgProfile size='25px'/></a> */}
                </li>
               
            <li className="nav-item mx-2 droptop">
                <a href="#" data-bs-toggle="dropdown" onClick={handleToggle} className="nav-link dropdown-toggle" id="iconToggle">
                <a href= '#'><CgProfile size='25px'/></a>
                </a>
                {show && (
                <ul className="dropdown drpdwn" aria-labelledby="navbarDropdownMenuLink2">
                    <li><Link className='dropdown-item drpdwnn' to='/logout'><b>Logout</b></Link></li>
                    <li><a className="dropdown-item drpdwnn " href="#"><b>Edit Profile</b></a></li>
                </ul>
                )}
            </li>
      
               

            </ul>
        </div>
  </div>
</nav>
        </div>
  )
}

export default NavBar
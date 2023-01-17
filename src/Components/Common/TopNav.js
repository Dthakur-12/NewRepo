import React from 'react'
import navlogo from '../Images/BMylogo.jpg'
import {FaSearch} from 'react-icons/fa'

function TopNav() {
  return (
    <div className='container'>
        <div className='row'>
        <nav class="navbar navbar-light bg-light slogo">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">
      <img src={navlogo} height="23" alt="MDB Logo" loading="lazy" position='top'/>
        </a>
        <form class="input-group w-auto">
      <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"/>
{/*      
        <FaSearch/> */}

    </form>
    </div>
        </nav>
        </div>
    </div>
  )
}

export default TopNav
import React from 'react'
import logof from '../Images/Tlogo.png'
import fbgt from '../Images/Upbgdesign.jpg'
import fbgtwo from '../Images/Bgdice.jpg'
import {BsWhatsapp} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './Payment.css'

function Payment() {
    const bgmi={
        backgroundImage: `url(${fbgt})`,
        backgroundSize: 'cover',
    }
    const bgmitwo={
        backgroundImage: `url(${fbgtwo})`,
        backgroundSize: 'cover',

    }
  return (
    <div className='container' style={bgmi} >
        <div className='row'>
            <div className='col-md-4'>   
            <div className='logorow'>
       <Link to='/'> <img src={logof} alt="logo"/></Link>
    </div>
            <div className='paragraphmain'>
            <h1>Compact Plans</h1>
            <h3>within reasonable Price Range</h3>
            <p>Lorem ipsum dolor sit amet, conse <br/> ctetur adip fsiscing elit, sed do eius modr incididunt ut labore et</p>
            </div>
            </div>
            <div className='col-md-4' style={bgmitwo}>
            <div className='midlle'>
                    <h3>Choose Payment Mode</h3>
                    </div>
                    <div className="row myuse">
                    <div className='col-md-6'>
                    Monthly Subscription
                    </div>
                    <div className='col-md-6'>
                    $50/-
                    </div>
                    </div>
                
                </div>
                <div className="col-md-4">
                    <div className="buttongrp">
                <div className="firstBttn">
<button   type="submit" className="btn btn-primary"style={{ margin: '25px 5px -49px -164px',backgroundColor: 'none',borderRadius: '60px',fontSize: '16px', height:'50px',width:'150px', padding:"4px 10px",}}>Cancel
</button>
</div>
<div className='secondBttn'>
<button   type="submit" className="btn btn-primary"style={{ backgroundColor: 'blue',borderRadius: '60px',fontSize: '16px', height:'50px',width:'150px', padding:"4px 10px",}}>Continue
</button>
<div className='whtsapp'>
<a href='#'>
<BsWhatsapp size='25px' color='white'/>
</a>
</div>
</div>
</div>
</div>
</div>
</div>    

  )
}

export default Payment
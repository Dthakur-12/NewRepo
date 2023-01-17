import React from 'react'
import navlogo from '../Images/reset.png'
import {FaSearch} from 'react-icons/fa'
import './DashBoardUpdated.css'
import Advisor from "../Common/Advisor"
import AdvisorList from '../Common/AdvisorList'
import NavBar from './NavBar/NavBar'
import EveryDayProgressBar from '../EverDayProgressBar/EveryDayProgressBar'
import OverallProgress from '../Common/OverallProgress'
import adone from '.././Images/Advisorone.png'
import adtwo from '.././Images/Advisortwo.png'
import adthree from '.././Images/Advisorthree.png'
import adfour from '.././Images/Advisorfour.png'
import adfive from '.././Images/Advisorfive.png'
import jwt_decode from "jwt-decode";


function DashBoardUpdated() {
  const token=localStorage.getItem('userToken');
const decoded = jwt_decode(token);
console.log(decoded);
  return (
    <>
     <div className='container-fluid'>
     <NavBar/>
     </div>
    <div className='container'>
     
     <b>Recent Projects</b>
     <div className='col-12 row bg- pt-3 pb-3 dashu' style={{backgroundColor:'#1631BF'}}>
      <div className='col-4'>
         <AdvisorList title="Project Pending" status="Pending" desc="Time 91 Days" pcolor="#FF9D00"/>
      </div>
      <div className='col-4'>
        <AdvisorList title="Ajay" status="Process" desc="Time 91 Days" pcolor="#6629C3"/>
      </div>
      <div className='col-4'>
         <AdvisorList title="Ajay" status="Complete" desc="Time 91 Days" pcolor="#13BABC"/>
      </div>
    </div>
    <div className='row'>
    <div className='col-4 shadw'>
      <EveryDayProgressBar/>
   </div>
<div className='col-8 row smallchart'>
  <b>Overall Progress</b>
<OverallProgress heading="All Projects" description="loremIpsum se thod ka ni payor jfkdfeijfk" percentage='83' pcolor="#FF9D00"/>
<OverallProgress heading="Projects in Process" description="loremIpsum se thod ka ni payor jfkdfeijfk" percentage='37' pcolor="#6629C3"/>
<OverallProgress heading="Projects Completed" description="loremIpsum se thod ka ni payor jfkdfeijfk" percentage='93' pcolor="#13BABC"/>
</div>
    </div>
     <div className='col-12 row'>
      <b>Saved Advisors</b>
        <Advisor name="Ajay" desc="Leream ipsum" img={adone} />
        <Advisor name="Ajay" desc="Leream ipsum" img={adtwo}/>
        <Advisor name="Ajay" desc="Leream ipsum" img={adthree}/>
        <Advisor name="Ajay" desc="Leream ipsum" img={adfour}/>
        <Advisor name="Ajay" desc="Leream ipsum" img={adfive}/>       
    </div>
    </div>
    </>
  )
}

export default DashBoardUpdated;
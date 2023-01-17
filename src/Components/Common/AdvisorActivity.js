import React from 'react'
import adone from '.././Images/Advisorone.png'
import adtwo from '.././Images/Advisortwo.png'
import adthree from '.././Images/Advisorthree.png'
import adfour from '.././Images/Advisorfour.png'
import adfive from '.././Images/Advisorfive.png'
import navlogo from '../Images/reset.png'
import NavBar from '../Dashboard/NavBar/NavBar'

function AdvisorActivity(props) {
  const data=[
			{ "name": "5001", "img": adone },
			{ "name": "5002", "img": adtwo},
			{ "name": "5005", "img": adthree },
			{ "name": "5007", "img": adfour },
			{ "name": "5006", "img":  adfive},
			{ "name": "5003", "img":  adtwo},
			{ "name": "5004", "img": adthree }
		]
  return (
    <div className='col-12'>
       <NavBar/>
       <h5 className='list_title'>Recent Advisors...</h5>
       <p>{props.desc}</p>
       <div className='listView card' style={{padding: '7px 15px 8px 30px'}}>
        {data && data.map((item,index)=>{
          return(
            <div className='col-12 row pt-2'>
               <div className='col-2'>
                  <img src={item.img} style={{width:"80%"}}/>
                </div>
                <div className='col-10'>
                    <p> do sit amet, coctetur adi piscing elit, sed do eiusmodr incididunt ut labore et dolore magn. Susmodr incididunt ut labore et dolore magn Lorem ipsum dolor sit amet</p>
                    <div className='advisorstatus'>
                        <b style={{color:'blue'}}> 5 Hours Ago</b>
                        </div>
                </div>    
             </div> 
          )
        })}
       </div>
    </div>
  )
}
export default AdvisorActivity;
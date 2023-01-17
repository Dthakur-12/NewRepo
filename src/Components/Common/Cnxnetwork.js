import React from 'react'
import 'status-indicator/styles.css'
import './cnxnetwork.css'
import adone from '.././Images/Advisorone.png'
import adtwo from '.././Images/Advisortwo.png'
import adthree from '.././Images/Advisorthree.png'
import adfour from '.././Images/Advisorfour.png'
import adfive from '.././Images/Advisorfive.png'
import navlogo from '../Images/reset.png'
import NavBar from '../Dashboard/NavBar/NavBar'

function Cnxnetwork(props) {
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
    <div className='container'>
        <div className='row'>
            <NavBar/>
            <p>Homepage / CNX-Network</p>
            <div className='col-8 contnt card'>
                <div className='row'>
                    <div className='col-10'>
                    <h2>CNX-Network</h2>
                    </div>
                    <div className='col-2 indcator'>
                    <status-indicator active pulse></status-indicator>
                    <span><b>ONGOING</b></span>
                    </div>
                    </div>
                    <div className='timp'>
                    <p>Time Period: 9 Days Remaining</p>
                    </div>
                    <div className='timptwo'>
                    Lorem ipsum dolor sit amet, et usu fabulas tacimates tractatos. Facer senserit accusamus vix ex, veniam verear ea cum, <br/>an reprimique comple tygctitur quo. Ei ius nobis decore, ut eos e scripta alterum. 
                    </div>
                    <div className='feat'>
                    <h3>Features</h3>
                    </div>
                    <div className='feattwo'>
                        <h4>NFT Marketplace</h4>
                        <p> In the future CNX will be invested in developing the following services and functionalities. Below is a detailed description of the NFT Marketplace and a special CNX Prepaid Card. These are one of the many services we will provide in the future</p>
                    </div>
                    <div className="featthree">
                    <h4>CNX Creditcard </h4>
                    <p>Using the CNX Prepaid Card users will be able to do transactions worldwide. CNX-Prepaid Card will have Visa global coverage. Using the CNX Prepaid Card app users will be able to enact simple transactions, purchases and even withdraw money from an ATM. Using</p>
                    </div>
                    <div className='featfour'>
                        <h4>Network of 200K </h4>
                        <p>users In the future CNX will be invested in developing the following services and functionalities. Below is a detailed description of the NFT Marketplace and a special CNX Prepaid Card. These are one of the many services we will provide in the future</p>
                    </div>
                </div>
            <div className='col-4 card'>
                <h5 className='list_title'><span><b style={{color:props.pcolor}}>{props.status}</b></span></h5>
                <p><b>{props.desc}</b></p>
                <h6 className='sub_title'>Total Number of Advisors</h6>
                <ul className='listItems advisornetwork'>
                {data && data.map((item,index)=>{
                {console.log(item)}
          return(
          <li key={index}> <img src={item.img}/><span>{item.name} </span> X</li>
          )
        })}
       </ul>
                

        

            </div>
            </div>
        </div>
  )
}

export default Cnxnetwork
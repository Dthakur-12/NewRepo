import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import adone from '.././Images/Advisorone.png'
import adtwo from '.././Images/Advisortwo.png'
import adthree from '.././Images/Advisorthree.png'
import adfour from '.././Images/Advisorfour.png'
import adfive from '.././Images/Advisorfive.png'
import navlogo from '../Images/reset.png'
import {userList} from "../../Api/Api" 

function AdvisorList(props) {
  const [udata,setData]=useState()
  useEffect(()=>{
    let page     = 10;
    let per_page = 10;     
    userList(page,per_page).then(res => {  
      console.log("ddddddddddd",res)
      setData(res.data)
    })
  },[])
  
  const data=[
			{ "name": "5001", "img": adone },
			{ "name": "5002", "img": adtwo },
			{ "name": "5005", "img": adthree},
			{ "name": "5007", "img": adfour},
			{ "name": "5006", "img": adfive },
			{ "name": "5003", "img": adthree },
			{ "name": "5004", "img": adtwo }
		]
  return (
    
    <div className='col-12 text-center card'>
       <h5 className='list_title'><span><b style={{color:props.pcolor}}>{props.status}</b></span></h5>
       <p><b>{props.desc}</b></p>
       <h6 className='sub_title'>Advisor Add</h6>
       <ul className='listItems'>
        {data && data.map((item,index)=>{
          {console.log(item)}
          return(
          <li key={index}> <img src={item.img}/><span>{item.name} </span> X</li>
          )
        })}
       </ul>
    </div>
  )
}
export default AdvisorList
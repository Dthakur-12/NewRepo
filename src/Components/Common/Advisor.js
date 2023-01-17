import React from 'react'
import {Link} from 'react-router-dom'

function Advisor(props) {
  return (
    <div className='advisor_li text-center'>
       <div className='imgsec'>
        <img src={props.img} className="avg_img" />
        <span><Link to='/advisorgrid' style={{textDecoration: 'none'}}>+</Link></span>
       </div>
       <h4>{props.name}</h4>
       <p>{props.desc}</p>
    </div>
  )
}
export default Advisor
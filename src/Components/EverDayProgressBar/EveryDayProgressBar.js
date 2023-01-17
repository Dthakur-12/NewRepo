import React from 'react'
import Chart from 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2"
import './EveryDayProgressBar.css'
import { GiOrange } from 'react-icons/gi';

function EveryDayProgressBar() {
  const data = {
      datasets:[
        {
          label:'Projects Status (2022)',
          data:[87,37,93],
          backgroundColor:[
          '#FF9D00',
          '#6629C3',
          '#13BABC',
        ]
        }
      ]   
  }
  return(
  <div className='row'>
      <b>EveryDay Progress</b>
      <div className="col-4" style={{fontSize:'15px', fontWeight:'bold', textAlign:'center'}}>
        <div style={{color:'#FF9D00'}}>
          <span >All Projects</span>
          <p>10520</p>
          </div>
          <div style={{color:'#13BABC'}}>
          <span >Projects Completed</span>
          <p>10520</p>
          </div>
          <div style={{color:'#6629C3', textAlign:'center'}}>
          <span >Projects In Process</span>
          <p>10520</p>
          </div>
          </div>
    
    <div className="col-8 chart">
      
     <Doughnut data={data}/> 
  </div>
  </div>
  ) 
}

export default EveryDayProgressBar;
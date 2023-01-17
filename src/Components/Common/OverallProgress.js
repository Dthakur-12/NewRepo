import React from 'react'
import EveryDayProgressBar from '../EverDayProgressBar/EveryDayProgressBar'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function OverallProgress(props) {
    const per=props.percentage;
  return (
    <div className='col-4'>
        <div className='col-12'>
            <p><b>{props.heading}</b></p>
            <div>
                <p>{props.description}</p>
            </div>
            <div style={{ width: 100, height: 100, fontSize:'10px'}}>
            <CircularProgressbar value={props.percentage} strokeWidth={5}  styles={buildStyles({pathColor: props.pcolor})}/>
            </div>
            <div style={{color:props.pcolor}}><b>{props.percentage}</b></div>
        </div>
    </div>
  )
}

export default OverallProgress;
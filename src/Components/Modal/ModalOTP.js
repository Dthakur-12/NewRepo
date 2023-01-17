import React from 'react'
import { useState } from 'react'
import Modal from 'react-modal'
import  OTPInput, { ResendOTP } from "otp-input-react";
import imge from '../Images/phone.png'
import './ModalOTP.css'

Modal.setAppElement('#root')

function ModalOTP() {
    const [ModalIsOpen,setModalIsOpen] = useState(false)
    const [OTP, setOTP] = useState("");
    
  return (
    <>
    <Modal isOpen={ModalIsOpen} onRequestClose={()=> setModalIsOpen(false)} style={{ 
        overlay:{position: 'absolute',width: '700px',height: '474px',left: '336px',top: '80px',background: '#FFFFFF',boxShadow: '2px 2px 2px 2px rgba(0.25, 0.25, 0.25, 0.25)'},
        content:{
            color:'black', inset:'0px',}}}>
                <div>
                  <div className='pic'>
                    <img src={imge}/>
                  </div>
                    <div className='textone'>
                    Verify Phone Number
                    </div>
                    <div className='texttwo'>
                    Enter the Security Code that we sent to (123) 456-7890
                    </div>
                    <div className='otpone'>
                    <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} secure/>
                    </div>
                    <div className='fbtnfour' >
<button  type="button" className="btn btn-primary" >Confirm
</button>
</div>
<div className='resend'>
Did't Receive Code?
<span style={{display: 'inline-block',}}>
  <a href='#'>Resend</a>
</span>
</div>
</div>    
    </Modal>
    <button className='btn btn-primary' onClick={()=>setModalIsOpen(true)} >Open Modal</button>
    <button className='btn btn-primary' onClick={()=>{setModalIsOpen(false)}}>Close Modal</button>
</>

  )
}

export default ModalOTP
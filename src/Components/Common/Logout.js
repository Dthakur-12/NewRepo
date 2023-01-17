import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Logout(props) {
    const navigate = useNavigate();
    useEffect(()=>{ 
      return navigate("/");      
    })
    toast.success('Logout Successful',{position: toast.POSITION.TOP_LEFT});
    localStorage.removeItem('token');
    
    <ToastContainer/>
}

export default Logout;
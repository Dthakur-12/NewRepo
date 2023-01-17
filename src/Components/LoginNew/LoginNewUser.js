import React,{useState} from 'react'
import {Link} from'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../Api/Api";
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from '../Forms/FormComponents/FormikControl'
import bg from '../Images/Upbgdesign.jpg'
import logo from '../Images/Tlogo.png'
import Bgform from '../Images/Bgdice.jpg'
import './LoginNew.css'


function LoginNewUser() {
    const navigate = useNavigate();

    const initialValues={
        email:'',
        password:'',
        checkbox:'',
    }
    const validationSchema= Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required("Please enter your password"),
        checkbox:  Yup.boolean().oneOf([true], "You must accept the terms and conditions")
    })
    const onSubmit = (values) =>
    {
        console.log("form values are:", values)
       const {email, password} = values;
        userLogin(email, password).then((res)=>{
            console.log(res);
            if (res.success===true){
            toast.success('LogIn Successful',{position: toast.POSITION.TOP_LEFT});
            let [userToken,role]=[res.token, res.role];
            console.log(userToken,role);
           localStorage.setItem('userToken', userToken);
           
            setTimeout(()=>{
                navigate('/dashboard');
             },1000);
            }
            //  else {
            //     toast.error(err.response.data.msg,{position: toast.POSITION.TOP_LEFT})
            //     console.log("error",err)
            //     navigate('/signupuser');
            // }
         
           
         }).catch((err)=>{
            toast.error(err.response.data.msg,{position: toast.POSITION.TOP_LEFT})
             console.log("error",err)
        
        });

    }
    const back={
    backgroundImage:`url(${bg})`,
    height: '539px',   
    }
    const Bgtwo = {
            backgroundImage:`url(${Bgform})`,

            // height: '720px'
            }
  return (
    <div className="container">
        <div className="row">
        <ToastContainer/>
  <div className="col-md-6" style={back}>
    <div className="logowhitenew">
        <Link to='/'><img src={logo} alt="logo"/></Link>
    </div>
    <div className='alltext'>
    <div className="headingt">
        WELCOME BACK!!!
    </div>
    <div className="parat"> 
        Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eius modr<br/> incididunt ut labore et doloagn Lorem ipsum
    </div>
    <div className="para2two">
    Lorem ipsum dolor sit amet, conse ctetur adipiscing elit......
        </div>  
        </div>
  </div>
  <div className="col-md-6" style={Bgtwo}>
 
    <div  className='bggroundnew'  >
    <div className='formfirstnew'>
        Log In
        </div>
        <div>
        <Formik  
    initialValues={initialValues}  
    validationSchema={validationSchema} 
    onSubmit={onSubmit}>
        {
            
            formik=> {
                return <Form >
                    <FormikControl
                    control='input'
                    type='email'
                    label='Email Id'
                    placeholder='Enter'
                    name='email'/>      
                     <FormikControl
                    control='input'
                    type='password'
                    label='Password'
                    placeholder='Enter'
                    name='password' />   
            <div style={{textAlign: 'right',}}> <Link to='/forgetpassword'><p>Forgot Password?</p></Link>
            </div>
            <div>
                
            <input type='checkbox' name='checkbox' required></input><p style={{display: 'inline',marginInlineStart:'10px'}}><b>Remember Me</b></p>
        
            </div>

            <br/>
            <div className='sbtn'>
            <button  type="submit" className="btn btn-primary btnup">Sign In
            </button>
            </div>
            <br/>
            <div style={{textAlign: 'center'}}><p> Don't have an account? <Link to='/signupuser'>Sign Up</Link> </p>  or 
            </div>
             </Form>
            }
        }

    </Formik>
    <div className="bttn2new">
      <Link to='/signupuser'> Sign Up </Link>
    </div>
   </div>
    </div>
  </div>
   </div>
   </div>
  )
}

export default LoginNewUser
import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from '../Forms/FormComponents/FormikControl'
import { Link } from 'react-router-dom'
import back from '../Images/Upbgdesign.jpg'
import backtwo from '../Images/Phnew.png'
import logofive from '../Images/Tlogo.png'
import {MdOutlineEmail} from 'react-icons/md'
import {GiRotaryPhone} from 'react-icons/gi'
import {GoLocation} from 'react-icons/go'
import './ContactUs.css'

function ContactUs() {
    const initialValues={
        fullname:'',
        email:'',
        phonenumber:'',
        leavemessage:'',
    }
    const validationSchema= Yup.object({
        fullname: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').max(20).required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        phonenumber:Yup.string()
        .required("This field is Required")
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Phone number is not valid"
        ),
        leavemessage:Yup.string()
        .required("This field is Required")
    })
    const onSubmit = values =>
    {
        console.log("form values are:", values)
    }

    const contct={
        
            backgroundImage:`url(${back})`,        
    }
    const objecttwo={
        padding: '31px 34px',
        marginTop: '-44px',
        backgroundImage:`url(${backtwo})`,  
        backgroundSize:'cover',
    }
  return (
    <div className='container' style={contct}>
    <div className="row">
    <div className="logofive">
       <Link to='/'> <img src={logofive} alt="logo"/></Link>
    </div>
        <div className="col-md-7" style={{paddingLeft:'15px', backgroundColor:'black'}}>
            <div className='paragraphone'>
            Measure your candidates on       
            </div>
            <div className='paragraphtwo'>
           JOB SKILLS,
            </div>
            <div className='paragraphthree'>
        PERSONALITY & FIT
            </div>
            <div className='contentwhole'>
            <div className='mail'>
               <MdOutlineEmail/>
                <p style={{display: 'inline-block'}}>nodummyexample01@gmail.com</p>
            </div>
            <div className='mailtwo'>
               <GiRotaryPhone/>
                <p style={{display: 'inline-block'}}>(033) 2659 5966</p>
            </div>
            <div className='mailthree'>
               <GoLocation/>
                <p style={{display: 'inline-block'}}>Victoria Memorial Hall, 1, Queens Way, Maidan, Kolkata, West Bengal 700071</p>
            </div>
            </div>
        </div>
        <div className="col-md-4" style={objecttwo}>
        <div className='formfirsttwo'>
        <p className='pg'>Contact Us</p>
        </div>
            <Formik  
    initialValues={initialValues}  
    validationSchema={validationSchema} 
    onSubmit={onSubmit}>
        {
            
            formik=> {
                return <Form >
                    <FormikControl
                    control='input'
                    type='text'
                    label='Full Name'
                    placeholder='Enter'
                    name='fullname'/>   
                     <FormikControl
                    control='input'
                    type='email'
                    label='Email'
                    placeholder='Enter'
                    name='email'/> 
                      <FormikControl
                    control='input'
                    type='number'
                    label='Phone No.'
                    placeholder='Enter'
                    name='phonenumber'/>    
                      <FormikControl
                    control='textarea'
                    type='textarea'
                    label='Leave us a message'
                    placeholder='Enter Your Message'
                    name='leavemessage'/>    
                    <div>
                <button   type="submit" className="btn btn-primary" style={{backgroundColor: 'blue',borderRadius: '30px',fontSize: '16px', padding:"10px 113px",}}>Continue
                </button>
            </div>
    </Form>
            }
        }

    </Formik>

     </div>
    
        <div className="col-md-1">
        </div>
    </div>
</div>
  )
}

export default ContactUs
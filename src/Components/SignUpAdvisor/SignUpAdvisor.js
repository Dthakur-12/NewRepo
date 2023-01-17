
import React from 'react'
import {Link} from'react-router-dom'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from '../Forms/FormComponents/FormikControl'
import backtwo from '../Images/Bgdice.jpg'
import rback  from '../Images/Upbgdesign.jpg'
import logotwo from '../Images/Tlogo.png'
import '../SignUpUser/SignUpUser.css'
import  '../Forms/FormComponents/Form.css'
import { useNavigate } from 'react-router-dom';


function SignUpAdvisor(props) {
  const navigate = useNavigate()

    const bgtwo={
        
            backgroundImage:`url(${backtwo})`,
            height: '720px'
            
    }
    const bagrnd={
        
        backgroundImage:`url(${rback})`,
        height: '720px',
    
        
}
    const initialValues={
        fullname:'',
        email:'',
        password:'',
        password2:'',
    }
    const validationSchema= Yup.object({
        fullname: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password:Yup.string().required("Please enter your password").matches(
          /^.*(?=.{5,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "Password must contain at least 5 characters, one uppercase, one number and one special case character"
        ),
        password2:Yup.string().required("Please confirm your password").when("password", {
          is: password => (password && password.length > 0 ? true : false),
          then: Yup.string().oneOf([Yup.ref("password")], "Password doesn't match")
        })
    })

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-5 ' style={bgtwo}>
            
        <div className='bggroundtwo'>
        <div className='formtwofirst'>
        CREATE ACCOUNT
        </div>
        <Formik  
    initialValues={initialValues}  
    validationSchema={validationSchema} 
    onSubmit={(values) => {
      console.log(values);
      props.setStatetwo(values);
      navigate('/signupadvisorform');
    }}>
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
                    type='password'
                    label='Password'
                    placeholder='Enter'
                    name='password'/>    
                    <FormikControl
                    control='input'
                    type='password'
                    label='Confirm Password'
                    placeholder='Enter'
                    name='password2'/> 
            <div className='sbtntwo'>
            <button  type="submit" className="btn btn-primary signupbtnt"> Sign Up </button>
            <br/>
            <br/>
            <div style={{textAlign: 'center'}}><p> Don't have an account? <Link to ='/signupadvisorform'></Link> </p> or 
            </div>
            </div>
             </Form>
            }
        }

    </Formik>
    <div className="bttn3">
      <Link to='/loginadvisor'>Log In </Link>
    </div>
    </div>
            </div>
            <div className="col-md-7" style={bagrnd}>
            <div className="logotwowhite">
       <Link to='/'> <img src={logotwo} alt="logo"/></Link>
    </div>
    <div className='alltextnew'>
    < div className="textgroup">
        Hello, Friend!
    </div>
    < div className="textgrouptwo">
    Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eius modr incididunt ut labore et doloagn Lorem ipsum
    </div>
    < div className="textgroupthree">
    Lorem ipsum dolor sit amet, conse ctetur adipiscing elit
    </div> 
    </div>          
     </div>
   </div>      
    </div>
  )
}

export default SignUpAdvisor
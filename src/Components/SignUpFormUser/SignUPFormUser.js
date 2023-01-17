import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from '../Forms/FormComponents/FormikControl'
import fbg from '../Images/Upbgdesign.jpg'
import logothree from '../Images/Tlogo.png'
import bbg from '../Images/Bgdice.jpg'
import './SignUpForm.css'
import { customerRegister } from "../../Api/Api";
import { UserConsumer } from '../Context/userContext';




function SignUPFormUser() {
    const navigate = useNavigate();
    const [form1, setForm1] = useState({});

   
    const genderoptions = [
     {key: 'Choose', values:''},
     {key: 'Male', values:'male'},
     {key: 'Female', values:'female'},
    ]
    const languageoptions = [
        {key: 'Choose', values:''},
        {key: 'English', values:'english'},
        {key: 'French', values:'french'},
       ]
    const initialValues={
        fullname:'',
        fulladdress:'',
        gender:'',
        dateofbirth:'',
        mobile:'',
        preferedlanguages:'',
        age:'',
    }
    const validationSchema= Yup.object({
        fullname: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').max(20).required('Required'),
        fulladdress: Yup.string().required('Required'),
        gender:  Yup.string().required('Required'),
         dateofbirth:Yup.string().required('Required'), 
        // Yup.date().default(() => new Date()),wouldRecommend: Yup.boolean().default(false),
        mobile: Yup.string()
      .required("This field is Required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      ),
        preferedlanguages: Yup.string().required('Required'), 
        age: Yup.number()
        .required("Please supply your age")
        .min(10, "You must be at least 18 years")
        .max(60, "You must be at most 60 years"),

    })
    
    const onSubmit = values =>
    {

        let finalData = { ...values, ...form1 };
         console.log('finalData', finalData);
        customerRegister(finalData).then((res)=>{
            console.log(res);
            if(res.data.success){
                toast.success("SignUp Successful!")
                setTimeout(()=>{
                  navigate('/loginuser');
               },6000);
              }
         }).catch((err)=>{
            console.log("error",err)
            if(!err.response.data.success){
              toast.error(err.response.data.msg,{position: toast.POSITION.TOP_LEFT});
            }
        });
    }

    const fform={
        backgroundImage:`url(${fbg})`,
               height: '539px', 
    }
    const bggtwo = {
        backgroundImage:`url(${bbg})`,
        height: '539px', 
    }
    return (
        <>
      <UserConsumer>
            {
                (form1Data) => {
                    setForm1(form1Data);
                }
            }
      </UserConsumer>
    <div className="container" style={fform}>
        <ToastContainer/>
        <div className="row">
        
          <div className="col-md-4">
          <div className="logothreewhite">
       <Link to='/'> <img src={logothree} alt="logo"/></Link>
    </div>
    <div className='pallsign'>
        <div className='pone'>
        Compact Plans 
        </div>
        <div className='ptwo'>
        within reasonable Price Range
        </div>
        <div className='pthree'>
        Lorem ipsum dolor sit amet, conse ctetur adip fsiscing elit, sed do eius modr incididunt ut labore et
        </div>
            </div>
            </div>
            <div className='col-md-4' style={bggtwo}>
         
            
            <div className='formfirsttwo'>
        User Sign-Up Form
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
                    type='text'
                    label='Full Address'
                    placeholder='Enter'
                    name='fulladdress'/> 
                     <FormikControl
                    control='select'
                    type='text'
                    label='Gender'
                    options={genderoptions}
                    name='gender'/>   
                      <FormikControl
                    control='input'
                    type='date'
                    label='Date Of Birth'
                    placeholder='Enter'
                    name='dateofbirth'/>   
                    <FormikControl
                    control='input'
                    type='number'
                    label='Phone Number'
                    placeholder='Enter'
                    name='mobile'/>   
                    <FormikControl
                    control='select'
                    type='text'
                    label='Prefered Language'
                    placeholder='Enter'
                    options={languageoptions}
                    name='preferedlanguages'/>   
                     <FormikControl
                    control='input'
                    type='number'
                    label='Age'
                    placeholder='Enter'
                    name='age'/>
                      
                    <div className='fbtntwo' >
<button   type="submit" className="btn btn-primary btnfirste" >Continue
</button>
</div>
<div className='fbtnthree' >
<button   type="button" className="btn btn-primary btnseconde">Cancel
</button>

</div>
             </Form>
            }
        }

    </Formik>
            </div>
         
        </div>
        
            </div>
    </>
  )
}

export default SignUPFormUser;
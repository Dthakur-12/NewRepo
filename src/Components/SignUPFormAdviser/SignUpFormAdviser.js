
import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from '../Forms/FormComponents/FormikControl'
import fbgt from '../Images/Upbgdesign.jpg'
import logofour from '../Images/Tlogo.png'
import bbgg from '../Images/Bgdice.jpg'
import './SignUpAdviser.css'
import { UserConsumer } from '../Context/userContext';
import { advisorRegister } from "../../Api/Api";

function SignUpFormAdviser() {
  const navigate = useNavigate();
  const [form2, setForm2] = useState({});
  const [step,setStep]=useState(1)
  const [formdata,setFormdata]=useState({})
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
       const skillsoptions = [
        {key: 'Choose', values:''},
        {key: 'Blockchain', values:'blockchain'},
        {key: 'Developer', values:'developer'},
        {key: 'Java', values:'java'},
       ]
       const employmenttypes = [
        {key: 'Choose', values:''},
        {key: 'Developer', values:'developer'},
        {key: 'Analyst', values:'analyst'},
        {key: 'Javascript', values:'javascript'},
       ]

    const initialValues={
        // FullName:'',
        // Gender:'',
        // Country:'',
        // City:' ',
        // Phonenumber:'',
        // PreferedLanguage:'',

        // FieldOfStudy:'',
        // Skill:'',
        // Degree:'',
        // InstitutionName:'',
        // Startdate:'',
        // Enddate:'',

        // EmploymentType:'',
        // OrganizationName:'',
        // Position:'',
        // Designation:'',
        // WorkstartDate:'',
        // WorkendDate:'',
        // AdditionalInfo:'',

        // Facebook:'',
        // Twitter:'',
        // Googleplus:'',
        // Linkdin:'',
        // Instagram:'',

        // legalname:'',
        // Dob:'',
        // cityOfBirth:'',
        // Address:'',
        // Countryad:'',
        // Idno:'',
        // ExpiryDate:'',

        // Idimage:'',
        // Idwithcustomerimage:'',
        // otherLegaldocuments:'',
       
    }
    const validationSchema= Yup.object({
      FullName: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').max(20).required('Required'),
      Gender: Yup.string().required('Required'),
      Country:Yup.string().required('Required'),
      City: Yup.string().required('Required'),
      mobile: Yup.string().required("This field is Required").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid" ),
      PreferedLanguage: Yup.string().required('Required'),    
    })
    const validationSchematwo=Yup.object({ 
     
      FieldOfStudy: Yup.string().required('Required'), 
      Skill: Yup.string().required('Required'),
      Degree: Yup.string().required('Required'),
      InstitutionName: Yup.string().required('Required'),
      StartDate:Yup.date().default(() => new Date()),wouldRecommend: Yup.boolean().default(false),
      EndDate:Yup.date().default(() => new Date()),wouldRecommend: Yup.boolean().default(false),
    })
    const validationSchemathree=Yup.object({

      EmploymentType: Yup.string().required('Required'),
      OrganizationName: Yup.string().required('Required'),
      Position: Yup.string().required('Required'),
      Designation: Yup.string().required('Required'),
      WorkstartDate:Yup.date().default(() => new Date()),wouldRecommend: Yup.boolean().default(false),
      WorkendDate:Yup.date().default(() => new Date()),wouldRecommend: Yup.boolean().default(false),
      
    })
    const validationSchemafour=Yup.object({
       
      Facebook:Yup.string().required('Required'),
      Twitter: Yup.string().required('Required'),
      Googleplus: Yup.string().required('Required'),
      Linkdin: Yup.string().required('Required'),
      Instagram: Yup.string().required('Required'),
    })

   
    const validationSchemafive=Yup.object({ 
      legalname:Yup.string().required('Required'),
      Dob:Yup.string().required('Required'),
      cityOfBirth: Yup.string().required('Required'),
      Address: Yup.string().required('Required'),
      Countryad: Yup.string().required('Required'),
      Idno:Yup.string().required('Required'),
      ExpiryDate:Yup.string().required('Required'),
    })

    const validationSchemasix=Yup.object({ 
  
      Idimage:Yup.string().required('Required'),
      Idwithcustomerimage:Yup.string().required('Required'),
      otherLegaldocuments:Yup.string().required('Required'),
     
    })

    const onSubmit1=values=>{
      // console.log("form values are:", values)
      const newFormdata=Object.assign(formdata, values);
      setFormdata(newFormdata);
      setStep(2);
      // setStep(6)
    }
    const onSubmit2=values=>{
      // console.log("form values are:", values)
      const newFormdata=Object.assign(formdata, values);
      setFormdata(newFormdata);
      setStep(3)
    }
    const onSubmit3=values=>{
      // console.log("form values are:", formdata)
      const newFormdata=Object.assign(formdata, values);
      setFormdata(newFormdata);
      setStep(4)
    }
    const onSubmit4=values=>{
      // console.log("form values are:", values)
      const newFormdata=Object.assign(formdata, values);
      setFormdata(newFormdata);
      setStep(5)
    
    }
    const onSubmit5=values=>{
      // console.log("form values are:", values)
      const newFormdata=Object.assign(formdata, values);
      setFormdata(newFormdata);
      setStep(6)
    }

    const onSubmit6=values=>{
      
      const newFormdata=Object.assign(formdata, values);
      setFormdata(newFormdata);
      let finalData = { ...newFormdata, ...form2 };
      console.log('finalData', finalData);

      advisorRegister(finalData).then((res)=>{
        console.log(res);
        if(res.data.success){
          toast.success("SignUp Successful!")
          setTimeout(()=>{
            navigate('/loginadvisor');
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
        backgroundImage:`url(${fbgt})`,
               height: '539px', 
    }
    const bggtwo = {
        backgroundImage:`url(${bbgg})`,
        height: '539px', 
    }
  return (
    <> 
    <UserConsumer>
    {
        (form1Data) => {
         
            setForm2(form1Data);
            
        }
    }
</UserConsumer>
    <div className="container" style={fform}>
    <ToastContainer/>
        <div className="row">
        
          <div className="col-md-4">
          <div className="logothreewhitead">
       <Link to='/'> <img src={logofour} alt="logo"/></Link>
    </div>
    <div className='full_text'>
        <div className='ponee'>
        Compact Plans 
        </div>
        <div className='ptwoe'>
        within reasonable Price Range
        </div>
        <div className='pthreee'>
        Lorem ipsum dolor sit amet, conse ctetur adip fsiscing elit, sed do eius modr incididunt ut labore et.........
        </div>
        </div>
            </div>
            <div className='col-md-5 indexes' style={bggtwo}>
            <div  className='bggroundthreee'>
            <div className='formfirsttwoe'>
        <p className='pge'>Advisors Form</p>
        </div>
        {step===1 &&(
          <Formik  
          initialValues={initialValues}  
          validationSchema={validationSchema} 
          onSubmit={onSubmit1}>
              {
                  
                  formik=> {
                      return <Form >
                          <FormikControl
                          control='input'
                          type='text'
                          label='Full Name'
                          placeholder='Enter'
                          name='FullName'/>  

                           <FormikControl
                          control='select'
                          type='text'
                          label='Gender'
                          options={genderoptions}
                          name='Gender'/>  

                           <FormikControl
                          control='input'
                          type='text'
                          label='Country'
                          placeholder='Enter'
                          name='Country'/> 

                          <FormikControl
                          control='input'
                          type='text'
                          label='City'
                          placeholder='Enter'
                          name='City'/> 

                          <FormikControl
                          control='input'
                          type='number'
                          label='Phone Number'
                          placeholder='Enter'
                          name='mobile'/>  

                          <FormikControl
                          control='select'
                          type='text'
                          label='Add Known Languages'
                          options={languageoptions}
                          name='PreferedLanguage'/>         
                          
                          <div className='fbtntwoeee'>          
      <button   type="submit" className="btn btn-primary assign_btn" >Continue
      </button>
      </div>
      <div className='fbtnthreee' >
      <button  type="button" className="btn btn-primary assign_btntwo" >Cancel
      </button>
      </div>
       </Form>
       }
        }
      
          </Formik>
        )}
        {step===2 && (<Formik  
    initialValues={initialValues}  
    validationSchema={validationSchematwo} 
    onSubmit={onSubmit2}>
        {
            
            formik=> {
                return <Form > 
                  <span><b>Education</b></span>
                    <FormikControl
                    control='input'
                    type='text'
                    label="Field Of Study"
                    placeholder='Enter'
                    name='FieldOfStudy'/> 

                     <FormikControl
                    control='select'
                    type='select'
                    label='Skills Known'
                    options={skillsoptions}
                    name='Skill'/>

                    <FormikControl
                    control='input'
                    type='text'
                    label="Degree"
                    placeholder='Enter'
                    name='Degree'/> 
                     
                     <FormikControl
                    control='input'
                    type='text'
                    label="Enter Institution's Name"
                    placeholder='Enter'
                    name='InstitutionName'/> 
                    
                    <div className='row'>
                      <div className='col-md-6'>
                      <FormikControl
                    control='input'
                    type='date'
                    label='Start Date'
                    placeholder='Enter'
                    name='Startdate'/> 
                      </div>

                      <div className='col-md-6'>
                      <FormikControl
                    control='input'
                    type='date'
                    label='End Date'
                    placeholder='Enter'
                    name='Enddate'/> 
                      </div>
                    </div>
                  <div>
                    <input type='checkbox' name='checkbox' value='checkbox' />
                    <span> <b>I am Currently Studying here</b></span>
                  </div>
                  <br/>    
                    <div className='fbtntwoeee' >          
<button   type="submit" className="btn btn-primary assign_btn">Continue
</button>
</div>
<div className='fbtnthreee' >
<button  type="button" className="btn btn-primary assign_btntwo">Cancel
</button>
</div>
 </Form>
 }
  }

    </Formik>)}
    {step===3 && (<Formik  
    initialValues={initialValues}  
    validationSchema={validationSchemathree} 
    onSubmit={onSubmit3}>
        {
            
            formik=> {
                return <Form >  
                     <span><b>Experience</b></span>

  <FormikControl
  control='select'
  type='select'
  label="Employment Type"
  placeholder=''
  options={employmenttypes}
  name='EmploymentType'/>

<FormikControl
  control='input'
  type='text'
  label="Enter Organization's Name"
  placeholder='Enter'
  name='OrganizationName'/> 

   <FormikControl
  control='input'
  type='text'
  label="Position"
  placeholder='Enter'
  name='Position'/> 

  <FormikControl
        control='input'
        type='text'
        label='Enter Designation'
        placeholder='Enter'
        name='Designation'/>  
    
   <div className='row'>
    <div className='col-md-6'>
    <FormikControl
  control='input'
  type='date'
  label='Start Date'
  placeholder='Enter'
  name='WorkstartDate'/> 
    </div>
    <div className='col-md-6'>
    <FormikControl
  control='input'
  type='date'
  label='End Date'
  placeholder='Enter'
  name='WorkendDate'/> 
    </div>
    <div>
  <input type='checkbox' name='checkbox' value='checkbox' />
  <span> <b>I am Currently Working in this role</b></span>
</div>
<FormikControl
  control='textarea'
  type='textarea'
  label='Additional Info: '
  placeholder='(If You Have Any & You Wants To Share With Us)'
  name='AdditionalInfo'/> 
  </div>

  <div className='fbtntwoeee'>          
<button   type="submit" className="btn btn-primary assign_btn ">Continue
</button>
</div>
<div className='fbtnthreee' >
<button  type="button" className="btn btn-primary assign_btntwo" >Cancel
</button>
</div>
 </Form>
 }
  }
    </Formik>)}

    {step===4 && (<Formik  
    initialValues={initialValues}  
    validationSchema={validationSchemafour} 
    onSubmit={onSubmit4}>
        {
            
            formik=> {
                return <Form >  
                     <span><b>Add Your Social Media Profile</b></span>

  <FormikControl
  control='input'
  type='url'
  label="Facebook"
  placeholder='Enter'
  name='Facebook'/>

<FormikControl
  control='input'
  type='url'
  label="Twitter"
  placeholder='Enter'
  name='Twitter'/>

<FormikControl
  control='input'
  type='url'
  label="Google+"
  placeholder='Enter'
  name='Googleplus'/>

<FormikControl
  control='input'
  type='url'
  label="Linkdin"
  placeholder='Enter'
  name='Linkdin'/>

<FormikControl
  control='input'
  type='url'
  label="Instagram"
  placeholder='Enter'
  name='Instagram'/>


<div className='fbtntwoeee'>          
<button   type="submit" className="btn btn-primary assign_btn">Continue
</button>
</div>
<div className='fbtnthreee' >
<button  type="button" className="btn btn-primary assign_btntwo">Cancel
</button>
</div>
 </Form>
 }
  }
    </Formik>)}

    {step===5 && (<Formik  
    initialValues={initialValues}  
    validationSchema={validationSchemafive} 
    onSubmit={onSubmit5}>
        {
            
            formik=> {
                return <Form >  
                     <span><b>KYC SECTION</b></span>
  <FormikControl
  control='input'
  type='text'
  label="Legal Name"
  placeholder='Enter'
  name='legalname'/>

<FormikControl
  control='input'
  type='date'
  label="Date Of Birth"
  placeholder='Enter'
  name='Dob'/>

<FormikControl
  control='input'
  type='text'
  label="City Of Birth"
  placeholder='Enter'
  name='cityOfBirth'/>

<FormikControl
  control='input'
  type='text'
  label="Address"
  placeholder='Enter'
  name='Address'/>

<FormikControl
  control='input'
  type='text'
  label="Country"
  placeholder='Enter'
  name='Countryad'/>

<FormikControl
  control='input'
  type='text'
  label="ID or Passport or Driving License Number"
  placeholder='Enter'
  name='Idno'/>

<FormikControl
  control='input'
  type='date'
  label="Enter ExpiryDate"
  placeholder='Enter'
  name='ExpiryDate'/>

<div className='fbtntwoeee' >          
<button   type="submit" className="btn btn-primary assign_btn" >Continue
</button>
</div>
<div className='fbtnthreee' >
<button  type="button" className="btn btn-primary assign_btntwo" >Cancel
</button>
</div>
 </Form>
 }
  }
    </Formik>)}
    {step===6 && (<Formik  
    initialValues={initialValues}  
    validationSchema={validationSchemasix} 
    onSubmit={onSubmit6}>
        {
            
            formik=> {
                return <Form >  
                     <span><b>Verify Yourself</b></span>
                     

  <FormikControl
  control='input'
  type='file'
  label="Upload Image Of ID"
  placeholder='Select Image'
  accept="image/*"
  name='Idimage'/>

<FormikControl
  control='input'
  type='file'
  label="Upload Selfie with Uploaded ID/Document"
  placeholder='Select Image'
  accept="image/*"
  name='Idwithcustomerimage'/>

  <FormikControl
  control='input'
  type='file'
  label="Upload Image of one more Legal ID/Document"
  placeholder='Select Document'
  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  name='otherLegaldocuments'/>
<div className='fbtntwoeee' style={{marginTop:'202px'}} >          
<button   type="submit" className="btn btn-primary assign_btn" >Continue
</button>
</div>
<div className='fbtnthreee' >
<button  type="button" className="btn btn-primary assign_btntwo" >Cancel
</button>
</div>
 </Form>
 }
  }
    </Formik>)}
     </div>
      </div>
        </div>
        
    </div>
    </>
  )
}

export default SignUpFormAdviser;
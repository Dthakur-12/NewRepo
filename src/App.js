import { Routes, Route} from 'react-router-dom'
import Home from './Components/Homepage/Home';
import LoginNewUser from './Components/LoginNew/LoginNewUser';
import LoginNewAdvisor from './Components/LoginNewAdvisor/LoginNewAdvisor';
import SignUpUser from './Components/SignUpUser/SignUpUser';
import SignUpAdvisor from './Components/SignUpAdvisor/SignUpAdvisor';
import SignUPFormUser from './Components/SignUpFormUser/SignUPFormUser';
import SignUpFormAdviser from './Components/SignUPFormAdviser/SignUpFormAdviser'
import ModalOTP from './Components/Modal/ModalOTP';
import ContactUs from './Components/ContactUs/ContactUs';
import { Component } from 'react';
import Subscriptionplan from './Components/SubcriptionDetails/Subscriptionplan';
import Payment from './Components/PaymentMode/Payment';
import ForgetPassword from './Components/Assets/ForgetPassword';
import NavBar from './Components/Dashboard/NavBar/NavBar';
import ProgressBar from './Components/EverDayProgressBar/EveryDayProgressBar';
import DashBoardUpdated from './Components/Dashboard/DashBoardUpdated';
import Advisor from './Components/Common/Advisor';
import AdvisorGrid from './Components/Common/AdvisorGrid';
import AdvisorList from './Components/Common/AdvisorList';
import OverallProgress from './Components/Common/OverallProgress';
import AdvisorActivity from './Components/Common/AdvisorActivity';
import Cnxnetwork from './Components/Common/Cnxnetwork';
import { createContext, useState } from 'react';
import { UserProvider } from './Components/Context/userContext';
import Logout from './Components/Common/Logout';
import "./App.css";


function App() {
  
  const [state, setState] = useState({});
  const [statetwo, setStatetwo] = useState({});

  const stateHandler = (values) => {
    console.log('parent values', values);
    setState(values);
    // console.log(state);
  }
  const stateHandlertwo = (values) => {
    // console.log('parent values', values);
    setStatetwo(values);
    console.log(statetwo);
  }
  return (
    <>
    <div className="App">
      <Routes>
        <Route path='/' element = {<Home/>}/>
          <Route path='/loginuser' element={<LoginNewUser/>}/>  
          <Route path='/loginadvisor' element={<LoginNewAdvisor />} />
          <Route path='/signupuser' element={
              <SignUpUser setState={stateHandler} />
            } />
          
          <Route path='/signupuserform' element={
            <UserProvider value={state}>
              <SignUPFormUser/>
            </UserProvider>
            } />
          
          <Route path='/signupadvisor' element={<SignUpAdvisor setStatetwo={stateHandlertwo} />} />
          
          <Route path='/signupadvisorform' element={
            <UserProvider value={statetwo}>
              <SignUpFormAdviser/>
          </UserProvider>}/>
          <Route path='/dashboard' element={<DashBoardUpdated/>}/>
          <Route path='/advisorgrid' element={<AdvisorGrid/>}/>
          <Route path='/advisorlist' element={<AdvisorList/>}/>
          <Route path='/forgetpassword' element={<ForgetPassword/>}/>  
          <Route path='/advisoractivity' element={<AdvisorActivity/>}/>
          <Route path='/logout' element={<Logout/>}/>           
      </Routes>            
    </div>
    </>
  );
}

export default App;

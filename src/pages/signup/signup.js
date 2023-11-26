import '../signup/signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './navigation/navigation.js';
import { useNavigate } from 'react-router-dom';
import firebase from '../../firebaseConfig.js';
import Icon from '../../assets/images/icon.png';
import Person1 from '../../assets/images/person (1).png';
import Person2 from '../../assets/images/person (2).png';
import Person3 from '../../assets/images/person (3).png';
import Person4 from '../../assets/images/person (4).png';
import React, { useState } from 'react';


function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const submit = async (e) =>{
      e.preventDefault();
      try{
        const user =  await firebase.auth().createUserWithEmailAndPassword(email, password)
        if (user)
        {
          alert("Account Created Successfully");
          window.location.href = '/login';
        }
      }
      catch (error){
        alert(error)
      }
    }

    return (
      <div className='sU-wrapper'>
        <div className='sU-header'>
          <img src={Icon} alt='Icon'/>
          <h2>PORT4LIO</h2>
        </div>
        <div className='sU-banner'>
              <img id='p1' alt='banner' src={Person1}/>
              <img id='p2' alt='banner' src={Person4}/>
              <img id='p3' alt='banner' src={Person3}/>
              <img id='p4' alt='banner' src={Person2}/>
          </div>
        <div className='container main'>
          <div className='sU-pI-container'>
            <div className='pI-head'>
              <h3>Create an Account</h3>
            </div>
            <div className='pI-navigation'>
              <Navigation/>
            </div>
            <div className='pI-infos'>
              <div className='pI-info'>
                <p>Name:</p>
                  <input id='signup-name'
                  placeholder='Last Name, First Name and Middle Name' 
                  value={name}
                  onChange={(e) => setName(e.target.value)}></input>
              </div>
              <div className='pI-info'>
                <p>Email Address:</p>
                  <input id='signup-email'
                  placeholder='juandelacruz01@gmail.com' 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}></input>
              </div>
              <div className='pI-info'>
                <p>Student Number:</p>
                  <input id='signup-student-number'
                  placeholder='2021-00000-MN-0' 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}></input>
              </div>
              <div className='pI-info'>
                <p>Password:</p>
                  <input id='signup-password'
                  placeholder='Password' 
                  ></input>
              </div>
              <div className='pI-info'>
                <p>Confirm Password:</p>
                  <input id='signup-c-password'
                  placeholder='Confirm Password' 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}></input>
              </div>
              <div className='sU-terms'>
                <input type='checkbox'></input>
                <p> I agree to the <a href=''>terms & policy</a></p>
              </div>
            </div>
            <div className='button-next'>
              <button id='next' onClick={()=>navigate('/signup/personal-information')}>Next</button> {/* Temporary Sign Up Button for Email and Password creation to database*/}
            </div>
            <div className='sU-login'>
              <p>Already have an account? <a href='/login'>Log in</a></p>
            </div>
          </div>
        </div>
    </div>
    );
  }
  
  export default Signup;
  
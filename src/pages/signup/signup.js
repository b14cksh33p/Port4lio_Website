import '../signup/signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './navigation/navigation.js';
import Banner from '../../assets/images/background-banner.png';
import Header from '../signup/header/header.js';
import { useNavigate } from 'react-router-dom';
import firebase from '../../firebaseConfig.js';
import React, { useState } from 'react';


function Signup() {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
        <Header/>
        <img src={Banner} id='banner'></img>
      <div className='container main'>
        <div className='sU-pI-container'>
          <div className='pI-head'>
            <h1>PORT4LIO</h1>
            <p>Already have an account? <a href='/login'>LOG IN</a> here.</p>
          </div>
          <div className='pI-navigation'>
            <Navigation/>
          </div>
          <div className='pI-infos'>
            <div className='pI-info'>
              <p>Name:</p>
                <input id='signup-name' 
                value={name}
                onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className='pI-info'>
              <p>Email/Username:</p>
                <input id='signup-email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className='pI-info'>
              <p>Password:</p>
                <input id='signup-password'></input>
            </div>
            <div className='pI-info'>
              <p>Confirm Password:</p>
                <input id='signup-c-password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}></input>
            </div>
          </div>
          <div className='button-next'>
            <button id='next' onClick={submit}>Sign Up</button> {/* Temporary Sign Up Button for Email and Password creation to database*/}
          </div>

        </div>
      </div>
    </div>
    );
  }
  
  export default Signup;
  
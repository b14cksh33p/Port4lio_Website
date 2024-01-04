import '../signup/signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './navigation/navigation.js';
import firebase from '../../firebaseConfig.js';
import 'firebase/database'
import Icon from '../../assets/images/icon.png';
import Person1 from '../../assets/images/person (1).png';
import Person2 from '../../assets/images/person (2).png';
import Person3 from '../../assets/images/person (3).png';
import Person4 from '../../assets/images/person (4).png';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Signup() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')
    const userName = email.replace('@gmail.com', '');
    const navigate = useNavigate();

    const submit = async (e) =>{
      e.preventDefault();
      if(cPassword === password) {
        try{
          const username = firebase.database().ref('Users/'+userName);
          const uname = firebase.database().ref('UserNames/'+name);
          const udata = firebase.database().ref('UserData/'+name.replaceAll(',', ''));
          const user =  await firebase.auth().createUserWithEmailAndPassword(email, password)
          if (user)
          {
            alert("Account Created Successfully");
            localStorage.setItem('username', userName)
            localStorage.setItem('uname', name)
            navigate('/signup/personal-information/' + userName);
            window.location.reload();
            username.set({
              name: name
            })
            uname.set(
              'name'
            )
            udata.set({
              name: name
            })
            
          }
        }
        catch (error){
          alert(error)
        }
      }else{
        alert('password does not match')
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
          <form className='sU-pI-container' onSubmit={submit}>
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
                  type='text'
                  placeholder='Last Name, First Name, Middle Name' 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required></input>
              </div>
              <div className='pI-info'>
                <p>Email Address:</p>
                  <input id='signup-email'
                  type='email'
                  placeholder='juandelacruz01@gmail.com' 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required></input>
              </div>
              <div className='pI-info'>
                <p>Password:</p>
                  <input id='signup-password'
                  type='password'
                  placeholder='Password' 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  ></input>
              </div>
              <div className='pI-info'>
                <p>Confirm Password:</p>
                  <input id='signup-c-password'
                  type='password'
                  placeholder='Confirm Password' 
                  value={cPassword}
                  onChange={(e) => setCPassword(e.target.value)}
                  required></input>
              </div>
              <div className='sU-terms'>
                <input type='checkbox' required id='terms'></input>
                <p> I agree to the <a href=''>terms & policy</a></p>
              </div>
            </div>
            <div className='button-next'>
              <button id='next' type='submit'>Create Account</button> {/* Temporary Sign Up Button for Email and Password creation to database*/}
            </div>
            <div className='sU-login'>
              <p>Already have an account? <Link to={'/login'} style={{ textDecoration: 'none' }}>Log in</Link></p>
            </div>
          </form>
        </div>
    </div>
    );
  }
  
  export default Signup;
  
import './login.css';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from '../../firebaseConfig.js';

function Login() {
  
  const [emailLogin, setEmail] = useState('');
  const [passwordLogin, setPassword] = useState('')
  
  const navigate = useNavigate();

  const handleLogin = () => {
    if (emailLogin && passwordLogin && emailLogin.includes('@')) {
      alert('Login Successful!');
      setEmail('');
      setPassword('');
    } else {
      alert('Login not Successful');
      setEmail('');
      setPassword('');
    }
  };

  const submit = async (e) =>{
    e.preventDefault();
    try{
      const user =  await firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
      if (user)
      {
        alert("Login Successfully")
        window.location.href = '/';
      }
    }
    catch (error){
      alert(`Authentication failed: ${error}`);
    }
  }

    return (
      <div className='wrapper-login'>
        <div className='container-login main'>
          <div className='row'>
            <div className='col-md-6 side-image' onClick={()=>navigate('/')}>
            </div>
            <div className='col-md-6 right'>
              <div className='input-box-login'>
                <div className='port4lio-text-login'>PORT4LIO</div>
                <div className='welcome-text-login'>Welcome back, Iskolar!</div>
                <form onSubmit={handleLogin}>
                <div className='input-field-login'>
                  <input type='text' className='input-login' id='email-input-login' required autoComplete='off' value={emailLogin} onChange={(e) => setEmail(e.target.value)}></input>
                  <label htmlFor="email-input-login" className='label-login'>Email</label> 
                </div>
                <div className='input-field-login'>
                  <input type='password' className='input-login' id='password-input-login' required value={passwordLogin} onChange={(e) => setPassword(e.target.value)}></input>
                  <label htmlFor="password-input-login" className='label-login'>Password</label> 
                </div>
                <div className='input-field-login'>
                  <button type='submit' className='submit-btn-login' onClick={submit}>Login</button>
                </div>
                </form>
                <div className='signin-btn'>
                  <span className='span-login'>Don't have an account? <a href='/signup/primary-information'>Sign up here</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;
  
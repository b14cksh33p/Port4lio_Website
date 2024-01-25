import './right-side.css';
import React, { useState, useEffect } from 'react';
import firebase from '../../../firebaseConfig.js';
import { useNavigate } from 'react-router-dom';

function RightSide() {
  const [emailLogin, setEmail] = useState('');
  const [passwordLogin, setPassword] = useState('');
  const navigate = useNavigate();

  const AuthCheckComponent = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
        setUser(authUser);
      });

      return () => {
        unsubscribe();
      };
    }, []);
  };

  AuthCheckComponent();

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

  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin);

      if (user) {
        const userName = emailLogin.replace('@gmail.com', '');
        localStorage.setItem('username', userName);

        const userRef = firebase.database().ref('Users/' + userName);
        const currentUser = userRef.child('name');

        currentUser.on('value', (snapshot) => {
          localStorage.setItem('User', snapshot.val());
          const delayTimeout = setTimeout(() => {
            window.location.reload();
          }, 10);
        });

        navigate('/home/' + userName);
        

        
      }
    } catch (error) {
      const errorMessageDiv = document.querySelector('.RS-error-message');
      errorMessageDiv.style.display = 'block';
      errorMessageDiv.innerHTML = `Incorrect username or password. ${error.message}`;   
    }
  };

  return (
    <div className='RS-container'>
      <form onSubmit={submit} className='RS-form'>
        <div className='RS-error-message'>
          <div>Incorrect username or password.</div>
        </div>
        <div className='RS-input-container'>
          <input
            type='email'
            className='RS-email'
            id='RS-email'
            name='RS-email'
            placeholder='Enter Email'
            value={emailLogin}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type='password'
            className='RS-password'
            id='RS-password'
            name='RS-password'
            placeholder='Password'
            value={passwordLogin}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <input type='submit' className='RS-submit' value='Sign In' />
        <div className='RS-fPassword'>
          <p>Forgot Password?</p>
        </div>
      </form>
    </div>
  );
}

export default RightSide;

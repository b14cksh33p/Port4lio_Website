import './login-new.css';
import Navigation from '../login/navigation/login-navigation';
import LeftSide from '../login/left-side/left-side'
import RightSide from '../login/right-side/right-side'
import React, { useState } from 'react';
import firebase from '../../firebaseConfig.js';

function Login() {

  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const handleCancel = () => {
    toggleModal();
  };

  const handleReset = async () => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      const resetMessage = document.querySelector('.LN-message');
      resetMessage.style.display = 'block';
      resetMessage.style.borderColor = '#79A478';
      resetMessage.style.backgroundColor = '#DFF0D8';
      resetMessage.style.color = '#79A478';
      resetMessage.innerHTML = 'Email has been sent for verification and your password reset.';
    } catch (error) {
      const resetMessage = document.querySelector('.LN-message');
      resetMessage.style.display = 'block';
      resetMessage.style.borderColor = 'red';
      resetMessage.style.backgroundColor = '#FEDCE0';
      resetMessage.style.color = 'red';
      resetMessage.innerHTML = error.message.replaceAll('(auth/invalid-email).', '');
    }
      
  };

  
      return (
        <div className='LN-page'>
            <div className='LN-big-container'>
                <Navigation/>
                <div className='LN-split-container'>
                    <LeftSide/>
                    <RightSide toggleLoginModal={toggleModal}/>
                </div>
            </div>
            {modalOpen && (
              <div className='modal'>
              <div className='modal-content'>
                <p>Enter your email to reset your password.</p>
                <input type='email'
                 className='LN-email'
                  placeholder='e.g. juandelacruz@gmail.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}></input>
                <div className='LN-message'>
                  <div>Incorrect username or password.</div>
                </div>
                <div className='modal-buttons'>
                  <button onClick={handleReset} className='pI-modal-submit' disabled={email == '' ? true : false}>Reset</button>
                  <button onClick={handleCancel} className='pI-modal-cancel'>Cancel</button>
                </div>
              </div>
            </div>
            )}
        </div>
      );
    }
    
    export default Login;
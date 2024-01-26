import './login-new.css';
import Navigation from '../login/navigation/login-navigation';
import LeftSide from '../login/left-side/left-side'
import RightSide from '../login/right-side/right-side'
import React, { useState } from 'react';

function Login() {

  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const handleCancel = () => {
    toggleModal();
  };

  const handleReset = () => {
      const resetMessage = document.querySelector('.LN-message');
      resetMessage.style.display = 'block';
      resetMessage.innerHTML = 'Email has been sent for verification and your password reset.';
  }

  
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
                <input type='email' className='LN-email' placeholder='e.g. juandelacruz@gmail.com'></input>
                <div className='LN-message'>
                  <div>Incorrect username or password.</div>
                </div>
                <div className='modal-buttons'>
                  <button onClick={handleReset} className='pI-modal-submit'>Reset</button>
                  <button onClick={handleCancel} className='pI-modal-cancel'>Cancel</button>
                </div>
              </div>
            </div>
            )}
        </div>
      );
    }
    
    export default Login;
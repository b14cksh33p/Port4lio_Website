import './right-side.css';
import React, {useState} from 'react';
import firebase from '../../../firebaseConfig.js';

function RightSide() {
    
    const [emailLogin, setEmail] = useState('');
    const [passwordLogin, setPassword] = useState('')
  

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
        <div className='RS-container'>
            <form onSubmit={handleLogin}>
                <div className='RS-input-container'>
                    <input type='email' className='RS-email' id='RS-email' name='RS-email' placeholder='Enter Email'
                    value={emailLogin} onChange={(e) => setEmail(e.target.value)} required></input>
                    <input type='password' className='RS-password' id='RS-password' name='RS-password' placeholder='Password'
                    value={passwordLogin} onChange={(e) => setPassword(e.target.value)} required></input>
                </div>
                <input type='submit' className='RS-submit' value='Sign In' onClick={submit}/>
            </form>
        </div>
      );
    }
    
export default RightSide;
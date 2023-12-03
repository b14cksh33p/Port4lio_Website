import './personalInfo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './../navigation/navigation.js';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import firebase from '../../../firebaseConfig.js';
import 'firebase/database'

import Icon from '../../../assets/images/icon.png';
import Person1 from '../../../assets/images/person (1).png';
import Person2 from '../../../assets/images/person (2).png';
import Person3 from '../../../assets/images/person (3).png';
import Person4 from '../../../assets/images/person (4).png';



function PersonalInfo() {
  const navigate = useNavigate()
  const userName = localStorage.getItem('username');
  const uName = localStorage.getItem('uname');
  const username = firebase.database().ref('Users/'+userName);
  const udata = firebase.database().ref('UserData/'+uName);
  const [modalOpen, setModalOpen] = useState(false);
  const [studentNo, setStudentNo] = useState('')
  const [hte, setHte] = useState('')
  const [cAddress, setCAddress] = useState('')
  const [ojtHours, setOjtHours] = useState('')


    const toggleModal = () => {
      setModalOpen(!modalOpen);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      username.update({
          StudentNo: studentNo,
          HTE: hte,
          HTEAddress: cAddress,
          OJTHours: ojtHours,
        });
      udata.update({
          StudentNo: studentNo,
          HTE: hte,
          HTEAddress: cAddress,
          OJTHours: ojtHours,
        });
      localStorage.setItem('username','');
      localStorage.setItem('uname','');
      toggleModal();
      navigate('/signup/done')
    };
  
    const handleCancel = () => {
      toggleModal();
    };

    const dummyFunction = () =>{

    };
  
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
          <form className='sU-pI-container' onSubmit={(e)=>e.preventDefault()}>
            <div className='sU-back'>
                <p onClick={()=>navigate(-1)}>{'< Back'}</p>
            </div>
            <div className='pI-head'>
              <h3>Input Personal Information</h3>
            </div>
            <div className='pI-navigation'>
              <Navigation/>
            </div>
            <div className='pI-infos'>
            <div className='pI-info'>
                <p>Student Number:</p>
                  <input id='signup-student-number'
                  type='text'
                  placeholder='2021-00000-MN-0' 
                  value={studentNo}
                  onChange={(e) => setStudentNo(e.target.value)}
                  required></input>
              </div>
              <div className='pI-info'>
                <p>Company Name (HTE):</p>
                  <input id='signup-email'
                  type='text'
                  placeholder='Ex. LexMeet Inc.' 
                  value={hte}
                  onChange={(e) => setHte(e.target.value)}
                  required></input>
              </div>
              <div className='pI-info'>
                <p>Company Address:</p>
                  <input id='signup-student-number'
                  type='text'
                  placeholder='Address' 
                  value={cAddress}
                  onChange={(e) => setCAddress(e.target.value)}
                  required></input>
              </div>
              <div className='pI-info'>
                <p>OJT Hours:</p>
                  <input id='signup-password'
                  type='text'
                  placeholder='Ex. 300 hours'
                  value={ojtHours}
                  onChange={(e) => setOjtHours(e.target.value)} 
                  required></input>
              </div>
            </div>
            <div className='button-next'>
              <button onClick={(hte&&cAddress&&ojtHours) != '' ? toggleModal : dummyFunction} id='next' style={{marginTop:'40px'}}>Finish</button> {/* Temporary Sign Up Button for Email and Password creation to database*/}
            </div>
          </form>
          {modalOpen && (
                <div className='modal'>
                  <div className='modal-content'>
                    <p>Are you sure you want to submit this information?</p>
                    <div className='modal-buttons'>
                      <button onClick={handleSubmit} className='pI-modal-submit'>Submit</button>
                      <button onClick={handleCancel} className='pI-modal-cancel'>Cancel</button>
                    </div>
                  </div>
                </div>
              )}
        </div>
    </div>
    );
  }
  
  export default PersonalInfo;
  
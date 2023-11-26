import './personalInfo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './../navigation/navigation.js';
import { useNavigate } from 'react-router-dom';

import Icon from '../../../assets/images/icon.png';
import Person1 from '../../../assets/images/person (1).png';
import Person2 from '../../../assets/images/person (2).png';
import Person3 from '../../../assets/images/person (3).png';
import Person4 from '../../../assets/images/person (4).png';



function PersonalInfo() {
  const navigate = useNavigate()
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
            <div className='sU-back'>
                <p onClick={()=>navigate(-1)}>{'< Back'}</p>
            </div>
            <div className='pI-head'>
              <h3>Create an Account</h3>
            </div>
            <div className='pI-navigation'>
              <Navigation/>
            </div>
            <div className='pI-infos'>
              <div className='pI-info'>
                <p>Course, Year & Section:</p>
                  <input id='signup-name'
                  placeholder='BSCPE 3-4'></input>
              </div>
              <div className='pI-info'>
                <p>Company Name (HTE):</p>
                  <input id='signup-email'
                  placeholder='Ex. LexMeet Inc.'></input>
              </div>
              <div className='pI-info'>
                <p>Company Address:</p>
                  <input id='signup-student-number'
                  placeholder='Address'></input>
              </div>
              <div className='pI-info'>
                <p>OJT Hours:</p>
                  <input id='signup-password'
                  placeholder='Ex. 300 hours' 
                  ></input>
              </div>
              <div className='pI-info'>
                <p>OJT Adviser:</p>
                  <input id='signup-c-password'
                  placeholder='Last Name, First Name and Middle Name'></input>
              </div>
            </div>
            <div className='button-next'>
              <button id='next' onClick={()=>navigate('/signup/done')} style={{marginTop:'40px'}}>Finish</button> {/* Temporary Sign Up Button for Email and Password creation to database*/}
            </div>
          </div>
        </div>
    </div>
    );
  }
  
  export default PersonalInfo;
  
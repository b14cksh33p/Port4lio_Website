import './personalInfo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './../navigation/navigation.js';
import Banner from '../../../assets/images/background-banner.png';
import Header from '../../signup/header/header.js';
import { useNavigate } from 'react-router-dom';
import Back from '../../../assets/images/back.png'

function PersonalInfo() {
  const navigate = useNavigate();

    return (
      <div className='sU-wrapper'>
        <Header></Header>
        <img src={Banner} id='banner'></img>
        <img src={Back} id='back' onClick={()=>navigate('/signup/primary-information')}></img>
      <div className='container main'>
        <div className='sU-peI-container'>
          <div className='peI-head'>
            <h1>Personal Information</h1>
          </div>
          <div className='peI-navigation'>
            <Navigation/>
          </div>
          <div className='peI-infos'>
            <div className='peI-info'>
              <p>Name:</p>
                <input id='signup-name' placeholder='SURNAME, First Name Middle Name'></input>
            </div>
            <div className='peI-info'>
              <p>Program-Section:</p>
                <input id='signup-email' placeholder='BSCoE - 3-4'></input>
            </div>
            <div className='peI-info'>
              <p>Company Name:</p>
                <input id='signup-password'  placeholder='Ex. LexMeet Inc.'></input>
            </div>
            <div className='peI-info'>
              <p>Company Address:</p>
                <input id='signup-c-password'placeholder=' Ex. Bagumbagayan St. Brgy. Sta, Maria, Lucena City'></input>
            </div>
            <div className='peI-info'>
              <p>Work Set-Up:</p>
                <input id='signup-c-password' placeholder='Face-to-Face'></input>
            </div>
            <div className='peI-info'>
              <p>Name of Adviser:</p>
                <input id='signup-c-password' placeholder='SURNAME, First Name Middle Initial'></input>
            </div>
          </div>
          <div className='button-next'>
            <button id='next' onClick={()=> navigate('/signup/pre-internship-requirements')}>Next</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
  
  export default PersonalInfo;
  
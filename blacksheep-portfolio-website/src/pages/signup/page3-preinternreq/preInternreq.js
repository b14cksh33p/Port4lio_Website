import './preInternreq.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './../navigation/navigation.js';
import Banner from '../../../assets/images/background-banner.png';
import Header from '../../signup/header/header.js';
import { useNavigate } from 'react-router-dom';
import Back from '../../../assets/images/back.png'

function PreInternReq() {
  const navigate = useNavigate();

    return (
      <div className='sU-wrapper'>
        <Header></Header>
        <img src={Banner} id='banner'></img>
        <img src={Back} id='back' onClick={()=>navigate('/signup/personal-information')}></img>
      <div className='container main'>
        <div className='sU-pIR-container'>
          <div className='pIR-head'>
            <h1>Pre-Internship Requirements</h1>
          </div>
          <div className='pIR-navigation'>
            <Navigation/>
          </div>
          <div className='pIR-infos'>
            <div className='pIR-info'>
              <button>Upload Memorandum of Agreement</button>
            </div>
            <div className='pIR-info'>
              <button>Upload Letter of Endorsement</button>
            </div>
            <div className='pIR-info'>
              <button>Upload Letter of Intent</button>
            </div>
            <div className='pIR-info'>
              <button>Upload Consent Forms</button>
            </div>
            <div className='pIR-info'>
              <button>Upload Waiver</button>
            </div>
            <div className='pIR-info'>
              <button>Upload Medical Health Certificate</button>
            </div>
          </div>
          <div className='button-next'>
            <button id='next' onClick={()=>navigate('/signup/post-internship-requirements')}>Next</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
  
  export default PreInternReq;
  
import './postInternreq.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './../navigation/navigation.js';
import Banner from '../../../assets/images/background-banner.png';
import Header from '../../signup/header/header.js';

function PreInternReq() {
    return (
      <div className='sU-wrapper'>
        <Header></Header>
        <img src={Banner}></img>
      <div className='container main'>
        <div className='sU-poIR-container'>
          <div className='poIR-head'>
            <h1>Post-Internship Requirements</h1>
          </div>
          <div className='poIR-navigation'>
            <Navigation/>
          </div>
          <div className='poIR-infos'>
            <div className='poIR-info'>
              <button>Upload Daily Time Record</button>
            </div>
            <div className='poIR-info'>
              <button>Upload HTE Evaluation</button>
            </div>
            <div className='poIR-info'>
              <button>Upload Performance Evaluation</button>
            </div>
            <div className='poIR-info'>
              <button>Upload Adviser Evaluation</button>
            </div>
            <div className='poIR-info'>
              <button>Upload Certificate of Completion</button>
            </div>
            <div className='poIR-info'>
              <button>Upload 2x2 Picture</button>
            </div>
          </div>
          <div className='button-next'>
            <button id='next'>Next</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
  
  export default PreInternReq;
  
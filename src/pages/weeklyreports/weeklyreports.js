import './weeklyreports.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header/header.js';
import Footer from '../../pages/footer/footer.js';
import { useNavigate } from 'react-router-dom';


function WeeklyReports() {

    return (
      <div className='wrapper-wR'>
      <Header/>
      <div className='wR-first-section'>
        <div className='wR-text'>
          <h1>Welcome to the <span style={{color:'#c24914'}}>WEEKLY REPORTS</span></h1>
          <p>This part shows sections of the google drive folders which includes
            the pdf files of each student containing their Weekly Progress
            Reports from Week 1 to Week 6.
          </p>
        </div>
          <div className=' wR-background'>
              <div className='rectangle first'>
              </div>
              <div className='rectangle second'>
              </div>
              <div className='rectangle third'>
              </div>
          </div>
      </div>
      <div className='wR-second-section'>
        <div className='border'>

        </div>

        
      </div>
      <Footer/>
    </div>
    );
  }
  
  export default WeeklyReports;
  
import './studentprofile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from '../../../assets/images/icon.png';
import Footer from '../../footer/footer.js';
import Student from '../../../assets/images/student.png';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate()
    window.scrollTo({
        top: 0,
        behavior: 'instant',
      });
    return(
        <div className='sPr-header'>
            <div className='sPr-back'>
                <p onClick={()=>navigate(-1)}>{'< Back'}</p>
            </div>
            <div className='sPr-title'>
            <img src={Icon} alt='Icon'/>
                <h1>PORT4LIO</h1>
            </div>
        </div>
    );
}

function Profile({pic, name, sNumber, company, ojtHours}){

    return(
    <div className='sPr-content'>
    <div className='sPr-content-image'>
        {pic}
    </div>
    <div className='sPr-content-text'>
        <h3>{name}</h3>
        <p>Student No.: ({sNumber})</p>
        <p>CYS: BSCpE 3-4</p>
        <p>HTE: ({company})</p>
        <p>OJT Hours: ({ojtHours})</p>
    </div>
    </div>
);
}

function StudentProfile() {

    return (
      <div className='wrapper-sPr'>
      <Header/>
      <div className='sPr-first-section'>
        <div>
         <Profile pic={<img src={Student} id='profile-pic'/>}
          name={'LN, FN MI'}
          sNumber={'2021-00000-MN-0'}
          company={'Company Name'}
          ojtHours={'300 Hours'}
          />
        </div>
          <div className=' sPr-background'>
              <div className='rectangle first'>
              </div>
              <div className='rectangle second'>
              </div>
              <div className='rectangle third'>
              </div>
          </div>
      </div>
      <div className='sPr-second-section'>
        <div className='sPr-documents'>

        </div>
      </div>
      <Footer/>
    </div>
    );
  }
  
  export default StudentProfile;
  
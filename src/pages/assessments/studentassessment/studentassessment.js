import './studentassessment.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from '../../../assets/images/icon.png';
import Footer from '../../footer/footer.js';
import Student from '../../../assets/images/student(2).png';
import { useNavigate } from 'react-router-dom';
import FileContainer from '../../studentportfolio/file-container/file-container.js';

function Header() {
    const navigate = useNavigate()
    window.scrollTo({
        top: 0,
        behavior: 'instant',
      });
    return(
        <div className='sAs-header'>
            <div className='sAs-back'>
                <p onClick={()=>navigate(-1)}>{'< Back'}</p>
            </div>
            <div className='sAs-title'>
            <img src={Icon} alt='Icon'/>
                <h1>PORT4LIO</h1>
            </div>
        </div>
    );
}

function Profile({pic, name, sNumber, company, ojtHours}){

    return(
    <div className='sAs-content'>
    <div className='sAs-content-image'>
        {pic}
    </div>
    <div className='sAs-content-text'>
        <h3>{name}</h3>
        <p>Student No.: ({sNumber})</p>
        <p>CYS: BSCpE 3-4</p>
        <p>HTE: ({company})</p>
        <p>OJT Hours: ({ojtHours})</p>
    </div>
    </div>
);
}

function StudentAssessment() {

    return (
      <div className='wrapper-sAs'>
      <Header/>
      <div className='sAs-first-section'>
        <div>
         <Profile pic={<img src={Student} id='profile-pic'/>}
          name={'LN, FN MI'}
          sNumber={'2021-00000-MN-0'}
          company={'Company Name'}
          ojtHours={'300 Hours'}
          />
        </div>
          <div className=' sAs-background'>
              <div className='rectangle first'>
              </div>
              <div className='rectangle second'>
              </div>
              <div className='rectangle third'>
              </div>
          </div>
      </div>
      <div className='sAs-second-section'>
        <div className='sAs-documents'>
            <FileContainer text-highlighted='Assessment PDF'/>
        </div>
      </div>
      <Footer/>
    </div>
    );
  }
  
  export default StudentAssessment;
  
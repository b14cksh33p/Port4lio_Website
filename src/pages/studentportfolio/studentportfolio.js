import './studentportfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../../assets/images/banner.png'


function StudentProfile() {

    return (
      <div className='sP-wrapper'>
        <div className='sP-banner'>
            <img src={Banner} style={{width:1400}}/>
        </div>
        <div className='sP-heading'>
            <h1>PORT4LIO</h1>
        </div>
    </div>
    );
  }
  
  export default StudentProfile;
  
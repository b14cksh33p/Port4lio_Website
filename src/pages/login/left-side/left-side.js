import './left-side.css';
import Icon from '../../../assets/images/icon.png';
import Person1 from '../../../assets/images/login-person1.png';
import Person2 from '../../../assets/images/login-person2.png';
import Star from '../../../assets/images/star.png';
import Arrow from '../../../assets/images/arrow.png';


function LeftSide() {
  
      return (
        <div className='LS-container'>
          <div className='LS-left-container'>
            <div className='LS-signin-banner'>
              <span>Sign In to</span>
              <div className='LS-logo'>
                <img src={Icon} alt='Icon' width='50px' height='50px'/>
                <h1>PORT4LIO</h1>
              </div>

              <div className='LS-signup-acc'>
                <div className='LS-p'>Don't have an account? <a href='/signup/primary-information'>Sign up here!</a></div>
              </div>
            </div>
          </div>

          <div className='LS-right-container'>
            <div className='LS-icons'>
              <img src={Person2} alt='Person 2' className='icon person2' width='200px' height='200px'/>
              <img src={Person1} alt='Person 1' className='icon person1' width='200px' height='200px'/>
              <img src={Arrow} alt='Arrow' className='icon arrow' width='120px' height='120px'/>
              <img src={Star} alt='Star' className='icon star' width='150px' height='150px'/>
              </div>
          </div>
        </div>
      );
    }
    
export default LeftSide;
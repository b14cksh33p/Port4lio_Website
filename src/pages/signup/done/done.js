import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './../navigation/navigation.js';
import { useNavigate } from 'react-router-dom';

import Icon from '../../../assets/images/icon.png';
import Person1 from '../../../assets/images/person (1).png';
import Person2 from '../../../assets/images/person (2).png';
import Person3 from '../../../assets/images/person (3).png';
import Person4 from '../../../assets/images/person (4).png';


function Done() {
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
            <div className='pI-head'>
              <h3>Create an Account</h3>
            </div>
            <div className='pI-navigation'>
              <Navigation/>
            </div>
            <div className='account-created'>
            <h3>Account Created Successfully!</h3>
            </div>
            <div className='button-next'>
              <button id='next' onClick={()=>navigate('/login')} style={{marginTop:'40px'}}>Proceed to Login</button>
            </div>
          </div>
        </div>
    </div>
    );
  }
  
  export default Done;
  
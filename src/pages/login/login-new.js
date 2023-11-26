import './login-new.css';
import Navigation from '../login/navigation/login-navigation';
import LeftSide from '../login/left-side/left-side'
import RightSide from '../login/right-side/right-side'

function Login() {
  
      return (
        <div className='LN-page'>
            <div className='LN-big-container'>
                <Navigation/>
                <div className='LN-split-container'>
                    <LeftSide/>
                    <RightSide/>
                </div>
            </div>
        </div>
      );
    }
    
    export default Login;
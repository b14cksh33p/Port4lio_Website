import './login-navigation.css';
import { Link } from 'react-router-dom';
function LoginNavigation() {
    
    
      return (
        <div className='LN-navigation-holder'>
            <nav className='LN-navbar'>
                <ul className='LN-ul'>
                    <li className='LN-ul-li'><Link to={'/'} style={{ textDecoration: 'none' }}>{'< Back'}</Link></li>
                    <div className='LN-button-login'>
                        <a href=''>Log In</a>
                    </div>
                    <div className='LN-button-signup' >
                        <Link to={'/signup/primary-information'} style={{ textDecoration: 'none' }}>Sign Up</Link>
                    </div>
                </ul>
            </nav>
        </div>
      );
    }

export default LoginNavigation;
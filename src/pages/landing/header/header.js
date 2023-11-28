import './header.css'
import Icon from '../../../assets/images/icon.png';
import { useNavigate } from 'react-router-dom';
import firebase from '../../../firebaseConfig.js';

function Header(){
    const handleScrollToAbout = () => {
        window.scrollTo({
          top: 1600,
          behavior: 'smooth',
        })}
    
    const userName = localStorage.getItem('username');
    const navigate = useNavigate();
    const home = '/home/'+userName;

    const handleLogout = () => {
        firebase.auth().signOut()
          .then(() => {
            alert('User signed out successfully.');
            localStorage.setItem('username', '');
            navigate('/login')
          })
          .catch((error) => {
            alert('Error signing out:', error);
          });
      };

    return(
        <div className="landing-header">
            <div className='landing-title'>
                <img src={Icon} alt='Icon'/>
                <h1>PORT4LIO</h1>
            </div>
            <div className='landing-navigation'>
                <a href={home} style={{textDecoration:'none'}}>Home</a>
                <a onClick={handleScrollToAbout}>About</a>
                <div>
                    {userName == '' ?
                    <div className='signed-out'>
                        <button id='login' onClick={()=> navigate('/login')}>Log In</button>
                        <button id='signUp'onClick={()=> navigate('/signup/primary-information')}>Sign Up</button>
                    </div>
                    :
                    <div>
                    <button id='login' onClick={handleLogout}>Log Out</button>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;
import './header.css'
import Icon from '../../../assets/images/icon.png';
import { useNavigate } from 'react-router-dom';

function Header(){
    const handleScrollToTop = () => {
        window.scrollTo({
          top: 1300,
          behavior: 'smooth',
        })}

    const navigate = useNavigate();

    return(
        <div className="landing-header">
            <div className='title'>
                <img src={Icon} alt='Icon'/>
                <h1>PORT4LIO</h1>
            </div>
            <div className='landing-navigation'>
                <a>Home</a>
                <a onClick={handleScrollToTop}>About</a>
                <button id='login' onClick={()=> navigate('/login')}>Log In</button>
                <button id='signUp'onClick={()=> navigate('/signup/primary-information')}>Sign Up</button>
            </div>
        </div>
    )
}

export default Header;
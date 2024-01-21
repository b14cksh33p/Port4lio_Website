import './footer.css'
import Icon from '../../assets/images/icon.svg';
import CpeLogo from '../../assets/images/CPE-logo.png'
import CELogo from '../../assets/images/CE-logo.png'
import { Helmet } from 'react-helmet';
function Footer(){
    return(
        <div className="footer">
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <div className='company-logo'>
                <div className='logo'>
                    <img src={Icon} alt='Icon'/>
                </div>
                <div className='title'>PORT4LIO</div>
            </div>
            <div className='text-content'>
                <div className='links'>
                    <h4>Useful Links</h4>
                        <p>• Our Projects</p>
                        <p>• FAQ's</p>
                        <p>• News and Updates</p>
                    </div>
                <div className='contacts'>
                    <h4>Contacts</h4>
                        <p>Address: Anonas cor. Pureza Sts. Sta. Mesa, Manila, Philippines 01008 </p>
                        <p>Email: BSCpE24@gmail.com</p>
                        <p>Phone Number: +093 3461 1668</p>
                </div>
            </div>
            <div className='footer-logos'>
                <img src={CpeLogo} alt='CPE Logo'/>
                <img src={CELogo} alt='CE Logo'/>
            </div>
        </div>
    )
}

export default Footer;
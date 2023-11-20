import './footer.css'
import Icon from '../../assets/images/icon.png';
import CpeLogo from '../../assets/images/CPE-logo.png'
import CELogo from '../../assets/images/CE-logo.png'

function Footer(){
    return(
        <div className="footer">
            <div className='title'>
                <img src={Icon} alt='Icon'/>
                <h1>PORT4LIO</h1>
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
                <p>Address: aaaaaaaaaaaaaa</p>
                <p>Email: aaaaa@gmail.com</p>
                <p>Phone Number: +000 0000 0000</p>
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
import './landing.css'
import Header from '../landing/header/header.js';
import Footer from '../../pages/footer/footer.js';
import Image1 from '../../assets/images/landing_main1.svg'
import Image2 from '../../assets/images/landing_main2.svg'
import Image3 from '../../assets/images/landing_main3.svg'
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Landing() {
  const userName = localStorage.getItem('username');
  console.log('userName:', userName);
  const home = '/home/'+userName;
  const navigate = useNavigate();

    return (
      <div>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <div className='wrapper-landing'> 
        <Header/>
          <div className='body'>
            <div className='landing-main'>
              <div className='main-content s1'>
                <div className='content-text right' id='content1-title'>
                  <h4>BS in Computer Engineering 3-4</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laboriosam  voluptates sed beatae?</p>
                </div>
                <div className='content-image'>
                  <img src={Image2} alt='banner'/>
                </div>
              </div>
              <div className='main-content s2'>
                <div className='content-image'>
                  <img src={Image1} alt='banner'/>
                </div>
                <div className='content-text'>
                <h4>Welcome to our OJT <span style={{color:'#682c0e'}}>PORT4LIO!</span></h4>
                  <p>• Get to know our OJT experience</p>
                  <p>• Get to know our HTEs</p>
                  <div className='button-container'>
                    <button onClick={()=>{userName === '' || userName === 'guest' || userName === null? navigate('/login') : navigate(home)}}>Login</button>
                  </div>
                </div>
              </div>
              <div className='main-content s3'>
                <div className='content-text right'>
                <h4>Start using <span style={{color:'#682c0e'}}>PORT4LIO</span> by creating your free account.</h4>
                  <button onClick={()=>{userName === '' || userName === 'guest' || userName === null? navigate('/signup/primary-information') : navigate(home)}}>Sign Up</button>
                </div>
                <div className='content-image'>
                  <img src={Image3} alt='banner'/>
                </div>
              </div>
            </div>
            <div className='landing-about' id='target-section'>
                <h3 style={{paddingBottom:'40px'}}>ABOUT:</h3>
                <h4 style={{paddingBottom:'32px'}}>On-The-Job-Training(OJT)</h4>
                <p style={{paddingBottom:'24px'}}>is a practical approach to acquiring new competencies and skills needed for a job in a real, or close to a real, working environment.</p>
                <p style={{paddingBottom:'40px'}}>It is often used to learn how to use particular tools or equipment in a live-work practice, simulated, or training environment.</p>
                <h4>On-The-Job-Training Adviser</h4>
                <div className='about-adviser'>
                    <div className='adviser-image'>

                    </div>
                    <div className='adviser-description'>
                      <p style={{paddingBottom:'40px'}}><b>Ma'am Angela Israel</b></p>
                      <p>Adviser, BSCpE 3-4</p>
                      <p>CMPE 30213 On-The-Job-Training</p>
                      <p>(OJT 1)</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      <Footer/>
      </div>
    );
  }
  
  export default Landing;
  
import './companyprofiles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header/header.js';
import Footer from '../../pages/footer/footer.js';
import FileContainer from '../studentportfolio/file-container/file-container.js';
import { useNavigate } from 'react-router-dom';
import {  useState, useEffect } from 'react';

function Company({image, name, description, vision, mission}){
    
    return(
        <div className='company'>
            <div className='company-image'>
                <img>{image}</img>
            </div>
            <div className='company-description'>
                <h3><b>{name}</b></h3>
                <p>{description}</p>
                
                <h4>Our Vision</h4>
                <p>{vision}</p>

                <h4>Our Mission</h4>
                <p>{mission}</p>
            </div>
        </div>
    );
}

function CompanyProfiles() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

    return (
      <div className='wrapper-cP'>
      <Header/>
      <div className='cP-first-section'>
        <div className='cP-text'>
          <h1>Welcome to the <span style={{color:'#c24914'}}>COMPANY PROFILES</span></h1>
          <p>This part includes everything related to the Companies that each
            student applied to. This also includes Companies and Webinar
            platforms.
          </p>
        </div>
          <div className=' cP-background'>
              <div className='rectangle first'>
              </div>
              <div className='rectangle second'>
              </div>
              <div className='rectangle third'>
              </div>
          </div>
      </div>
      <div className='cP-second-section'>
        <div className='cP-add-company'>
          <p>Your company ain't listed yet?</p>
          <button onClick={openModal}>Add Your Company Description</button>
        </div>
        
        {!isModalOpen ? '' :
        <div className='eP-wrapper'>
          <div className='cP-container'>
          
          <div className='eP-header'>
            Company Profile
          </div>

          <div className='cP-content'>
            <div className='cP-left-content'>
              <div className='cP-textarea'>
                <div className='cP-input'>
                  {"Vision"}
                  <textarea placeholder='Write Company Vision here...'></textarea>
                </div>
                <div className='cP-input'>
                  {"Mission"}
                  <textarea placeholder='Write Company Mission here...'></textarea>
              </div>
              </div>
              <div className='cP-input'>
                <input type='text' placeholder='Company Website link (if there is)'></input>
              </div>
            </div>
            
            <div className='cP-right-content'>
              <div className='cP-company-profile'>
                <p>Company Display Picture</p>
                <FileContainer highlightedText='Company Display Picture'></FileContainer>
              </div>
              <div className='cP-button'>
                <button className='cP-Cancel' onClick={closeModal}>Close</button>
                <button onClick={openModal}>Update</button>
              </div>
            </div>
            
          </div>

        </div>
      </div>
        }

        <Company name={'Company 1'} 
                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'}
                vision={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                mission={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
        <Company name={'Company 2'} 
                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'}
                vision={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                mission={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
        <Company name={'Company 3'} 
                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'}
                vision={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                mission={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
        <Company name={'Company 4'} 
                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'}
                vision={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                mission={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
        <Company name={'Company 5'} 
                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'}
                vision={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                mission={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
        
      </div>
      <Footer/>
    </div>
    );
  }
  
  export default CompanyProfiles;
  
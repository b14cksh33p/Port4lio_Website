import './landing.css'
import Header from '../landing/header/header.js';
import Footer from '../../pages/footer/footer.js';
import Image1 from '../../assets/images/landing_main1.svg'
import Image2 from '../../assets/images/landing_main2.svg'
import Image3 from '../../assets/images/landing_main3.svg'
import Adviser from '../../assets/images/adviser.jpg'
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Person1 from '../../assets/images/Abuloc III.png'
import Person2 from '../../assets/images/Calangian.png'
import Person3 from '../../assets/images/Dalangin.png'
import Person4 from '../../assets/images/DE GUZMAN.png'
import Person5 from '../../assets/images/Dela Cruz.jpg'
import Person6 from '../../assets/images/Fabro.jpg'
import Person7 from '../../assets/images/Galicia.jpg'
import Person8 from '../../assets/images/Gordora.jpg'
import Person9 from '../../assets/images/Lambino.jpg'
import Person10 from '../../assets/images/Llena.jpg'

import Person11 from '../../assets/images/Madelo.jpg'
import Person12 from '../../assets/images/Mallari.jpg'
import Person13 from '../../assets/images/Margallo.jpg'
import Person14 from '../../assets/images/Narceda.jpg'
import Person15 from '../../assets/images/Orozco.jpg'
import Person16 from '../../assets/images/Palmes.jpg'
import Person17 from '../../assets/images/Panuga.jpg'
import Person18 from '../../assets/images/Quiñones.jpg'
import Person19 from '../../assets/images/Raymundo.jpg'
import Person20 from '../../assets/images/Santos.jpg'
import Person21 from '../../assets/images/Trinidad.jpg'

function Landing() {
  const userName = localStorage.getItem('username');
  const home = '/home/'+userName;
  const navigate = useNavigate();

  const NextArrow = (props) => (
    <div {...props}>
        <div className="next-slick-arrow" style={{ position: 'absolute', top: '-8px' }}>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            stroke="black" 
            height="28" 
            viewBox="0 -960 960 960" 
            width="28"
            className="slick-arrow-svg"
            style={{ backgroundColor: '#c24914', borderRadius: '50%', opacity: 0.8, transition: 'opacity 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
            onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}
            >
              <path 
              d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"
              fill='#fff'/></svg>
        </div>
      </div>
  );
  const PrevArrow = (props) => (
    <div {...props}>
      <div className="next-slick-arrow rotate-180" style={{ position: 'absolute', top: '-8px', right: '10px' }}>
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            stroke="black" 
            height="28" 
            viewBox="0 -960 960 960" 
            width="28"
            className="slick-arrow-svg"
            style={{ backgroundColor: '#c24914', borderRadius: '50%', opacity: 0.8, transition: 'opacity 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
            onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}
            >
              <path 
              d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"
              fill='#fff'/></svg>
      </div>
  </div>
  )

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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
                  <h4>BS in Computer Engineering 2-4</h4>
                  <p>Computer engineering combines electrical engineering and computer science to design, develop, and maintain hardware and software systems.
                  It encompasses everything from microprocessors to computer networks and software applications.
                  
                  </p>
                </div>
                <div className='content-image p1'>
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
                    <button onClick={()=>{userName === '' || userName === 'guest' || userName === null? navigate('/login') : navigate('')}}>Login</button>
                  </div>
                </div>
              </div>
              <div className='main-content s3'>
                <div className='content-text right'>
                <h4>Start using <span style={{color:'#682c0e'}}>PORT4LIO</span> by creating your free account.</h4>
                  <button onClick={()=>{userName === '' || userName === 'guest' || userName === null? navigate('/signup/primary-information') : navigate('')}}>Sign Up</button>
                </div>
                <div className='content-image'>
                  <img src={Image3} alt='banner'/>
                </div>
              </div>
            </div>
            <div className='landing-about' id='target-section'>
                <h3 style={{paddingBottom:'40px'}}>ABOUT:</h3>
                <h4 style={{paddingBottom:'32px'}}>On-The-Job-Training(OJT)</h4>
                <p style={{width: "720px", paddingBottom:'24px'}}>is a practical approach to acquiring new competencies and skills needed for a job in a real, or close to a real, working environment.</p>
                <p style={{width: "720px",paddingBottom:'40px'}}>It is often used to learn how to use particular tools or equipment in a live-work practice, simulated, or training environment.</p>
                <h4>On-The-Job-Training Adviser</h4>
                <div className='about-adviser'>
                    <div className='adviser-image'>
                    <img src={Adviser} alt='adviser'/>
                    </div>
                    <div className='adviser-description'>
                      <p><b>Ma'am Angela Israel</b></p>
                      <p>Adviser, BSCpE 2-4</p>
                      <p>CMPE 30213 On-The-Job-Training</p>
                      <p>(OJT 1)</p>
                    </div>
                </div>
                <div className='LP-carousel'>
                  <h4 style={{paddingBottom:'32px'}}>Photos and Documentation</h4>
                  
                  <Slider {...settings}>
                  <div className='LP-box'>
                    <img src={Person1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
                  </div>
                  <div className='LP-box'>
                    <img src={Person2} style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
                  </div>
                  <div className='LP-box'>
                    <img src={Person3} style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
                  </div>
                  <div className='LP-box'>
                    <img src={Person4} style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
                  </div>
                  <div className='LP-box'>
                    <img src={Person5} style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
                  </div>
                  <div className='LP-box'>
                    <img src={Person6} style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
                  </div>
                  <div className='LP-box'>
                    <img src={Person7} style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
                  </div>
                  <div className='LP-box'>
                    <img src={Person8} style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
                  </div>
                  <div className='LP-box'>
                    <img src={Person9} style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
                  </div>
                  <div className='LP-box'>
                    <img src={Person10} style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
                  </div>
                  <div className='LP-box'>
                    <img src={Person11} style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
                  </div>
                  <div className='LP-box'>
                    <img src={Person12} style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
                  </div>
                  <div className='LP-box'>
                    <img src={Person13} style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
                  </div>
                  <div className='LP-box'>
                    <img src={Person14} style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
                  </div>
                  <div className='LP-box'>
                    <img src={Person15} style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
                  </div>
                  <div className='LP-box'>
                    <img src={Person16} style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
                  </div>
                  <div className='LP-box'>
                    <img src={Person17} style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
                  </div>
                  <div className='LP-box'>
                    <img src={Person18} style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
                  </div>
                  <div className='LP-box'>
                    <img src={Person19} style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
                  </div>
                  <div className='LP-box'>
                    <img src={Person20} style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
                  </div>
                  <div className='LP-box'>
                    <img src={Person21} style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
                  </div>
                  </Slider>
                </div>
            </div>
          </div>
        </div>
      <Footer/>
      </div>
    );
  }
  
  export default Landing;
  
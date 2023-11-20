import './landing.css'
import Slider from 'react-slick'
import { useState } from "react";
import Nav_Bar from '../../assets/images/Nav_Bar.svg'
import Logo_Section from '../../assets/images/logo-section.svg'
import Lady_Section from '../../assets/images/lady_section.svg'
import hardware from '../../assets/images/hardware.svg'
import ai from '../../assets/images/AI.svg'
import system_dev from '../../assets/images/system_dev.svg'
import Header from '../landing/header/header.js';
import Footer from '../../pages/footer/footer.js';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


const images = [ai, hardware, system_dev];
function Landing() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
             </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
    return (
      <div className='wrapper-landing'> 
      <Header/>
        <div className='body'>
          <div id='hero-section'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies tristique nulla aliquet enim tortor at auctor urna. Ut tellus elementum sagittis vitae et leo duis. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Magna etiam tempor orci eu lobortis elementum nibh. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Etiam erat velit scelerisque in dictum non. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Id aliquet lectus proin nibh nisl condimentum id venenatis. Neque egestas congue quisque egestas diam in. Id ornare arcu odio ut. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Pellentesque habitant morbi tristique senectus et netus et malesuada. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Turpis nunc eget lorem dolor. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Interdum velit laoreet id donec ultrices tincidunt arcu. Curabitur vitae nunc sed velit dignissim sodales. Sociis natoque penatibus et magnis dis. Quam lacus suspendisse faucibus interdum. In ornare quam viverra orci sagittis eu volutpat. Nam aliquam sem et tortor consequat id. Est placerat in egestas erat.
          </div>
          <img id='logo-section' src={Logo_Section} alt='Logos'/>
        </div>
        <div className='carousel'>
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                <img src={img} alt={img} />
              </div>
            ))}
        </Slider>
        </div>
        <img id='lady-section' src={Lady_Section} alt='Lady'/>
        <div className='footer'>
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default Landing;
  
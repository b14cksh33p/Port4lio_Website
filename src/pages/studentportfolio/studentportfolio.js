import './studentportfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header/header.js';
import Footer from '../../pages/footer/footer.js';
import { useNavigate } from 'react-router-dom';

function GridContent({content}){

  return(
    <div className='grid-item'>
        {content}
    </div>

  );
}
function StudentProfile() {

    return (
      <div className='wrapper-sP'>
      <Header/>
      <div className='sP-first-section'>
        <div className='sP-text'>
          <h1>Welcome to the <span style={{color:'#c24914'}}>STUDENT PORT4LIO</span></h1>
          <p>This part contains links to individual students where you may
              access to view their OJT Documents and Supporting Photos. You
              may click their respective image or button to be redirected to the
              page containing the documents and photos.
          </p>
        </div>
          <div className=' sP-background'>
              <div className='rectangle first'>
              </div>
              <div className='rectangle second'>
              </div>
              <div className='rectangle third'>
              </div>
          </div>
      </div>
      <div className='sP-second-section'>
      <div className="grid-container">
      <GridContent/>
      <GridContent/>
      <GridContent/>
      <GridContent/>
      <GridContent/>
      <GridContent/>
      <GridContent/>
      <GridContent/>
      <GridContent/>
      <GridContent/>
      <GridContent/>
      <GridContent/>
      <GridContent/>
      <GridContent/>
      <GridContent/>
      <GridContent/>
      <GridContent/>
      <GridContent/>
    </div>
        
      </div>
      <Footer/>
    </div>
    );
  }
  
  export default StudentProfile;
  
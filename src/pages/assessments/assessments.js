import './assessments.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header/header.js';
import Footer from '../../pages/footer/footer.js';
import { useNavigate } from 'react-router-dom';

function RowContent({sName, sNumber}){

    return(
        <>
        <tr>
        <td>{sName}</td>
        <td style={{paddingLeft:'28px'}}>{sNumber}</td>
        <td style={{width:'256px'}}><button id='view-details'>View Details</button></td>
        </tr>
        </>

    );
}

function Assessments() {

    return (
      <div className='wrapper-aS'>
      <Header/>
      <div className='aS-first-section'>
        <div className='aS-text'>
          <h1>Welcome to the <span style={{color:'#c24914'}}>ASSESSMENTS</span></h1>
          <p>In this part, each student answered questions that asks about
            their experiences and insight about the OJT Program. Answers
            from the assessment may vary depending on the individual's
            experiences.
            </p>
        </div>
          <div className=' aS-background'>
              <div className='rectangle first'>
              </div>
              <div className='rectangle second'>
              </div>
              <div className='rectangle third'>
              </div>
          </div>
      </div>
      <div className='aS-second-section'>
        <div className='border'>
        </div>
        <div className='aS-table-container'>
        <table className="aS-table">
      <thead>
        <tr>
          <th>STUDENT NAME</th>
          <th>STUDENT NUMBER</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
            <RowContent sName={'LN, FN, MI'} sNumber={'2021-00000-MN-0'}/>
            <RowContent sName={'LN, FN, MI'} sNumber={'2021-00000-MN-0'}/>
            <RowContent sName={'LN, FN, MI'} sNumber={'2021-00000-MN-0'}/>
            <RowContent sName={'LN, FN, MI'} sNumber={'2021-00000-MN-0'}/>
            <RowContent sName={'LN, FN, MI'} sNumber={'2021-00000-MN-0'}/>
            <RowContent sName={'LN, FN, MI'} sNumber={'2021-00000-MN-0'}/>
            <RowContent sName={'LN, FN, MI'} sNumber={'2021-00000-MN-0'}/>
            <RowContent sName={'LN, FN, MI'} sNumber={'2021-00000-MN-0'}/>
            <RowContent sName={'LN, FN, MI'} sNumber={'2021-00000-MN-0'}/>
            <RowContent sName={'LN, FN, MI'} sNumber={'2021-00000-MN-0'}/>
            <RowContent sName={'LN, FN, MI'} sNumber={'2021-00000-MN-0'}/>
            <RowContent sName={'LN, FN, MI'} sNumber={'2021-00000-MN-0'}/>
            <RowContent sName={'LN, FN, MI'} sNumber={'2021-00000-MN-0'}/>
            <RowContent sName={'LN, FN, MI'} sNumber={'2021-00000-MN-0'}/>
            <RowContent sName={'LN, FN, MI'} sNumber={'2021-00000-MN-0'}/>
            <RowContent sName={'LN, FN, MI'} sNumber={'2021-00000-MN-0'}/>
            <RowContent sName={'LN, FN, MI'} sNumber={'2021-00000-MN-0'}/>
            <RowContent sName={'LN, FN, MI'} sNumber={'2021-00000-MN-0'}/>
            <RowContent sName={'LN, FN, MI'} sNumber={'2021-00000-MN-0'}/>
            <RowContent sName={'LN, FN, MI'} sNumber={'2021-00000-MN-0'}/>
        {/* Add more rows as needed */}
      </tbody>
    </table>
        </div>     
      </div>
      <Footer/>
    </div>
    );
  }
  
  export default Assessments;
  
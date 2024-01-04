import './assessments.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header/header.js';
import Footer from '../../pages/footer/footer.js';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import firebase from '../../firebaseConfig.js';


function Assessments() {

  localStorage.setItem('profile','')

  const navigate = useNavigate()
  
  const saveProfile = (name) =>{
    localStorage.setItem('profile', name.replaceAll(' ', '_'))
      studentProfile(name);
      window.location.reload();
  }

  const studentProfile = (name) => {
      navigate('/assessments/' + name.replaceAll(' ', '_'));
  }

  const [childrenArray, setChildrenArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRef = firebase.database().ref('UserNames');
        const snapshot = await dataRef.once('value');
        const data = snapshot.val();

        if (data) {
          setChildrenArray(Object.entries(data));   
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    };
    fetchData();;

  }, []);


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
      {childrenArray.map(([key, value], index) => (
        <tr key={index} >
          <td>{key}</td>
        <td style={{paddingLeft:'28px'}}>{value}</td>
        <td style={{width:'256px'}}><button id='view-details' onClick={()=>saveProfile(key.replaceAll(',',''))}>View Details</button></td>
        </tr>
      ))}
      </tbody>
    </table>
        </div>     
      </div>
      <Footer/>
    </div>
    );
  }
  
  export default Assessments;
  
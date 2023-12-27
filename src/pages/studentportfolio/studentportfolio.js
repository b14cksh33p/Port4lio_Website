import './studentportfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header/header.js';
import Footer from '../../pages/footer/footer.js';
import { useNavigate } from 'react-router-dom';
import firebase from '../../firebaseConfig.js';
import { fileDb } from '../../firebaseConfig';
import { ref, getDownloadURL } from 'firebase/storage';
import { useState, useEffect } from 'react';

function ProfilePicture({uname}){
  const [pPicUrl, setPPicUrl] = useState();

  const fileRef = ref(fileDb, `students_files/${uname.replaceAll(',', '')}/${uname.replaceAll(',', '')} - 2X2 Picture`);
    getDownloadURL(fileRef)
    .then((url) => {
        setPPicUrl(url);
    })
    .catch((error) => {
        console.error('Error retrieving download URL:', error);
    });
  return(
    <div>
      <img src={pPicUrl} style={{height:'18vh'}}/>
    </div>
  );
}

function StudentPortfolio() {


  localStorage.setItem('profile','')
  const navigate = useNavigate()

  const saveProfile = (name) =>{
    var Name = name.replaceAll(',', '');
    localStorage.setItem('user', name)
    localStorage.setItem('profile', Name.replaceAll(' ', '_'))
      studentProfile(Name);
  }
  
  const studentProfile = (name) => {
      navigate('/student-portfolio/profile/' + name.replaceAll(' ', '_'));
  }


  const [childrenArray, setChildrenArray] = useState([]);
  useEffect(() => {
    // Get all children from Firebase when the component mounts
    const fetchData = async () => {
      try {
        const dataRef = firebase.database().ref('UserNames');
        const snapshot = await dataRef.once('value');
        const data = snapshot.val();
        if (data) {
          const dataArray = Object.keys(data).map(key => (key));
          setChildrenArray(dataArray);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();;
  }, []);
  

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
      {childrenArray.map((name, index) => (
        <div key={index} className="grid-item" onClick={()=>saveProfile(name)}>
          <a href=''>
            <div className='grid-image' >
              <ProfilePicture uname={name} />
            </div>
          </a>
            <p className='grid-text'>{name}</p>
        </div>
      ))}
    </div>
      </div>
      <Footer/>
    </div>
    );
  }
  
  export default StudentPortfolio;
  
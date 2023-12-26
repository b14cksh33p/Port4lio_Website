import './studentassessment.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from '../../../assets/images/icon.png';
import Footer from '../../footer/footer.js';
import Student from '../../../assets/images/student(2).png';
import { useNavigate } from 'react-router-dom';
import FileContainer from '../../studentportfolio/file-container/file-container.js';
import { useState, useEffect } from 'react';
import firebase from '../../../firebaseConfig.js';
import { fileDb } from '../../../firebaseConfig';
import { ref, getDownloadURL } from 'firebase/storage';

function Header() {
    const navigate = useNavigate()
    window.scrollTo({
        top: 0,
        behavior: 'instant',
      });
    return(
        <div className='sAs-header'>
            <div className='sAs-back'>
                <p onClick={()=>navigate(-1)}>{'< Back'}</p>
            </div>
            <div className='sAs-title'>
            <img src={Icon} alt='Icon'/>
                <h1>PORT4LIO</h1>
            </div>
        </div>
    );
}

function Profile({pic, name, sNumber, company, ojtHours}){

    

    return(
    <div className='sAs-content'>
    <div className='sAs-content-image'>
        {pic}
    </div>
    <div className='sAs-content-text'>
        <h3>{name}</h3>
        <p>Student No.: {sNumber}</p>
        <p>CYS: BSCpE 3-4</p>
        <p>HTE: {company}</p>
        <p>OJT Hours: {ojtHours}</p>
    </div>
    </div>
);
}

function StudentAssessment() {

    const [fullName, setFullName] = useState('LN, FN MN');
    const [studentNo, setStudentNo] = useState('2021-00000-MN-0');
    const [company, setCompany] = useState('Company Name');
    const [ojtHours, setOjtHours] = useState('000 Hours');
    const [pPicUrl, setPPicUrl] = useState(Student);
    
    const name = localStorage.getItem('profile');

    const fileRef = ref(fileDb, `students_files/${name.replaceAll('_', ' ')}/${name.replaceAll('_', ' ')} - 2X2 Picture`);
    getDownloadURL(fileRef)
    .then((url) => {
        setPPicUrl(url);
    })
    .catch((error) => {
        console.error('Error retrieving download URL:', error);
    });

    useEffect(() => {
    const uname = firebase.database().ref('UserData/'+name.replaceAll('_', ' '));

    const fname = uname.child('name')
    fname.on('value', (snapshot) => {
        setFullName(snapshot.val());
      });
      
    const sNo = uname.child('StudentNo')
    sNo.on('value', (snapshot) => {
        setStudentNo(snapshot.val());
      });

    const comp = uname.child('HTE')
    comp.on('value', (snapshot) => {
        setCompany(snapshot.val());
      });
    
    const ojt = uname.child('OJTHours')
    ojt.on('value', (snapshot) => {
        setOjtHours(snapshot.val());
    });
    });

    return (
      <div className='wrapper-sAs'>
      <Header/>
      <div className='sAs-first-section'>
        <div>
         <Profile pic={<img src={pPicUrl} id='profile-pic'/>}
          name={fullName}
          sNumber={studentNo}
          company={company}
          ojtHours={ojtHours}
          />
        </div>
          <div className=' sAs-background'>
              <div className='rectangle first'>
              </div>
              <div className='rectangle second'>
              </div>
              <div className='rectangle third'>
              </div>
          </div>
      </div>
      <div className='sAs-second-section'>
        <div className='sAs-documents'>
            <FileContainer text-highlighted='Assessment PDF'/>
        </div>
      </div>
      <Footer/>
    </div>
    );
  }
  
  export default StudentAssessment;
  
import './studentprofile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from '../../../assets/images/icon.png';
import Footer from '../../footer/footer.js';
import Student from '../../../assets/images/student.png';
import { useNavigate } from 'react-router-dom';
import {  useState, useEffect } from 'react';
import FileContainer from '../file-container/file-container.js'
import firebase from '../../../firebaseConfig.js';
import 'firebase/database'


function Header() {
    const navigate = useNavigate()
    window.scrollTo({
        top: 0,
        behavior: 'instant',
      });
    return(
        <div className='sPr-header'>
            <div className='sPr-back'>
                <p onClick={()=>navigate(-1)}>{'< Back'}</p>
            </div>
            <div className='sPr-title'>
            <img src={Icon} alt='Icon'/>
                <h1>PORT4LIO</h1>
            </div>
        </div>
    );
}

function Profile({pic, name, sNumber, company, ojtHours}){

    return(
    <div className='sPr-content'>
    <div className='sPr-content-image'>
        {pic}
    </div>
    <div className='sPr-content-text'>
        <h3>{name}</h3>
        <p>Student No.: {sNumber}</p>
        <p>CYS: BSCpE 3-4</p>
        <p>HTE: {company}</p>
        <p>OJT Hours: {ojtHours}</p>
    </div>
    </div>
);
}

function StudentProfile() {

    const [fullName, setFullName] = useState('LN, FN MN');
    const [studentNo, setStudentNo] = useState('2021-00000-MN-0');
    const [company, setCompany] = useState('Company Name');
    const [ojtHours, setOjtHours] = useState('000 Hours');
    
    const name = localStorage.getItem('profile');
    const user = localStorage.getItem('User').replaceAll(', ', '_');
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
      <div className='wrapper-sPr'>
      <Header/>
      <div className='sPr-first-section'>
        <div>
         <Profile pic={<img src={Student} id='profile-pic'/>}
          name={fullName}
          sNumber={studentNo}
          company={company}
          ojtHours={ojtHours}
          />
        </div>
          <div className=' sPr-background'>
              <div className='rectangle first'>
              </div>
              <div className='rectangle second'>
              </div>
              <div className='rectangle third'>
              </div>
          </div>
      </div>
      <div className='sPr-second-section'>
        {user != name ? '' :         
        <div className='sPr-documents'>
            <div className='sPr-row'>
                <FileContainer highlightedText='MOA' />
                <FileContainer highlightedText='Waiver'/>
                <FileContainer highlightedText='HTE Eval.' />
                <FileContainer highlightedText='Perf Eval.'/>
            </div>
            <div className='sPr-row'>
                <FileContainer highlightedText='Company Display Picture' />
                <FileContainer highlightedText='LOE'/>
                <FileContainer highlightedText='LOI' />
                <FileContainer highlightedText='DTR'/>
            </div>
            <div className='sPr-row'>
                <FileContainer highlightedText='2X2 Picture' />
                <FileContainer highlightedText='Consent Form'/>
                <FileContainer highlightedText='Medical Cert' />
                <FileContainer highlightedText='Adviser Eval.'/>
            </div>
            <div className='sPr-row'>
                <FileContainer highlightedText='Completion Cert' />
            </div>
        </div> }

      </div>
      <Footer/>
    </div>
    );
  }
  
  export default StudentProfile;
  
import './studentprofile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from '../../../assets/images/icon.png';
import Footer from '../../footer/footer.js';
import Student from '../../../assets/images/student.png';
import { useNavigate } from 'react-router-dom';
import {  useState, useEffect } from 'react';
import FileContainer from '../file-container/file-container.js'
import firebase from '../../../firebaseConfig.js';
import { fileDb } from '../../../firebaseConfig';
import { ref, getDownloadURL } from 'firebase/storage';
import 'firebase/database'

const name = localStorage.getItem('profile');
const user = localStorage.getItem('User');
var username = '';
if(user){
    username = user.replaceAll(',','');
    username = username.replaceAll(' ', '_');
}

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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

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
        <div>{username != (name.replaceAll(',','')).replaceAll(' ','_') ? 
        ''
        : 
        <button onClick={openModal}>Edit Profile</button>
        }
        </div>
    </div>
    {!isModalOpen ? '' :
        <div className='eP-wrapper'>
            <div className='eP-container'>

                <div className='eP-header'>
                    Edit Profile
                </div>
                
                <div className='eP-content'>
                    <div className='eP-info'>
                        <input type='text' placeholder='Name'></input>
                    </div>
                    <div className='eP-info'>
                        <input type='text' placeholder='Student No.'></input>
                    </div>
                    <div className='eP-info'>
                        <input type='text' placeholder='Company Name'></input>
                    </div>
                    <div className='eP-info'>
                        <input type='text' placeholder='OJT hours'></input>
                    </div>
                    <div>
                    <div className='eP-buttons'>
                        <button onClick={closeModal}>Close</button>
                        <button onClick={closeModal}>Update</button>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
        }
    </div>
);
}

function UploadedDocs({fileName}){
    const [docUrl, setDocUrl] = useState(null);
    
    const fileRef = ref(fileDb, `students_files/${name.replaceAll('_', ' ')}/${name.replaceAll('_', ' ')} - ${fileName}`);
    getDownloadURL(fileRef)
    .then((url) => {
        setDocUrl(url);
    })
    .catch((error) => {
        console.error('Error retrieving download URL:', error);
    });

    console.log(docUrl)

    return(
        <>
        {docUrl == null ?
         '' 
         :
         <a href={docUrl} target='_blank'>
         <div className='Ud-container'>
             <p>{fileName}</p>
             
         </div>
         </a>
         }
        </>
    );
}

function StudentProfile() {

    const [fullName, setFullName] = useState('LN, FN MN');
    const [studentNo, setStudentNo] = useState('2021-00000-MN-0');
    const [company, setCompany] = useState('Company Name');
    const [ojtHours, setOjtHours] = useState('000 Hours');
    const [pPicUrl, setPPicUrl] = useState(Student);
    const [editDocs, setEditDocs] = useState(false);


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
      <div className='wrapper-sPr'>
      <Header/>
      <div className='sPr-first-section'>
        <div>
         <Profile pic={<img src={pPicUrl} id='profile-pic'/>}
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

        {username != name ?
        <div>
            <UploadedDocs fileName={'Memorandum of Agreement'}/>
            <UploadedDocs fileName={'Waiver'}/>
            <UploadedDocs fileName={'HTE Evaluation'}/>
            <UploadedDocs fileName={'Performance Evaluation'}/>
            <UploadedDocs fileName={'Letter of Endorsement'}/>
            <UploadedDocs fileName={'Letter of Intent'}/>
            <UploadedDocs fileName={'Daily Time Report'}/>
            <UploadedDocs fileName={'Consent Form'}/>
            <UploadedDocs fileName={'Medical Certificate'}/>
            <UploadedDocs fileName={'Adviser Evaluation'}/>
            <UploadedDocs fileName={'Completion Certificate'}/>
        </div> 
        :         
        <div className='sPr-documents'>
            {editDocs==false ?
            <div>
                <UploadedDocs fileName={'Memorandum of Agreement'}/>
                <UploadedDocs fileName={'Waiver'}/>
                <UploadedDocs fileName={'HTE Evaluation'}/>
                <UploadedDocs fileName={'Performance Evaluation'}/>
                <UploadedDocs fileName={'Letter of Endorsement'}/>
                <UploadedDocs fileName={'Letter of Intent'}/>
                <UploadedDocs fileName={'Daily Time Report'}/>
                <UploadedDocs fileName={'Consent Form'}/>
                <UploadedDocs fileName={'Medical Certificate'}/>
                <UploadedDocs fileName={'Adviser Evaluation'}/>
                <UploadedDocs fileName={'Completion Certificate'}/>
            </div> 
            :
            <div>
            <div className='sPr-row'>
                <FileContainer highlightedText='Memorandum of Agreement' />
                <FileContainer highlightedText='Waiver'/>
                <FileContainer highlightedText='HTE Evaluation' />
                <FileContainer highlightedText='Performance Evaluation'/>
            </div>
            <div className='sPr-row'>
                <FileContainer highlightedText='Company Display Picture' />
                <FileContainer highlightedText='Letter of Endorsement'/>
                <FileContainer highlightedText='Letter of Intent' />
                <FileContainer highlightedText='Daily Time Report'/>
            </div>
            <div className='sPr-row'>
                <FileContainer highlightedText='2X2 Picture' />
                <FileContainer highlightedText='Consent Form'/>
                <FileContainer highlightedText='Medical Certificate' />
                <FileContainer highlightedText='Adviser Evaluation'/>
            </div>
            <div className='sPr-row'>
                <FileContainer highlightedText='Completion Certificate' />
            </div>
            </div>
            }
            <div>              
            </div>
            <div className='sPr-edit-docs'>
                <button onClick={()=>setEditDocs(!editDocs)}>{editDocs==false ? 'Edit/Upload Documents' : 'Done'}</button>
            </div>
        </div> }
      </div>
      <Footer/>
    </div>
    );
  }
  
  export default StudentProfile;
  
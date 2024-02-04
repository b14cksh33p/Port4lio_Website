import './weeklyreport.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from '../../../assets/images/icon.png';
import Footer from '../../footer/footer.js';
import Student from '../../../assets/images/blank-profile.png';
import ViewIcon from '../../../assets/images/view.png'
import DeleteIcon from '../../../assets/images/delete.png'
import DowloadIcon from '../../../assets/images/download.png'
import { useNavigate } from 'react-router-dom';
import {  useState, useEffect } from 'react';
import FileContainer from '../../studentportfolio/file-container/file-container.js';
import firebase from '../../../firebaseConfig.js';
import { fileDb } from '../../../firebaseConfig';
import { ref, getDownloadURL, deleteObject } from 'firebase/storage';
import 'firebase/database'

const admin = localStorage.getItem('username')
const name = localStorage.getItem('profile');
const user = localStorage.getItem('User');
var UserName = '';
if(user){
    UserName = user.replaceAll(',','');
    UserName = UserName.replaceAll(' ', '_');
    
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
    const [SNumber, setSNumber] = useState(sNumber);
    const [Company, setCompany] = useState(company);
    const [OjtHours, setOjtHours] = useState(ojtHours);

    const userName = localStorage.getItem('username');
    const uName = localStorage.getItem('user');
    const username = firebase.database().ref('Users/'+userName);
    const udata = firebase.database().ref('UserData/'+uName.replaceAll(',',''));
    const uname = firebase.database().ref('UserNames/'+uName);
    

      
      

    return(
    <div className='sPr-content'>
    <div className='sPr-content-image'>
        {pic}
    </div>
        <div className='sPr-content-text'>
            <h3>{name}</h3>
            <p>Student Number: {sNumber}</p>
            <p>Course & Section: BSCpE 3-4</p>
            <p>Company Name: {company}</p>
            <p>Rendered Hours: {ojtHours}</p>
        </div>
    </div>
);
}

function UploadedDocs({fileName}){
    const [docUrl, setDocUrl] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    
    const fileRef = ref(fileDb, `students_files/${name.replaceAll('_', ' ')}/${name.replaceAll('_', ' ')} - ${fileName}`);
    getDownloadURL(fileRef)
    .then((url) => {
        setDocUrl(url);
    })
    .catch((error) => {
        console.error('Error retrieving download URL:', error);
    });

    const handleDelete = () => {
        deleteObject(fileRef);
        const delayTimeout = setTimeout(() => {
            window.location.reload();
          }, 10);
    };

    const toggleModal = () => {
        setModalOpen(!modalOpen);
      };
      const handleCancel = () => {
        toggleModal();
      };


    return(
        <>
        {docUrl == null ?
         '' 
         :
         <div className='Ud-big-container'>
            <a className='Ud-text' href={docUrl} target='_blank'>
            <div className='Ud-container'>
            <div className='Ud-text'>{fileName}</div>
            <div className='Ud-icons'>
                <img src={ViewIcon} width='18px' height='18px' className='Ud-view'></img>
                <img src={DowloadIcon} width='18px' height='16px' className='Ud-download'></img>
            </div>
            </div>
            </a>
            {UserName == name || admin == 'admin' ?
            <div className='Ud-delete' on onClick={toggleModal}>
            <img src={DeleteIcon} width='18px' height='18px' className='Ud-view'></img>
            </div>
            : ''
            }
            {modalOpen && (
              <div className='modal'>
              <div className='modal-content'>
                <p>Are you sure you want to delete this file?</p>
                <div className='modal-buttons'>
                  <button onClick={handleDelete} className='pI-modal-submit'>Delete</button>
                  <button onClick={handleCancel} className='pI-modal-cancel'>Cancel</button>
                </div>
              </div>
            </div>
            )}
         </div>
         }
        </>
    );
}

function WeeklyReport() {

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
                <div className='container'>
                <div className=' sPr-background'>
                    <div className='rectangle first'>
                    </div>
                    <div className='rectangle second'>
                    </div>
                    <div className='last third'>
                    </div>
                </div>
                </div>
            </div>
            <div className='sPr-second-section'>
            <div className='sPr-container'>
                <h1>Weekly Reports</h1>
            </div>
                {UserName == name ||admin == 'admin' ?
                <div className='sPr-documents'>
                {editDocs==false ?
                <div>
                    <UploadedDocs fileName={'Week 1'}/>
                    <UploadedDocs fileName={'Week 2'}/>
                    <UploadedDocs fileName={'Week 3'}/>
                    <UploadedDocs fileName={'Week 4'}/>
                    <UploadedDocs fileName={'Week 5'}/>
                    <UploadedDocs fileName={'Week 6'}/>
                    <UploadedDocs fileName={'Week 7'}/>
                    <UploadedDocs fileName={'Week 8'}/>
                    <UploadedDocs fileName={'Week 9'}/>
                    <UploadedDocs fileName={'Week 10'}/>
                    <UploadedDocs fileName={'Week 11'}/>
                    <UploadedDocs fileName={'Week 12'}/>
                </div> 
                :
                <div>
                <div className='sPr-row'>
                    <FileContainer highlightedText='Week 1' />
                    <FileContainer highlightedText='Week 2'/>
                    <FileContainer highlightedText='Week 3' />
                    <FileContainer highlightedText='Week 4'/>
                </div>
                <div className='sPr-row'>
                    <FileContainer highlightedText='Week 5' />
                    <FileContainer highlightedText='Week 6'/>
                    <FileContainer highlightedText='Week 7' />
                    <FileContainer highlightedText='Week 8'/>
                </div>
                <div className='sPr-row'>
                    <FileContainer highlightedText='Week 9'/>
                    <FileContainer highlightedText='Week 10' />
                    <FileContainer highlightedText='Week 11'/>
                    <FileContainer highlightedText='Week 12' />
                </div>
                </div>
                }
                <div>              
                </div>
                <div className='sPr-edit-docs'>
                    <button onClick={()=>setEditDocs(!editDocs)}>{editDocs==false ? 'Upload Weekly Reports' : 'Done'}</button>
                </div>
            </div> 
                :
                <div>
                <UploadedDocs fileName={'Week 1'}/>
                <UploadedDocs fileName={'Week 2'}/>
                <UploadedDocs fileName={'Week 3'}/>
                <UploadedDocs fileName={'Week 4'}/>
                <UploadedDocs fileName={'Week 5'}/>
                <UploadedDocs fileName={'Week 6'}/>
                <UploadedDocs fileName={'Week 7'}/>
                <UploadedDocs fileName={'Week 8'}/>
                <UploadedDocs fileName={'Week 9'}/>
                <UploadedDocs fileName={'Week 10'}/>
                <UploadedDocs fileName={'Week 11'}/>
                <UploadedDocs fileName={'Week 12'}/>
            </div>          
            }
            </div>
            <Footer/>
        </div>
    );
  }
  
  export default WeeklyReport;
  
import './studentprofile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from '../../../assets/images/icon.png';
import Footer from '../../footer/footer.js';
import Student from '../../../assets/images/blank-profile.png';
import ViewIcon from '../../../assets/images/view.png'
import DeleteIcon from '../../../assets/images/delete.png'
import DowloadIcon from '../../../assets/images/download.png'
import { useNavigate } from 'react-router-dom';
import {  useState, useEffect } from 'react';
import FileContainer from '../file-container/file-container.js'
import firebase from '../../../firebaseConfig.js';
import { fileDb } from '../../../firebaseConfig';
import { ref,uploadBytes, deleteObject, getDownloadURL } from 'firebase/storage';
import 'firebase/database'



const admin = localStorage.getItem('username');
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
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    
    const openModal = () => {
        setIsModalOpen(true);
        setSNumber(sNumber);
        setCompany(company);
        setOjtHours(ojtHours);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        uname.set(
            SNumber
          )
          username.update({
              StudentNo: SNumber,
              HTE: Company,
              OJTHours: OjtHours,
            });
          udata.update({
            StudentNo: SNumber,
            HTE: Company,
            OJTHours: OjtHours,
            });

        closeModal();
        window.location.reload();

      };

      console.log(localStorage.getItem('User'));
      
      

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
        <div>{UserName == (name.replaceAll(',','')).replaceAll(' ','_') || admin == 'admin' ? 
        <button onClick={openModal}>Edit Info</button>
        : 
        ''
        }
        </div>
    </div>
    {!isModalOpen ? '' :
        <div className='eP-wrapper'>
            <div className='eP-container'>

                <div className='eP-header'>
                    Edit Information
                </div>
                
                <div className='eP-content'>
                    <div className='eP-info'>
                        {"Student Number: "}
                        <input type='text'  defaultValue={sNumber}
                        onChange={(e) => setSNumber(e.target.value)}
                        required></input>
                    </div>
                    <div className='eP-info'>
                        {"Company Name: "}
                        <input type='text'  defaultValue={company}
                        onChange={(e) => setCompany(e.target.value)}
                        required></input>
                    </div>
                    <div className='eP-info'>
                        {"Rendered Hours: "}
                        <input type='text'  defaultValue={ojtHours}
                        onChange={(e) => setOjtHours(e.target.value)}
                        required></input>
                    </div>
                    <div className='eP-profile'>
                        <p>Profile Picture:</p>
                        <FileContainer highlightedText='2X2 Picture'/>
                    </div>
                    <div className='eP-buttons'>
                        <button className='eP-Cancel' onClick={closeModal}>Close</button>
                        <button onClick={handleSubmit}>Update</button>
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
    const [reload, setReload] = useState(true);
    
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
            <div className='Ud-delete' on onClick={handleDelete}>
            <img src={DeleteIcon} width='18px' height='18px' className='Ud-view'></img>
            </div>
            : ''
            }
         </div>
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
    console.log(user)

    
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
                <h1>Internship Requirements</h1>
            </div>
                {UserName == name || admin == 'admin' ?
                    <div className='sPr-documents'>
                    {editDocs==false ?
                    <div>
                        <UploadedDocs fileName={'Memorandum of Agreement'}/>
                        <UploadedDocs fileName={'Letter of Endorsement'}/>
                        <UploadedDocs fileName={'Letter of Intent'}/>
                        <UploadedDocs fileName={'Waiver'}/>
                        <UploadedDocs fileName={'Internship Agreement'}/>
                        <UploadedDocs fileName={'Medical Certificate'}/>
                        <UploadedDocs fileName={'Consent Form'}/>
                        <UploadedDocs fileName={'Letter of Acceptance'}/>
                        <UploadedDocs fileName={'HTE Evaluation'}/>
                        <UploadedDocs fileName={'Performance Evaluation'}/>
                        <UploadedDocs fileName={'Completion Certificate'}/>
                        <UploadedDocs fileName={'Daily Time Report'}/>
                    </div> 
                    :
                    <div>
                    <div className='sPr-row'>
                        <FileContainer highlightedText='Memorandum of Agreement' />
                        <FileContainer highlightedText='Letter of Endorsement'/>
                        <FileContainer highlightedText='Letter of Intent' />
                        <FileContainer highlightedText='Waiver'/>
                    </div>
                    <div className='sPr-row'>
                        <FileContainer highlightedText='Internship Agreement'/>
                        <FileContainer highlightedText='Medical Certificate' />
                        <FileContainer highlightedText='Consent Form'/>
                        <FileContainer highlightedText='Letter of Acceptance'/>
                    </div>
                    <div className='sPr-row'>
                        <FileContainer highlightedText='Performance Evaluation'/>
                        <FileContainer highlightedText='HTE Evaluation' /> 
                        <FileContainer highlightedText='Completion Certificate' />
                        <FileContainer highlightedText='Daily Time Report'/>
                    </div>
                    </div>
                    }
                    <div>              
                    </div>
                    <div className='sPr-edit-docs'>
                        <button onClick={()=>setEditDocs(!editDocs)}>{editDocs==false ? 'Edit/Upload Documents' : 'Done'}</button>
                    </div>
                </div> 
                :   
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
                }
            </div>
            <Footer/>
        </div>
    );
  }
  
  export default StudentProfile;
  
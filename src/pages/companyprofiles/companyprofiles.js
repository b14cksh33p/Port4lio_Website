import './companyprofiles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header/header.js';
import Footer from '../../pages/footer/footer.js';
import FileContainer from '../studentportfolio/file-container/file-container.js';
import { ref, getDownloadURL } from 'firebase/storage';
import {  useState, useEffect } from 'react';
import firebase from '../../firebaseConfig.js';
import { fileDb } from '../../firebaseConfig';
import Student from '../../assets/images/blank-profile.png';

const userName = localStorage.getItem('username');

function Company({name}){
  const [vision, setVision] = useState('Company Vision')
  const [mission, setMission] = useState('Company Mission')
  const [webLink, setWebLink] = useState(null)
  const [image, setImage] = useState(Student)


  useEffect(() => {
      const uname = firebase.database().ref('Companies/'+name);
      const viss = uname.child('Vision')
      viss.on('value', (snapshot) => {
          setVision(snapshot.val())
        });

      const miss = uname.child('Mission')
      miss.on('value', (snapshot) => {
          setMission(snapshot.val())
        });

      const wl = uname.child('WebLink')
      wl.on('value', (snapshot) => {
          setWebLink(snapshot.val())
        });
        
    })

    const fileRef = ref(fileDb, `Companies/${name} - Company Display Picture`);
    getDownloadURL(fileRef)
    .then((url) => {
        setImage(url);
    })
    .catch((error) => {
        console.error('Error retrieving download URL:', error);
    });

  

    return(
        <div className='company'>
            <a href={webLink} target='_blank'><div className='company-image'>
                <img src={image} id='company-pic'/>
            </div></a>
            <div className='company-description'>
                <h3><b>{name}</b></h3>

                <h4>Our Vision</h4>
                <p>{vision}</p>

                <h4>Our Mission</h4>
                <p>{mission}</p>
            </div>
        </div>
    );
}


function CompanyProfiles() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState('guest');
  const [company, setCompany] = useState('Company');
  const [ivision, setIvision] = useState('');
  const [imission, setImission] = useState('');
  const [iwebLink, setIwebLink] = useState('')
  const [vision, setVision] = useState(ivision);
  const [mission, setMission] = useState(imission);
  const [webLink, setWebLink] = useState(iwebLink)
  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {
    const uname = firebase.database().ref('Companies/'+company.replaceAll('.', ''));
    const viss = uname.child('Vision')
    viss.on('value', (snapshot) => {
      setIvision(snapshot.val())
      });
  
    const miss = uname.child('Mission')
    miss.on('value', (snapshot) => {
        setImission(snapshot.val())
      });
  
    const wl = uname.child('WebLink')
    wl.on('value', (snapshot) => {
        setIwebLink(snapshot.val())
      });
      
  })



  useEffect(() => {
    if(userName){
      setIsLoggedIn(userName)
      const uname = firebase.database().ref('Users/'+userName.replaceAll('_', ' '));
      const comp = uname.child('HTE')
      comp.on('value', (snapshot) => {
          setCompany(snapshot.val());
        });
      
        if(vision != '' && mission != ''){
          setIsDisable(false)
        }else{
          setIsDisable(true)
        }
    }})
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleUpdate = () => {
    const comp = firebase.database().ref('Companies/'+company.replaceAll('.', ''));
    comp.update({
      Vision: vision,
      Mission: mission,
      WebLink: webLink,
      Name: company,
    });
    closeModal()

  }

  const [childrenArray, setChildrenArray] = useState([]);
  useEffect(() => {
    // Get all children from Firebase when the component mounts
    const fetchData = async () => {
      try {
        const dataRef = firebase.database().ref('Companies');
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
      <div className='wrapper-cP'>
      <Header/>
      <div className='cP-first-section'>
        <div className='cP-text'>
          <h1>Welcome to the <span style={{color:'#c24914'}}>COMPANY PROFILES</span></h1>
          <p>This part includes everything related to the Companies that each
            student applied to. This also includes Companies and Webinar
            platforms.
          </p>
        </div>
          <div className=' cP-background'>
              <div className='rectangle first'>
              </div>
              <div className='rectangle second'>
              </div>
              <div className='rectangle third'>
              </div>
          </div>
      </div>
      <div className='cP-second-section'>
        {isLoggedIn == 'guest' ? '' :
                <div className='cP-add-company'>
                <p>Your company ain't listed yet?</p>
                <button onClick={openModal}>Add/Edit Your Company Description</button>
              </div>
        }
        {!isModalOpen ? '' :
           <div className='eP-wrapper'>
           <div className='cP-container'>
           
           <div className='eP-header'>
             Company Profile ({company})
           </div>
       
           <div className='cP-content'>
             <div className='cP-left-content'>
               <div className='cP-textarea'>
                 <div className='cP-input'>
                   {"Vision"}
                   <textarea placeholder='Write Company Vision here...(Required)'
                   defaultValue={ivision}
                   onChange={(e) => setVision(e.target.value)}
                   ></textarea>
                 </div>
                 <div className='cP-input'>
                   {"Mission"}
                   <textarea placeholder='Write Company Mission here...(Required)'
                   defaultValue={imission}
                   onChange={(e) => setMission(e.target.value)}
                   ></textarea>
               </div>
               </div>
               <div className='cP-input'>
                 <input type='text' placeholder='Company Website link (if there is)'
                  defaultValue={iwebLink}
                  onChange={(e) => setWebLink(e.target.value)}
                 ></input>
               </div>
             </div>
             
             <div className='cP-right-content'>
               <div className='cP-company-profile'>
                 <p>Company Display Picture</p>
                 <FileContainer highlightedText='Company Display Picture' isCompany={company.replaceAll('.','')}></FileContainer>
               </div>
               <div className='cP-button'>
                 <button className='cP-Cancel' onClick={closeModal}>Close</button>
                 <button onClick={handleUpdate} disabled={isDisable}>Update</button>
               </div>
             </div>
             
           </div>
       
         </div>
       </div>
        }
        {childrenArray.map((name, index) => (
        <div key={index}>
          <Company name={name}/>
        </div>
      ))}
      </div>
      <Footer/>
    </div>
    );
  }
  
  export default CompanyProfiles;
  
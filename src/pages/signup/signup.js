import '../signup/signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './navigation/navigation.js';
import firebase from '../../firebaseConfig.js';
import 'firebase/database'
import Icon from '../../assets/images/icon.png';
import Person1 from '../../assets/images/person (1).png';
import Person2 from '../../assets/images/person (2).png';
import Person3 from '../../assets/images/person (3).png';
import Person4 from '../../assets/images/person (4).png';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Signup() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')
    const userName = email.replace('@gmail.com', '');
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const verify = () => {
      const lname = name.replaceAll(' ', '')
      const lastName = lname.replaceAll(',', ' ').split(' ');
      const databaseRef = firebase.database().ref('CoE24Students/');
      databaseRef.once('value')
        .then(snapshot => {
          const data = snapshot.val();

          // Check if the string exists in the database
          if (data && Object.values(data).includes(lastName[0])) {
            const dbRef = firebase.database().ref('userData/');
              dbRef.once('value')
                .then(snapshot => {
                  const data = snapshot.val();
                  // Check if the string exists in the database
                  if (data && Object.values(data).includes(name.replaceAll(',', ''))) {
                    alert('Name already in used.');
                  } else {
                    submit();
                  }
                })
                .catch(error => {
                  console.error('Error reading from the database:', error);
                });
          } else {
            alert('Name cannot be found in BSCOE 2-4 students roster.');
          }
        })
        .catch(error => {
          console.error('Error reading from the database:', error);
        });

    }

    const submit = async (e) =>{
      if(cPassword === password) {
        
        try{
          const username = firebase.database().ref('Users/'+userName);
          const uname = firebase.database().ref('UserNames/'+name);
          const udata = firebase.database().ref('UserData/'+name.replaceAll(',', ''));
          const user =  await firebase.auth().createUserWithEmailAndPassword(email, password)
          if (user)
          {
            alert("Account Created Successfully");
            localStorage.setItem('username', userName)
            localStorage.setItem('uname', name)
            navigate('/signup/personal-information/' + userName);
            window.location.reload();
            username.set({
              name: name
            })
            uname.set(
              'name'
            )
            udata.set({
              name: name
            })
            
          }
        }
        catch (error){
          alert(error)
        }
      }else{
        alert('password does not match')
      }

    }

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };


    return (
      <div className='sU-wrapper'>
        <div className='sU-header'>
          <img src={Icon} alt='Icon'/>
          <h2>PORT4LIO</h2>
        </div>
        <div className='sU-banner'>
              <img id='p1' alt='banner' src={Person1}/>
              <img id='p2' alt='banner' src={Person4}/>
              <img id='p3' alt='banner' src={Person3}/>
              <img id='p4' alt='banner' src={Person2}/>
        </div>
        <div className='container main'>
          <form className='sU-pI-container' onSubmit={verify}>
            <div className='pI-head'>
              <h3>Create an Account</h3>
            </div>
            <div className='pI-navigation'>
              <Navigation/>
            </div>
            <div className='pI-infos'>
              <div className='pI-info'>
                <p>Name:</p>
                  <input id='signup-name'
                  type='text'
                  placeholder='Last Name, First Name, Middle Name' 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required></input>
              </div>
              <div className='pI-info'>
                <p>Email Address:</p>
                  <input id='signup-email'
                  type='email'
                  placeholder='juandelacruz01@gmail.com' 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required></input>
              </div>
              <div className='pI-info'>
                <p>Password:</p>
                  <input id='signup-password'
                  type='password'
                  placeholder='Password' 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  ></input>
              </div>
              <div className='pI-info'>
                <p>Confirm Password:</p>
                  <input id='signup-c-password'
                  type='password'
                  placeholder='Confirm Password' 
                  value={cPassword}
                  onChange={(e) => setCPassword(e.target.value)}
                  required></input>
              </div>
              <div className='sU-terms'>
                <input type='checkbox' required id='terms'></input>
                <p> I agree to the <span onClick={openModal}>terms & policy</span></p>
              </div>
            </div>
            <div className='button-next'>
              <button id='next' type='submit'>Create Account</button> {/* Temporary Sign Up Button for Email and Password creation to database*/}
            </div>
            <div className='sU-login'>
              <p>Already have an account? <Link to={'/login'} style={{ textDecoration: 'none' }}>Log in</Link></p>
            </div>
          </form>
          {!isModalOpen ? '' :
          <div className='eP-wrapper'>
          <div className='TP-container'>
            <div className='eP-header'>
              Terms & Conditions and Privacy Notice
            </div>

            <div className='TP-content'>
              <div className='TP-important'>
                <div><b>Important.  </b>In order to continue, you must read the Terms & Conditions and Privacy Notice by scrolling to the bottom.</div>
              </div>
              <div className='TP-navigation'>
                <div className='TP-navigation-text'>Navigate to:</div>
                <div className='TP-navigation-link'>i. <span>Terms & Conditions</span></div>
                <div className='TP-navigation-bottom'>ii. <span>Privacy Policy</span></div>        
              </div>

              <div className='TP-body'>
                <b>Terms and Conditions</b>
                <br></br>
                <br></br>
                Welcome to Port4lio! By using our platform, you agree to the following terms:
                <br></br>
                <br></br>
                <b>Account Eligibility:</b> Port4lio accounts are exclusively available to students enrolled in sections 2-4 of the Computer Engineering program at Polytechnic University of the Philippines. Individuals not meeting this criterion are not permitted to create accounts.
                <br></br>
                <b>Account Registration:</b> To access Port4lio, eligible users must create an account providing accurate and current information. Users are responsible for maintaining the confidentiality of their account credentials.
                <br></br>
                <b>Content Guidelines:</b> Users are solely responsible for the content they upload. Port4lio reserves the right to remove any content that violates guidelines or is deemed inappropriate.
                <br></br>
                <b>Intellectual Property:</b> Users retain ownership of their content. By uploading to Port4lio, users grant the platform a non-exclusive, worldwide license to use, modify, and distribute the content.   
                <br></br>
                <b>Data Security:</b> Port4lio employs industry-standard security measures to protect user data. However, users are encouraged to safeguard their accounts and report any unauthorized access.
                <br></br>
                <b>Usage Policy:</b> Users agree not to misuse or disrupt Port4lio's services. Any violation of this policy may result in account termination.
                <br></br>
                <b>Termination:</b> Port4lio reserves the right to terminate accounts in cases of policy violations or at the user's request.
                <br></br>
                <b>Disclaimers:</b> Port4lio provides services "as is" and disclaims any warranties or liabilities arising from the use of the platform.
                <br></br>
                <br></br>

                <b>Privacy Policy</b>
                <br></br>
                <br></br>
                We take your privacy seriously. Here's how we handle your information:
                <br></br>
                <br></br>
                <b>Account Eligibility and Information Collection:</b> Port4lio accounts are restricted to students in sections 2-4 of the Computer Engineering program at Polytechnic University of the Philippines. Personal information collected during account registration, including name and email, is used solely for platform use and verification of eligibility.
                <br></br>
                <b>Use of Information:</b> Collected information is used for account management, communication, and platform improvement purposes only.
                <br></br>
                <b>Data Security Measures:</b> Port4lio implements robust security measures to protect user data from unauthorized access, alteration, or disclosure.
                <br></br>
                <b>Third-Party Disclosure:</b> Personal information is not shared with third parties unless required for platform functionality or legal compliance.
                <br></br>
                <b>User Rights:</b> Users have the right to access, correct, or delete their personal data by contacting Port4lio's support team.
                <br></br>
                <b>Cookies and Tracking:</b> Port4lio may use cookies for site functionality and analytics. Users can manage cookie preferences in their browser settings.
                <br></br>
                <b>Data Retention:</b> User data is retained as long as necessary for platform use and deleted upon account closure.
              </div>
              
              <div className='cP-button'>
                <button onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
          }
        </div>
    </div>
    );
  }
  
  export default Signup;
  
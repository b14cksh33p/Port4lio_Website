import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import Icon from '../../assets/images/icon.svg';
import { useNavigate } from 'react-router-dom';
import firebase from '../../firebaseConfig.js';



function Header() {
  //highlighted navigation page
  const link = window.location.href;
  var x = 0;
  if(link.includes('/student-portfolio')){
    x = 1;
  }else if(link.includes('weekly-reports')){
    x = 2;
  }else if(link.includes('/company-profiles')){
    x = 3;
  }else if(link.includes('/assessments')){
    x = 4;
  }else{
    x = 0; 
  }

  const [currentPage, setCurrentPage] = useState(x)

  const navigate = useNavigate();

  const userName = localStorage.getItem('username');

  const pages = [
    { title: 'Home', urlPath: '/home/'+userName, magicColor: '#c24914'},
    { title: 'Student Portfolio', urlPath: '/student-portfolio/'+userName, magicColor: '#c24914'},
    { title: 'Weekly Reports', urlPath: '/weekly-reports/'+userName, magicColor: '#c24914'},
    { title: 'Company Profiles', urlPath: '/company-profiles/'+userName, magicColor: '#c24914'},
    { title: 'Assessments', urlPath: '/assessments/'+userName, magicColor: '#c24914'},
  ]

  const handleLogout = () => {
    firebase.auth().signOut()
      .then(() => {
        alert('User signed out successfully.');
        localStorage.clear();
        localStorage.setItem('username', '');
        navigate('/login')
      })
      .catch((error) => {
        alert('Error signing out:', error);
      });
  };

  return (
        <div className='header'>
            <div className='title-header'>
            <img src={Icon} alt='Icon' onClick={()=>navigate('/')}/>
                <h1>PORT4LIO</h1>
            </div>
            <div className='navigation'>
            {pages.map((page, index) => ((currentPage === index ? 
            <NavLink
              to={`${page.urlPath}`}
              style={{ textDecoration: 'none', color: `${page.magicColor}`, fontWeight: '700' }}
              className="p mb-0"
              role="button"
              key={index}
              onClick={() => setCurrentPage(index)}
            >
              {page.title}
            </NavLink> 
            :
              <NavLink
                to={`${page.urlPath}`}
                style={{ textDecoration: 'none', color: 'black', fontWeight: '700' }}
                className="p mb-0"
                role="button"
                key={index}
                useS
                onClick={() => setCurrentPage(index)}
              >
                {page.title}
              </NavLink>
            )))}
            </div>
            <div>
              {userName == ''?
              <div className='button-log' id='login'>
                <button onClick={()=>navigate('/login')}>Log In</button>
             </div> :
              <div className='button-log' id='logout'>
                <button onClick={handleLogout}>Log Out</button>
            </div>
              }
            </div>

         </div>
  )
}

export default Header;
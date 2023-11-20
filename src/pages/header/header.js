import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import Icon from '../../assets/images/icon.png';


function Header() {
  const [currentPage, setCurrentPage] = useState(0)

  const pages = [
    { title: 'Home', urlPath: '/student-portfolio', magicColor: '#c24914'},
    { title: 'Student Portfolio', urlPath: '/student-portfolio', magicColor: '#c24914'},
    { title: 'Weekly Reports', urlPath: '/student-portfolio', magicColor: '#c24914'},
    { title: 'Company Profiles', urlPath: '/student-portfolio', magicColor: '#c24914'},
    { title: 'Assessments', urlPath: '/student-portfolio', magicColor: '#c24914'},
  ]

  return (
        <div className='header'>
            <div className='title'>
            <img src={Icon} alt='Icon'/>
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
            <div className='button-logout'>
                <button>Log Out</button>
            </div>
         </div>
  )
}

export default Header;
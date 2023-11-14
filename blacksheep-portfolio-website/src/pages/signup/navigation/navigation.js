import './navigation.css'; 
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  return (
    <nav className="nav-container">

      <NavLink to="/signup/primary-information" activeClassName="active">
        <p>Primary Information</p>
      </NavLink>
      <NavLink to="/signup/personal-information" activeClassName="active">
      <p>Personal Information</p>
      </NavLink>
      <NavLink to="/signup/pre-internship-requirements" activeClassName="active">
      <p>Pre-Internship Requirement</p>
      </NavLink>
      <NavLink to="/signup/post-internship-requirements" activeClassName="active">
      <p>Post-Internship Requirement</p>
      </NavLink>
      <NavLink to="/page5" activeClassName="active">
      <p>Done</p>
      </NavLink>
      <div className='midline'>
      </div>
    </nav>

  );
};

export default Navigation;
import './navigation.css'; 
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  return (
    <>
    <nav className="nav-container">

      <NavLink to="/signup/primary-information" activeClassName="active">
        <p>1</p>
      </NavLink>
      <NavLink to="/signup/personal-information" activeClassName="active">
      <p>2</p>
      </NavLink>
      <NavLink to="/signup/done" activeClassName="active">
      <p>✓</p>
      </NavLink>
      <div className='midline'>
      </div>
    </nav>
    <div className='nav-label'>
      <span>Primary Info</span>
      <span>Personal Info</span>
      <span>Done</span>
    </div>
    </>

  );
};

export default Navigation;
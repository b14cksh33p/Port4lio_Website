
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Import Pages Here
import LandingPage from '../src/pages/landing/landing.js';
import SignupPage from '../src/pages/signup/signup.js';
  import SUPersonal from'../src/pages/signup/page2-personalinfo/personalInfo.js';
  import PIreq from '../src/pages/signup/page3-preinternreq/preInternreq.js';
  import PoIreq from '../src/pages/signup/page4-postinternreq/postInterreq.js';
import LoginPage from '../src/pages/login/login.js';
import StudentPortfolioPage from './pages/studentportfolio/studentportfolio.js';
import HomePage from '../src/pages/home/home.js';


function App() {
  return (
    <div className="App">
   <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/signup/primary-information" element={<SignupPage/>} />
          <Route path="/signup/personal-information" element={<SUPersonal/>} />
          <Route path="/signup/pre-internship-requirements" element={<PIreq/>} />
          <Route path="/signup/post-internship-requirements" element={<PoIreq/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/student-portfolio" element={<StudentPortfolioPage/>} />
        <Route path="/home" element={<HomePage/>} />
        {/* Other routes go here */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Import Pages Here
import LandingPage from '../src/pages/landing/landing.js';
import SignupPage from '../src/pages/signup/signup.js';
  import SUPersonal from'../src/pages/signup/page2-personalinfo/personalInfo.js';
  import PIreq from '../src/pages/signup/page3-preinternreq/preInternreq.js';
  import PoIreq from '../src/pages/signup/page4-postinternreq/postInterreq.js';
import LoginPageNew from '../src/pages/login/login-new.js'
import StudentPortfolioPage from './pages/studentportfolio/studentportfolio.js';
  import StudentProfilePage from './pages/studentportfolio/studentprofile/studentprofile.js';
import HomePage from '../src/pages/home/home.js';
import WeeklyReportsPage from '../src/pages/weeklyreports/weeklyreports.js';
import CompanyProfilesPage from '../src/pages/companyprofiles/companyprofiles.js';
import AssessmentsPage from '../src/pages/assessments/assessments.js';
  import StudentAssessmentPage from '../src/pages/assessments/studentassessment/studentassessment.js';


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
        <Route path="/login" element={<LoginPageNew/>}></Route>
        <Route path="/student-portfolio" element={<StudentPortfolioPage/>} />
          <Route path="/student-portfolio/profile" element={<StudentProfilePage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/weekly-reports" element={<WeeklyReportsPage/>} />
        <Route path="/company-profiles" element={<CompanyProfilesPage/>} />
        <Route path="/assessments" element={<AssessmentsPage/>} />
          <Route path="/assessments/student-assessment" element={<StudentAssessmentPage/>} />
        {/* Other routes go here */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;

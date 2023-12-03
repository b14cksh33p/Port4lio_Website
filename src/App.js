import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Import Pages Here
import LandingPage from '../src/pages/landing/landing.js';
import SignupPage from '../src/pages/signup/signup.js';
  import SUPersonal from'../src/pages/signup/page2-personalinfo/personalInfo.js';
  import DonePage from'../src/pages/signup/done/done.js';
import LoginPage from '../src/pages/login/login-new.js';
import StudentPortfolioPage from './pages/studentportfolio/studentportfolio.js';
  import StudentProfilePage from './pages/studentportfolio/studentprofile/studentprofile.js';
import HomePage from '../src/pages/home/home.js';
import WeeklyReportsPage from '../src/pages/weeklyreports/weeklyreports.js';
import CompanyProfilesPage from '../src/pages/companyprofiles/companyprofiles.js';
import AssessmentsPage from '../src/pages/assessments/assessments.js';
  import StudentAssessmentPage from '../src/pages/assessments/studentassessment/studentassessment.js';


function App() {
  const userName = localStorage.getItem('username');
  const profile = localStorage.getItem('profile');

  const signUpPI = '/signup/personal-information/'+userName;
  const home = '/home/'+userName;
  const sPortfolio = '/student-portfolio/'+userName;
  const wReports = '/weekly-reports/'+userName;
  const cProfiles = '/company-profiles/'+userName;
  const assessments = '/assessments/'+userName;
  const sProfile = '/student-portfolio/profile/'+profile;
  return (
    <div className="App">
   <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/signup/primary-information" element={<SignupPage/>} />
          <Route path={signUpPI} element={<SUPersonal/>} />
          <Route path="/signup/done" element={<DonePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path={sPortfolio}element={<StudentPortfolioPage/>} />
          <Route path={sProfile} element={<StudentProfilePage/>} />
        <Route path={home} element={<HomePage/>} />
        <Route path={wReports} element={<WeeklyReportsPage/>} />
        <Route path={cProfiles} element={<CompanyProfilesPage/>} />
        <Route path={assessments} element={<AssessmentsPage/>} />
          <Route path="/assessments/student-assessment" element={<StudentAssessmentPage/>} />

        {/* Other routes go here */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;

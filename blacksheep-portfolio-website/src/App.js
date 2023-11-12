
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Import Pages Here
import LandingPage from '../src/pages/landing/landing.js';
import SignupPage from '../src/pages/signup/signup.js';
import LoginPage from '../src/pages/login/login.js';

function App() {
  return (
    <div className="App">
   <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        {/* Other routes go here */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;

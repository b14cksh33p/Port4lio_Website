import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals'; 

ReactDOM.render(
  <Router basename="/port4lio-website">
    <App />
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
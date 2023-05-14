import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CohortManager from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <CohortManager /> 
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

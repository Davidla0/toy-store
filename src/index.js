import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import App from './root-cmp';
import {HashRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
)


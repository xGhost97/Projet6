import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Logements from '../src/logements';
import Error from './error'
import Propos from './propos'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/logement/:id" element={<Logements />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="*" element={<Error />} />

      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);





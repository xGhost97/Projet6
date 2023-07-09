import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client'; 

import App from './App';
import Logements from '../src/logements';
import Error from './error'
import Propos from './propos'

const rootElement = document.getElementById('root');

createRoot(rootElement).render( 
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/logement/:id" element={<Logements />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);






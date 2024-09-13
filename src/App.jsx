/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Auth from './components/Auth';
import CattleDiagnosisChatbot from './components/Cattle';
import DiseaseInfoComponent from './components/DiseaseInfo';
import Dashboard from './components/Dashboard';

const App = () => {
  const [loggedInUsername, setLoggedInUsername] = useState(null);
 
  return (
    <Router>
      <Navbar loggedInUsername={loggedInUsername} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cattle" element={<CattleDiagnosisChatbot/>} />
        <Route path="/DiseaseInfo" element={<DiseaseInfoComponent/>} />
        <Route path="/dash" element={<Dashboard/>} />
        <Route path="/auth" element={<Auth setLoggedInUsername={setLoggedInUsername} />} />
      </Routes>
    </Router>
  );
};

export default App;

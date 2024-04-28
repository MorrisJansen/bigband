import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../componenten/Navbar.js';
import Home from './Home.js';
import OverOns from './OverOns.js';
import Repertoire from './Repertoire.js';
import Luisteren from './Luisteren.js';
import AdminPage from './AdminPage';
import Login from './Login';
import Referenties from './Referenties.js';
import BoekingenContact from './BoekingenContact.js';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OverOns" element={<OverOns />} />
          <Route path="/repertoire" element={<Repertoire />} />
          <Route path="/luisteren" element={<Luisteren />} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/login" element={<Login />} />
          <Route path="/Referenties" element={<Referenties />} />
          <Route path="/Boekingen/Contact" element={<BoekingenContact />} />



        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React, { FC } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Companies from './Components/Companies';
import AddCompany from './Components/AddCompany';
import EditCompany from './Components/EditCompany';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element = { <Companies />} />
        <Route path="/add-company" element= { <AddCompany />} /> 
        <Route path="/edit-company/:id" element = { <EditCompany /> } />
      </Routes>
    </Router>
  );
}

export default App;

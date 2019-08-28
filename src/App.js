import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Dashboard from './Components/Dashboard'
import EmployeeDetails from './Components/EmployeeDetails'
import MainDashboard from './Components/MainDashboard'

const  App = () => {
  return (
    <Router>

      <Route exact path="/Dashboard" component={Dashboard} />
      <Route exact path="/EmployeeDetails" component={EmployeeDetails} />
      <Route exact path="/" component={MainDashboard} />

    </Router>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Dashboard from './Components/Dashboard'
import EmployeeDetails from './Components/EmployeeDetails'

const  App = () => {
  return (
    <Router>

      <Route exact path="/employeeDetails" component={Dashboard} />
      <Route exact path="/" component={EmployeeDetails} />
      

    </Router>
  );
}

export default App;
